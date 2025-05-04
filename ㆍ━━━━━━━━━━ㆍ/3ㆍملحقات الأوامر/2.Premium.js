//══════[ Package ]══════

const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js")

const i = require("../../━━━━━━━━━━━━━━━/Database/config.js")

const db = require("pro.db")

//══════[ Login ]══════

const client = require("../../index")

//══════[ Modal ]══════

const { DiscordModal, ModalBuilder, ModalField } = require("discord-modal")

DiscordModal(client)

//══════[ Action 1 ]══════

client.on("interactionCreate", async interaction => {

if (interaction.isButton()) {

//════════════════════

if (interaction.customId === "antibot") {

let antiBotStatus = db.get(`ANTIBOT.${interaction.guild.id}`)

if (!antiBotStatus) {
db.set(`ANTIBOT.${interaction.guild.id}`, true)
interaction.reply({ content: `**<:i:${i.emoji.true}> ㆍ تَمَّ تَفْعِيلُ نِظَامِ مُكَافَحَةِ ٱلْبُوتَات .**` })}

if (antiBotStatus === true) {
db.set(`ANTIBOT.${interaction.guild.id}`, false)
interaction.reply({ content: `**<:i:${i.emoji.false}> ㆍ تَمَّ تَعْطِيلُ نِظَامِ مُكَافَحَةِ ٱلْبُوتَات .**` })}

if (antiBotStatus === false) {
db.set(`ANTIBOT.${interaction.guild.id}`, true)
interaction.reply({ content: `**<:i:${i.emoji.true}> ㆍ تَمَّ تَفْعِيلُ نِظَامِ مُكَافَحَةِ ٱلْبُوتَات .**` })}}

//════════════════════

if (interaction.customId === "setline") {
const modal = new ModalBuilder()
.setCustomId("modal_setline")
.setTitle("نَمُوذَجُ إِدْخَالِ ٱلْبَيَانَاتٍ")
.addComponents(
new ModalField()
.setCustomId("q1")
.setLabel("رَابِطُ ٱلْخَطِّ")
.setStyle("SHORT")
.setRequired(true))
client.modal.open(interaction, modal)}

//════════════════════

if (interaction.customId === "autolinechannel") {
const modal = new ModalBuilder()
.setCustomId("modal_autolinechannel")
.setTitle("نَمُوذَجُ إِدْخَالِ ٱلْبَيَانَاتٍ")
.addComponents(
new ModalField()
.setCustomId("q1")
.setLabel("مُعَرِّفُ ٱلْقَنَاةِ ٱلْكِتَابِيَّةِ")
.setStyle("SHORT")
.setRequired(true))
client.modal.open(interaction, modal)}

//════════════════════

if (interaction.customId === "setreact") {
const modal = new ModalBuilder()
.setCustomId("modal_setreact")
.setTitle("نَمُوذَجُ إِدْخَالِ ٱلْبَيَانَاتٍ")
.addComponents(
new ModalField()
.setCustomId("q1")
.setLabel("كَوْدُ ٱلْإِيمُوجِي")
.setStyle("SHORT")
.setRequired(true))
client.modal.open(interaction, modal)}

//════════════════════

if (interaction.customId === "autoreactchannel") {
const modal = new ModalBuilder()
.setCustomId("modal_autoreactchannel")
.setTitle("نَمُوذَجُ إِدْخَالِ ٱلْبَيَانَاتٍ")
.addComponents(
new ModalField()
.setCustomId("q1")
.setLabel("مُعَرِّفُ ٱلْقَنَاةِ ٱلْكِتَابِيَّةِ")
.setStyle("SHORT")
.setRequired(true))
client.modal.open(interaction, modal)}

}})

//══════[ Action 2 ]══════

