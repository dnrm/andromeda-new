import fs from "fs";
import matter from "gray-matter";

const getProductContent = (slug: string) => {
  const folder = "products/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file);

  const matterResult = matter(content);
  const product = matterResult.content;

  return product;
};

export default getProductContent;
