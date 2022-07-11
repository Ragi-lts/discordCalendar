/* eslint-disable no-unused-vars */
import {
  ChatInputApplicationCommandData,
  ModalSubmitInteraction,
  Client,
  UserApplicationCommandData,
  UserContextMenuInteraction,
  MessageApplicationCommandData,
  MessageContextMenuInteraction,
  CommandInteraction,
} from "discord.js";

export interface ApplicationCommand extends ChatInputApplicationCommandData {
  responseType?: "CHAT" | "MODAL";
  modalId?: string;
  run: (client: Client, interaction: CommandInteraction) => void;
  submitted: (client: Client, interaction: ModalSubmitInteraction) => void;
}

export interface UserContextMenuCommand extends UserApplicationCommandData {
  run: (client: Client, interaction: UserContextMenuInteraction) => void;
}
export interface MessageContextMenuCommand
  extends MessageApplicationCommandData {
  run: (client: Client, interaction: MessageContextMenuInteraction) => void;
}
