import { Request, Response } from "express";
import { FindAllDeliveries } from "./FindAllDeliveries";


export class FindAllDeliveriesController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request
    const findAllDeliveries = new FindAllDeliveries();

    const deliveries = await findAllDeliveries.execute(id_deliveryman);

    return response.json(deliveries);
  }
}