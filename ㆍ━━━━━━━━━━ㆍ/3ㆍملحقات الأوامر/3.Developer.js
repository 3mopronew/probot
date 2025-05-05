//══════[ Package ]══════

const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js")

const i = require("../../━━━━━━━━━━━━━━━/Database/config.js")

//══════[ Login ]══════

const client = require("../../index")

//══════[ Modal ]══════

const { DiscordModal, ModalBuilder, ModalField } = require("discord-modal")

DiscordModal(client)

//══════[ Action 1 ]══════

client.on("interactionCreate", async interaction => {

if (interaction.isButton()) {

//════════════════════

if (interaction.customId === "theme") {
const modal = new ModalBuilder()
.setCustomId("action_theme")
.setTitle("نَمُوذَجُ إِدْخَالِ ٱلْبَيَانَاتٍ")
.addComponents(
new ModalField()
.setCustomId("q1")
.setLabel("Avatar URL")
.setStyle("SHORT")
.setRequired(true),
new ModalField()
.setCustomId("q2")
.setLabel("Banner URL")
.setStyle("SHORT")
.setRequired(true))
client.modal.open(interaction, modal)}

//════════════════════

if (interaction.customId === "replace") {
const modal = new ModalBuilder()
.setCustomId("action_replace")
.setTitle("نَمُوذَجُ إِدْخَالِ ٱلْبَيَانَاتٍ")
.addComponents(
new ModalField()
.setCustomId("q1")
.setLabel("Description")
.setStyle("PARAGRAPH")
.setRequired(true))
client.modal.open(interaction, modal)}

//════════════════════

if (interaction.customId === "resend") {
const modal = new ModalBuilder()
.setCustomId("action_resend")
.setTitle("نَمُوذَجُ إِدْخَالِ ٱلْبَيَانَاتٍ")
.addComponents(
new ModalField()
.setCustomId("q1")
.setLabel("Description")
.setStyle("PARAGRAPH")
.setRequired(true))
client.modal.open(interaction, modal)}

//════════════════════

if (interaction.customId === "guide") {

interaction.reply({ content: "** **", ephemeral: true })

// المقدمة

interaction.channel.send({
content: "https://cdn.discordapp.com/attachments/1251203377761615912/1359140043255447722/tDTIVG1i.png" })

interaction.channel.send({
content: "https://cdn.discordapp.com/attachments/1251203377761615912/1359140044312674545/KVXCFcXs.png" })

// الخدمات

interaction.channel.send({
content: "https://cdn.discordapp.com/attachments/1251203377761615912/1358099641282859169/Picsart_25-04-05_17-01-03-388.png" })

interaction.channel.send({
content: "https://cdn.discordapp.com/attachments/1251203377761615912/1358099830727119089/Picsart_25-04-05_17-17-06-203.png" })

interaction.channel.send({
content: "https://cdn.discordapp.com/attachments/1251203377761615912/1358099918975275068/Picsart_25-04-05_17-10-23-526.png" })

interaction.channel.send({
content: "https://cdn.discordapp.com/attachments/1251203377761615912/1358099998793011410/Picsart_25-04-05_17-10-05-582.png" })

// الأهداف

interaction.channel.send({
content: "https://cdn.discordapp.com/attachments/1251203377761615912/1358101700556361889/Picsart_25-04-05_17-30-59-093.png" })

interaction.channel.send({
content: "https://cdn.discordapp.com/attachments/1251203377761615912/1358101833943613544/Picsart_25-04-05_17-17-57-501.png" })

// الحقوق والدعم

interaction.channel.send({
content: "https://cdn.discordapp.com/attachments/1251203377761615912/1358101884711342190/Picsart_25-04-05_17-21-09-520.png",
components: [
new MessageActionRow()
.addComponents(
new MessageButton()
.setCustomId("support_create")
.setLabel("ٱلاتِّصَالُ بِٱلدَّعْمِ")
.setStyle("SECONDARY")
.setEmoji(i.emoji.ticket))]})}

}})

//══════[ Action 2 ]══════

client.on("modalSubmitInteraction", async interaction => {

//════════════════════

if (interaction.customId === "action_theme") {

const q1 = interaction.fields.getTextInputValue("q1")
const q2 = interaction.fields.getTextInputValue("q2")

interaction.reply({ content: "** **", ephemeral: true })

interaction.channel.send({
components: [
new MessageActionRow()
.addComponents(
new MessageButton()
.setLabel("صُورَةُ ٱلْحِسَابِ")
.setStyle("LINK")
.setURL(q1)
.setEmoji(i.emoji.download),
new MessageButton()
.setLabel("خَلْفِيَّةُ ٱلْحِسَابِ")
.setStyle("LINK")
.setURL(q2)
.setEmoji(i.emoji.download))]})}

//════════════════════

if (interaction.customId === "action_replace") {

const q1 = interaction.fields.getTextInputValue("q1")

const args = q1.replace(/ر/g, "ࢪ").replace(/ك/g, "ڪ")

interaction.reply({ content: `${args}`, ephemeral: true })}

//════════════════════

if (interaction.customId === "action_resend") {

const q1 = interaction.fields.getTextInputValue("q1")

interaction.reply({ content: "** **", ephemeral: true })

interaction.channel.send({ content: `${q1}`, ephemeral: true })}

})