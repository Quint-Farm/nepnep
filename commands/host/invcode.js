module.exports = {
  name: 'callinv',
  description: 'Call the invite code! Host only.',
  aliases: ['i', 'code', 'icode', 'inv', 'ic'],
  cooldown: 3,
  args: true,
  execute(message, args) {

    if(!message.member.roles.cache.some(r => r.name === "Host")) {
      if (!args.length && args) {
        return
      } else 



        // var invCode = (`${message.content}`);
        message.channel.send(`
<@&1258690632491204608> declared an invite code!
    <@&1256217332376928378>, ${args.join(' ')}`
      )
    }
  },
};

// ${args.join(' ')}