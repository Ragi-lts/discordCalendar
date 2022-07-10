import {
  BaseCommandInteraction,
  ChatInputApplicationCommandData,
  ModalSubmitInteraction,
  Client,
  ContextMenuInteraction,
} from "discord.js";
import { OverwriteTypes } from "discord.js/typings/enums";

export interface ApplicationCommand extends ChatInputApplicationCommandData {
  responseType?: "CHAT" | "MODAL";
  modalId?: string;
  run: (client: Client, interaction: BaseCommandInteraction) => void;
  submitted: (client: Client, interaction: ModalSubmitInteraction) => void;
}

export interface ContextMenuCommand extends ChatInputApplicationCommandData {
  responseType?: "CHAT" | "MODAL";
  modalId?: string;
  run: (client: Client, interaction: ContextMenuInteraction) => void;
}
