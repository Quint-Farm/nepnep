// module.exports = {
// 	name: 'message',
// 	execute(message) {

//   if (message.content.toLowerCase() == 'h45') {

//     if (message.channel.id === '1253679080193392661') {

//       if (message.member.roles.cache.some(role => role.name === 'ruu')) {

//         let removeAboveRole = message.guild.roles.cache.get("853317875195707432");

//         let addNewAboveRole = message.guild.roles.cache.get("1253679080193392661");

//         let verifyRole = message.guild.roles.cache.find(r => r.name === "Holder");

//         let unverifiedRole = message.guild.roles.cache.find(r => r.name === "✖ - Unverified");

//         message.member.roles.remove(unverifiedRole).catch(console.error);

//         message.member.roles.remove(removeAboveRole).catch(console.error);

//         message.member.roles.add(verifyRole).catch(console.error);

//         message.member.roles.add(addNewAboveRole).catch(console.error);

//       } 

//     }

//   }

//   if (message.content === '69') {
         
//     if (message.channel.id === '847735678187339796') {
        
//         const allowedRole = ('847779539408257034');
        
//             if(!message.member.roles.cache.some(r => r.name === "Host")) {
        
//               if (message.member.roles.cache.some(role => role.name === '✖ - Unverified')) {
        
//                 let comedianRole = message.guild.roles.cache.find(r => r.name === "🍺 - Comedian");
        
//                 message.member.roles.add(comedianRole).catch(console.error);
        
//                 const messages = ["We got a comedian here! His name is " + message.author.toString() + ".", "Oh wow, that joke you said was really funny " + message.author.toString() + ".", "Introduce yourself now " + message.author.toString() + " and go tell your joke to everyone!", "Is everyone ready to hear another joke? " + message.author.toString() + " has some!"]
        
//                 const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
//                 client.channels.cache.get('847780154896941126').send(randomMessage);
        
//                 } 
                
        
//           }
        
//     }

//   }

// 	},
// };