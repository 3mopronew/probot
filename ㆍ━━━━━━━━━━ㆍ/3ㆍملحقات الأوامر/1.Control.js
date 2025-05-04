//══════[ Package ]══════

const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js")

const i = require("../../━━━━━━━━━━━━━━━/Database/config.js")

//══════[ Login ]══════

const client = require("../../index")

//══════[ Modal ]══════

const { DiscordModal, ModalBuilder, ModalField } = require("discord-modal")

DiscordModal(client)

//══════[ Action ]══════

client.on("interactionCreate", async interaction => {

if (interaction.isSelectMenu()) {

const everyone = interaction.guild.roles.everyone

//════════════════════

if (interaction.values == "banuser") {

if (!interaction.member.permissions.has("BAN_MEMBERS")) return interaction.reply({ content: i.perm1, ephemeral: true })

if (!interaction.guild.me.permissions.has("BAN_MEMBERS")) return interaction.reply({ content: i.perm2, ephemeral: true })

const modal = new ModalBuilder()
.setCustomId("action_banuser")
.setTitle("نَمُوذَجُ إِدْخَالِ ٱلْبَيَانَاتٍ")
.addComponents(
new ModalField()
.setCustomId("q1")
.setLabel("مُعَرَّفُ ٱلْعُضْوِ")
.setStyle("SHORT")
.setRequired(true))
client.modal.open(interaction, modal)}

//════════════════════

if (interaction.values == "unbanuser") {

if (!interaction.member.permissions.has("BAN_MEMBERS")) return interaction.reply({ content: i.perm1, ephemeral: true })

if (!interaction.guild.me.permissions.has("BAN_MEMBERS")) return interaction.reply({ content: i.perm2, ephemeral: true })

const modal = new ModalBuilder()
.setCustomId("action_unbanuser")
.setTitle("نَمُوذَجُ إِدْخَالِ ٱلْبَيَانَاتٍ")
.addComponents(
new ModalField()
.setCustomId("q1")
.setLabel("مُعَرَّفُ ٱلْعُضْوِ")
.setStyle("SHORT")
.setRequired(true))
client.modal.open(interaction, modal)}

//════════════════════

if (interaction.values == "unbanall") {

const GUILD = client.guilds.cache.get(interaction.guild.id)

interaction.guild.bans.fetch()

.then(bans => bans.forEach(ban => GUILD.members.unban(ban.user.id)))

.then(() => interaction.reply(`**<:i:${i.emoji.negative}> ㆍ تَمَّ رَفْعُ ٱلْحَظْرِ عَنْ جَمِيعِ ٱلْأَعْضَاءِ فِي ٱلْخَادِمِ .**`))

.catch(() => interaction.reply({ content: i.error, ephemeral: true }))}

//════════════════════

if (interaction.values == "addusertoticket") {

if (!interaction.member.permissions.has("MANAGE_CHANNELS")) return interaction.reply({ content: i.perm1, ephemeral: true })

if (!interaction.guild.me.permissions.has("MANAGE_CHANNELS")) return interaction.reply({ content: i.perm2, ephemeral: true })

const modal = new ModalBuilder()
.setCustomId("action_addusertoticket")
.setTitle("نَمُوذَجُ إِدْخَالِ ٱلْبَيَانَاتٍ")
.addComponents(
new ModalField()
.setCustomId("q1")
.setLabel("مُعَرَّفُ ٱلْعُضْوِ")
.setStyle("SHORT")
.setRequired(true))
client.modal.open(interaction, modal)}

//════════════════════

if (interaction.values == "removeuserfromticket") {

if (!interaction.member.permissions.has("MANAGE_CHANNELS")) return interaction.reply({ content: i.perm1, ephemeral: true })

if (!interaction.guild.me.permissions.has("MANAGE_CHANNELS")) return interaction.reply({ content: i.perm2, ephemeral: true })

const modal = new ModalBuilder()
.setCustomId("action_removeuserfromticket")
.setTitle("نَمُوذَجُ إِدْخَالِ ٱلْبَيَانَاتٍ")
.addComponents(
new ModalField()
.setCustomId("q1")
.setLabel("مُعَرَّفُ ٱلْعُضْوِ")
.setStyle("SHORT")
.setRequired(true))
client.modal.open(interaction, modal)}

//════════════════════

if (interaction.values == "addroletouser") {

if (!interaction.member.permissions.has("MANAGE_ROLES")) return interaction.reply({ content: i.perm1, ephemeral: true })

if (!interaction.guild.me.permissions.has("MANAGE_ROLES")) return interaction.reply({ content: i.perm2, ephemeral: true })

const modal = new ModalBuilder()
.setCustomId("action_addroletouser")
.setTitle("نَمُوذَجُ إِدْخَالِ ٱلْبَيَانَاتٍ")
.addComponents(
new ModalField()
.setCustomId("q1")
.setLabel("مُعَرَّفُ ٱلْعُضْوِ")
.setStyle("SHORT")
.setRequired(true),
new ModalField()
.setCustomId("q2")
.setLabel("مُعَرَّفُ ٱلرُّتْبَةِ")
.setStyle("SHORT")
.setRequired(true))
client.modal.open(interaction, modal)}

//════════════════════

if (interaction.values == "removerolefromuser") {

if (!interaction.member.permissions.has("MANAGE_ROLES")) return interaction.reply({ content: i.perm1, ephemeral: true })

if (!interaction.guild.me.permissions.has("MANAGE_ROLES")) return interaction.reply({ content: i.perm2, ephemeral: true })

const modal = new ModalBuilder()
.setCustomId("action_removerolefromuser")
.setTitle("نَمُوذَجُ إِدْخَالِ ٱلْبَيَانَاتٍ")
.addComponents(
new ModalField()
.setCustomId("q1")
.setLabel("مُعَرَّفُ ٱلْعُضْوِ")
.setStyle("SHORT")
.setRequired(true),
new ModalField()
.setCustomId("q2")
.setLabel("مُعَرَّفُ ٱلرُّتْبَةِ")
.setStyle("SHORT")
.setRequired(true))
client.modal.open(interaction, modal)}

//════════════════════

if (interaction.values == "closechannel") {

if (!interaction.member.permissions.has("MANAGE_CHANNELS")) return interaction.reply({ content: i.perm1, ephemeral: true })

if (!interaction.guild.me.permissions.has("MANAGE_CHANNELS")) return interaction.reply({ content: i.perm2, ephemeral: true })

interaction.channel.permissionOverwrites.edit(everyone, { SEND_MESSAGES: false })

.then(() => interaction.reply(`**<:i:${i.emoji.close}> ㆍ ${interaction.channel} ㆍ تَمَّ إِغْلَاقُ ٱلْقَنَاةِ .**`))

.catch(() => interaction.reply({ content: i.error, ephemeral: true }))}

//════════════════════

if (interaction.values == "openchannel") {

if (!interaction.member.permissions.has("MANAGE_CHANNELS")) return interaction.reply({ content: i.perm1, ephemeral: true })

if (!interaction.guild.me.permissions.has("MANAGE_CHANNELS")) return interaction.reply({ content: i.perm2, ephemeral: true })

interaction.channel.permissionOverwrites.edit(everyone, { SEND_MESSAGES: true })

.then(() => interaction.reply(`**<:i:${i.emoji.open}> ㆍ ${interaction.channel} ㆍ تَمَّ فَتْحُ ٱلْقَنَاةِ .**`))

.catch(() => interaction.reply({ content: i.error, ephemeral: true }))}

//════════════════════

if (interaction.values == "hidechannel") {

if (!interaction.member.permissions.has("MANAGE_CHANNELS")) return interaction.reply({ content: i.perm1, ephemeral: true })

if (!interaction.guild.me.permissions.has("MANAGE_CHANNELS")) return interaction.reply({ content: i.perm2, ephemeral: true })

interaction.channel.permissionOverwrites.edit(everyone, { VIEW_CHANNEL: false })

.then(() => interaction.reply(`**<:i:${i.emoji.hide}> ㆍ ${interaction.channel} ㆍ تَمَّ إِخْفَاءُ ٱلْقَنَاةِ .**`))

.catch(() => interaction.reply({ content: i.error, ephemeral: true }))}

//════════════════════

if (interaction.values == "showchannel") {

if (!interaction.member.permissions.has("MANAGE_CHANNELS")) return interaction.reply({ content: i.perm1, ephemeral: true })

if (!interaction.guild.me.permissions.has("MANAGE_CHANNELS")) return interaction.reply({ content: i.perm2, ephemeral: true })

interaction.channel.permissionOverwrites.edit(everyone, { VIEW_CHANNEL: true })

.then(() => interaction.reply(`**<:i:${i.emoji.show}> ㆍ ${interaction.channel} ㆍ تَمَّ إِظْهَارُ ٱلْقَنَاةِ .**`))

.catch(() => interaction.reply({ content: i.error, ephemeral: true }))}

}})

