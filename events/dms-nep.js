const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
	name: 'dms',
	execute() {

        const dms = client.channels.cache.get('1258628125479407616');

        if (message.channel.type === 'dm') {
            dms.send(message.author.tag + ` ` + message.author.avatarURL() + `: ` + message.content);
        }

    }
}