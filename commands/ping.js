module.exports = {
  name: "ping",
  description: "Ping!",
  execute(message, args) {
    message.channel.send(`🏓 Latency is ${Date.now() - message.createdTimestamp}ms.`);
  }
};