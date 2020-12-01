const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const client = new Client();
 
client.on('qr', (qr) => {
    // Generate and scan this code with your phone
    console.log('QR RECEIVED', qr);
    qrcode.generate(qr, {small: true});
});
 
client.on('ready', () => {
    console.log('Client is ready!');
});
 
client.on('message', async (msg) => {
    if (msg.body == '!ping') {
        msg.reply('pong');
    }

    switch(msg.body){
      case `!ping`: msg.reply('pong');
      break;
      case `!chupalo`: msg.reply(`con mayo`);
      console.log(JSON.stringify(msg,null,2));
      let chat =await  msg.getChat();
      console.log(chat.id);
      break;
    }
});
 
client.initialize();