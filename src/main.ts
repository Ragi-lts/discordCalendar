/**環境変数 */
import dotenv from "dotenv";
dotenv.config();

/** DB 関連*/
import "reflect-metadata";
import { AppDataSource } from "@ormconfig";

import { User } from "@Entity/User";
import { UserService } from "@Service/UserService";

import { Todo } from "@Entity/Todos";
import { TodoService } from "@Service/TodoService";

/**Discord  関連*/
import discordApp from "./discord/index";

AppDataSource.initialize()
  .then(async () => {
    console.info("Database Initialized!!");
    /*
    const userService: UserService = new UserService(); //  Userテーブルの要素を扱う
    const todoService: TodoService = new TodoService(); //  Todoテーブルを要素を扱う
    */

    discordApp.login(process.env.BOT_TOKEN);
  })
  .catch((e) => console.error(e));
