const TelegramBot = require('node-telegram-bot-api');

const token = '5810289142:AAECBnwBXHGDZQ_D9RQGcOsUhv6U7cF3GiM'; // Replace with your actual bot token
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const firstName = msg.from.first_name;
  const welcomeMessage = `Hello, ${firstName}! Welcome to your bot.\n\n`
    + "You can use the following commands:\n"
    + "/questions - See the list of questions.\n"
    + "/help - See available commands.\n"
    + "/about - Learn more about this bot.";
  bot.sendMessage(chatId, welcomeMessage);
});

bot.onText(/\/questions/, (msg) => {
  const chatId = msg.chat.id;
  const questionsMessage = `Here are some questions:\n
  1. What is your favorite color?\n
  2. What is your favorite food?\n
  3. Where are you from?`;
  bot.sendMessage(chatId, questionsMessage);
});

bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  const helpMessage = `Here are the available commands:\n
  /questions - See the list of questions.\n
  /help - See available commands.\n
  /about - Learn more about this bot.`;
  bot.sendMessage(chatId, helpMessage);
});

bot.onText(/\/about/, (msg) => {
  const chatId = msg.chat.id;
  const aboutMessage = "This bot was created to demonstrate how to implement simple commands and responses in a Telegram bot using Node.js.\n"
    + "Feel free to explore the commands and interact with the bot!";
  bot.sendMessage(chatId, aboutMessage);
});
bot.onText(/\/location/, (msg) => {
  const chatId = msg.chat.id;
  // Geolocation coordinates
  const latitude = "50°05'17.3\"N";
  const longitude = "14°24'57.1\"E";
  
  // Direction
  const direction = "N";

  // Format the caption
  const caption = `Here is the location:\nLatitude: ${latitude}°\nLongitude: ${longitude}°\nDirection: ${direction}`;
  
  // Send a message with the formatted caption
  bot.sendMessage(chatId, caption);
});

  // Replace with your actual Google Maps API key
  const googleMapsApiKey = 'AIzaSyAJLCw_PVt4Rmp48LzTK_tnKMsWko2BPzk';

  // Construct the Google Maps URL with location data
  const mapUrl = `https://www.google.com/maps/place/50%C2%B005'17.3%22N+14%C2%B024'57.1%22E/@50.088162,14.4144371,20z/data=!4m4!3m3!8m2!3d50.0881389!4d14.4158611?entry=ttu`;

  // Send a message containing the map link
  bot.sendPhoto(chatId, mapUrl, {
    caption: 'Here is the location of Czech Republic, Prague city center.',
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Open in Google Maps', url: mapUrl }]
      ]
    }
  });




