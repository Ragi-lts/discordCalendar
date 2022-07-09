import SlashCommandBuilder from "slash-command-builder";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("getNowTime")
    .setDescription("現在時刻を取得します。"),
};
