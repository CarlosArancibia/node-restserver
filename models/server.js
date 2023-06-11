const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // middlewares
    this.middlewares();

    // routes api
    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // reading and parsing the request body
    this.app.use(express.json());

    // public directory
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use("/api/users", require("../routes/users"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`app listening http:localhost:${this.port}`);
    });
  }
}

module.exports = Server;
