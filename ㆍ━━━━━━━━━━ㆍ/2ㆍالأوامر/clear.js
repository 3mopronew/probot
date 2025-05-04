//══════[ Package ]══════

const i = require("../../━━━━━━━━━━━━━━━/Database/config.js")

//══════[ Command ]══════

module.exports = {
name: "clear",
description: "ㆍ",
options: [
{
name: "الكمية",
description: "ㆍ",
type: 4,
required: true,
}],
integration_types: [0, 1],
contexts: [0],
async execute(client, interaction) {

if (!interaction.member.permissions.has("MANAGE_MESSAGES")) return interaction.reply({ content: i.perm1, ephemeral: true })

if (!interaction.guild.me.permissions.has("MANAGE_MESSAGES")) return interaction.reply({ content: i.perm2, ephemeral: true })

const amount = interaction.options.getInteger("الكمية")

if (amount < 1 || amount > 100) return interaction.reply({ content: i.error, ephemeral: true })

const deletedMessages = await interaction.channel.bulkDelete(amount, true)

return interaction.reply(`**<:i:${i.emoji.true}> ㆍ رِسَالَةٍ (\` ${deletedMessages.size} \`) تَمَّ مَسْحُ**`)

}}