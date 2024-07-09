module.exports = {
	name: 'message',
	execute(message) {
        const dms = message.client.channels.cache.get('1258628125479407616');

        if (message.channel.type === 'dm') {
            dms.send(message.author.tag + ` ` + message.author.avatarURL() + `: ` + message.content);
            if(message.attachments.size > 0) dms.send(message.attachments.first().url)
        } 
    }
}
