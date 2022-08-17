import { prisma } from "../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface InterfaceAuthenticateClient {
  username: string;
  password: string;
}

export class AuthenticateClient {
  async execute({ username, password }: InterfaceAuthenticateClient) {
    const client = await prisma.clients.findFirst({
      where: {
        username,
      },
    });

    if (!client) {
      throw new Error("Username or password invalid!");
    }

    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error("Username or password invalid!");
    }

    const token = sign({ username }, "meuovo", {
      subject: client.id,
      expiresIn: "1d",
    });

    return token;
  }
}
