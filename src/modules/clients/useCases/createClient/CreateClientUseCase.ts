import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt";

interface CreateClient {
  username: string;
  password: string;
}

export class CreateClientUseCase {
  async execute({ password, username }: CreateClient) {
    const clientExists = await prisma.clients.findUnique({
      where: {
        username: username.toLowerCase(),
      },
    });


    if (clientExists) {
      throw new Error("Cliente ja existe");
    }

    const hashPassword = await hash(password, 10);

    const client = await prisma.clients.create({
      data: {
        username: username.toLowerCase(),
        password: hashPassword,
      },
    });

    return client;
  }
}
