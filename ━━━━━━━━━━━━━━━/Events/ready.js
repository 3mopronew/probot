module.exports = {
name: "ready",
once: true,
execute(client) {

client.user.setPresence({
status: "idle",
activities: [{
name: "ㅤ",
type: 4,
state: "@onlyahmd — All rights reserved 2019 ©" }]})

}}