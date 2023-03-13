import BaseRoute from "./BaseRouter";
import OfficerController from "../controllers/OfficerController";

class OfficerRoutes extends BaseRoute {
  public routes(): void {
    this.router.get("/", OfficerController.index)
    this.router.post("/", OfficerController.create)
    this.router.get("/:id", OfficerController.show)
    this.router.put("/:id", OfficerController.update)
    this.router.delete("/:id", OfficerController.delete)
  }
}

export default new OfficerRoutes().router