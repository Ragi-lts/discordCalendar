import {
  BaseCommandInteraction,
  ChatInputApplicationCommandData,
  ModalSubmitInteraction,
  Client,
  UserApplicationCommandData,
  UserContextMenuInteraction,
  MessageApplicationCommandData,
  MessageContextMenuInteraction,
  ContextMenuInteraction,
  CommandInteraction,
} from "discord.js";

export interface ApplicationCommand extends ChatInputApplicationCommandData {
  responseType?: "CHAT" | "MODAL";
  modalId?: string;
  run: (client: Client, interaction: BaseCommandInteraction) => void;
  submitted: (client: Client, interaction: ModalSubmitInteraction) => void;
}

export interface UserContextMenuCommand extends UserApplicationCommandData {
  modalId?: string;
  run: (client: Client, interaction: UserContextMenuInteraction) => void;
}
export interface MessageContextMenuCommand
  extends MessageApplicationCommandData {
  modalId?: string;
  run: (client: Client, interaction: MessageContextMenuInteraction) => void;
}
