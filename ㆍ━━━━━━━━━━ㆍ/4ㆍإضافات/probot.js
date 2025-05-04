//══════[ Package ]══════

const { MessageEmbed } = require("discord.js")

//══════[ Login ]══════

const client = require("../../index")

//══════[ Command ]══════

client.on("messageCreate", async (message) => {

if (message.author.id === "282859044593598464"/* || message.author.id === "932294839825997834"*/) {

const newMessage = {
content: message.content || "\u200B", 
embeds: message.embeds.map((embed) => new MessageEmbed(embed)),
files: message.attachments.map((attachment) => attachment)}

//await Promise.all([ message.delete(), message.channel.send(newMessage)])

await message.channel.send(newMessage)

await new Promise(resolve => setTimeout(resolve, 1000))

await message.delete()}

if (message.author.id === client.user.id && message.content.includes("type these numbers to confirm")) {

setTimeout(() => message.delete(), 10000 )}

if (message.author.id === client.user.id && message.content.includes("Cool down")) {
setTimeout(() => message.delete(), 2000 )}})