import { prisma } from "../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface InterfaceAuthenticateDeliveryman {
  username: string;
  password: string;
}

export class AuthenticateDeliveryman {
  async execute({ username, password }: InterfaceAuthenticateDeliveryman) {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username,
      },
    });

    if (!deliveryman) {
      throw new Error("Username or password invalid!");
    }

    const passwordMatch = await compare(password, deliveryman.password);

    if (!passwordMatch) {
      throw new Error("Username or password invalid!");
    }

    const token = sign({ username }, "meuovo", {
      subject: deliveryman.id,
      expiresIn: "1d",
    });

    return token;
  }
}
