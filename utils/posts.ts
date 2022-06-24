import fs from 'fs'
import path from 'path'

const BLOG_FOLDER = path.join(process.cwd(), 'blog')

export async function getPostList() {
  // Read all markdown files
  const fileNameList = fs.readdirSync(BLOG_FOLDER)
  console.log(fileNameList)

  for (const fileName of fileNameList) {
    const filePath = path.join(BLOG_FOLDER, fileName)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    console.log(fileName, '\n', fileContents)
  }

  return []
}
