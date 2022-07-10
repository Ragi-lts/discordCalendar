import dotenv from "dotenv";
import { DataSource } from "typeorm";
dotenv.config({ path: __dirname + "./env" });

import { User } from "./src/backend/Entity/User";
import { Todo } from "./src/backend/Entity/Todos";

dotenv.config();
export const AppDataSource: DataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [User, Todo],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
});