//══════[ الرولات ]══════

client.on("modalSubmitInteraction", async interaction => {

const q1 = interaction.fields.getTextInputValue("q1")
const q2 = interaction.fields.getTextInputValue("q2")

const member = interaction.guild.members.cache.get(q1)
const role = interaction.guild.roles.cache.get(q2)

if (interaction.member.roles.highest.comparePositionTo(role) < 0) {
interaction.reply({
content: `**<:i:${i.emoji.error}> ㆍ لَا يُمْكِنُ تَعْدِيلُ رُتَبِ عُضْوٍ أَعْلَى مِنْكَ .**`,
ephemeral: true })}

//════════════════════

if (interaction.customId === "action_addroletouser") {

await member.roles.add(role)

.then(() => interaction.reply(`**<:i:${i.emoji.add}> ㆍ ${role.name} ㆍ تَمَّتْ إِضَافَةُ ٱلرُّتْبَةِ ㆍ ${member} .**`))

.catch(() => interaction.reply({ content: i.error, ephemeral: true }))}

//════════════════════

if (interaction.customId === "action_removerolefromuser") {

await member.roles.remove(role)

.then(() => interaction.reply(`**<:i:${i.emoji.remove}> ㆍ ${role.name} ㆍ تَمَّتْ إِزَالَةُ ٱلرُّتْبَةِ ㆍ ${member} .**`))

.catch(() => interaction.reply({ content: i.error, ephemeral: true }))}

})

