import { Request, RequestHandler, Response } from "express";
import { users } from "../db/user.db";

export const Register: RequestHandler = (req, res) => {
  const { name, email, password } = req.body;

  const findUserName = users.find((user) => user.name == name);
  if (findUserName) {
    res.send("User already exists");
    return;
  }

  const findUser = users.find((user) => user.email === email);

  if (findUser) {
    res.send("Email already exists");
    return;
  }

  const lastUser = users[users.length - 1];
  const newUserId = lastUser?._id ? Number(lastUser._id) + 1 : 1;

  const newUser = { _id: newUserId.toString(), name, email, password };
  users.push(newUser);
  res.send("User registered successfully");
};

export const UpdateProfile: RequestHandler = (req, res) => {
  const { _id, name, email, password } = req.body;

  const findUserName = users.find((user) => user.name == name);
  if (findUserName) {
    findUserName.email = email;
    findUserName.password = password;
    res.send("User profile updated!");
    return;
  }
};

export const UserInfo: RequestHandler = (res, req) => {
  req.send(users);
};
