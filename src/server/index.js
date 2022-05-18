require("sucrase/register")
import fs from "fs";
import http from "http";
import https from "https";
import * as socket_io from "socket.io";
import { world_server } from "./world-server";

export function Main(requestHandler, config) {
  let server;
  if (config.key && config.cert)
    server = https.createServer({
      key: fs.readFileSync(config.key),
      cert: fs.readFileSync(config.cert)
    }, requestHandler);
  else
    server = http.createServer(requestHandler);

  const io = new socket_io.Server(server, {
    path: config.socketPath,
    cors: {
      origin: "*",
    },
  });

  server.listen(config.port, () => {
    console.log("listening on: *", config.port);
  });

  const _WORLD = new world_server.WorldServer(io);
  _WORLD.Run();
}