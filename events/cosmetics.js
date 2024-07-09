module.exports = {
    name: 'message',
    execute(message) {

        const reactions = [null, "🐱", "🐟"]
        const messages = ["Nya?", "Nyan?", "Meow!", "Meow", "meow", "*<@&1258314300658024531> runs away from you.*"]
            let randomMessage = messages[Math.floor(Math.random() * messages.length)];
            let randomReaction
    
        if (message.content === "PM me Nepabella") {
     	    message.author.send("Meow!")
        }

        if (message.content.includes("<@&1258314300658024531>") && !message.author.bot) {
            message.channel.send("Meow!")
            message.react("🐱")
        }

        if (message.content.includes("<@1258261514842804276>") && !message.author.bot) {
            randomReaction = reactions[Math.floor(Math.random() * reactions.length)];
	        message.channel.send(randomMessage)
            if (randomReaction === null) {
                return
            } else message.react(randomReaction)
	        
        }

    }
}