client.on("modalSubmitInteraction", async interaction => {

const AUTOLINECHANNEL = db.get(`CHANNEL.LINE.${interaction.guild.id}`) || []

const AUTOREACTCHANNEL = db.get(`CHANNEL.REACT.${interaction.guild.id}`) || []

const q1 = interaction.fields.getTextInputValue("q1")

//════════════════════

if (interaction.customId === "modal_setline") {
db.set(`LINE.${interaction.guild.id}`, q1)
interaction.reply({ content: i.done, ephemeral: true })}

//════════════════════

if (interaction.customId === "modal_autolinechannel") {

if (AUTOLINECHANNEL.length === 0) {
db.set(`CHANNEL.LINE.${interaction.guild.id}`, [q1])
interaction.reply({ content: `**<:i:${i.emoji.positive}> ㆍ <#${q1}> ㆍ تَمَّتْ إِضَافَةُ ٱلْقَنَاةِ إِلَى ٱلْقَائِمَةِ .**`, ephemeral: true })}

if (!AUTOLINECHANNEL.includes(q1)) {
db.push(`CHANNEL.LINE.${interaction.guild.id}`, q1)
interaction.reply({ content: `**<:i:${i.emoji.positive}> ㆍ <#${q1}> ㆍ تَمَّتْ إِضَافَةُ ٱلْقَنَاةِ إِلَى ٱلْقَائِمَةِ .**`, ephemeral: true })}

if (AUTOLINECHANNEL.includes(q1)) {
const filtered = db.get(`CHANNEL.LINE.${interaction.guild.id}`).filter(c => c != q1)
db.set(`CHANNEL.LINE.${interaction.guild.id}`, filtered)
interaction.reply({ content: `**<:i:${i.emoji.negative}> ㆍ <#${q1}> ㆍ تَمَّتْ إِزَالَةُ ٱلْقَنَاةِ مِنَ ٱلْقَائِمَةِ .**`, ephemeral: true })}}

//════════════════════

if (interaction.customId === "modal_setreact") {
db.set(`REACT.${interaction.guild.id}`, q1)
interaction.reply({ content: i.done, ephemeral: true })}

//════════════════════

if (interaction.customId === "modal_autoreactchannel") {

if (AUTOLINECHANNEL.length === 0) {
db.set(`CHANNEL.REACT.${interaction.guild.id}`, [q1])
interaction.reply({ content: `**<:i:${i.emoji.positive}> ㆍ <#${q1}> ㆍ تَمَّتْ إِضَافَةُ ٱلْقَنَاةِ إِلَى ٱلْقَائِمَةِ .**`, ephemeral: true })}

if (!AUTOREACTCHANNEL.includes(q1)) {
db.push(`CHANNEL.REACT.${interaction.guild.id}`, q1)
interaction.reply({ content: `**<:i:${i.emoji.positive}> ㆍ <#${q1}> ㆍ تَمَّتْ إِضَافَةُ ٱلْقَنَاةِ إِلَى ٱلْقَائِمَةِ .**`, ephemeral: true })}

if (AUTOREACTCHANNEL.includes(q1)) {
const filtered = db.get(`CHANNEL.REACT.${interaction.guild.id}`).filter(c => c != q1)
db.set(`CHANNEL.REACT.${interaction.guild.id}`, filtered)
interaction.reply({ content: `**<:i:${i.emoji.negative}> ㆍ <#${q1}> ㆍ تَمَّتْ إِزَالَةُ ٱلْقَنَاةِ مِنَ ٱلْقَائِمَةِ .**`, ephemeral: true })}}

})

//══════[ Action 3 ]══════

client.on("guildMemberAdd", (member) => {

if (db.get(`ANTIBOT.${member.guild.id}`, true)) return member.kick()})

//════════════════════

client.on("messageCreate", message => {

if (message.channel.type === "dm" || message.author.bot) return;

//════════════════════

const LINE = db.get(`LINE.${message.guild.id}`)

const LINECHANNEL = db.get(`CHANNEL.LINE.${message.guild.id}`)

const AUTOLINECHANNEL = Array.isArray(LINECHANNEL) ? LINECHANNEL : [LINECHANNEL]

if (AUTOLINECHANNEL.includes(message.channel.id)) {

let channel = client.channels.cache.get(AUTOLINECHANNEL[0])

channel.send(LINE)}

//════════════════════

const REACT = db.get(`REACT.${message.guild.id}`)

const REACTCHANNEL = db.get(`CHANNEL.REACT.${message.guild.id}`)

const AUTOREACTCHANNEL = Array.isArray(REACTCHANNEL) ? REACTCHANNEL : [REACTCHANNEL]

if (AUTOREACTCHANNEL.includes(message.channel.id)) {

message.react(REACT)}

})