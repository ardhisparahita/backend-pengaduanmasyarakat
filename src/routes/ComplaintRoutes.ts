import BaseRoute from "./BaseRouter";
import ComplaintController from "../controllers/ComplaintController";

class ComplaintRoutes extends BaseRoute {
  public routes(): void {
    this.router.get("/", ComplaintController.index)
    this.router.post("/", ComplaintController.create)
    this.router.get("/:id", ComplaintController.show)
    this.router.put("/:id", ComplaintController.update)
    this.router.delete("/:id", ComplaintController.delete)
  }
}

export default new ComplaintRoutes().router