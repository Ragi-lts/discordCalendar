/** */
import {
  BaseCommandInteraction,
  Client,
  ModalSubmitInteraction,
} from "discord.js";

import { ApplicationCommand as Command } from "./interfaces/Command";

import { getNowTime } from "@Command/getNowTime";
import { Hello } from "@Command/hello";
import { sampleModal } from "@Command/modal/sampleModal";

export const slashCommands: Command[] = [Hello, getNowTime, sampleModal];

export const handleSlashCommand = async (
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
  slashCommand.run(client, interaction);
};

export const submittedModal = async (
  client: Client,
  interaction: ModalSubmitInteraction
): Promise<void> => {
  const modals = slashCommands.filter((c) => c.responseType == "MODAL");
  const modalNameArray = modals.map((modal) => modal.modalId);
  const modalId = interaction.customId;
  const ModalIndex = modalNameArray.indexOf(modalId);
  if (ModalIndex != -1) {
    modals[ModalIndex].submitted(client, interaction);
    return;
  } else {
    interaction.reply("不正なSubmit");
  }
};
