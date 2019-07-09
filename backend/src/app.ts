import express from "express";
import bodyParser from "body-parser"; // pull information from HTML POST (express4)
import createError, { HttpError } from "http-errors";
import { RegisterRoutes } from "./routes";
import "./controllers/UserController";
import { serve, setup } from "swagger-ui-express";
import config from "./config/app";
import logger from "./utils/Logger";
// const swaggerDocument = require("../build/swagger.json");
import swaggerDocument from "../build/swagger.json";

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.setup();
  }

  private setup(): void {
    this.app.use(
      bodyParser.urlencoded({
        extended: true,
      })
    );

    this.app.use(bodyParser.json());

    RegisterRoutes(this.app);

    this.app.use(config.swagger, serve, setup(swaggerDocument));

    // catch 404 and forward to error handler
    this.app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
      next(createError(404));
    });

    // error handler which is a middleware
    this.app.use((err: HttpError, req: express.Request, res: express.Response, next: express.NextFunction) => {
      // set locals, only providing error in development
      logger.error(err);
      res.locals.message = err.message;
      res.locals.error = req.app.get("env") === "development" ? err : "Some error ocurred";
      // Util has a method that can convert an error to String for Json conversion
      const errorResponse = {
        // Error: utils.errorStringify(res.locals.error, null, "\t"),
        Error: res.locals.error,
      };
      // render the error page
      res.status(err.status || 500);

      // TODO  Sending the Stringified error trace back to  caller, ideally you wont do this in prod
      res.json(errorResponse);
    });
  }
}
export default new App().app;
