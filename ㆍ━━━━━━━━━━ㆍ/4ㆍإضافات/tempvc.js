//══════[ Package ]══════

const { Database } = require("st.db")

//══════[ Login ]══════

const client = require("../../index")

//══════[ Command ]══════

const DATA = new Database("./━━━━━━━━━━━━━━━/Database/TEMPVC.json")

client.on("voiceStateUpdate", async (OLD, NEW) => {

if (NEW.channelId !== null && NEW.channelId === "1227884372678541352" && NEW.member.id !== client.user.id) {

NEW.guild.channels.create(`＠ㆍ${NEW.member.user.username}`, {
permissionOverwrites: [
{
id: NEW.member.id,
allow: [
"MANAGE_CHANNELS",
"MUTE_MEMBERS",
"DEAFEN_MEMBERS",
"MOVE_MEMBERS"]
},
{
id: NEW.guild.id,
deny: ["SEND_MESSAGES"]
},
],
parent: "1299064827079163914",
type: 2 })
.then( async (channeltemp) => {
await NEW.setChannel(channeltemp)
await DATA.set(channeltemp.id, NEW.member.id)})}

if (OLD.channelId !== null && DATA.has(OLD.channelId)) {

if (OLD.channel.members.filter((x) => !x.user.bot).size === 0) {

let channel = OLD.guild.channels.cache.get(OLD.channelId)
await channel.delete()
await DATA.delete(OLD.channelId)}}})