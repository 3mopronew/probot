//══════[ Package ]══════

const { MessageActionRow, MessageButton } = require("discord.js")

const fs = require("fs")

const i = require("../../━━━━━━━━━━━━━━━/Database/config.js")

//══════[ Login ]══════

const client = require("../../index")

//══════[ Buttons ]══════

const firstbutton = new MessageActionRow()
.addComponents(
new MessageButton()
.setCustomId("claim")
.setLabel("اِسْتِلَام")
.setStyle("SUCCESS"),
new MessageButton()
.setCustomId("support_close")
.setLabel("إِغْلَاق")
.setStyle("SECONDARY"),
new MessageButton()
.setCustomId("support_delete")
.setLabel("حَذْف")
.setStyle("DANGER"))

const secondbutton = new MessageActionRow()
.addComponents(
new MessageButton()
.setCustomId("support_open")
.setLabel("فَتْح")
.setStyle("SUCCESS"),
new MessageButton()
.setCustomId("support_delete")
.setLabel("حَذْف")
.setStyle("DANGER"))

//══════[ Code ]══════

client.on("interactionCreate", async interaction => {

if (interaction.isButton()) {

const guild = client.guilds.cache.get("983735284984315924")
const category = guild.channels.cache.get("1298299863473328200")
const closedcategory = guild.channels.cache.get("1321197615991492640")
const support = guild.roles.cache.get("1212907601176694864")
const deleter = "988080607605170176"

const TKTCHANNELNAME = `＠ㆍ${interaction.user.username}`

//════════════════════

if (interaction.customId === "support_create") {

if (!guild.members.cache.has(interaction.user.id)) {
return interaction.reply({
content: `**
- لِفَتْحِ تَذْكِرَةٍ، نُرَحِّبُ بِانْضِمَامِكَ إِلَى الخَادِمِ أَوَّلًا.
  - https://discord.gg/pzXwrY6mYR **
** **`,
ephemeral: true })}

const authorId = interaction.user.id

const ticketDataS = JSON.parse(fs.readFileSync("./━━━━━━━━━━━━━━━/Database/TKT1.json", "utf-8"))

const existingTicket = ticketDataS.find(ticket => ticket.userId === authorId && ticket.open)

if (existingTicket) return interaction.reply({
content: `**<:i:${i.emoji.ticket}> ㆍ <#${existingTicket.channelId}> ㆍ تَمَّ إِنْشَاءُ التَّذْكِرَةِ بِالفِعْلِ**`,
ephemeral: true })

const TKTCHANNEL = await guild.channels.create(TKTCHANNELNAME, {
parent: category,
permissionOverwrites: [
{
id: guild.roles.everyone.id,
deny: ["VIEW_CHANNEL"]
},
{
id: interaction.user.id,
allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
},
{
id: support.id,
allow: ["VIEW_CHANNEL"]
}
]
})

const ticketMessage = await TKTCHANNEL.send({
content: `**
<:i:${i.emoji.ticket}> ㆍ ||@everyone|| ㆍ ${interaction.user}**
** **`,
components: [firstbutton]})

let ticketData = []
try {
const ticketDataString = fs.readFileSync("./━━━━━━━━━━━━━━━/Database/TKT1.json", "utf-8")
ticketData = JSON.parse(ticketDataString)
} catch (error) { return; }

const newTicket = {
userId: interaction.user.id,
channelId: TKTCHANNEL.id,
open: true }

if (Array.isArray(ticketData)) {
ticketData.push(newTicket)
} else {
ticketData = [newTicket]}

await interaction.reply({
content: `**<:i:${i.emoji.ticket}> ㆍ ${TKTCHANNEL} ㆍ تَمَّ إِنْشَاءُ التَّذْكِرَةِ**`,
ephemeral: true })

fs.writeFileSync("./━━━━━━━━━━━━━━━/Database/TKT1.json", JSON.stringify(ticketData))}

//════════════════════

if (interaction.customId === "support_close") {

const ticketData = JSON.parse(fs.readFileSync("./━━━━━━━━━━━━━━━/Database/TKT1.json", "utf-8"))

const channelId = interaction.channel.id

const ticketIndex = ticketData.findIndex(ticket => ticket.channelId === channelId)

if (!ticketData[ticketIndex].open === true) return interaction.reply({
content: `**<:i:${i.emoji.close}> ㆍ تَمَّ إِغْلَاقُ التَّذْكِرَةِ بِالفِعْلِ**`,
ephemeral: true })

if (ticketIndex !== -1) {

await interaction.reply({ components: [secondbutton] })

ticketData[ticketIndex].open = false

interaction.channel.setParent(closedcategory)

interaction.channel.permissionOverwrites.set([
{
id: interaction.guildId,
deny: ["VIEW_CHANNEL"]
},
{
id: ticketData[ticketIndex].userId,
deny: ["VIEW_CHANNEL", "SEND_MESSAGES"]
},
{
id: support,
allow: ["VIEW_CHANNEL"]
}
])

interaction.channel.permissionOverwrites.edit(ticketData[ticketIndex].userId, { VIEW_CHANNEL: false })

fs.writeFileSync("./━━━━━━━━━━━━━━━/Database/TKT1.json", JSON.stringify(ticketData))}}

//════════════════════

if (interaction.customId === "support_open") {

const ticketData = JSON.parse(fs.readFileSync("./━━━━━━━━━━━━━━━/Database/TKT1.json", "utf-8"))

const ticketIndex = ticketData.findIndex(ticket => ticket.channelId === interaction.channel.id)

if (ticketData[ticketIndex].open) return interaction.reply({
content: `**<:i:${i.emoji.open}> ㆍ تَمَّ فَتْحُ التَّذْكِرَةِ بِالفِعْلِ**`,
ephemeral: true })

interaction.channel.setParent(category)

interaction.channel.permissionOverwrites.set([
{
id: interaction.guildId,
deny: ["VIEW_CHANNEL"]
},
{
id: ticketData[ticketIndex].userId,
allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
},
{
id: support,
allow: ["VIEW_CHANNEL"]
}
])

await interaction.reply({ components: [firstbutton] })

ticketData[ticketIndex].open = true

fs.writeFileSync("./━━━━━━━━━━━━━━━/Database/TKT1.json", JSON.stringify(ticketData))}

//════════════════════

if (interaction.customId === "support_delete") {

if (!interaction.member.roles.cache.some(e => e.id === deleter)) return interaction.reply({ content: i.perm1, ephemeral: true })

const ticketData = JSON.parse(fs.readFileSync("./━━━━━━━━━━━━━━━/Database/TKT1.json", "utf-8"))

const channelId = interaction.channel.id

interaction.reply({
content: `**<:i:${i.emoji.load}> ㆍ سَيَتِمُّ حَذْفُ التَّذْكِرَةِ بَعْدَ خَمْسِ ثوانٍ**` })

setTimeout( async () => {

await interaction.channel.delete()

const index = ticketData.findIndex(ticket => ticket.channelId === channelId)

if (index !== -1) {

ticketData.splice(index, 1)

fs.writeFileSync("./━━━━━━━━━━━━━━━/Database/TKT1.json", JSON.stringify(ticketData))}}, 5000 )}

}})