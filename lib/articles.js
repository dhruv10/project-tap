import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');
// console.log(contentDirectory);

// export function getAllArticleIds() {
//   const fileNames = fs.readdirSync('../content');
//   console.log(fileNames);
//   // return fileNames.map((fileName) => {
//   //   return {
//   //     params: {
//   //       id: fileName.replace(/\.md$/, ''),
//   //     },
//   //   };
//   // });
// }

export async function getArticleData(id) {
  const fullPath = path.join(contentDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
