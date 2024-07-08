module.exports = {
  name: 'weekplay',
  description: 'Request a meeting schedule for everyone to agree on weekdays!',
  args: true,
  execute(message, args) {

    const author = message.author;

    if (!args.length && args) {
      return message.channel.send(`
${message.author} requested for a weekday schedule!
    <@&1256217332376928378>, decide which day you're free!
1. Monday 2.Tuesday 3. Wednesday 4. Thursday 5. Friday
`).then(reactmessage => {
        reactmessage.react("1️⃣"),
          reactmessage.react("2️⃣"),
          reactmessage.react("3️⃣")
        reactmessage.react("4️⃣"),
          reactmessage.react("🤷")
      }) 
  }

    message.channel.send(`
${message.author} requested for a weekday schedule!
      <@&1256217332376928378>, decide which day you're free in their timezone (${args}).
1. Monday 2.Tuesday 3. Wednesday 4. Thursday 5. Friday
    `).then(reactmessage => {
    reactmessage.react("1️⃣"),
      reactmessage.react("2️⃣"),
      reactmessage.react("3️⃣")
    reactmessage.react("4️⃣"),
      reactmessage.react("🤷")
  })

},
};