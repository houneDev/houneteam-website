// Windows: fs.readlink / readlinkSync on a regular file returns EISDIR instead of EINVAL.
// Webpack and Node.js module loader do not handle EISDIR as "not a symlink", causing build failures.
// This preload converts EISDIR -> EINVAL so callers treat the path as a non-symlink.
//
// Also patches fs.open / fs.writeFile / fs.promises.open for .next/trace:
// Windows Defender (or other AV) can hold a lock on .next/trace between builds.
// Next.js crashes with EPERM trying to open it. We silently redirect those opens
// to a /dev/null-style no-op so the build continues without tracing.
if (process.platform === 'win32') {
  const fs = require('fs')
  const path = require('path')

  // ── Trace file EPERM bypass ──────────────────────────────────────────────
  // Returns true if this path is the Next.js build trace file
  function isTracePath(p) {
    try {
      return typeof p === 'string' && path.basename(p) === 'trace' &&
        p.includes('.next')
    } catch { return false }
  }

  // Patch fs.open (used by Next.js tracer)
  const origOpen = fs.open
  fs.open = function (filePath, flags, mode, callback) {
    if (typeof mode === 'function') { callback = mode; mode = 0o666 }
    if (isTracePath(filePath)) {
      // Open a temp file in write mode instead — discards trace data safely
      const tmp = require('os').tmpdir() + '/next-trace-discard'
      return origOpen.call(fs, tmp, 'w', mode, callback)
    }
    return origOpen.call(fs, filePath, flags, mode, callback)
  }

  // Patch fs.openSync
  const origOpenSync = fs.openSync
  fs.openSync = function (filePath, flags, mode) {
    if (isTracePath(filePath)) {
      const tmp = require('os').tmpdir() + '/next-trace-discard'
      return origOpenSync.call(fs, tmp, 'w', mode || 0o666)
    }
    return origOpenSync.call(fs, filePath, flags, mode)
  }

  // Patch fs.promises.open
  if (fs.promises && fs.promises.open) {
    const origPromiseOpen = fs.promises.open
    fs.promises.open = async function (filePath, flags, mode) {
      if (isTracePath(filePath)) {
        const tmp = require('os').tmpdir() + '/next-trace-discard'
        return origPromiseOpen.call(fs.promises, tmp, 'w', mode)
      }
      return origPromiseOpen.call(fs.promises, filePath, flags, mode)
    }
  }

  // ── EISDIR → EINVAL for readlink ─────────────────────────────────────────
  const origReadlink = fs.readlink
  fs.readlink = function (p, options, callback) {
    if (typeof options === 'function') { callback = options; options = {} }
    origReadlink.call(fs, p, options, function (err, link) {
      if (err && err.code === 'EISDIR') {
        const fixed = new Error("EINVAL: invalid argument, readlink '" + p + "'")
        fixed.code = 'EINVAL'; fixed.syscall = 'readlink'; fixed.path = p
        callback(fixed)
      } else {
        callback(err, link)
      }
    })
  }

  const origReadlinkSync = fs.readlinkSync
  fs.readlinkSync = function (p, options) {
    try {
      return origReadlinkSync.call(fs, p, options)
    } catch (err) {
      if (err && err.code === 'EISDIR') {
        const fixed = new Error("EINVAL: invalid argument, readlink '" + p + "'")
        fixed.code = 'EINVAL'; fixed.syscall = 'readlink'; fixed.path = p
        throw fixed
      }
      throw err
    }
  }

  if (fs.promises && fs.promises.readlink) {
    const origPromiseReadlink = fs.promises.readlink
    fs.promises.readlink = async function (p, options) {
      try {
        return await origPromiseReadlink.call(fs.promises, p, options)
      } catch (err) {
        if (err && err.code === 'EISDIR') {
          const fixed = new Error("EINVAL: invalid argument, readlink '" + p + "'")
          fixed.code = 'EINVAL'; fixed.syscall = 'readlink'; fixed.path = p
          throw fixed
        }
        throw err
      }
    }
  }
}
