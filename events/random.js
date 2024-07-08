module.exports = {
  name: 'message',
  execute(message) {

    if (message.content === 'nepreact') {
      message.react('😄');
    } else if (message.content.toLowerCase() === 'hi nepabella') {
      message.react('😄');
    }

  },
};