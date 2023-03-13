import BaseRoute from "./BaseRouter";
import ResponseController from "../controllers/ResponseController";

class ResponseRoutes extends BaseRoute {
  public routes(): void {
    this.router.get("/", ResponseController.index)
    this.router.post("/", ResponseController.create)
    this.router.get("/:id", ResponseController.show)
    this.router.put("/:id", ResponseController.update)
    this.router.delete("/:id", ResponseController.delete)
  }
}

export default new ResponseRoutes().router