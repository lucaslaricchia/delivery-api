import { Request, Response } from "express";
import { CreateDelivery } from "./CreateDelivery";

export class CreateDeliveryController {
  async handle(request: Request, response: Response) {
    const { item_name } = request.body;
    const { id_client } = request;
    const createDelivery = new CreateDelivery();
    const delivery = await createDelivery.execute({
      id_client,
      item_name
    })

    return response.json(delivery);
  }
}