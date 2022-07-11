/** */
import {
  Client,
  Modal,
  MessageContextMenuInteraction,
  ModalSubmitInteraction,
  UserContextMenuInteraction,
  CommandInteraction
} from "discord.js";

import {ApplicationCommand as slashCommand, UserContextMenuCommand as contextCommand} from "./interfaces/Command";

import {getNowTime} from "@Front/commands/base/getNowTime";
import {Hello} from "@Front/commands/base/hello";
import {sampleModal} from "@Command/modal/sampleModal";
import {contextMenu} from "@Command/contextMenu/sampleContextMenu";

export const slashCommands: slashCommand[] = [Hello, getNowTime, sampleModal];
export const contextCommands: contextCommand[] = [contextMenu];

export const handleSlashCommand = async (client : Client, interaction : CommandInteraction): Promise<void> => {
  const slashCommand = slashCommands.find((c) => c.name === interaction.commandName);
  if (slashCommand) 
    slashCommand.run(client, interaction);
  if (!slashCommand) 
    interaction.followUp({content: "An error has occurred"});
  };

export const submittedModal = async (client : Client, interaction : ModalSubmitInteraction): Promise<void> => {
  const modals = slashCommands.filter((c) => c.responseType == "MODAL");
  const modalNameArray = modals.map((modal) => modal.modalId);
  const modalId = interaction.customId;
  const ModalIndex = modalNameArray.indexOf(modalId);
  if (ModalIndex != -1) 
    modals[ModalIndex].submitted(client, interaction);
  if (ModalIndex == -1) 
    interaction.reply("不正なSubmit");
  };

export const executeApplicaion = async (client : Client, interaction : UserContextMenuInteraction | MessageContextMenuInteraction): Promise<void> => {
  //console.log(interaction);
  const component = new Modal().setCustomId("sampleModal").setTitle("modal");
  if (interaction instanceof UserContextMenuInteraction) 
    interaction.targetUser.send("あいうえお");
    //const application = contextCommands.filter((command) => command.)
  };
