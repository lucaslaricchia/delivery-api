import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt";

interface CreateDeliverymanInterface {
  username: string;
  password: string;
}

export class CreateDeliveryman {
  async execute({ username, password }: CreateDeliverymanInterface) {
    const deliverymanExists = await prisma.deliveryman.findFirst({
      where: {
        username: {
          mode: "insensitive",
        },
      },
    });

    if (deliverymanExists) {
      throw new Error("Deliveryman already exists!");
    }

    const hashPassword = await hash(password, 10);

    const deliveryman = await prisma.deliveryman.create({
      data: {
        username,
        password: hashPassword,
      },
    });

    return deliveryman;
  }
}
