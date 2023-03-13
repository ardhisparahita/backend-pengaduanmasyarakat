import express, {Application} from "express"
import cors from "cors"
import compression from "compression"
import helmet from "helmet"
import MasyarakatRoutes from "./routes/MasyarakatRoutes"
import OfficerRoutes from "./routes/OfficerRoutes"
import ComplaintRoutes from "./routes/ComplaintRoutes"

class App {
  public app: Application

  constructor() {
    this.app = express()
    this.plugins()
    this.routes()
  }

  protected plugins(): void {
    this.app.use(express.json())
    this.app.use(compression())
    this.app.use(cors())
    this.app.use(helmet())
  }

  protected routes(): void {
    this.app.use("/api/v1/masyarakat", MasyarakatRoutes)
    this.app.use("/api/v1/officer", OfficerRoutes)
    this.app.use("/api/v1/complaint", ComplaintRoutes)
  }
}

const app = new App().app

export default app