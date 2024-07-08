module.exports = {
    name: 'message',
    execute(message) {

        if (message.content === "PM me") {
     	    message.author.send("Meow!")
        }

        if (message.content === "<@&1258314300658024531>") {
	        message.channel.send("Nya?")
	        message.react("🐟")
        }

        if (message.content === "<@1258261514842804276>") {
            message.channel.send("Meow!")
            message.react("🐱")
        }

    }
}