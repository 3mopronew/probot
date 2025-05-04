require("events").EventEmitter.defaultMaxListeners = 9999

//setTimeout(() => console.log("✅ ㆍ Started"), 2000 )

//══════[ Package ]══════

const { Client, Collection } = require("discord.js")

const { REST } = require("@discordjs/rest")

const { Routes } = require("discord-api-types/v9")

const fs = require("fs")

const { joinVoiceChannel } = require("@discordjs/voice")

//══════[ BOT ]══════

const tokens = [
process.env.BOT01,
//process.env.BOT02
]

function createBot(token) {

const client = new Client({ intents: 32767 })

module.exports = client

client.commands = new Collection()

client.events = new Collection()

client.slashCommands = new Collection()

//══════════════════════════════════════════════════

fs.readdirSync("./━━━━━━━━━━━━━━━").forEach((folder) => {

const eventFiles = fs.readdirSync(`./━━━━━━━━━━━━━━━/${folder}`).filter(file => file.endsWith(".js"))

for (const file of eventFiles) {

const event = require(`./━━━━━━━━━━━━━━━/${folder}/${file}`)

if (event.once) {

client.once(event.name, (...args) => event.execute(client, ...args))

} else {

client.on(event.name, (...args) => event.execute(client, ...args))}}})

//══════════════════════════════════════════════════
/*
fs.readdirSync("./ㆍ━━━━━━━━━━ㆍ").forEach((folder) => {

const commandFiles = fs.readdirSync(`./ㆍ━━━━━━━━━━ㆍ/${folder}`).filter(file => file.endsWith(".js"))

for (const file of commandFiles) {

const command = require(`./ㆍ━━━━━━━━━━ㆍ/${folder}/${file}`)

if (command.name) {

client.slashCommands.set(command.name, command)}}})
*/
//══════════════════════════════════════════════════

const excludedFolders = ["5ㆍالسوق"]

if (token === process.env.BOT01) {

fs.readdirSync("./ㆍ━━━━━━━━━━ㆍ").forEach((folder) => {

const commandFiles = fs.readdirSync(`./ㆍ━━━━━━━━━━ㆍ/${folder}`).filter(file => file.endsWith(".js"))

for (const file of commandFiles) {

const command = require(`./ㆍ━━━━━━━━━━ㆍ/${folder}/${file}`)

if (command.name) {

client.slashCommands.set(command.name, command)}}})

} else {

fs.readdirSync("./ㆍ━━━━━━━━━━ㆍ").forEach((folder) => {

if (!excludedFolders.includes(folder)) {

const commandFiles = fs.readdirSync(`./ㆍ━━━━━━━━━━ㆍ/${folder}`).filter(file => file.endsWith(".js"))

for (const file of commandFiles) {

const command = require(`./ㆍ━━━━━━━━━━ㆍ/${folder}/${file}`)

if (command.name) {

client.slashCommands.set(command.name, command)}}}})}

//══════════════════════════════════════════════════

const commands = client.slashCommands.map(({ execute, ...data }) => data)

const rest = new REST({ version: "10" }).setToken(token)

client.login(token).then(() => {

const botId = client.user.id

rest.put(Routes.applicationCommands(botId), { body: commands })

.then(() => console.log(`✅ ㆍ ${client.user.tag} ㆍ ${botId}`))

.catch(error => console.error(`❌ ㆍ ${botId}`, error))})

.catch(() => console.error(`❌ ㆍ ${token}`))}

tokens.forEach(token => createBot(token))

//══════════════════════════════════════════════════

const client = new Client({ intents: 32767 })

client.login(process.env.BOT01)

client.on("ready", () => {
client.user.setStatus("invisible")
setInterval(() => {
try {
const channel = client.channels.cache.get("1227884372678541352")
if (!channel) return;
joinVoiceChannel({
channelId: channel.id,
guildId: "983735284984315924",
selfMute: true,
selfDeaf: false,
adapterCreator: channel.guild.voiceAdapterCreator })
} catch (error) { return; }}, 1000 )})

//══════════════════════════════════════════════════

const amir = new Client({ intents: 32767 })

amir.login(process.env.BOT03)

amir.on("ready", () => {

console.log(`✅ ㆍ ${amir.user.tag}`)

amir.user.setStatus("idle")})