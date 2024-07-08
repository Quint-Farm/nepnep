const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: 'prepschedule',
    description: 'Post and have others prepare for game schedule, days beforehand!',
    aliases: ['schedule', 'announce'],
    args: true,
    execute(message,args,client) {

        const targetChannel = message.client.channels.cache.get('1258987230513594398');

        if(message.member.roles.cache.some(r => r.name === "Host")) {
            if (!args.length && args) {
                targetChannel.send(`
Hello <@&1256217332376928378>, Nepabella here! 
            Schedule will start soon if alltogether: react or let us know beforehand if you plan to join!
     Will postpone otherwise!`).then(reactmessage => {
                reactmessage.react("👍"),
                    reactmessage.react("👎"),
                    reactmessage.react("🤷")
            })
        } else 
			targetChannel.send(`
Hello <@&1256217332376928378>, Nepabella here! 
			Schedule will start soon if alltogether: react or let us know beforehand if you plan to join! ~${args.join(' ')}
	Will postpone otherwise!`).then(reactmessage => {
				reactmessage.react("👍"),
					reactmessage.react("👎"),
					reactmessage.react("🤷")
			})
        }

    }
}
