//══════[ Package ]══════

const { MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js")

const i = require("../../━━━━━━━━━━━━━━━/Database/config.js")

//══════[ Login ]══════

const client = require("../../index")

//══════[ Command ]══════

module.exports = {
name: "s2",
description: "ㆍ",
integration_types: [0, 1],
contexts: [0, 1, 2],
async execute(client, interaction) {

const msg = {
components: [
new MessageActionRow()
.addComponents(
// House of Bravery
new MessageButton()
.setCustomId("bravery")
.setStyle("SECONDARY")
.setEmoji(i.emoji.bravery),
// House of Brilliance
new MessageButton()
.setCustomId("brilliance")
.setStyle("SECONDARY")
.setEmoji(i.emoji.brilliance),
// House of Balance
new MessageButton()
.setCustomId("balance")
.setStyle("SECONDARY")
.setEmoji(i.emoji.balance),
// Completed a Quest
new MessageButton()
.setCustomId("completedaquest")
.setStyle("SECONDARY")
.setEmoji(i.emoji.completedaquest),
// Active Developer
new MessageButton()
.setCustomId("activedeveloper")
.setStyle("SECONDARY")
.setEmoji(i.emoji.activedeveloper)),
new MessageActionRow()
.addComponents(
// Discord Bug Hunter (1)
new MessageButton()
.setCustomId("EMPTY1")
.setStyle("SECONDARY")
.setEmoji(i.emoji.EMPTY1)
.setDisabled(true),
// Discord Bug Hunter (2)
new MessageButton()
.setCustomId("EMPTY2")
.setStyle("SECONDARY")
.setEmoji(i.emoji.EMPTY2)
.setDisabled(true),
// Supports Commands
new MessageButton()
.setCustomId("supportscommands")
.setStyle("SECONDARY")
.setEmoji(i.emoji.supportscommands),
// Uses Automod
new MessageButton()
.setCustomId("usesautomod")
.setStyle("SECONDARY")
.setEmoji(i.emoji.usesautomod),
// This server has App Name premium
new MessageButton()
.setCustomId("EMPTY3")
.setStyle("SECONDARY")
.setEmoji(i.emoji.EMPTY3)
.setDisabled(true))]}

if (interaction.guild) { interaction.channel.send(msg)} else { interaction.reply(msg)}

}}