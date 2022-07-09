import dotenv from "dotenv";
import { DataSource } from "typeorm";
dotenv.config({ path: __dirname + "./env" });

import { User } from "./src/Entity/User";
import { Todo } from "./src/Entity/Todos";

export const AppDataSource: DataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 13306,
  username: "root",
  password: "root",
  database: "mysql",
  synchronize: true,
  logging: false,
  entities: [User, Todo],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
});
