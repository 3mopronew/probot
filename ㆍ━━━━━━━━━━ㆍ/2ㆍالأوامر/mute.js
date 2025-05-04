//══════[ Package ]══════

const { MessageActionRow, MessageButton } = require("discord.js")

const ms = require("ms")

const i = require("../../━━━━━━━━━━━━━━━/Database/config.js")

//══════[ Command ]══════

module.exports = {
name: "mute",
description: "ㆍ",
options: [
{
name: "المستخدم",
description: "ㆍ",
type: 6,
required: true
}],
integration_types: [0, 1],
contexts: [0],
async execute(client, interaction) {

if (!interaction.member.permissions.has("TIMEOUT_MEMBERS")) return interaction.reply({ content: i.perm1, ephemeral: true })

if (!interaction.guild.me.permissions.has("TIMEOUT_MEMBERS")) return interaction.reply({ content: i.perm2, ephemeral: true })

const user = interaction.options.getMember("المستخدم")

interaction.reply({
components: [
new MessageActionRow()
.addComponents(
new MessageButton()
.setCustomId("1h")
.setLabel("1 Hour")
.setStyle("SECONDARY")
.setEmoji(i.emoji.time),
new MessageButton()
.setCustomId("5h")
.setLabel("5 Hours")
.setStyle("SECONDARY")
.setEmoji(i.emoji.time),
new MessageButton()
.setCustomId("1d")
.setLabel("1 Day")
.setStyle("SECONDARY")
.setEmoji(i.emoji.time),
new MessageButton()
.setCustomId("1w")
.setLabel("1 Week")
.setStyle("SECONDARY")
.setEmoji(i.emoji.time),
new MessageButton()
.setCustomId("remove")
.setLabel("Remove")
.setStyle("SECONDARY")
.setEmoji(i.emoji.remove))]})

//══════[ Action ]══════

client.on("interactionCreate", async interaction => {

if (interaction.isButton()) {

//════════════════════

if (interaction.customId === "1h") {

const timeoutDuration = ms("1h")

await user.timeout(timeoutDuration)

.then(() => interaction.reply(`**<:i:${i.emoji.time}> ㆍ ${user.user} ㆍ تَعَرَّضَ لِلإِيقَافِ عَنِ النَّشَاطِ لِمُدَّةِ سَاعَةٍ وَاحِدَةٍ .**`))

.catch(() => interaction.reply({ content: i.error, ephemeral: true }))}

//════════════════════

if (interaction.customId === "5h") {

const timeoutDuration = ms("5h")

await user.timeout(timeoutDuration)

.then(() => interaction.reply(`**<:i:${i.emoji.time}> ㆍ ${user.user} ㆍ تَعَرَّضَ لِلإِيقَافِ عَنِ النَّشَاطِ لِمُدَّةِ خَمْسِ سَاعَاتٍ .**`))

.catch(() => interaction.reply({ content: i.error, ephemeral: true }))}

//════════════════════

if (interaction.customId === "1d") {

const timeoutDuration = ms("1d")

await user.timeout(timeoutDuration)

.then(() => interaction.reply(`**<:i:${i.emoji.time}> ㆍ ${user.user} ㆍ تَعَرَّضَ لِلإِيقَافِ عَنِ النَّشَاطِ لِمُدَّةِ يَوْمٍ وَاحِدٍ .**`))

.catch(() => interaction.reply({ content: i.error, ephemeral: true }))}

//════════════════════

if (interaction.customId === "1w") {

const timeoutDuration = ms("1w")

await user.timeout(timeoutDuration)

.then(() => interaction.reply(`**<:i:${i.emoji.time}> ㆍ ${user.user} ㆍ تَعَرَّضَ لِلإِيقَافِ عَنِ النَّشَاطِ لِمُدَّةِ أُسْبُوعٍ وَاحِدٍ .**`))

.catch(() => interaction.reply({ content: i.error, ephemeral: true }))}

//════════════════════

if (interaction.customId === "remove") {

if (!user.communicationDisabledUntil) return interaction.reply({ content: i.error, ephemeral: true })

await user.timeout(null)

interaction.reply(`**<:i:${i.emoji.remove}> ㆍ ${user.user} ㆍ تَمَّ رَفْعُ الإِيقَافِ، يُمْكِنُكَ اسْتِئْنَافُ النَّشَاطِ .**`)}

}})

}}