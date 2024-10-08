import mongoose from "mongoose";
import User from "../models/user.model.js";

export const test = (req, res) => {
  res.json({ message: "Hello from server!" });
};

export const signout = (req, res) => {
  try {
    res.clearCookie("access_token").status(200).json("user signed out");
  } catch (error) {
    return res.status(500).json({ message: "server error" });
  }
};
export const getbooks = async (req, res) => {
  try {
    const fetchedData = await mongoose.connection.db.collection("booktest");
    const data = await fetchedData.find({}).toArray();
    res.status(200).json(data);
  } catch (error) {
    return res.status(500).json("server error");
  }
};

export const favorite = async (req, res) => {
  const { userId, bookId } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const index = user.favorites.indexOf(bookId);
    if (index > -1) {
      user.favorites.splice(index, 1);
    } else {
      user.favorites.push(bookId);
    }
    await user.save();
    const {password, ...rest} = user._doc
    res.status(200).json(rest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
