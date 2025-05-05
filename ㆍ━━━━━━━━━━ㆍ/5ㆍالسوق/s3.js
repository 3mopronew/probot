//══════[ Package ]══════

const { MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js")

const i = require("../../━━━━━━━━━━━━━━━/Database/config.js")

//══════[ Login ]══════

const client = require("../../index")

//══════[ Command ]══════

module.exports = {
name: "s3",
description: "ㆍ",
integration_types: [0, 1],
contexts: [0, 1, 2],
async execute(client, interaction) {

const msg = {
components: [
new MessageActionRow()
.addComponents(
new MessageSelectMenu()
.setCustomId("select")
.setPlaceholder("مَجْمُوعَةُ خَدَمَاتِ ٱلسِّيلْف بُوت")
.addOptions([
{
label: "ٱلتَّلْڤِيل",
description: "تَرْقِيَةُ الحِسَابِ إِلَى مُسْتَوًى ١٠٠ فِي ٱلْبْرُوبُوت",
value: "spam",
emoji: i.emoji.toxic
},
{
label: "ٱلتَّأْفِيك",
description: "تَثْبِيتُ الحِسَابِ فِي القَنَاةِ الصَّوْتِيَّةِ عَلَى مَدَارِ ٢٤ سَاعَةٍ",
value: "afk",
emoji: i.emoji.toxic
},
{
label: "الأُونْلَاين",
description: "إِبْقَاءُ الحِسَابِ فِي وَضْعِ الأُونْلَايْن عَلَى مَدَارِ ٢٤ سَاعَةٍ",
value: "status",
emoji: i.emoji.toxic
},
{
label: "حَالَةُ لَعِبٍ",
description: "إِنْشَاءُ حَالَةٍ مُخَصَّصَةٍ — PLAYING, LISTENING, WATCHING",
value: "rpc",
emoji: i.emoji.toxic
}
]))]}

if (interaction.guild) { interaction.channel.send(msg)} else { interaction.reply(msg)}

}}