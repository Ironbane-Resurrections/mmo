require("sucrase/register")
import fs from "fs";
import https from "https";
import * as socket_io from "socket.io";
import { world_server } from "./world-server";

import { config } from '../config.js';

//var msg: string = "🧙 sheep the priest🐑"
//console.log(msg)

function Main() {
  const port = process.env.PORT || 4000;

  const server = https.createServer({
    key: fs.readFileSync(config.key),
    cert: fs.readFileSync(config.cert)
  });

  const io = new socket_io.Server(server, {
    path: config.path,
    cors: {
      origin: "*",
    },
  });

  server.listen(port, () => {
    console.log("listening on: *", port);
  });

  const _WORLD = new world_server.WorldServer(io);
  _WORLD.Run();
}

Main();
