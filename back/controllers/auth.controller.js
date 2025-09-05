import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

const signToken = (userId) =>
  jwt.sign({ sub: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES || "7d",
  });

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res.status(400).json({ message: "Faltan campos" });

    const exists = await User.findOne({ email });
    if (exists) return res.status(409).json({ message: "Email ya registrado" });

    const hash = await bcrypt.hash(password, 10); // 10 salt rounds
    const user = await User.create({ name, email, password: hash });

    const token = signToken(user._id);
    return res.json({ user: user.toPublic(), token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error de servidor" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Credenciales inválidas" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(400).json({ message: "Credenciales inválidas" });

    const token = signToken(user._id);
    return res.json({ user: user.toPublic(), token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error de servidor" });
  }
};

export const me = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: "No encontrado" });
    return res.json({ user: user.toPublic() });
  } catch {
    return res.status(500).json({ message: "Error de servidor" });
  }
};
