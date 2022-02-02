const { Client, DMChannel } = require('discord.js')

const main = async(inputs, auths, event) => {
  await new Promise((resolve,reject)=>{
    const client = new Client()
  
    client.on('ready', async () => {
      try{
        console.log(`Logged in as ${client.user.tag}`)
        const channel = await client.channels.fetch(inputs.channelId)
        const dmChannel = new DMChannel(client, channel)
        await dmChannel.send(inputs.message)
        resolve()
      }catch(err){
        console.error(err)
        reject()
      }
    })
    
    client.on('error', (err)=>{
      console.error(err)
      reject()
    })

    client.login(inputs.token)
  })
}

module.exports.main = main