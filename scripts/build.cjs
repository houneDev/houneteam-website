#!/usr/bin/env node
// Windows build wrapper:
// 1. Applies the readlink EISDIR->EINVAL fix so webpack doesn't crash on Windows/Node 24.
// 2. After a successful build, moves out/ -> docs/ and copies CNAME, ready for GitHub Pages.
const path = require('path')
const fs = require('fs')
const { spawn } = require('child_process')

const root = path.resolve(__dirname, '..')
const fixScript = path.join(root, 'scripts', 'win-readlink-fix.cjs')
const nextBin = path.join(root, 'node_modules', 'next', 'dist', 'bin', 'next')

const existing = process.env.NODE_OPTIONS || ''
const env = {
  ...process.env,
  NODE_OPTIONS: `${existing} --require=${fixScript}`.trim(),
  FORCE_COLOR: '0',
}

const child = spawn(process.execPath, [nextBin, 'build'], {
  env,
  cwd: root,
  stdio: ['ignore', 'pipe', 'pipe'],
})

child.stdout.pipe(process.stdout)
child.stderr.pipe(process.stderr)

child.on('close', (code) => {
  if (code !== 0) {
    process.exit(code ?? 1)
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

  // .nojekyll disables Jekyll processing so GitHub Pages serves _next/ folder correctly
  fs.writeFileSync(path.join(docsDir, '.nojekyll'), '')

  console.log('\n✓ docs/ ready for GitHub Pages')
  process.exit(0)
})
