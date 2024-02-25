const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.API_KEY_BOT, {
  polling: true,
  autoStart: true,
});

bot.onText(/\/start/, (msg) => {
  console.log('msg', msg);

  bot.sendMessage(msg.chat.id, 'Welcome', {
    reply_markup: {
      keyboard: [['Wish list', 'Eat & drink']],
    },
  });
});

bot.on('message', (msg) => {
  const WishList = 'wish list';
  if (msg.text.toString().toLowerCase().indexOf(WishList) === 0) {
    bot.sendMessage(msg.chat.id, 'Pick something');
  }
  const EatDrink = 'Eat & drink';
  if (msg.text.toString().toLowerCase().includes(EatDrink)) {
    bot.sendMessage(msg.chat.id, 'Write what you prefer');
  }
});
