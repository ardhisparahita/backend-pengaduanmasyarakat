import BaseRoute from "./BaseRouter";
import MasyarakatController from "../controllers/MasyarakatController";

class MasyarakatRoutes extends BaseRoute {
  public routes(): void {
    this.router.get("/", MasyarakatController.index)
    this.router.post("/", MasyarakatController.create)
    this.router.get("/:id", MasyarakatController.show)
    this.router.put("/:id", MasyarakatController.update)
    this.router.delete("/:id", MasyarakatController.delete)
  }
}

export default new MasyarakatRoutes().router