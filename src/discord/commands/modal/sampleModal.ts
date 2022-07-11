import { Modal, showModal, TextInputComponent } from "discord-modals";
import {
  BaseCommandInteraction,
  Client,
  ModalSubmitInteraction,
} from "discord.js";
import { ApplicationCommand } from "../../interfaces/Command";

const modalId = "modal-customid";
const sample_modal = new Modal()
  .setCustomId(modalId)
  .setTitle("modal")
  .addComponents(
    new TextInputComponent() // We create a Text Input Component
      .setCustomId("name")
      .setLabel("Name")
      .setStyle("SHORT") //IMPORTANT: Text Input Component Style can be 'SHORT' or 'LONG'
      .setPlaceholder("Write your name here")
      .setRequired(true)
  );

export const sampleModal: ApplicationCommand = {
  name: "showmodal",
  description: "Modalを表示します。",
  type: "CHAT_INPUT",
  responseType: "MODAL",
  modalId: modalId,
  run: async (client: Client, interaction: BaseCommandInteraction) => {
    showModal(sample_modal, { client: client, interaction: interaction });
  },
  submitted: async (client: Client, interaction: ModalSubmitInteraction) => {
    const submitted = interaction.fields.getTextInputValue("name");
    interaction.reply(`${interaction.user}は${submitted}を送った！`);
  },
};
