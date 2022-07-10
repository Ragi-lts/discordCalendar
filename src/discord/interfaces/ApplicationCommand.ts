import {
  BaseCommandInteraction,
  ChatInputApplicationCommandData,
  ModalSubmitInteraction,
  Client,
} from "discord.js";

export interface ApplicationCommand extends ChatInputApplicationCommandData {
  responseType?: "CHAT" | "MODAL";
  modalId?: string;
  run: (client: Client, interaction: BaseCommandInteraction) => void;
  submitted: (client: Client, interaction: ModalSubmitInteraction) => void;
}
