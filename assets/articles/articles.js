import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = './content';

export function getAllArticleTitles() {
  const fileNames = fs.readdirSync(contentDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export function getArticleData(id) {
  const fullPath = path.join(contentDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the id
  return {
    id,
    ...matterResult.data,
  };
}
