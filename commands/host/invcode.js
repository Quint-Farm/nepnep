const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
  name: 'callinv',
  description: 'Call the invite code! Host only.',
  aliases: ['i', 'code', 'icode', 'inv', 'ic'],
  args: true,
  guildOnly: true,
  cooldown: -1800,
  execute(message, args) {

    if(message.member.roles.cache.some(r => r.name === "Host")) {
      if (!args.length && args) {
        return
      } 
      
      else 
        message.client.user.setPresence({ activity: { name: 'Stardew Valley' }, status: 'online' });
        message.channel.send(`
<@&1258690632491204608> declared an invite code!
    <@&1256217332376928378>, ${args.join(' ')}`
      )
  
    }
  }
}
  

// ${args.join(' ')}