module.exports = {
  name: 'endsession',
  description: `End the session, sets Nepabella's status to normal! Host only.`,
  aliases: ['sessionend', 'es', 'end', 'sessionover', 'over', 'playover', 'po'],
  args: true,
  guildOnly: true,
  execute(message, args) {

    if(message.member.roles.cache.some(r => r.name === "Host")) {
      if (!args.length && args) {
        message.client.user.setActivity(null);
        return message.channel.send(`
<@&1258690632491204608> ended the session! 
    Hope everyone enjoyed!`);
      } else
        message.client.user.setActivity(null);
        message.channel.send(`
<@&1258690632491204608> ended the session! 
   Hope everyone enjoyed!
${args.join(' ')}`);
  
    }
  }
}



// message.client.user.user.setStatus('online');