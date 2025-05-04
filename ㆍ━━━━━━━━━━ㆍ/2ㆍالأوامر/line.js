//══════[ Package ]══════

const db = require("pro.db")

const i = require("../../━━━━━━━━━━━━━━━/Database/config.js")

//══════[ Command ]══════

module.exports = {
name: "line",
description: "ㆍ",
integration_types: [0, 1],
contexts: [0],
async execute(client, interaction) {

if (!interaction.member.permissions.has("MANAGE_MESSAGES")) return interaction.reply({ content: i.perm1, ephemeral: true })

if (!interaction.guild.me.permissions.has("MANAGE_MESSAGES")) return interaction.reply({ content: i.perm2, ephemeral: true })

const LINE = db.get(`LINE.${interaction.guild.id}`)

if (!LINE) return interaction.reply({ content: i.error, ephemeral: true })

if (LINE) {

interaction.reply({ content: i.done, ephemeral: true })

interaction.channel.send({ content: LINE })}

}}