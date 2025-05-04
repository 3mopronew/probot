//══════[ Package ]══════

const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js")

//══════[ Login ]══════

const client = require("../../index")

//══════[ Export ]══════

module.exports = {

prefix: "-",

color: "#00ffff", //#2F3136

bank: "932294839825997834",

developer: [
"893609188016668712"
],

premium: [
"893609188016668712"
],

emoji: {
info: "1368655822611288134",
rule: "1368655923261734984",
error: "1368655856928821248",
load: "1368655864663113758",
review: "1326619135802609724",
true: "1326618220362469539",
false: "1326618090850619434",
ticket: "1326604836552314971",
add: "1333942346701869096",
remove: "1333942368130564178",
positive: "1326635409559785573",
negative: "1326635604796244018",
time: "1333942401722486866",
punishment: "1333942425634345000",
close: "1333128012073275422",
open: "1333128045531365406",
hide: "1333132689083207694",
show: "1333132714651680856"
},

//════════════════════

autoline:[
"1222566805479096391",
"1111299380541132942",
"1251203473509322813"
],

//════════════════════

activechnls: [
"1111299094154067978",
"1320760671075565639",
"1320759946979315743",

"1248542317254676561",
"1325573953367838811",
"1316414353829920848",

"1111299525236244510",
"1282999649757823047",

"1222566805479096391",
"1111299380541132942",
"1248552854805942362"
],

//════════════════════

line: "https://cdn.discordapp.com/attachments/1251203377761615912/1358107770083213392/BPWrfXll.png",

//════════════════════

perm1: `**<:i:1326618090850619434> ㆍ لَيْسَ لَدَيْكَ صَلَاحِيَّاتٌ لِٱسْتِخْدَامِ هٰذَا ٱلْأَمْرِ .**`,

perm2: `**<:i:1326618090850619434> ㆍ لَيْسَ لَدَيَّ صَلَاحِيَّاتٌ لِتَنْفِيذِ هٰذَا ٱلْأَمْرِ .**`,

done: `**<:i:1326618220362469539> ㆍ تَمَّ إِكْمَالُ ٱلْعَمَلِيَّةِ بِنَجَاحٍ .**`,

error: `**<:i:1327701348724244572> ㆍ حَدَثَ خَطَأٌ، يُرْجَى ٱلْمُحَاوَلَةُ لَاحِقًا .**`,

//════════════════════

join_to_trans: `**- يُرْجَى ٱلِٱنْضِمَامُ لِلْخَادِمِ وَإِجْرَاءُ ٱلتَّحْوِيلِ فِي رُومِ ٱلتَّحْوِيلَاتِ
  - <https://discord.gg/pzXwrY6mYR>
  - <#1248552854805942362>**`,

order_done_response: `**
<:i:1367974486565060759> ㆍ جَارٍ ٱلْمُوَافَقَةُ عَلَى ٱلطَّلَبِ مِنْ قِبَلِ ٱلْمُطَوِّرِ، يُسْتَحْسَنُ فَتْحُ تَذْكِرَةٍ**
** **`,

//════════════════════

ticket: new MessageButton()
.setCustomId("support_create")
.setLabel("فَتْحُ تَذْكِرَةٍ")
.setStyle("SECONDARY")
.setEmoji("1326604836552314971"),

//════════════════════

// الموقع

price_5m: new MessageButton()
.setCustomId("price_5m")
.setLabel("طُرُقُ ٱلدَّفْعِ")
.setStyle("SECONDARY")
.setEmoji("1327703573525561455"),

// الشارات

price_50k: new MessageButton()
.setCustomId("price_50k")
.setLabel("طُرُقُ ٱلدَّفْعِ")
.setStyle("SECONDARY")
.setEmoji("1327703573525561455"),

price_1_2m: new MessageButton()
.setCustomId("price_1.2m")
.setLabel("طُرُقُ ٱلدَّفْعِ")
.setStyle("SECONDARY")
.setEmoji("1327703573525561455"),

price_1_4m: new MessageButton()
.setCustomId("price_1.4m")
.setLabel("طُرُقُ ٱلدَّفْعِ")
.setStyle("SECONDARY")
.setEmoji("1327703573525561455"),

price_600k: new MessageButton()
.setCustomId("price_600k")
.setLabel("طُرُقُ ٱلدَّفْعِ")
.setStyle("SECONDARY")
.setEmoji("1327703573525561455"),

price_2_6m: new MessageButton()
.setCustomId("price_2.6m")
.setLabel("طُرُقُ ٱلدَّفْعِ")
.setStyle("SECONDARY")
.setEmoji("1327703573525561455"),

// السيلف

price_500k: new MessageButton()
.setCustomId("price_500k")
.setLabel("طُرُقُ ٱلدَّفْعِ")
.setStyle("SECONDARY")
.setEmoji("1327703573525561455"),

price_800k: new MessageButton()
.setCustomId("price_800k")
.setLabel("طُرُقُ ٱلدَّفْعِ")
.setStyle("SECONDARY")
.setEmoji("1327703573525561455"),

price_1_2m: new MessageButton()
.setCustomId("price_1.2m")
.setLabel("طُرُقُ ٱلدَّفْعِ")
.setStyle("SECONDARY")
.setEmoji("1327703573525561455"),

price_1_3m: new MessageButton()
.setCustomId("price_1.3m")
.setLabel("طُرُقُ ٱلدَّفْعِ")
.setStyle("SECONDARY")
.setEmoji("1327703573525561455"),

}

