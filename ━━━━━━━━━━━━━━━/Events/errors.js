//══════[ Errors ]══════

//process.on("multipleResolves", () => { })

process.on("rejectionHandled", () => { })

process.on("uncaughtException", () => { })

process.on("unhandledRejection", () => { })

process.on("uncaughtExceptionMonitor", () => { })
/*
process.on("multipleResolves", (type, promise, reason) => {
console.error(`Multiple Resolves Error :`)
console.error(`Type : ${type}`)
console.error(`Promise : ${promise}`)
console.error(`Reason : ${reason}`)})

process.on("rejectionHandled", (error) => {
console.warn(`Rejection Handled :`)
console.warn(`Reason : ${error}`)})

process.on("uncaughtException", (err, origin) => {
console.error(`Caught Uncaught Exception :`)
console.error(`Error : ${err.message}`)
console.error(`Origin : ${origin}`)})

process.on("unhandledRejection", (reason, promise) => {
console.error(`Unhandled Rejection At : ${promise}`)
console.error(`Reason : ${reason}`)})

process.on("uncaughtExceptionMonitor", (err, origin) => {
console.error(`Uncaught Exception Monitor :`)
console.error(`Error : ${err.message}`)
console.error(`Origin : ${origin}`)})
*/
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