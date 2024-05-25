import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcryptjs.hash(password, 12);
    const createUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });
    await createUser.save();
    res.status(201).json({
      message: "User created successfully",
      userDetails: createUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong while creating user!",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "This email is't register ! Go and create an account first",
      });
    }
    const isMatch = await bcryptjs.compare(password, user.password);

    if (!isMatch) { 
      res.status(400).json({
        message: "Invalid username and password",
      });
    } else {
      res.status(200).json({
        message: "Login successfully",
        userDetails: {
          _id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong while Login!",
    });
  }
};