//══════[ Action ]══════

client.on("interactionCreate", async interaction => {

if (interaction.isButton()) {

// الموقع

if (interaction.customId === "price_5m") {
interaction.reply({
content: module.exports.join_to_trans,
embeds: [
new MessageEmbed()
.setColor(module.exports.color)
.setTitle("<:i:1253085658486931476> ㆍ التحويل عن طريق عملة البروبوت")
.setDescription(`C ${module.exports.bank} 5263158`)],
ephemeral: true })}

// الشارات

if (interaction.customId === "price_50k") {
interaction.reply({
content: module.exports.join_to_trans,
embeds: [
new MessageEmbed()
.setColor(module.exports.color)
.setTitle("<:i:1253085658486931476> ㆍ التحويل عن طريق عملة البروبوت")
.setDescription(`C ${module.exports.bank} 52632`)],
ephemeral: true })}

if (interaction.customId === "price_1.2m") {
interaction.reply({
content: module.exports.join_to_trans,
embeds: [
new MessageEmbed()
.setColor(module.exports.color)
.setTitle("<:i:1253085658486931476> ㆍ التحويل عن طريق عملة البروبوت")
.setDescription(`C ${module.exports.bank} 1263158`)],
ephemeral: true })}

if (interaction.customId === "price_1.4m") {
interaction.reply({
content: module.exports.join_to_trans,
embeds: [
new MessageEmbed()
.setColor(module.exports.color)
.setTitle("<:i:1253085658486931476> ㆍ التحويل عن طريق عملة البروبوت")
.setDescription(`C ${module.exports.bank} 1473685`)],
ephemeral: true })}

if (interaction.customId === "price_600k") {
interaction.reply({
content: module.exports.join_to_trans,
embeds: [
new MessageEmbed()
.setColor(module.exports.color)
.setTitle("<:i:1253085658486931476> ㆍ التحويل عن طريق عملة البروبوت")
.setDescription(`C ${module.exports.bank} 631579`)],
ephemeral: true })}

if (interaction.customId === "price_2.6m") {
interaction.reply({
content: module.exports.join_to_trans,
embeds: [
new MessageEmbed()
.setColor(module.exports.color)
.setTitle("<:i:1253085658486931476> ㆍ التحويل عن طريق عملة البروبوت")
.setDescription(`C ${module.exports.bank} 2736843`)],
ephemeral: true })}

// السيلف

if (interaction.customId === "price_500k") {
interaction.reply({
content: module.exports.join_to_trans,
embeds: [
new MessageEmbed()
.setColor(module.exports.color)
.setTitle("<:i:1253085658486931476> ㆍ التحويل عن طريق عملة البروبوت")
.setDescription(`C ${module.exports.bank} 526316`)],
ephemeral: true })}

if (interaction.customId === "price_800k") {
interaction.reply({
content: module.exports.join_to_trans,
embeds: [
new MessageEmbed()
.setColor(module.exports.color)
.setTitle("<:i:1253085658486931476> ㆍ التحويل عن طريق عملة البروبوت")
.setDescription(`C ${module.exports.bank} 842106`)],
ephemeral: true })}

if (interaction.customId === "price_1.2m") {
interaction.reply({
content: module.exports.join_to_trans,
embeds: [
new MessageEmbed()
.setColor(module.exports.color)
.setTitle("<:i:1253085658486931476> ㆍ التحويل عن طريق عملة البروبوت")
.setDescription(`C ${module.exports.bank} 1263158`)],
ephemeral: true })}

if (interaction.customId === "price_1.3m") {
interaction.reply({
content: module.exports.join_to_trans,
embeds: [
new MessageEmbed()
.setColor(module.exports.color)
.setTitle("<:i:1253085658486931476> ㆍ التحويل عن طريق عملة البروبوت")
.setDescription(`C ${module.exports.bank} 1368422`)],
ephemeral: true })}

}})