//══════[ Package ]══════

const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js")

const i = require("../../━━━━━━━━━━━━━━━/Database/config.js")

//══════[ Login ]══════

const client = require("../../index")

//══════[ Modal ]══════

const { DiscordModal, ModalBuilder, ModalField } = require("discord-modal")

DiscordModal(client)

//══════[ Command ]══════

module.exports = {
name: "control",
description: "ㆍ",
integration_types: [0, 1],
contexts: [0],
async execute(client, interaction) {

interaction.reply({
components: [
new MessageActionRow()
.addComponents(
new MessageSelectMenu()
.setCustomId("select")
.setPlaceholder("مَرْكَزُ التَّحَكُّمِ وَالإِدَارَةِ المُتَقَدِّمَةِ")
.addOptions([
//════════════════════
{
label: "إِضَافَةُ رُتْبَةٍ",
value: "addroletouser",
emoji: `${i.emoji.add}`
},
{
label: "سَحْبُ رُتْبَةٍ",
value: "removerolefromuser",
emoji: `${i.emoji.remove}`
},
//════════════════════
{
label: "ضَــمُّ عُضْوٍ",
value: "addusertoticket",
emoji: `${i.emoji.ticket}`
},
{
label: "فَصْلُ عُضْوٍ",
value: "removeuserfromticket",
emoji: `${i.emoji.ticket}`
},
//════════════════════
{
label: "حَظْـرُ عُضْوٍ",
value: "banuser",
emoji: `${i.emoji.punishment}`
},
{
label: "فَكُّ ٱلْحَظْـرِ",
value: "unbanuser",
emoji: `${i.emoji.punishment}`
},
{
label: "فَكُّ ٱلْجَمِيعِ",
value: "unbanall",
emoji: `${i.emoji.punishment}`
},
//════════════════════
{
label: "إِغْلَاقُ ٱلْقَنَاةِ",
value: "closechannel",
emoji: `${i.emoji.close}`
},
{
label: "فَـتْـحُ ٱلْقَنَاةِ",
value: "openchannel",
emoji: `${i.emoji.open}`
},
{
label: "إِخْفَاءُ ٱلْقَنَاةِ",
value: "hidechannel",
emoji: `${i.emoji.hide}`
},
{
label: "إِظْهَارُ ٱلْقَنَاةِ",
value: "showchannel",
emoji: `${i.emoji.show}`
}
])),

new MessageActionRow()
.addComponents(
new MessageButton()
.setCustomId("premium")
.setLabel("الأَوَامِرُ الْمُمَيَّزَةُ")
.setStyle("SECONDARY")
.setEmoji(i.emoji.payment),
new MessageButton()
.setCustomId("developer")
.setLabel("개발자")
.setStyle("SECONDARY")
.setEmoji(i.emoji.other))],

ephemeral: true })

}}

//══════[ Action ]══════

client.on("interactionCreate", async interaction => {

if (interaction.isButton()) {

//════════════════════

if (interaction.customId === "premium") {

if (!i.premium.includes(interaction.user.id)) {
return interaction.reply({
content: `**<:i:${i.emoji.error}> ㆍ هٰذِهِ الْخِدْمَةُ مُتَاحَةٌ لِلْمُشْتَرِكِينَ فَقَطْ، يُرْجَى التَّوَاصُلُ مَعَ الدَّعْمِ لِمَعْرِفَةِ الْمَزِيدِ .**`,
components: [
new MessageActionRow()
.addComponents(
new MessageButton()
.setLabel("رَابِطُ ٱلدَّعْوَةِ")
.setStyle("LINK")
.setURL("https://discord.gg/pzXwrY6mYR"))],
ephemeral: true })}

if (interaction.user.id !== interaction.guild.owner.id) {
return interaction.reply({
content: `**<:i:${i.emoji.error}> ㆍ هٰذِهِ الْخِدْمَةُ مُتَاحَةٌ لِلْمُشْتَرِكِينَ فَقَطْ، يُرْجَى التَّوَاصُلُ مَعَ الدَّعْمِ لِمَعْرِفَةِ الْمَزِيدِ .**`,
components: [
new MessageActionRow()
.addComponents(
new MessageButton()
.setLabel("رَابِطُ ٱلدَّعْوَةِ")
.setStyle("LINK")
.setURL("https://discord.gg/pzXwrY6mYR"))],
ephemeral: true })}

interaction.reply({
components: [
new MessageActionRow()
.addComponents(
new MessageButton()
.setCustomId("antibot")
.setLabel("مُكَافَحَةُ ٱلْبُوتَات")
.setStyle("PRIMARY"),
new MessageButton()
.setCustomId("setline")
.setLabel("تَحْدِيدُ ٱلْخَطِّ")
.setStyle("PRIMARY"),
new MessageButton()
.setCustomId("autolinechannel")
.setLabel("قَنَوَاتُ ٱلْخَطِّ")
.setStyle("PRIMARY"),
new MessageButton()
.setCustomId("setreact")
.setLabel("تَحْدِيدُ ٱلرِّيَأَكْشَنْ")
.setStyle("PRIMARY"),
new MessageButton()
.setCustomId("autoreactchannel")
.setLabel("قَنَوَاتُ ٱلرِّيَأَكْشَنْ")
.setStyle("PRIMARY"))],
ephemeral: true })}

//════════════════════

if (interaction.customId === "developer") {

if (!i.developer.includes(interaction.user.id)) {
return interaction.reply({
content: `**<:i:${i.emoji.error}> ㆍ هٰذِهِ ٱلْخِدْمَةُ مُتَاحَةٌ لِفَرِيقِ ٱلْمُطَوِّرِينَ فَقَطْ .**`,
ephemeral: true })}

interaction.reply({
components: [
new MessageActionRow()
.addComponents(
new MessageButton()
.setCustomId("theme")
.setLabel("Theme")
.setStyle("PRIMARY"),
new MessageButton()
.setCustomId("replace")
.setLabel("Replace")
.setStyle("PRIMARY"),
new MessageButton()
.setCustomId("resend")
.setLabel("Resend")
.setStyle("PRIMARY"),
new MessageButton()
.setCustomId("guide")
.setLabel("Guide")
.setStyle("PRIMARY"))],
ephemeral: true })}

}})