import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
  // console.log(req.body);
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    // console.log(hashedPassword);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    // console.log(newUser);

    res.status(201).json({ message: "user created " });
  } catch (error) {
    res.status(500).json({ message: "Failed to create user" });
  }
};

export const login = async (req, res) => {};

export const logout = async (req, res) => {};
