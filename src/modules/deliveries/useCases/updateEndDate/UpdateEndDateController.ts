import { Request, Response } from "express";
import { UpdateEndDate } from "./UpdateEndDate";


export class UpdateEndDateController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;
    const { id: id_delivery } = request.params;

    const updateDeliverymanUseCase = new UpdateEndDate();
    const delivery = await updateDeliverymanUseCase.execute({
      id_delivery,
      id_deliveryman,
    })

    return response.json(delivery)
  }
}