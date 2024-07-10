const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
  name: 'help',
  description: `Nepabella's info-service.`,
  aliases: ['info', 'infoservice', 'info-service', 'infolist', 'info-list', 'helpService', 'helpinfo'],
  guildOnly: true,
  cooldown: 1800,
  execute(message, args) {

    const exampleEmbeds = new Discord.MessageEmbed()
      .setColor('#EFC51E')
      .setTitle('Info list')
      .setURL('https://i.imgur.com/78pPtbV.png')
      .setAuthor(`Nepabella's info-service.`, 'https://i.imgur.com/78pPtbV.png', 'https://github.com/Quint-Farm/Nepabella')
      .setDescription('What our local cat can do:')
      .setThumbnail('https://i.imgur.com/JbOnQHD.png')
      // Switchables: .setImage https://i.imgur.com/ujJ1oLZ.png
      .addFields(
        { name: 'Showing role for:', value: '<@&1258690632491204608>' },
        { name: '\u214F', value: ' ' },
        { name: '"-callinv **Code**"', value: 'Nepabella chats the code.', inline: false },
        { name: '"-scheduleprep"', value: '            Announce schedule for group in https://discord.com/channels/1253265326393786448/1253265326393786451.', inline: true },
      )
      // .addField('Inline field title', 'Some value here', true)
      .setImage('https://i.imgur.com/ujJ1oLZ.png')
      .setTimestamp()
      .setFooter(`Nepabella's caretaker, ruu`, 'https://i.imgur.com/3cMbLLr.png');

    const embedOne = new Discord.MessageEmbed()
      .setColor('#6b8a7a')
      .setTitle('Info list')
      .setURL('https://i.imgur.com/78pPtbV.png')
      .setAuthor(`Nepabella's info-service.`, 'https://i.imgur.com/78pPtbV.png', 'https://github.com/Quint-Farm/Nepabella')
      .setDescription('What our local cat can do:')
      .setThumbnail('https://i.imgur.com/JbOnQHD.png')
      // Switchables: .setImage https://i.imgur.com/ujJ1oLZ.png
      .addFields(
        { name: 'Showing role for:', value: '<@&1256217332376928378>' },
        { name: '\u214F', value: ' ' },
        { name: ' ', value: ' ', inline: false },
        { name: '"-weekplay *Note?*"', value: 'Pings and requests a weekday schedule with the following text appearing as additional info.', inline: true },
      )
      .addField('"-weekplay"', 'No notes.', true)
      .setImage('https://i.imgur.com/ujJ1oLZ.png')
      // Switchables: .setImage https://i.imgur.com/JbOnQHD.png

      //https://i.imgur.com/4bMjSpM.png
      // https://i.imgur.com/ujJ1oLZ.png
      .setTimestamp()
      .setFooter(`Nepabella's caretaker, ruu`, 'https://i.imgur.com/3cMbLLr.png');

    const embedTwo = new Discord.MessageEmbed()
      .setAuthor(`Nepabella's 
      introductions`, 'https://i.imgur.com/78pPtbV.png', 'https://github.com/Quint-Farm/Nepabella')
      .setTitle("React for roles:")
      .setDescription(`
0️⃣ - <@&1258690632491204608>: Entrusted farm handler.
1️⃣ - <@&1256217332376928378>: Our members, friends!
`)
      
      .setFooter(`
      
"Which one?",
Neps implies.`);

    
    

    const embedThree = new Discord.MessageEmbed()
      .setTitle("Hola2")
      .setDescription(`${message.createdTimestamp - message.createdTimestamp}`)
      .setFooter(`Nepabella's 2nd, ruu`, 'https://i.imgur.com/3cMbLLr.png');
    
     
    message.channel.send(embedTwo).then(sentEmbed => {
      sentEmbed.awaitReactions((reaction, user) => {
        if (message.author.id !== user.id) return;
        if (reaction.emoji.name === '0️⃣') {
          sentEmbed.edit(exampleEmbeds);
          sentEmbed.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
        }
        if (reaction.emoji.name === '1️⃣') {
          sentEmbed.edit(embedOne);
          reaction.users.remove;
          sentEmbed.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
        }
        // if (reaction.emoji.name === '2️⃣') {
        //   sentEmbed.edit(embedOne);
        //   reaction.users.remove;
        //   sentEmbed.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
        // }
      })
    })

  },
};

// ${args.join(' ')}