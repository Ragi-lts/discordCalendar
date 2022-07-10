/**環境変数 */
import dotenv from "dotenv";

import {
  Client,
  Intents,
  Interaction,
  BaseCommandInteraction,
} from "discord.js";
import { slashCommands } from "./applicationCommands";

dotenv.config({ path: __dirname + "/../.env" });

const discordApp = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
});

discordApp.once("ready", async (client) => {
  if (!client.user || !client.application) return;

  console.log("Registering Slash(/) commands...");
  await client.application?.commands
    .set(slashCommands)
    .then(() => console.log("Successfully register slash(/) commands!"))
    .catch((err) => console.error("Failed register slash(/) commands...", err));

  console.info("Logined as ", client.user.tag);
});

discordApp.on("message", (msg) => {
  if (msg.author.bot) return;
  msg.reply("Recieved");
});

discordApp.on("messageReactionAdd", (reaction, usr) => {
  const [userName, emojiName] = [usr.username, reaction.emoji];
  console.log(`${userName}さんが絵文字${emojiName}で反応したよ！`);
  const channelId: string = reaction.message.channelId;
  console.log(channelId);
});

discordApp.on("emojiCreate", (emoji) => {
  const [name, author] = [emoji.name, emoji.author];
  console.log(`${author}さんが絵文字${name}を追加したよ`);
});

discordApp.on("interactionCreate", async (interaction: Interaction) => {
  if (interaction.isCommand() || interaction.isContextMenu()) {
    await handleSlashCommand(discordApp, interaction);
  }
});

const handleSlashCommand = async (
  client: Client,
  interaction: BaseCommandInteraction
): Promise<void> => {
  const slashCommand = slashCommands.find(
    (c) => c.name === interaction.commandName
  );
  if (!slashCommand) {
    interaction.followUp({ content: "An error has occurred" });
    return;
  }
  await interaction.deferReply();
  slashCommand.run(client, interaction);
};

export default discordApp;
