import { prisma } from "../../../../database/prismaClient";

export class FindAllAvailable {
  async execute() {
    const deliveries = prisma.deliveries.findMany({
      where: {
        end_at: null,
        id_deliveryman: null,
      }
    })

    return deliveries;
  }
}