//import { ContextMenuCommandBuilder } from "@discordjs/builders";
import { Client, UserContextMenuInteraction } from "discord.js";
import { UserContextMenuCommand } from "../../interfaces/ApplicationCommand";

//const data = new ContextMenuCommandBuilder().setName("echo").setType("USER");
export const contextMenu: UserContextMenuCommand = {
  name: "sampleContextMenu",
  type: "USER",
  run(client: Client, interaction: UserContextMenuInteraction) {
    const name = interaction.targetUser.username;
    console.log(name);
  },
};
