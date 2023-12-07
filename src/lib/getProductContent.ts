import fs from "fs";
import path from "path";
import matter from "gray-matter";

const getProductContent = (slug: string) => {
  const folder = path.join(process.cwd(), "products/");
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file);

  const matterResult = matter(content);
  const product = matterResult.content;

  return product;
};

export default getProductContent;
