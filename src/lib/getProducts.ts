import fs from "fs";
import path from "path";
import matter from "gray-matter";

const getProducts = () => {
  const folder = path.join(process.cwd(), "products/");
  const files = fs.readdirSync(folder);
  const markdownProducts = files.filter((file) => file.endsWith(".md"));

  const products = markdownProducts.map((fileName) => {
    const fileContents = fs.readFileSync(`${folder}/${fileName}`, "utf-8");
    const matterResult = matter(fileContents);
    return {
      name: matterResult.data.name,
      price: matterResult.data.price,
      image: matterResult.data.image,
      slug: matterResult.data.slug,
    };
  });

  return products;
};

export default getProducts;
