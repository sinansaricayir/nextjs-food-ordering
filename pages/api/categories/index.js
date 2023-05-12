import Category from "@/models/Category";
import dbConnect from "@/util/dbConnect";

const handler = async (req, res) => {
  await dbConnect();
  const { method } = req;

  if (method === "GET") {
    try {
      const categories = await Category.find();
      res.status(200).json(categories);
    } catch (error) {
      console.log(error);
    }
  }

  if (method === "POST") {
    try {
      await Category.create(req.body);
      res.status(200).json({ message: "Category Created Successfully" });
    } catch (error) {
      console.log(error);
    }
  }
};

export default handler;
