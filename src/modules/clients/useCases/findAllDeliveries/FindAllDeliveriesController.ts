import { Request, Response } from "express";
import { FindAllDeliveries } from "./FindAllDeliveries";


export class FindAllDeliveriesController {
  async handle(request: Request, response: Response) {
    const { id_client } = request
    const findAllDeliveries = new FindAllDeliveries();

    const deliveries = await findAllDeliveries.execute(id_client);

    return response.json(deliveries);
  }
}