//══════[ الحظر ]══════

client.on("modalSubmitInteraction", async interaction => {

const q1 = interaction.fields.getTextInputValue("q1")

//════════════════════

if (interaction.customId === "action_banuser") {

interaction.guild.members.ban(q1)

.then(() => interaction.reply(`**<:i:${i.emoji.add}> ㆍ <@${q1}> ㆍ تَمَّ حَظْرُ ٱلْعُضْوِ مِنَ ٱلْخَادِمِ .**`))

.catch(() => interaction.reply({ content: i.error, ephemeral: true }))}

//════════════════════

if (interaction.customId === "action_unbanuser") {

interaction.guild.members.unban(q1)

.then(() => interaction.reply(`**<:i:${i.emoji.remove}> ㆍ <@${q1}> ㆍ تَمَّ رَفْعُ ٱلْحَظْرِ عَنِ ٱلْعُضْوِ .**`))

.catch(() => interaction.reply({ content: i.error, ephemeral: true }))}

})

//══════[ التذاكر ]══════

client.on("modalSubmitInteraction", async interaction => {

const q1 = interaction.fields.getTextInputValue("q1")

//════════════════════

if (interaction.customId === "action_addusertoticket") {

interaction.channel.permissionOverwrites.edit(q1, { VIEW_CHANNEL: true })

.then(() => interaction.reply(`**<:i:${i.emoji.add}> ㆍ <@${q1}> ㆍ تَمَّتِ ٱلْإِضَافَةُ إِلَى ٱلتَّذْكِرَةِ .**`))

.catch(() => interaction.reply({ content: i.error, ephemeral: true }))}

//════════════════════

if (interaction.customId === "action_removeuserfromticket") {

interaction.channel.permissionOverwrites.delete(q1)

.then(() => interaction.reply(`**<:i:${i.emoji.remove}> ㆍ <@${q1}> ㆍ تَمَّتِ ٱلْإِزَالَةُ مِنَ ٱلتَّذْكِرَةِ .**`))

.catch(() => interaction.reply({ content: i.error, ephemeral: true }))}

})