// https://discord.com/channels/1253265326393786448/1253993296955572335/1255490484038795295
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: 'nextschedule',
    description: `Directs to #timezone.`,
    aliases: ['whenschedule', 'whenplay', 'whennextsession', 'whennext', 'whennextsesh', 'when', 'nextscheduleinfo'],
    guildOnly: true,
    cooldown: 1800,
    execute(message) {
  
      const scheduleEmbed = new Discord.MessageEmbed()
        .setTitle("When's the next schedule?")
        .addFields(
            { name: 'Check https://discord.com/channels/1253265326393786448/1253993296955572335/1255490484038795295 or events calendar', value: 'Other than that, weekends for main-farm', inline: false },
            { name: 'New farm host will be decided soon.', value: ' Type -weekplay to request for planning.', inline: false },
        )
        .setFooter(`To show this: type -nextschedule`);
      
        message.channel.send(scheduleEmbed);
  
      }

    }
  
  
  // ${args.join(' ')}