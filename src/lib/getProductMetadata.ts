import fs from "fs";
import path from "path";
import matter from "gray-matter";

const getProductMetadata = (slug: string) => {
  const folder = path.join(process.cwd(), "products/");
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file);

  const matterResult = matter(content);
  const metadata = {
    name: matterResult.data.name,
    price: matterResult.data.price,
    image: matterResult.data.image,
  };

  return metadata;
};

export default getProductMetadata;
