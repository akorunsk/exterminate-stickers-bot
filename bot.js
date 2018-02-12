const express = require('express');
const app = express();
const telegram_bot = require('node-telegram-bot-api');
const config = require('./modules/config');

app.set('view engine', 'ejs');

let portNum = config.port;
app.listen(portNum, () => console.log(`Server started on port ${portNum}.`));

//==// Here magic happens //==//

let token = '514342456:AAFg9Z0iXcarwTvo1I79oGDouvTNJ4Rb00M';
let bot = new telegram_bot(token, {polling: true});

bot.on('message', async function (msg) {
    const chatId = msg.chat.id;
    if (msg.sticker) {
        try {
            await bot.deleteMessage(chatId, msg.message_id);
        } catch (e) {
            console.log(e);
        }
    }
});

