// const Discord = require('discord.js');
// const client = new Discord.Client();

// module.exports = {
//   name: 'help',
//   description: 'Call the invite code! Host only.',
//   args: true,
//   execute(message, args) {

//     const exampleEmbed = new Discord.MessageEmbed()
//       .setColor('#6b8a7a')
//       .setTitle('Info list')
//       .setURL('https://i.imgur.com/78pPtbV.png')
//       .setAuthor(`Nepabella's info-service.`, 'https://i.imgur.com/78pPtbV.png', 'https://replit.com/@rainedayste/Javascript-Bot#commands/help.js')
//       .setDescription('What our local cat can do:')
//       .setThumbnail('https://i.imgur.com/JbOnQHD.png')
//       // Switchables: .setImage https://i.imgur.com/ujJ1oLZ.png
//       .addFields(
//         { name: 'Showing role for:', value: '<@&1258690632491204608>' },
//         { name: '\u214F', value: ' ' },
//         { name: '"-callinv *Code*"', value: 'Nepabella chats the code.', inline: false },
//         { name: '"-scheduleprep"', value: '            Announce schedule for group in https://discord.com/channels/1253265326393786448/1253265326393786451.', inline: true },
//       )
//       // .addField('Inline field title', 'Some value here', true)
//       .setImage('https://i.imgur.com/ujJ1oLZ.png')
//       .setTimestamp()
//       .setFooter(`Nepabella's caretaker, ruu`, 'https://i.imgur.com/3cMbLLr.png');
    
//     message.channel.send(exampleEmbed);

//   },
// };

// // ${args.join(' ')}