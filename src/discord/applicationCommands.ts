/** */
import {
  BaseCommandInteraction,
  Client,
  ModalSubmitInteraction,
} from "discord.js";

import {
  ApplicationCommand as slashCommand,
  ContextMenuCommand as contextCommand,
} from "./interfaces/ApplicationCommand";

import { getNowTime } from "@Command/getNowTime";
import { Hello } from "@Command/hello";
import { sampleModal } from "@Command/modal/sampleModal";
import { contextMenu } from "@Command/contextMenu/sampleContextMenu";

export const slashCommands: slashCommand[] = [Hello, getNowTime, sampleModal];
export const contextCommands: contextCommand[] = [contextMenu];

export const handleSlashCommand = async (
  client: Client,
  interaction: BaseCommandInteraction
): Promise<void> => {
  const slashCommand = slashCommands.find(
    (c) => c.name === interaction.commandName
  );
  if (slashCommand) slashCommand.run(client, interaction);
  if (!slashCommand) interaction.followUp({ content: "An error has occurred" });
};

export const submittedModal = async (
  client: Client,
  interaction: ModalSubmitInteraction
): Promise<void> => {
  const modals = slashCommands.filter((c) => c.responseType == "MODAL");
  const modalNameArray = modals.map((modal) => modal.modalId);
  const modalId = interaction.customId;
  const ModalIndex = modalNameArray.indexOf(modalId);
  if (ModalIndex != -1) modals[ModalIndex].submitted(client, interaction);
  if (ModalIndex == -1) interaction.reply("不正なSubmit");
};
