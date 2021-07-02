module.exports = {
	name: 'example',
	description: 'An Example Command',
	aliases: ['example-command'],
	usage: '[command name]',
	cooldown: 5,
	permissions: 'KICK_MEMBERS',
	guildOnly:false,
	execute(message, args) {
		// ...
	},
};

// name, guildonly, permissions,usage,cooldown,aliases