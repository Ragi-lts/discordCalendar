/**環境変数 */
import dotenv from "dotenv";
dotenv.config();

/** DB 関連*/
import "reflect-metadata";
import { AppDataSource } from "../ormconfig";

import { User } from "./Entity/User";
import { UserService } from "./Service/UserService";

import { Todo } from "./Entity/Todos";
import { TodoService } from "./Service/TodoService";

/**Discord  関連*/
import discordApp from "./discord/main";

//const rest = new REST({ version: "10" }).setToken(process.env.BOT_TOKEN || "");

/*
rest
  .put(Routes.applicationCommands(process.env.BOT_TOKEN || ""), {
    body: applicationCommands,
  })
  .then(() => console.log("Successfully registered application commands."))
  .catch((e) => console.error(e.requestBody.json));
*/

//console.log(applicationCommands);
AppDataSource.initialize()
  .then(async () => {
    console.info("Database Initialized!!");
    const userService: UserService = new UserService(); //  Userテーブルの要素を扱う
    const todoService: TodoService = new TodoService(); //  Todoテーブルを要素を扱う

    const testUser = new User("Ragi");
    userService.appendUser(testUser);

    //todoService.appendTodo(new Todo("Sample 1", "あいうえお", testUser));
    const todos = await todoService.findAllTodos();
    console.log(todos);

    discordApp.login(process.env.BOT_TOKEN);
  })
  .catch((e) => console.error(e));
