/**環境変数 */
import dotenv from "dotenv";
dotenv.config();

/** DB 関連*/
import "reflect-metadata";
import { AppDataSource } from "../ormconfig";

import { User } from "./backend/Entity/User";
import { UserService } from "./backend/Service/UserService";

import { Todo } from "./backend/Entity/Todos";
import { TodoService } from "./backend/Service/TodoService";

/**Discord  関連*/
import discordApp from "./discord/main";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";

/*
console.log(commands);
const rest = new REST({ version: "9" }).setToken(process.env.BOT_TOKEN || "");
(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(process.env.BOT_APPID || ""), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
*/

//console.log(applicationCommands);
AppDataSource.initialize()
  .then(async () => {
    console.info("Database Initialized!!");
    /*
    const userService: UserService = new UserService(); //  Userテーブルの要素を扱う
    const todoService: TodoService = new TodoService(); //  Todoテーブルを要素を扱う

    discordApp.login(process.env.BOT_TOKEN);
    */
  })
  .catch((e) => console.error(e));

discordApp.login(process.env.BOT_TOKEN);
