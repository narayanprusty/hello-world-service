import "babel-polyfill";
import http from "http";
import express from "express";
import morgan from "morgan";
import routes from "./routes";
import config from "./config";

const app = express();
app.server = http.createServer(app);

// logger
app.use(morgan("dev"));

(async () => {
  routes({ app });

  app.server.listen(config.port, () => {
    console.log(`Started on port ${app.server.address().port}`);
  });
})();

export default app;
