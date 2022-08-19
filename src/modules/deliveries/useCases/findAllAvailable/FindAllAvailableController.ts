import { Request, Response } from "express";
import { FindAllAvailable } from "./FindAllAvailable";


export class FindAllAvailableController {
  async handle(request: Request, response: Response) {
    const findAllAvailable = new FindAllAvailable();

    const deliveries = await findAllAvailable.execute();

    return response.json(deliveries);
  }
}