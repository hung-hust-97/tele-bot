require('dotenv').config()
const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const { Telegraf } = require("telegraf");


const { TOKEN } = process.env
const bot = new Telegraf(TOKEN);


bot.start((ctx) => ctx.reply("Welcome"));
bot.help((ctx) => ctx.reply("Send me a sticker"));

bot.on("sticker", (ctx) => {
    console.log(ctx.chat);
    ctx.reply("🐶")
});

//gửi đến một
bot.on('text', async (ctx) => {
    // Explicit usage
    await ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.state.role}`);
  
    // Using context shortcut
    await ctx.reply(`Hello ${ctx.state.role}`);
  });

bot.on("message", async (ctx) => {
    console.log(ctx.chat);
    ctx.Id=-1001839802744;
    console.log(ctx.state);
  const message = ctx.update.message.text;
  if (message.match(/hello/)) {
    ctx.reply("Xin chào");
  } else {
    // await ctx.telegram.sendMessage(-1001839802744, `Hello ${ctx.state.role}`);
    // ctx.reply(" Con lợn này");
  }
});

bot.launch();