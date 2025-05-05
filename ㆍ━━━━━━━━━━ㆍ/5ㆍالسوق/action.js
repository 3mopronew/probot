//══════[ Package ]══════

const { MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js")

const i = require("../../━━━━━━━━━━━━━━━/Database/config.js")

//══════[ Login ]══════

const client = require("../../index")

//══════[ Modal ]══════

const { DiscordModal, ModalBuilder, ModalField } = require("discord-modal")

DiscordModal(client)

//══════[ Action ]══════

client.on("interactionCreate", async interaction => {

if (interaction.isButton()) {

//════════════════════

// HypeSquad Bravery

if (interaction.customId === "bravery") {
interaction.reply({
components: [
new MessageActionRow()
.addComponents(
new MessageButton()
.setCustomId("order_modal_bravery")
.setLabel("بَدْءُ ٱلطَّلَبِ")
.setStyle("SECONDARY")
.setEmoji(i.emoji.ticket),
new MessageButton()
.setCustomId("price_100k")
.setLabel("طُرُقُ ٱلدَّفْعِ")
.setStyle("SECONDARY")
.setEmoji(i.emoji.payment))],
ephemeral: true })}

//════════════════════

// HypeSquad Brilliance

if (interaction.customId === "brilliance") {
interaction.reply({
components: [
new MessageActionRow()
.addComponents(
new MessageButton()
.setCustomId("order_modal_brilliance")
.setLabel("بَدْءُ ٱلطَّلَبِ")
.setStyle("SECONDARY")
.setEmoji(i.emoji.ticket),
new MessageButton()
.setCustomId("price_100k")
.setLabel("طُرُقُ ٱلدَّفْعِ")
.setStyle("SECONDARY")
.setEmoji(i.emoji.payment))],
ephemeral: true })}

//════════════════════

// HypeSquad Balance

if (interaction.customId === "balance") {
interaction.reply({
components: [
new MessageActionRow()
.addComponents(
new MessageButton()
.setCustomId("order_modal_balance")
.setLabel("بَدْءُ ٱلطَّلَبِ")
.setStyle("SECONDARY")
.setEmoji(i.emoji.ticket),
new MessageButton()
.setCustomId("price_100k")
.setLabel("طُرُقُ ٱلدَّفْعِ")
.setStyle("SECONDARY")
.setEmoji(i.emoji.payment))],
ephemeral: true })}

//════════════════════

// Completed a Quest

if (interaction.customId === "completedaquest") {
interaction.reply({
components: [
new MessageActionRow()
.addComponents(
new MessageButton()
.setCustomId("order_modal_completedaquest")
.setLabel("بَدْءُ ٱلطَّلَبِ")
.setStyle("SECONDARY")
.setEmoji(i.emoji.ticket),
new MessageButton()
.setCustomId("price_1.6m")
.setLabel("طُرُقُ ٱلدَّفْعِ")
.setStyle("SECONDARY")
.setEmoji(i.emoji.payment))],
ephemeral: true })}

//════════════════════

// Active Developer

if (interaction.customId === "activedeveloper") {
interaction.reply({
content: `**
-# [\` 1 \`] ㆍ ( 2FA ) فَعِّلْ مِيْزَةَ ٱلتَّحَقُّقِ بِخُطُوَتَيْنِ

-# [\` 2 \`] ㆍ <@893609188016668712> أَرْسِلْ طَلَبَ صَدَاقَةٍ إِلَىٰ

-# [\` 3 \`] ㆍ ٱدْخُلْ إِلَىٰ [سِيرْفَر ٱلتَّفْعِيلِ](https://discord.gg/8KuXQngQRZ)

-# [\` 4 \`] ㆍ ٱنْتَظِرْ حَتَّىٰ تَصِلَكَ رِسَالَةٌ عَلَىٰ ٱلْبريدِ ٱلْإِلِكْتْرُونِيِّ

-# [\` 5 \`] ㆍ Accept Invite ٱفْتَحْ ٱلرِّسَالَةَ وَٱنْقُرْ عَلَىٰ

-# [\` 6 \`] ㆍ ٱدْخُلْ إِلَىٰ [مَوْقِعِ ٱسْتِلَامِ ٱلشَّارَةِ](<https://discord.com/developers/active-developer>)

-# [\` 7 \`] ㆍ اِمْلَأْ ٱلْبَيَانَاتَ، ثُمَّ ٱضْغَطْ عَلَىٰ ٱلزِّرِّ فِي ٱلْأَسْفَلِ كَمَا فِي [ٱلصُّورَةِ](https://cdn.discordapp.com/attachments/1251203377761615912/1360689557083000872/gLv4kjSq.png) **
** **`,
components: [
new MessageActionRow()
.addComponents(
new MessageButton()
.setCustomId("support_create")
.setLabel("فَتْحُ تَذْكِرَةٍ")
.setStyle("SECONDARY")
.setEmoji(i.emoji.ticket),
new MessageButton()
.setCustomId("price_2m")
.setLabel("طُرُقُ ٱلدَّفْعِ")
.setStyle("SECONDARY")
.setEmoji(i.emoji.payment))],
ephemeral: true })}

//════════════════════

// Supports Commands

if (interaction.customId === "supportscommands") {
interaction.reply({
components: [
new MessageActionRow()
.addComponents(
new MessageButton()
.setCustomId("order_modal_supportscommands")
.setLabel("بَدْءُ ٱلطَّلَبِ")
.setStyle("SECONDARY")
.setEmoji(i.emoji.ticket),
new MessageButton()
.setCustomId("price_1.4m")
.setLabel("طُرُقُ ٱلدَّفْعِ")
.setStyle("SECONDARY")
.setEmoji(i.emoji.payment))],
ephemeral: true })}

//════════════════════

// Uses Automod

if (interaction.customId === "usesautomod") {
interaction.reply({
components: [
new MessageActionRow()
.addComponents(
new MessageButton()
.setCustomId("order_modal_usesautomod")
.setLabel("بَدْءُ ٱلطَّلَبِ")
.setStyle("SECONDARY")
.setEmoji(i.emoji.ticket),
new MessageButton()
.setCustomId("price_2.6m")
.setLabel("طُرُقُ ٱلدَّفْعِ")
.setStyle("SECONDARY")
.setEmoji(i.emoji.payment))],
ephemeral: true })}

}})

//════════════════════

client.on("interactionCreate", async interaction => {

if (interaction.isSelectMenu()) {

//════════════════════

// Spam

if (interaction.values == "spam") {
interaction.reply({
content: `**
<:i:${i.emoji.info}> ㆍ [تَرْقِيَةُ الحِسَابِ إِلَى مُسْتَوًى ١٠٠ فِي ٱلْبْرُوبُوت](https://cdn.discordapp.com/attachments/1251203377761615912/1359164300920619250/vcVY8tNw.png)

<:i:${i.emoji.rule}> ㆍ يُرْجَى إِجْرَاءُ ٱلتَّحْوِيلِ بَعْدَ إِرْسَالِ ٱلطَّلَبِ

<:i:${i.emoji.error}> ㆍ يَسْتَمِرُّ ٱلِاشْتِرَاكُ لِمُدَّةِ شَهْرٍ وَاحدٍ فَقَطْ**
** **`,
components: [
new MessageActionRow()
.addComponents(
new MessageButton()
.setCustomId("order_modal_spam")
.setLabel("بَدْءُ ٱلطَّلَبِ")
.setStyle("SECONDARY")
.setEmoji(i.emoji.ticket),
new MessageButton()
.setCustomId("price_1.3m")
.setLabel("طُرُقُ ٱلدَّفْعِ")
.setStyle("SECONDARY")
.setEmoji(i.emoji.payment))],
ephemeral: true })}

//════════════════════

// AFK

if (interaction.values == "afk") {
interaction.reply({
content: `**
<:i:${i.emoji.info}> ㆍ [تَثْبِيتُ الحِسَابِ فِي القَنَاةِ الصَّوْتِيَّةِ عَلَى مَدَارِ ٢٤ سَاعَةٍ](https://cdn.discordapp.com/attachments/1251203377761615912/1359304974315819198/uLGDt37l.png)

<:i:${i.emoji.rule}> ㆍ يُرْجَى إِجْرَاءُ ٱلتَّحْوِيلِ بَعْدَ إِرْسَالِ ٱلطَّلَبِ

<:i:${i.emoji.error}> ㆍ يَسْتَمِرُّ ٱلِاشْتِرَاكُ لِمُدَّةِ شَهْرٍ وَاحدٍ فَقَطْ**
** **`,
components: [
new MessageActionRow()
.addComponents(
new MessageButton()
.setCustomId("order_modal_afk")
.setLabel("بَدْءُ ٱلطَّلَبِ")
.setStyle("SECONDARY")
.setEmoji(i.emoji.ticket),
new MessageButton()
.setCustomId("price_800k")
.setLabel("طُرُقُ ٱلدَّفْعِ")
.setStyle("SECONDARY")
.setEmoji(i.emoji.payment))],
ephemeral: true })}

//════════════════════

// Status

if (interaction.values == "status") {
interaction.reply({
content: `**
<:i:${i.emoji.info}> ㆍ [إِبْقَاءُ الحِسَابِ فِي وَضْعِ الأُونْلَايْن عَلَى مَدَارِ ٢٤ سَاعَةٍ](https://cdn.discordapp.com/attachments/1251203377761615912/1359140750293471243/Qra024n8.png)

<:i:${i.emoji.rule}> ㆍ يُرْجَى إِجْرَاءُ ٱلتَّحْوِيلِ بَعْدَ إِرْسَالِ ٱلطَّلَبِ

<:i:${i.emoji.error}> ㆍ يَسْتَمِرُّ ٱلِاشْتِرَاكُ لِمُدَّةِ شَهْرٍ وَاحدٍ فَقَطْ**
** **`,
components: [
new MessageActionRow()
.addComponents(
new MessageButton()
.setCustomId("order_modal_status")
.setLabel("بَدْءُ ٱلطَّلَبِ")
.setStyle("SECONDARY")
.setEmoji(i.emoji.ticket),
new MessageButton()
.setCustomId("price_500k")
.setLabel("طُرُقُ ٱلدَّفْعِ")
.setStyle("SECONDARY")
.setEmoji(i.emoji.payment))],
ephemeral: true })}

//════════════════════

// RPC

if (interaction.values == "rpc") {
interaction.reply({
content: `**
<:i:${i.emoji.info}> ㆍ [إِنْشَاءُ حَالَةٍ مُخَصَّصَةٍ — PLAYING, LISTENING, WATCHING](https://cdn.discordapp.com/attachments/1251203377761615912/1359304999884292096/WI8mVjYp.png)

<:i:${i.emoji.rule}> ㆍ يُرْجَى إِجْرَاءُ ٱلتَّحْوِيلِ بَعْدَ إِرْسَالِ ٱلطَّلَبِ

<:i:${i.emoji.error}> ㆍ يَسْتَمِرُّ ٱلِاشْتِرَاكُ لِمُدَّةِ شَهْرٍ وَاحدٍ فَقَطْ**
** **`,
components: [
new MessageActionRow()
.addComponents(
new MessageButton()
.setCustomId("order_modal_rpc")
.setLabel("بَدْءُ ٱلطَّلَبِ")
.setStyle("SECONDARY")
.setEmoji(i.emoji.ticket),
new MessageButton()
.setCustomId("price_1.2m")
.setLabel("طُرُقُ ٱلدَّفْعِ")
.setStyle("SECONDARY")
.setEmoji(i.emoji.payment))],
ephemeral: true })}

}})

//══════[ Action 3 ]══════

client.on("interactionCreate", async interaction => {

if (interaction.isButton()) {

//════════════════════

// HypeSquad Bravery

if (interaction.customId === "order_modal_bravery") {
const modal = new ModalBuilder()
.setCustomId("order_log_bravery")
.setTitle("نَمُوذَجُ إِدْخَالِ ٱلْبَيَانَاتٍ")
.addComponents(
new ModalField()
.setCustomId("q1")
.setLabel("مُعَرِّفُ ٱلْمُسْتَخْدِمِ")
.setStyle("SHORT")
.setRequired(true),
new ModalField()
.setCustomId("q2")
.setLabel("تُوكِن ٱلْمُسْتَخْدِمِ")
.setStyle("SHORT")
.setRequired(true))
client.modal.open(interaction, modal)}

//════════════════════

// HypeSquad Brilliance

if (interaction.customId === "order_modal_brilliance") {
const modal = new ModalBuilder()
.setCustomId("order_log_brilliance")
.setTitle("نَمُوذَجُ إِدْخَالِ ٱلْبَيَانَاتٍ")
.addComponents(
new ModalField()
.setCustomId("q1")
.setLabel("مُعَرِّفُ ٱلْمُسْتَخْدِمِ")
.setStyle("SHORT")
.setRequired(true),
new ModalField()
.setCustomId("q2")
.setLabel("تُوكِن ٱلْمُسْتَخْدِمِ")
.setStyle("SHORT")
.setRequired(true))
client.modal.open(interaction, modal)}

//════════════════════

// HypeSquad Balance

if (interaction.customId === "order_modal_balance") {
const modal = new ModalBuilder()
.setCustomId("order_log_balance")
.setTitle("نَمُوذَجُ إِدْخَالِ ٱلْبَيَانَاتٍ")
.addComponents(
new ModalField()
.setCustomId("q1")
.setLabel("مُعَرِّفُ ٱلْمُسْتَخْدِمِ")
.setStyle("SHORT")
.setRequired(true),
new ModalField()
.setCustomId("q2")
.setLabel("تُوكِن ٱلْمُسْتَخْدِمِ")
.setStyle("SHORT")
.setRequired(true))
client.modal.open(interaction, modal)}

//════════════════════

// Completed a Quest

if (interaction.customId === "order_modal_completedaquest") {
const modal = new ModalBuilder()
.setCustomId("order_log_completedaquest")
.setTitle("نَمُوذَجُ إِدْخَالِ ٱلْبَيَانَاتٍ")
.addComponents(
new ModalField()
.setCustomId("q1")
.setLabel("مُعَرِّفُ ٱلْمُسْتَخْدِمِ")
.setStyle("SHORT")
.setRequired(true),
new ModalField()
.setCustomId("q2")
.setLabel("تُوكِن ٱلْمُسْتَخْدِمِ")
.setStyle("SHORT")
.setRequired(true))
client.modal.open(interaction, modal)}

//════════════════════

// Supports Commands

if (interaction.customId === "order_modal_supportscommands") {
const modal = new ModalBuilder()
.setCustomId("order_log_supportscommands")
.setTitle("نَمُوذَجُ إِدْخَالِ ٱلْبَيَانَاتٍ")
.addComponents(
new ModalField()
.setCustomId("q1")
.setLabel("مُعَرِّفُ ٱلْمُسْتَخْدِمِ")
.setStyle("SHORT")
.setRequired(true),
new ModalField()
.setCustomId("q2")
.setLabel("مُعَرِّفُ ٱلْبُوت")
.setStyle("SHORT")
.setRequired(true),
new ModalField()
.setCustomId("q3")
.setLabel("تُوكِن ٱلْبُوت")
.setStyle("SHORT")
.setRequired(true))
client.modal.open(interaction, modal)}

//════════════════════

// Uses Automod

if (interaction.customId === "order_modal_usesautomod") {
const modal = new ModalBuilder()
.setCustomId("order_log_usesautomod")
.setTitle("نَمُوذَجُ إِدْخَالِ ٱلْبَيَانَاتٍ")
.addComponents(
new ModalField()
.setCustomId("q1")
.setLabel("مُعَرِّفُ ٱلْمُسْتَخْدِمِ")
.setStyle("SHORT")
.setRequired(true),
new ModalField()
.setCustomId("q2")
.setLabel("مُعَرِّفُ ٱلْبُوت")
.setStyle("SHORT")
.setRequired(true),
new ModalField()
.setCustomId("q3")
.setLabel("تُوكِن ٱلْبُوت")
.setStyle("SHORT")
.setRequired(true))
client.modal.open(interaction, modal)}

//════════════════════

// Spam

if (interaction.customId === "order_modal_spam") {
const modal = new ModalBuilder()
.setCustomId("order_log_spam")
.setTitle("نَمُوذَجُ إِدْخَالِ ٱلْبَيَانَاتٍ")
.addComponents(
new ModalField()
.setCustomId("q1")
.setLabel("مُعَرِّفُ ٱلْمُسْتَخْدِمِ")
.setStyle("SHORT")
.setRequired(true),
new ModalField()
.setCustomId("q2")
.setLabel("تُوكِن ٱلْمُسْتَخْدِمِ")
.setStyle("SHORT")
.setRequired(true),
new ModalField()
.setCustomId("q3")
.setLabel("مُعَرِّفُ ٱلْقَنَاةِ ٱلْكِتَابِيَّةِ")
.setStyle("SHORT")
.setRequired(true))
client.modal.open(interaction, modal)}

//════════════════════

// AFK

if (interaction.customId === "order_modal_afk") {
const modal = new ModalBuilder()
.setCustomId("order_log_afk")
.setTitle("نَمُوذَجُ إِدْخَالِ ٱلْبَيَانَاتٍ")
.addComponents(
new ModalField()
.setCustomId("q1")
.setLabel("مُعَرِّفُ ٱلْمُسْتَخْدِمِ")
.setStyle("SHORT")
.setRequired(true),
new ModalField()
.setCustomId("q2")
.setLabel("تُوكِن ٱلْمُسْتَخْدِمِ")
.setStyle("SHORT")
.setRequired(true),
new ModalField()
.setCustomId("q3")
.setLabel("مُعَرِّفُ ٱلْقَنَاةِ ٱلصَّوْتِيَّةِ")
.setStyle("SHORT")
.setRequired(true))
client.modal.open(interaction, modal)}

//════════════════════

// Status

if (interaction.customId === "order_modal_status") {
const modal = new ModalBuilder()
.setCustomId("order_log_status")
.setTitle("نَمُوذَجُ إِدْخَالِ ٱلْبَيَانَاتٍ")
.addComponents(
new ModalField()
.setCustomId("q1")
.setLabel("مُعَرِّفُ ٱلْمُسْتَخْدِمِ")
.setStyle("SHORT")
.setRequired(true),
new ModalField()
.setCustomId("q2")
.setLabel("تُوكِن ٱلْمُسْتَخْدِمِ")
.setStyle("SHORT")
.setRequired(true),
new ModalField()
.setCustomId("q3")
.setLabel("نَوْعُ ٱلْعَلَامَةِ")
.setStyle("SHORT")
.setRequired(true))
client.modal.open(interaction, modal)}

//════════════════════

// RPC

if (interaction.customId === "order_modal_rpc") {
const modal = new ModalBuilder()
.setCustomId("order_log_rpc")
.setTitle("نَمُوذَجُ إِدْخَالِ ٱلْبَيَانَاتٍ")
.addComponents(
new ModalField()
.setCustomId("q1")
.setLabel("مُعَرِّفُ ٱلْمُسْتَخْدِمِ")
.setStyle("SHORT")
.setRequired(true),
new ModalField()
.setCustomId("q2")
.setLabel("تُوكِن ٱلْمُسْتَخْدِمِ")
.setStyle("SHORT")
.setRequired(true))
client.modal.open(interaction, modal)}

}})

//══════[ Action 4 ]══════

client.on("modalSubmitInteraction", async interaction => {

//════════════════════

// HypeSquad Bravery

if (interaction.customId === "order_log_bravery") {

let channel = client.channels.cache.get("1332382318098383059")

const q1 = interaction.fields.getTextInputValue("q1")
const q2 = interaction.fields.getTextInputValue("q2")

interaction.reply({
content: i.order_done_response,
components: [
new MessageActionRow()
.addComponents(i.ticket)],
ephemeral: true })

channel.send({
content: `**
<:i:${i.emoji.ticket}> ㆍ ||@everyone|| ㆍ ${interaction.user}

<:i:${i.emoji.info}> ㆍ مُعَرِّفُ ٱلْمُسْتَخْدِمِ

\`\`\`
${q1}
\`\`\`

<:i:${i.emoji.info}> ㆍ تُوكِن ٱلْمُسْتَخْدِمِ

\`\`\`
${q2}
\`\`\`**
** **` })

channel.send(i.line)}

//════════════════════

// HypeSquad Brilliance

if (interaction.customId === "order_log_brilliance") {

let channel = client.channels.cache.get("1332382340806213672")

const q1 = interaction.fields.getTextInputValue("q1")
const q2 = interaction.fields.getTextInputValue("q2")

interaction.reply({
content: i.order_done_response,
components: [
new MessageActionRow()
.addComponents(i.ticket)],
ephemeral: true })

channel.send({
content: `**
<:i:${i.emoji.ticket}> ㆍ ||@everyone|| ㆍ ${interaction.user}

<:i:${i.emoji.info}> ㆍ مُعَرِّفُ ٱلْمُسْتَخْدِمِ

\`\`\`
${q1}
\`\`\`

<:i:${i.emoji.info}> ㆍ تُوكِن ٱلْمُسْتَخْدِمِ

\`\`\`
${q2}
\`\`\`**
** **` })

channel.send(i.line)}

//════════════════════

// HypeSquad Balance

if (interaction.customId === "order_log_balance") {

let channel = client.channels.cache.get("1332382359475195954")

const q1 = interaction.fields.getTextInputValue("q1")
const q2 = interaction.fields.getTextInputValue("q2")

interaction.reply({
content: i.order_done_response,
components: [
new MessageActionRow()
.addComponents(i.ticket)],
ephemeral: true })

channel.send({
content: `**
<:i:${i.emoji.ticket}> ㆍ ||@everyone|| ㆍ ${interaction.user}

<:i:${i.emoji.info}> ㆍ مُعَرِّفُ ٱلْمُسْتَخْدِمِ

\`\`\`
${q1}
\`\`\`

<:i:${i.emoji.info}> ㆍ تُوكِن ٱلْمُسْتَخْدِمِ

\`\`\`
${q2}
\`\`\`**
** **` })

channel.send(i.line)}

//════════════════════

// Completed a Quest

if (interaction.customId === "order_log_completedaquest") {

let channel = client.channels.cache.get("1325859125233717396")

const q1 = interaction.fields.getTextInputValue("q1")
const q2 = interaction.fields.getTextInputValue("q2")

interaction.reply({
content: i.order_done_response,
components: [
new MessageActionRow()
.addComponents(i.ticket)],
ephemeral: true })

channel.send({
content: `**
<:i:${i.emoji.ticket}> ㆍ ||@everyone|| ㆍ ${interaction.user}

<:i:${i.emoji.info}> ㆍ مُعَرِّفُ ٱلْمُسْتَخْدِمِ

\`\`\`
${q1}
\`\`\`

<:i:${i.emoji.info}> ㆍ تُوكِن ٱلْمُسْتَخْدِمِ

\`\`\`
${q2}
\`\`\`**
** **` })

channel.send(i.line)}

//════════════════════

// Support Commands

if (interaction.customId === "order_log_supportscommands") {

let channel = client.channels.cache.get("1325859161019515012")

const q1 = interaction.fields.getTextInputValue("q1")
const q2 = interaction.fields.getTextInputValue("q2")
const q3 = interaction.fields.getTextInputValue("q3")

interaction.reply({
content: i.order_done_response,
components: [
new MessageActionRow()
.addComponents(i.ticket)],
ephemeral: true })

channel.send({
content: `**
<:i:${i.emoji.ticket}> ㆍ ||@everyone|| ㆍ ${interaction.user}

<:i:${i.emoji.info}> ㆍ مُعَرِّفُ ٱلْمُسْتَخْدِمِ

\`\`\`
${q1}
\`\`\`

<:i:${i.emoji.info}> ㆍ مُعَرِّفُ ٱلْبُوت

\`\`\`
${q2}
\`\`\`

<:i:${i.emoji.info}> ㆍ تُوكِن ٱلْبُوت

\`\`\`
${q3}
\`\`\`**
** **` })

channel.send(i.line)}

//════════════════════

// Uses Automod

if (interaction.customId === "order_log_usesautomod") {

let channel = client.channels.cache.get("1325859168380387399")

const q1 = interaction.fields.getTextInputValue("q1")
const q2 = interaction.fields.getTextInputValue("q2")
const q3 = interaction.fields.getTextInputValue("q3")

interaction.reply({ 
content: i.order_done_response,
components: [
new MessageActionRow()
.addComponents(i.ticket)],
ephemeral: true })

channel.send({
content: `**
<:i:${i.emoji.ticket}> ㆍ ||@everyone|| ㆍ ${interaction.user}

<:i:${i.emoji.info}> ㆍ مُعَرِّفُ ٱلْمُسْتَخْدِمِ

\`\`\`
${q1}
\`\`\`

<:i:${i.emoji.info}> ㆍ مُعَرِّفُ ٱلْبُوت

\`\`\`
${q2}
\`\`\`

<:i:${i.emoji.info}> ㆍ تُوكِن ٱلْبُوت

\`\`\`
${q3}
\`\`\`**
** **` })

channel.send(i.line)}

//════════════════════

// Spam

if (interaction.customId === "order_log_spam") {

let channel = client.channels.cache.get("1293978051603861524")

const q1 = interaction.fields.getTextInputValue("q1")
const q2 = interaction.fields.getTextInputValue("q2")
const q3 = interaction.fields.getTextInputValue("q3")

interaction.reply({
content: i.order_done_response,
components: [
new MessageActionRow()
.addComponents(i.ticket)],
ephemeral: true })

channel.send({
content: `**
<:i:${i.emoji.ticket}> ㆍ ||@everyone|| ㆍ ${interaction.user}

<:i:${i.emoji.info}> ㆍ مُعَرِّفُ ٱلْمُسْتَخْدِمِ

\`\`\`
${q1}
\`\`\`

<:i:${i.emoji.info}> ㆍ تُوكِن ٱلْمُسْتَخْدِمِ

\`\`\`
${q2}
\`\`\`

<:i:${i.emoji.info}> ㆍ مُعَرِّفُ ٱلْقَنَاةِ ٱلْكِتَابِيَّةِ

\`\`\`
${q3}
\`\`\`**
** **` })

channel.send(i.line)}

//════════════════════

// AFK

if (interaction.customId === "order_log_afk") {

let channel = client.channels.cache.get("1293977993550499892")

const q1 = interaction.fields.getTextInputValue("q1")
const q2 = interaction.fields.getTextInputValue("q2")
const q3 = interaction.fields.getTextInputValue("q3")

interaction.reply({
content: i.order_done_response,
components: [
new MessageActionRow()
.addComponents(i.ticket)],
ephemeral: true })

channel.send({
content: `**
<:i:${i.emoji.ticket}> ㆍ ||@everyone|| ㆍ ${interaction.user}

<:i:${i.emoji.info}> ㆍ مُعَرِّفُ ٱلْمُسْتَخْدِمِ

\`\`\`
${q1}
\`\`\`

<:i:${i.emoji.info}> ㆍ تُوكِن ٱلْمُسْتَخْدِمِ

\`\`\`
${q2}
\`\`\`

<:i:${i.emoji.info}> ㆍ مُعَرِّفُ ٱلْقَنَاةِ ٱلصَّوْتِيَّةِ

\`\`\`
${q3}
\`\`\`**
** **` })

channel.send(i.line)}

//════════════════════

// Status

if (interaction.customId === "order_log_status") {

let channel = client.channels.cache.get("1293977952601772093")

const q1 = interaction.fields.getTextInputValue("q1")
const q2 = interaction.fields.getTextInputValue("q2")
const q3 = interaction.fields.getTextInputValue("q3")

interaction.reply({
content: i.order_done_response,
components: [
new MessageActionRow()
.addComponents(i.ticket)],
ephemeral: true })

channel.send({
content: `**
<:i:${i.emoji.ticket}> ㆍ ||@everyone|| ㆍ ${interaction.user}

<:i:${i.emoji.info}> ㆍ مُعَرِّفُ ٱلْمُسْتَخْدِمِ

\`\`\`
${q1}
\`\`\`

<:i:${i.emoji.info}> ㆍ تُوكِن ٱلْمُسْتَخْدِمِ

\`\`\`
${q2}
\`\`\`

<:i:${i.emoji.info}> ㆍ نَوْعُ ٱلْعَلَامَةِ

\`\`\`
${q3}
\`\`\`**
** **` })

channel.send(i.line)}

//════════════════════

// RPC

if (interaction.customId === "order_log_rpc") {

let channel = client.channels.cache.get("1360780476670803995")

const q1 = interaction.fields.getTextInputValue("q1")
const q2 = interaction.fields.getTextInputValue("q2")

interaction.reply({
content: `**
- أجب عن باقي الأسئلة في التكت أو الخاص :

-# [\` 1 \`] ㆍ نوع العلامة : <:status01:1331052801685454869> <:status02:1331052822564966553> <:status03:1331052844417286155> <:status04:1331052917721141248>

-# [\` 2 \`] ㆍ نوع الحالة ( Playing / Listening / Watching / Streaming )

-# [\` 3 \`] ㆍ  ( Playing …… / Listening …… ) الاسم الذي يأتي بعد

-# [\` 4 \`] ㆍ التفاصيل التي تكون تحت الاسم :

-# [\` 5 \`] ㆍ الصورة الكبيرة :

-# [\` 6 \`] ㆍ الصورة الصغيرة :

- -# هل تريد أن يكون الحساب أونلاين ٢٤ ساعة ؟

- -#  هل تريد زر تحت الحالة ؟
  - -# إذا نعم : قم بإرسال اسم ورابط الزر
- -# يرجى العلم أن الأزرار لن تعمل في حالة الستريم**
** **`,
components: [
new MessageActionRow()
.addComponents(i.ticket)],
ephemeral: true })

channel.send({
content: `**
<:i:${i.emoji.ticket}> ㆍ ||@everyone|| ㆍ ${interaction.user}

<:i:${i.emoji.info}> ㆍ مُعَرِّفُ ٱلْمُسْتَخْدِمِ

\`\`\`
${q1}
\`\`\`

<:i:${i.emoji.info}> ㆍ تُوكِن ٱلْمُسْتَخْدِمِ

\`\`\`
${q2}
\`\`\`**
** **` })

channel.send(i.line)}

})