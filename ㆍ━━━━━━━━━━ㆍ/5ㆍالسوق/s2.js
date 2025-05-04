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
.setEmoji("1332346706431316039"),
// House of Brilliance
new MessageButton()
.setCustomId("brilliance")
.setStyle("SECONDARY")
.setEmoji("1332346710067904593"),
// House of Balance
new MessageButton()
.setCustomId("balance")
.setStyle("SECONDARY")
.setEmoji("1332346724450304021"),
// Completed a Quest
new MessageButton()
.setCustomId("completedaquest")
.setStyle("SECONDARY")
.setEmoji("1332346726417301596"),
// Active Developer
new MessageButton()
.setCustomId("activedeveloper")
.setStyle("SECONDARY")
.setEmoji("1332346728799539240")),
new MessageActionRow()
.addComponents(
// Discord Bug Hunter (1)
new MessageButton()
.setCustomId("EMPTY1")
.setStyle("SECONDARY")
.setEmoji("1332351487883612253")
.setDisabled(true),
// Discord Bug Hunter (2)
new MessageButton()
.setCustomId("EMPTY2")
.setStyle("SECONDARY")
.setEmoji("1332351622621433937")
.setDisabled(true),
// Supports Commands
new MessageButton()
.setCustomId("supportscommands")
.setStyle("SECONDARY")
.setEmoji("1332346989009965139"),
// Uses Automod
new MessageButton()
.setCustomId("usesautomod")
.setStyle("SECONDARY")
.setEmoji("1332346991124156489"),
// This server has App Name premium
new MessageButton()
.setCustomId("EMPTY3")
.setStyle("SECONDARY")
.setEmoji("1332347493307908187")
.setDisabled(true))]}

interaction.reply(msg)

}}