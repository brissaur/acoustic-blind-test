import { Server } from "hapi";

const counter = 0;

export function applyRoutes(server: Server) {
  server.route({
    method: "GET",
    path: "/hello",
    handler(request, h) {
      return "hello world";
    }
  });
}
