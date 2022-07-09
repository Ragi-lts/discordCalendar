/**環境変数 */
import dotenv from "dotenv";

import { Client, Intents } from "discord.js";

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

export default discordApp;
