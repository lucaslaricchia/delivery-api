import { Router } from "express";
import { authMiddleware } from "./middlewares/authMiddleware";
import { authMiddlewareDeliveryman } from "./middlewares/authMiddlewareDeliveryman";
import { AuthenticateDeliverymanController } from "./modules/account/AuthenticateDeliveryman/AuthenticateDeliverymanController";
import { AuthenticateClientController } from "./modules/account/authenticateUser/AuthenticateClientController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { FindAllDeliveriesController } from "./modules/clients/useCases/findAllDeliveries/FindAllDeliveriesController";
import { FindAllDeliveriesController as FindAllDeliveriesControllerDeliveryman } from "./modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { FindAllAvailableController } from "./modules/deliveries/useCases/findAllAvailable/FindAllAvailableController";
import { UpdateDeliverymanController } from "./modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { UpdateEndDateController } from "./modules/deliveries/useCases/updateEndDate/UpdateEndDateController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliveryman = new AuthenticateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliveryman = new UpdateDeliverymanController();
const findAllDeliveriesClient = new FindAllDeliveriesController();
const findAllDeliveriesDeliveryman = new FindAllDeliveriesControllerDeliveryman();
const updateEndDateController = new UpdateEndDateController();
routes.post("/client/authenticate", authenticateClientController.handle);
routes.post("/deliveryman/authenticate", authenticateDeliveryman.handle);
routes.post("/client/", createClientController.handle);
routes.get("/client/deliveries", authMiddleware, findAllDeliveriesClient.handle)
routes.get("/deliveryman/deliveries", authMiddlewareDeliveryman, findAllDeliveriesDeliveryman.handle)
routes.post("/deliveryman", createDeliverymanController.handle);
routes.post("/delivery", authMiddleware, createDeliveryController.handle);
routes.get("/delivery/available", authMiddlewareDeliveryman, findAllAvailableController.handle);
routes.put("/delivery/updateDeliveryman/:id", authMiddlewareDeliveryman, updateDeliveryman.handle)
routes.put("/delivery/updateEndDate/:id", authMiddlewareDeliveryman, updateEndDateController.handle)
export { routes };

