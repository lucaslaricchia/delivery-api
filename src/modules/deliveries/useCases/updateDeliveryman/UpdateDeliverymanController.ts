import { Request, Response } from "express";
import { UpdateDeliveryman } from "./UpdateDeliveryman";


export class UpdateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;
    const { id: id_delivery } = request.params;

    const updateDeliverymanUseCase = new UpdateDeliveryman();
    const delivery = await updateDeliverymanUseCase.execute({
      id_delivery,
      id_deliveryman,
    })

    return response.json(delivery)
  }
}