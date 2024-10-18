import fsPromises from 'fs/promises'
import path from 'path'

export async function getLocalData() {
    const filePath = path.join(process.cwd(), 'src/lib/ez.json')
    console.log(filePath)
    const jsonData = await fsPromises.readFile(filePath, "utf-8")
    return jsonData
}

