//══════[ Package ]══════

const { MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js")

const i = require("../../━━━━━━━━━━━━━━━/Database/config.js")

//══════[ Login ]══════

const client = require("../../index")

//══════[ Command ]══════

module.exports = {
name: "s1",
description: "ㆍ",
integration_types: [0, 1],
contexts: [0, 1, 2],
async execute(client, interaction) {

const msg = {
content: `**
<:i:${i.emoji.info}> ㆍ [إِنْشَاءُ صَفْحَةٍ تَعْرِيفِيَّةٍ تَضُمُّ مَعْلُومَاتِكَ وَحِسَابَاتِكَ](https://cdn.discordapp.com/attachments/1251203377761615912/1332103222386753697/image.png) **
** **`,
components: [
new MessageActionRow()
.addComponents(
new MessageButton()
.setLabel("مِثَالٌ لِلْمَوْقِعِ")
.setStyle("LINK")
.setURL("https://onlyahmd.glitch.me")
.setEmoji(i.emoji.web),
new MessageButton()
.setCustomId("support_create")
.setLabel("فَتْحُ تَذْكِرَةٍ")
.setStyle("SECONDARY")
.setEmoji(i.emoji.ticket),
new MessageButton()
.setCustomId("price_5m")
.setLabel("طُرُقُ ٱلدَّفْعِ")
.setStyle("SECONDARY")
.setEmoji(i.emoji.payment))]}

if (interaction.guild) { interaction.channel.send(msg)} else { interaction.reply(msg)}

}}