//══════[ Package ]══════

const { MessageActionRow, MessageButton } = require("discord.js")

const i = require("../../━━━━━━━━━━━━━━━/Database/config.js")

//══════[ Login ]══════

const client = require("../../index")

//══════[ Code ]══════

client.on("interactionCreate", async interaction => {

if (interaction.isButton()) {

const everyone = interaction.guild.roles.everyone

//════════════════════

if (interaction.channel.name.startsWith("＠ㆍ")) {

if (!interaction.member.permissions.has("MANAGE_MESSAGES")) return interaction.reply({ content: i.perm1, ephemeral: true })

if (!interaction.guild.me.permissions.has("MANAGE_MESSAGES")) return interaction.reply({ content: i.perm2, ephemeral: true })

if (interaction.customId === "claim") {

interaction.channel.permissionOverwrites.edit(everyone , { SEND_MESSAGES: false })

interaction.channel.permissionOverwrites.edit(interaction.member.id , { SEND_MESSAGES: true })

interaction.reply({
content: `**
<:i:${i.emoji.add}> ㆍ ${interaction.member} ㆍ تَمَّ اِسْتِلَامُ التَّذْكِرَةِ بِوَاسِطَةِ**
** **`,
components: [
new MessageActionRow()
.addComponents(
new MessageButton()
.setCustomId("leave")
.setLabel("مُغَادَرَة")
.setStyle("DANGER"))]})}

if (interaction.customId === "leave") {

interaction.channel.permissionOverwrites.edit(everyone , { SEND_MESSAGES: true })

interaction.channel.permissionOverwrites.edit(interaction.member.id , { SEND_MESSAGES: true })

interaction.reply({
content: `**
<:i:${i.emoji.load}> ㆍ تَمَّ إِلْغَاءُ اِسْتِلَامِ التَّذْكِرَةِ، يُرْجَى انْتِظَارُ أَحَدِ مُمَثِّلِي خِدْمَةِ العُمَلَاءِ**
** **`,
components: [
new MessageActionRow()
.addComponents(
new MessageButton()
.setCustomId("claim")
.setLabel("اِسْتِلَام")
.setStyle("SUCCESS"))]})}}

}})