import hapi from "hapi";
import { applyRoutes } from "./routes";

const PORT = +(process.env.PORT || 3000);

global.console.log(`Server listening on port ${PORT}`);

const server = new hapi.Server({
  port: PORT,
  host: "localhost"
});

applyRoutes(server);

const init = async () => {
  await server.start();
  global.console.log(`Server running at: ${server.info.uri}`);
};

process.on("unhandledRejection", err => {
  global.console.error(err);
  process.exit(1);
});

init();
