//import { ContextMenuCommandBuilder } from "@discordjs/builders";
import {Client, MessageEmbed, UserContextMenuInteraction} from "discord.js";
import {UserContextMenuCommand} from "../../interfaces/Command";

//const data = new ContextMenuCommandBuilder().setName("echo").setType("USER");
export const contextMenu: UserContextMenuCommand = {
  name: "samplecontextmenu",
  type: "USER",
  run: async (client : Client, interaction : UserContextMenuInteraction) => {
    const user = await client.users.fetch(interaction.targetId);
    console.log(user);
    await interaction.deferReply();
    await interaction.followUp({content: `Hello World!!`});
  }
};
