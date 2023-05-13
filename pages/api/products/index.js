import Product from "../../../models/Product.js";
import dbConnect from "@/util/dbConnect";

const handler = async (req, res) => {
  await dbConnect();
  const { method } = req;

  if (method === "GET") {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      console.log(error);
    }
  }

  if (method === "POST") {
    try {
      const newProducts = await Product.create(req.body);
      res.status(200).json(newProducts);
    } catch (error) {
      console.log(error);
    }
  }
};

export default handler;
