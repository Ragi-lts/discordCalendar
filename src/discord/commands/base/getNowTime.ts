import { ApplicationCommand } from "../../interfaces/Command";
import { Client, BaseCommandInteraction } from "discord.js";

export const getNowTime: ApplicationCommand = {
  name: "gettime",
  description: "現在時刻を取得します。",
  type: "CHAT_INPUT",
  run: async (client: Client, interaction: BaseCommandInteraction) => {
    const nowTime = new Date().toLocaleString();
    await interaction.followUp({
      ephemeral: true,
      content: nowTime,
    });
  },
  submitted(client, interaction) {},
};
