import { prisma } from "../../lib/prisma";

const createUserIntoDB = async (payload: any) => {
  const result = prisma.user.create({
    data: payload,
  });

  return result;
};

export const AuthService = {
  // Add service methods here
  createUserIntoDB,
};
