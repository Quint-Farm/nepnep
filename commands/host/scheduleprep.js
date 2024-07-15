module.exports = {
    name: 'prepschedule',
    description: 'Post and have others prepare for game schedule, days beforehand!',
    aliases: ['schedule', 'announce'],
    args: true,
    guildOnly: true,
    execute(message,args) {

        const targetChannel = message.client.channels.cache.get('1258987230513594398');

        if(message.member.roles.cache.some(r => r.name === "Host")) {
            if (!args.length && args) {
                message.channel.send(`
Hello <@&1260870229479784558>, Nepabella here! 
            Schedule will start soon if alltogether: react or let us know beforehand if you plan to join!
     Will postpone otherwise!`).then(reactmessage => {
                reactmessage.react("👍"),
                    reactmessage.react("👎"),
                    reactmessage.react("🤷")
            })
        } else 
			messag.channel.send(`
Hello <@&1260870229479784558>, Nepabella here! 
			Schedule will start soon if alltogether: react or let us know beforehand if you plan to join! ~${args.join(' ')}
	Will postpone otherwise!`).then(reactmessage => {
				reactmessage.react("👍"),
					reactmessage.react("👎"),
					reactmessage.react("🤷")
			})
        }

    }
}
