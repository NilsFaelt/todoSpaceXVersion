import { PrismaClient } from "@prisma/client";
import { IUser } from "../../types/userTypes";
const prisma = new PrismaClient();

export async function addUserPrisma() {
  try {
    const user = await prisma.user.create({
      data: {
        name: " userInfo.name",
        email: " userInfo.namesa",
      },
    });
    console.log(user);
  } catch (err) {
    throw err;
  }
}

// userInfo: IUser
