import User from "../../../models/User.js";
import dbConnect from "@/util/dbConnect";
import bcrypt from "bcrypt";

const handler = async (req, res) => {
  await dbConnect();
  const body = req.body;
  const user = await User.findOne({ email: body.email });

  //User Check
  if (user) {
    res.status(400).json({ message: "User alreadys exists" });
    return;
  }
  //Password & Confirm Password Check
  if (body.password != body.confirmPassword) {
    res.status(400).json({ message: "Password not matched" });
    return;
  }

  try {
    const newUser = await new User(body);
    //generate salt to hash password
    const salt = await bcrypt.genSalt(10);
    // create hash
    newUser.password = await bcrypt.hash(newUser.password, salt);
    newUser.confirmPassword = await bcrypt.hash(newUser.confirmPassword, salt);
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
  }
};

export default handler;
