import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = path.resolve(fileURLToPath(new URL('../', import.meta.url)))
const sourcePath = path.join(projectRoot, 'design-reference', 'original-prototype.html')
const targetPath = path.join(projectRoot, 'src', 'reference', 'referenceScreens.js')
const source = fs.readFileSync(sourcePath, 'utf8')
const styleStart = source.indexOf('<style>') + '<style>'.length
const styleEnd = source.indexOf('</style>')
const bodyStart = source.indexOf('<body>') + '<body>'.length
const bodyEnd = source.indexOf('</body>')
const body = source.slice(bodyStart, bodyEnd)

const markers = [
  ['home', '<!-- =========== PHONE 1: HERO =========== -->'],
  ['explore', '<!-- =========== PHONE 2: EXPLORE =========== -->'],
  ['device', '<!-- =========== PHONE 3: BLUETOOTH =========== -->'],
  ['records', '<!-- =========== PHONE 4: HEART RATE =========== -->'],
  ['ai', '<!-- =========== PHONE 5: AI SYNC =========== -->'],
  ['couple', '<!-- =========== PHONE 6: COUPLE SYNC =========== -->'],
  ['profile', '<!-- =========== PHONE 7: PROFILE =========== -->'],
]

const screens = {}
for (let index = 0; index < markers.length; index += 1) {
  const [, marker] = markers[index]
  const start = body.indexOf(marker)
  const nextStart = index + 1 < markers.length ? body.indexOf(markers[index + 1][1]) : body.length
  if (start < 0 || nextStart < 0) throw new Error(`Unable to extract ${markers[index][0]}`)
  screens[markers[index][0]] = body.slice(start, nextStart).trim()
}

fs.mkdirSync(path.dirname(targetPath), { recursive: true })
const output = [
  `export const referenceStyles = ${JSON.stringify(source.slice(styleStart, styleEnd))}`,
  `export const referenceScreens = ${JSON.stringify(screens, null, 2)}`,
  '',
].join('\n')
fs.writeFileSync(targetPath, output, 'utf8')
console.log(`Extracted original UI into ${targetPath}`)
