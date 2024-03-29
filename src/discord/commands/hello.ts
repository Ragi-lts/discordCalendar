import { ApplicationCommand } from "../interfaces/Command";
import { Client, BaseCommandInteraction } from "discord.js";

export const Hello: ApplicationCommand = {
  name: "hello",
  description: "Returns a greeting",
  type: "CHAT_INPUT",
  run: async (client: Client, interaction: BaseCommandInteraction) => {
    const content = "Hello there!";
    await interaction.deferReply();
    await interaction.followUp({
      ephemeral: true,
      content,
    });
  },
  submitted(client, interaction) {},
};
