import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt";

interface CreateClient {
  username: string;
  password: string;
}

export class CreateClientUseCase {
  async execute({ password, username }: CreateClient) {
    const clientExists = await prisma.clients.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive"
        }
      },
    });


    if (clientExists) {
      throw new Error("Cliente ja existe");
    }

    const hashPassword = await hash(password, 10);

    const client = await prisma.clients.create({
      data: {
        username,
        password: hashPassword,
      },
    });

    return client;
  }
}
