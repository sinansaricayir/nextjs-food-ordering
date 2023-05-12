import Category from "@/models/Category";
import dbConnect from "@/util/dbConnect";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  dbConnect();

  if (method === "DELETE") {
    try {
      await Category.findByIdAndRemove(id);
      res.status(200).json({ message: "Deleted Successfully!" });
    } catch (error) {
      console.log(error);
    }
  }
};

export default handler;
