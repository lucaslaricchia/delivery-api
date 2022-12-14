import { Request, Response } from "express";
import { AuthenticateClient } from "./AuthenticateClient";

export class AuthenticateClientController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const authenticateClient = new AuthenticateClient();

    const result = await authenticateClient.execute({
      username,
      password,
    });

    return response.json(result);
  }
}
