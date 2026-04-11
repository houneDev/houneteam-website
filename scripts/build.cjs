#!/usr/bin/env node
// Windows build wrapper:
// 1. Applies the readlink EISDIR->EINVAL fix so webpack doesn't crash on Windows/Node 24.
// 2. After a successful build, moves out/ -> docs/ and copies CNAME, ready for GitHub Pages.
const path = require('path')
const fs = require('fs')
const { spawnSync } = require('child_process')

const root = path.resolve(__dirname, '..')
const fixScript = path.join(root, 'scripts', 'win-readlink-fix.cjs')
const nextBin = path.join(root, 'node_modules', 'next', 'dist', 'bin', 'next')

const existing = process.env.NODE_OPTIONS || ''
process.env.NODE_OPTIONS = `${existing} --require=${fixScript}`.trim()

const result = spawnSync(
  process.execPath,
  [nextBin, 'build'],
  { stdio: 'inherit', env: process.env, cwd: root }
)

if (result.status !== 0) {
  process.exit(result.status ?? 1)
}

// Move out/ -> docs/
const outDir = path.join(root, 'out')
const docsDir = path.join(root, 'docs')

if (fs.existsSync(docsDir)) {
  fs.rmSync(docsDir, { recursive: true, force: true })
}
fs.renameSync(outDir, docsDir)

// Copy CNAME into docs/ so GitHub Pages keeps the custom domain
const cname = path.join(root, 'CNAME')
if (fs.existsSync(cname)) {
  fs.copyFileSync(cname, path.join(docsDir, 'CNAME'))
}

console.log('\n✓ docs/ ready for GitHub Pages')
process.exit(0)
