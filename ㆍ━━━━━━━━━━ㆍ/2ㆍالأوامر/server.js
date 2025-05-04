//══════[ Package ]══════

const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")

const moment = require("moment")

const i = require("../../━━━━━━━━━━━━━━━/Database/config.js")

//══════[ Command ]══════

module.exports = {
name: "server",
description: "ㆍ",
integration_types: [0, 1],
contexts: [0],
async execute(client, interaction) {

const GUILDAVATAR = interaction.guild.iconURL({ dynamic: true, size: 4096 }) || "https://discord.com"
const GUILDBANNER = interaction.guild.bannerURL({ dynamic: true, size: 4096 }) || "https://discord.com"
const INTERACTIONAVATAR = interaction.user.avatarURL({ dynamic: true, size: 4096 })
const CREATTIME = moment(interaction.guild.createdTimestamp).format('DD/MM/YYYY hh:mm A')
const members = await interaction.guild.members.fetch()
const boostCount = interaction.guild.premiumSubscriptionCount

interaction.reply({
embeds: [
new MessageEmbed()
.setColor(i.color)
.setThumbnail(GUILDAVATAR)
.addFields(
{
name: "مَالِكُ ٱلْخَادِمِ :",
value: `<@${interaction.guild.ownerId}>`,
inline: true
},
{
name: "مُعَرِّفُ ٱلْخَادِمِ :",
value: `**\`\`\`
${interaction.guildId}
\`\`\`**`,
inline: true
},
{
name: "تَارِيخُ ٱلْإِنْشَاءِ :",
value: `**\`\`\`
${CREATTIME}
\`\`\`**`,
inline: true
},
{
name: "عَدَدُ ٱلْأَعْضَاءِ :",
value: `**\`\`\`
${interaction.guild.memberCount}
\`\`\`**`,
inline: true
},
{
name: "عَدَدُ ٱلْبُوتَات :",
value: `**\`\`\`
${members.filter(member => member.user.bot).size}
\`\`\`**`,
inline: true
},
{
name: "عَدَدُ ٱلْبَوْسْتَاتُ :",
value: `**\`\`\`
${boostCount}
\`\`\`**`,
inline: true
}
)
.setFooter({ text: `@${interaction.user.username} ㆍ تَمَّ ٱلطَّلَبِ بِوَاسِطَةِ`, iconURL: INTERACTIONAVATAR })
],
components: [
new MessageActionRow()
.addComponents(
new MessageButton()
.setLabel("صُورَةُ ٱلْخَادِمِ")
.setStyle("LINK")
.setURL(GUILDAVATAR)
.setDisabled(GUILDAVATAR === "https://discord.com"),
new MessageButton()
.setLabel("خَلْفِيَّةُ ٱلْخَادِمِ")
.setStyle("LINK")
.setURL(GUILDBANNER)
.setDisabled(GUILDBANNER === "https://discord.com"))
]
})

}}