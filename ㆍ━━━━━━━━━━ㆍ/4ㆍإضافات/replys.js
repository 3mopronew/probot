//══════[ Package ]══════

const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js")

const i = require("../../━━━━━━━━━━━━━━━/Database/config.js")

//══════[ Login ]══════

const client = require("../../index")

//══════[ Action ]══════

client.on("guildMemberAdd", message => {
if (message.guild.id === "983735284984315924") {
let channel = client.channels.cache.get("1320682749484597258")
channel.send("a1").then(msg => setTimeout(() => msg.delete(), 2000 ))}})
/*
client.on("messageCreate", async message => {
if (message.author.id === "1168902518537977996") {
if (message.content.includes("**")) {
const thread = await message.startThread({
name: "الطريقة :", //autoArchiveDuration: 1440
})}}})
*/
//════════════════════

client.on("messageCreate", message => {

if (message.channel.type === "dm" || message.author.bot) return;

// Auto Line

if (i.autoline.includes(message.channel.id)) {
message.channel.send(i.line)}

// Review

if (message.channel.id === "1222566805479096391") {
message.react(i.emoji.review)}

// Suggestion

if (message.channel.id === "1111299380541132942") {
message.react(i.emoji.true)
message.react(i.emoji.false)}

//════════════════════

if (message.content === "<@1142049267591163954>") {
message.reply("**🦂 احترس عقربه تلدغ ⚠️**")}

if (message.content === "حبق") {
let reply = [
"**ألوان <:i:1184891594667720745>**",
"**انت مش مزبوط ياض <:i:1184891660203733133>**"
]
let an = reply[Math.floor(Math.random() * reply.length)]
message.reply(an)}

//════════════════════

if (message.content === i.prefix + "line") {
if (!message.member.permissions.has("MANAGE_MESSAGES")) return;
message.delete()
message.channel.send(i.line)}

if (message.content === i.prefix + "done") {
if (!message.member.permissions.has("MANAGE_MESSAGES")) return;
message.delete()
message.channel.send(`**
<:i:${i.emoji.review}> ㆍ [𝗖𝗵𝗮𝗻𝗻𝗲𝗹](https://cdn.discordapp.com/attachments/1251203377761615912/1326622017990037605/ZxNNTtZF.png) ㆍ <#1222566805479096391>**
** **`)
message.channel.send(i.line)}

})

//════════════════════

client.on("messageCreate", message => {

if (message.author.id === "1168902518537977996") {

if (message.content.includes("قام بتحويل")) return message.channel.send(i.line)
if (message.content.includes("has transferred")) return message.channel.send(i.line)
if (message.content.includes("Deleting messages")) return message.delete()}

if (message.content.includes(" ㆍ Joined ㆍ ") || message.content.includes(" ㆍ Leaved ㆍ ")) return message.channel.send(i.line)

setTimeout(() => message.content.includes("تَمَّ مَسْحُ") && message.delete(), 5000)

//════════════════════

if (message.content === "a1") {

i.activechnls.forEach(ID => {

const channel = client.channels.cache.get(ID)

if (channel) {

channel.send("** **")

.then(message => message.delete())}})}

})