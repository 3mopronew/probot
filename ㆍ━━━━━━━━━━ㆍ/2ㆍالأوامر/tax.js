//══════[ Package ]══════

const i = require("../../━━━━━━━━━━━━━━━/Database/config.js")

//══════[ Command ]══════

module.exports = {
name: "tax",
description: "ㆍ",
options: [
{
name: "المبلغ",
description: "ㆍ",
type: 3,
required: true
}],
integration_types: [0, 1],
contexts: [0, 1, 2],
async execute(client, interaction) {

const number = interaction.options.getString("المبلغ")

let args = number

.replace("k","000")
.replace("K", "000")
.replace("m", "000000")
.replace("M", "000000")
.replace("b","000000000000")
.replace("B","000000000000")

// ضريبة التحويل المباشر
let to_user = Math.floor(args * (20) / (19) + (1))
// ضريبة الوساطة بدون النسبة
let to_mediator = Math.floor(to_user * (20) / (19) + (1))
// نسبة الوساطة 2% من المبلغ
let earn = Math.floor(args * 0.02 * (20) / (19) + (1))
// ضريبة الوساطة مع النسبة
let total = Math.floor(to_mediator + earn)

if (i.developer.includes(interaction.user.id)) { return interaction.reply({ content: `C ${i.bank} ${to_user}` })} else { interaction.reply(to_user)}

}}