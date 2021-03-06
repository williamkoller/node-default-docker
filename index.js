import "./setup/db";

import { server } from "./setup/server";
import { UserModel } from "./model/user";

server.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.send(users);
  } catch (error) {
    res.send(500, error);
  }
});

server.post("/users", async (req, res) => {
  try {
    res.send({ message: "Ok" });
  } catch (error) {
    console.log(error);
  }
});

server.start(() => console.log("Started"));
