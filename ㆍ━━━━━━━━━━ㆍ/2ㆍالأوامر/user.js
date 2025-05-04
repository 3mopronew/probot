//══════[ Package ]══════

const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")

const moment = require("moment")

const i = require("../../━━━━━━━━━━━━━━━/Database/config.js")

//══════[ Command ]══════

module.exports = {
name: "user",
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

const user = interaction.options.get("المستخدم")

await user.user.fetch()

const USERAVATAR = user.user.avatarURL({ dynamic: true, size: 4096 }) || "https://discord.com"
const USERBANNER = user.user.bannerURL({ dynamic: true, size: 4096 }) || "https://discord.com"
const INTERACTIONAVATAR = interaction.user.avatarURL({ dynamic: true, size: 4096 })
const JOINDISCORD = moment(user.user.createdAt).format('DD/MM/YYYY hh:mm A')
const JOINSERVER = moment(user.member.joinedAt).format('DD/MM/YYYY hh:mm A')

interaction.reply({
embeds: [
new MessageEmbed()
.setColor(i.color)
.setThumbnail(USERAVATAR)
.addFields(
{
name: "ٱسْمُ ٱلْمُسْتَخْدِمِ :",
value: `**\`\`\`
@${user.user.username}
\`\`\`**`,
inline: true
},
{
name: "مُعَرِّفُ ٱلْمُسْتَخْدِمِ :",
value: `**\`\`\`
${user.user.id}
\`\`\`**`,
inline: true
},
{
name: "تَارِيخُ ٱلْإِنْشَاءِ :",
value: `**\`\`\`
${JOINDISCORD}
\`\`\`**`,
inline: true
},
{
name: "تَارِيخُ ٱلِانْضِمَامِ :",
value: `**\`\`\`
${JOINSERVER}
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
.setLabel("عَرْضُ ٱلْحِسَابِ")
.setStyle("LINK")
.setURL(`https://discord.com/users/${user.user.id}`),
new MessageButton()
.setLabel("صُورَةُ ٱلْحِسَابِ")
.setStyle("LINK")
.setURL(USERAVATAR)
.setDisabled(USERAVATAR === "https://discord.com"),
new MessageButton()
.setLabel("خَلْفِيَّةُ ٱلْحِسَابِ")
.setStyle("LINK")
.setURL(USERBANNER)
.setDisabled(USERBANNER === "https://discord.com"))
]
})

}}