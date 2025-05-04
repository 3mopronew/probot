module.exports = {

name: "interactionCreate",

once: false,

async execute(client, interaction) {

if (!interaction.isCommand()) return;

const command = client.slashCommands.get(interaction.commandName)

if (!command) return;

try {

await command.execute(client, interaction)

} catch (error) { return; }}}