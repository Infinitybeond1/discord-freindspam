import { Client } from "discord.js-selfbot-v13"
import fs from "fs"

// EDIT THIS
// place name of user here
const user = "<user_name_here>"

const tokens = fs.readFileSync('./tokens.txt', 'utf8').split("\n")

for (var i = 0; i < tokens.length; i++) {
    const client = new Client()

    client.on('ready', async () => {
        console.log(`Sending freind request from ${tokens[i]}`);
        const rm = new RelationshipManager()
        rm.sendFriendRequest(user)
        await new Promise(r => setTimeout(r, 2000));
        client.destroy()
    })

    client.login(tokens[i])

    if (i == tokens.length - 1) {
        i = 0
    }
}
