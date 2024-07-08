// module.exports = {
//   name: 'message',
//   execute(message) {

//   if (message.content === 'Nepabella') {
//     const messages = ["We got a comedian here! His name is " + message.author.toString() + ".", "Oh wow, that joke you said was really funny " + message.author.toString() + ".", "Introduce yourself now " + message.author.toString() + " and go tell your joke to everyone!", "Is everyone ready to hear another joke? " + message.author.toString() + " has some!"]
//     const randomMessage = messages[Math.floor(Math.random() * messages.length)];

//     client.channels.cache.get('1253679080193392661').send(randomMessage);
//   }

//  },
// };