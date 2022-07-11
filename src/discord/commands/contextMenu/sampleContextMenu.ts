import { ContextMenuCommandBuilder } from "@discordjs/builders";
import { Client, ContextMenuInteraction } from "discord.js";
import { ContextMenuCommand } from "../../interfaces/ApplicationCommand";

const data = new ContextMenuCommandBuilder().setName("echo").setType("USER");
export const contextMenu: ContextMenuCommand = {
  name: "",
  description: "現在時刻を取得します。",
  type: "CHAT_INPUT",
  run(client: Client, interaction: ContextMenuInteraction) {
    if (!interaction.isUserContextMenu())
  },
};
