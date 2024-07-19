module.exports = {
  rolePerm: 'host',
  name: 'weekplay',
  description: 'Request a meeting schedule for everyone to agree on weekdays!',
  aliases: ['weekday', 'prepday', 'prepweek', 'reqplay', 'playday'],
  guildOnly: true,
  args: true,
  cooldown: 1800,
  execute(message, args) {

    const targetChannel = message.client.channels.cache.get('1253265326393786451');

    if (!args.length && args) {
      return targetChannel.send(`
${message.author} requested for a weekday schedule!
    Decide which day you're free!
1. Monday 2.Tuesday 3. Wednesday 4. Thursday 5. Friday
`).then(reactmessage => {
        reactmessage.react("1️⃣"),
          reactmessage.react("2️⃣"),
          reactmessage.react("3️⃣"),
        reactmessage.react("4️⃣"),
        reactmessage.react("5️⃣"),
          reactmessage.react("🤷")
      }) 
  } else

    targetChannel.send(`
${message.author} requested for a weekday schedule!
      Decide which day you're free in their timezone (${args.join(' ')}).
1. Monday 2.Tuesday 3. Wednesday 4. Thursday 5. Friday
    `).then(reactmessage => {
    reactmessage.react("1️⃣"),
      reactmessage.react("2️⃣"),
      reactmessage.react("3️⃣"),
    reactmessage.react("4️⃣"),
    reactmessage.react("5️⃣"),
      reactmessage.react("🤷")
  })

},
};