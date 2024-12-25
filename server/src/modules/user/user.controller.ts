import bcrypt from "bcryptjs";
import { NextFunction, Request, Response } from "express";
import z from "zod";
import { createNewUser, findUserByEmail } from "./user.service";
import { newUserSchema } from "./user.validation";

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const newUser = req.body;

    const validationResult = newUserSchema.safeParse(newUser);

    if (!validationResult.success) {
      res.status(400).json({
        success: false,
        message: "Provided new user data is invalid.",
        error: validationResult.error,
      });
      return;
    }

    const existingUser = await findUserByEmail(newUser.email);

    if (existingUser) {
      res.status(400).json({
        success: false,
        message: "An account with this email already exists.",
        error: null,
      });
      return;
    }

    const createdUser = await createNewUser(newUser);
    const { password, __v, ...sanitizedUser } = createdUser!;

    res.status(201).json({
      success: true,
      message: "Registered new user successfully.",
      data: sanitizedUser,
    });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const credentials = req.body;

    const validationResult = newUserSchema.safeParse(credentials);

    if (!validationResult.success) {
      res.status(400).json({
        success: false,
        message: "Provided credentials is invalid.",
        error: validationResult.error,
      });
      return;
    }

    const foundUser = await findUserByEmail(credentials.email);

    if (!foundUser) {
      res.status(401).json({
        success: false,
        message: "Email or password was incorrect.",
        error: null,
      });
      return;
    }

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      foundUser.password,
    );

    if (!isPasswordCorrect) {
      res.status(401).json({
        success: false,
        message: "Email or password was incorrect.",
        error: null,
      });
      return;
    }

    const { password, __v, ...sanitizedUser } = foundUser;

    res.status(201).json({
      success: true,
      message: "Logged in user successfully.",
      data: sanitizedUser,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserByEmail = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email } = req.params;

    const validationResult = z.string().email().safeParse(email);

    if (!validationResult.success) {
      res.status(400).json({
        success: false,
        message: "Provided user email is invalid.",
        error: validationResult.error,
      });
      return;
    }

    const foundUser = await findUserByEmail(email!);
    const { password, __v, ...sanitizedUser } = foundUser!;

    if (!foundUser) {
      res.status(401).json({
        success: false,
        message: "User not found for the provided id.",
        error: null,
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "User retrieved successfully.",
      data: sanitizedUser,
    });
  } catch (error) {
    next(error);
  }
};
