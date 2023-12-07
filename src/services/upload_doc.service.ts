import { readFile } from 'fs/promises'

async function readJSONFile(root: string) {
  try {
    const data = await readFile(root, 'utf8')
    const jsonData = JSON.parse(data)
    console.log(jsonData)
  } catch (err) {
    console.error(err)
  }
}

export { readJSONFile }
