const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
  name: 'helpgroup',
  description: 'Call the invite code! Host only.',
  args: true,
  execute(message, args) {

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#6b8a7a')
      .setTitle('Info list')
      .setURL('https://i.imgur.com/78pPtbV.png')
      .setAuthor(`Nepabella's info-service.`, 'https://i.imgur.com/78pPtbV.png', 'https://replit.com/@rainedayste/Javascript-Bot#commands/help.js')
      .setDescription('What our local cat can do:')
      .setThumbnail('https://i.imgur.com/JbOnQHD.png')
      // Switchables: .setImage https://i.imgur.com/ujJ1oLZ.png
      .addFields(
        { name: 'Showing role for:', value: '<@&1256217332376928378>' },
        { name: '\u214F', value: ' ' },
        { name: 'Inline field title', value: 'Some value here', inline: true },
        { name: 'Inline field title', value: 'Some value here', inline: true },
      )
      .addField('Inline field title', 'Some value here', true)
      .setImage('https://i.imgur.com/ujJ1oLZ.png')
      // Switchables: .setImage https://i.imgur.com/JbOnQHD.png

      //https://i.imgur.com/4bMjSpM.png
      // https://i.imgur.com/ujJ1oLZ.png
      .setTimestamp()
      .setFooter(`Nepabella's caretaker, ruu`, 'https://i.imgur.com/3cMbLLr.png');

    // Footer1 https://i.imgur.com/Q7GuJSg.png Balance?
    // Footer2 https://i.imgur.com/3cMbLLr.png Larger

    message.channel.send(exampleEmbed);

    // if(message.member.roles.cache.some(r => r.name === "Host")) {
    //   if (!args.length && args) {
    //     return
    //   } else 



    //         // var invCode = (`${message.content}`);
    //         message.channel.send(`
    // <@&1258690632491204608> declared an invite code!
    //     <@&1256217332376928378>, ${args.join(' ')}`
    //       )
    //     }
  },
};

// ${args.join(' ')}