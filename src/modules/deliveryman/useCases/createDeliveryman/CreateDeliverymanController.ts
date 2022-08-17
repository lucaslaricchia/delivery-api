import { Request, Response } from "express";
import { CreateDeliveryman } from "./CreateDeliveryman";

export class CreateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const createDeliveryman = new CreateDeliveryman();
    const result = await createDeliveryman.execute({
      username,
      password,
    });

    return response.json(result);
  }
}
