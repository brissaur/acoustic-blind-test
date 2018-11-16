import Hapi from "hapi";

const PORT = +process.env.PORT || 3000;

global.console.log("Server listening on ,port" + PORT);

const server = new Hapi.Server({
  port: PORT,
  host: "localhost"
});

const init = async () => {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();
