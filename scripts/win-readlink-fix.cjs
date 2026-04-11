// Windows: fs.readlink / readlinkSync on a regular file returns EISDIR instead of EINVAL.
// Webpack and Node.js module loader do not handle EISDIR as "not a symlink", causing build failures.
// This preload converts EISDIR -> EINVAL so callers treat the path as a non-symlink.
if (process.platform === 'win32') {
  const fs = require('fs')

  // Async
  const origReadlink = fs.readlink
  fs.readlink = function (path, options, callback) {
    if (typeof options === 'function') {
      callback = options
      options = {}
    }
    origReadlink.call(fs, path, options, function (err, link) {
      if (err && err.code === 'EISDIR') {
        const fixed = new Error("EINVAL: invalid argument, readlink '" + path + "'")
        fixed.code = 'EINVAL'
        fixed.syscall = 'readlink'
        fixed.path = path
        callback(fixed)
      } else {
        callback(err, link)
      }
    })
  }

  // Sync
  const origReadlinkSync = fs.readlinkSync
  fs.readlinkSync = function (path, options) {
    try {
      return origReadlinkSync.call(fs, path, options)
    } catch (err) {
      if (err && err.code === 'EISDIR') {
        const fixed = new Error("EINVAL: invalid argument, readlink '" + path + "'")
        fixed.code = 'EINVAL'
        fixed.syscall = 'readlink'
        fixed.path = path
        throw fixed
      }
      throw err
    }
  }

  // Also patch fs.promises.readlink
  if (fs.promises && fs.promises.readlink) {
    const origPromiseReadlink = fs.promises.readlink
    fs.promises.readlink = async function (path, options) {
      try {
        return await origPromiseReadlink.call(fs.promises, path, options)
      } catch (err) {
        if (err && err.code === 'EISDIR') {
          const fixed = new Error("EINVAL: invalid argument, readlink '" + path + "'")
          fixed.code = 'EINVAL'
          fixed.syscall = 'readlink'
          fixed.path = path
          throw fixed
        }
        throw err
      }
    }
  }
}
