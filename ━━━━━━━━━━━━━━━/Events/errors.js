//══════[ Errors ]══════

//process.on("multipleResolves", () => { })

process.on("rejectionHandled", () => { })

process.on("uncaughtException", () => { })

process.on("unhandledRejection", () => { })

process.on("uncaughtExceptionMonitor", () => { })

//══════[ Errors Log ]══════

const axios = require("axios")

const webhookURL = "https://discord.com/api/webhooks/1321816109497847869/xFG-vzbW3omYZdUYVbajA1xp-rYkQUzyYSfvX6GINXLypLR8ZwB7k-7vT2mBwZ_WX3Iw"

async function sendToDiscord(message) {
try {
await axios.post(webhookURL, { content: message })
} catch (error) { return; }}

console.log = function (...args) {
console.info(...args)
const message = args.join(" ")
sendToDiscord(`**\`\`\`
${message}
\`\`\`**`)}

console.warn = console.log

console.error = console.log