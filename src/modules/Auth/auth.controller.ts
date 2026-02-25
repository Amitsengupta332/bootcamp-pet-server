import { NextFunction, Request, Response } from "express";
import { AuthService } from "./auth.service";

const CreateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthService.createUserIntoDB(req.body);

    res.status(201).json({
      success: true,
      message: "User created",
      data: result,
    });
    // sendResponse(res, {
    //   statusCode: 201,
    //   success: true,
    //   message: "User created",
    //   data: result,
    // });
  } catch (error: any) {
    next(error);
  }
};

export const AuthController = {
  CreateUser,
};
