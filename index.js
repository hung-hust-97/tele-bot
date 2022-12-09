require('dotenv').config()
const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const { Telegraf } = require("telegraf");
const telegrafGetChatMembers = require('telegraf-getchatmembers')


const { TOKEN } = process.env
const bot = new Telegraf(TOKEN);


bot.start((ctx) => ctx.reply("Welcome"));
bot.help((ctx) => ctx.reply("Send me a sticker"));

bot.on("sticker", (ctx) => {
    console.log(ctx.chat);
    ctx.reply("🐶")
});

// //gửi đến một
// bot.on('text', async (ctx) => {
//     // Explicit usage
//     await ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.state.role}`);
  
//     // Using context shortcut
//     await ctx.reply(`Hello ${ctx.state.role}`);
//   });

bot.on("message", async (ctx) => {
  console.log("chay bew");
  console.log(ctx.message.message_thread_id);
    console.log(ctx.message);
    ctx.Id=-1001839802744;
  const message = ctx.update.message.text;
  if (message.match(/hdsd/)) {
    ctx.reply("Xin chào. Bạn không xem bóng à mà hỏi", {reply_to_message_id:ctx.message.message_id})
    // ctx.reply("Xin chào. Bạn không xem bóng à mà hỏi");
  } else {
    // await ctx.telegram.sendMessage(-1001839802744, `Hello ${ctx.state.role}`);
    // ctx.reply(" Con lợn này");
    // -1001893613848

    //trả lời channel trong channel
    // await ctx.telegram.sendMessage(-1001839802744, `Hello test`, {reply_to_message_id:177});

    await ctx.telegram.sendMessage(-1001893613848, `Hello test`, {reply_to_message_id:ctx.message.message_thread_id});
    await ctx.telegram.sendMessage(-1001893613848, `Hello test`, {reply_to_message_id:ctx.message.message_id});
    // ctx.reply("đang xem bóng", {message_thread_id:ctx.message.message_thread_id})
  }
});
// bot.use(telegrafGetChatMembers)
// bot.telegram.sendMessage(-1001839802744, `Hello tao test tao bai channel`);
// bot.use(async (ctx, next) => {
//   console.log("alolao");
//   await ctx.telegram.sendMessage(-1001839802744, `Hello tao tao bai channel`);
// })
// bot.hears(/chatmember/, async (ctx) => {
//   console.log(ctx.chat.id);
//   // ctx.getChatMember( ctx.chat.id, '-1001839802744')
//   //   .then(s => {
//   //       console.log('logs', s)
//   //   })
//   //   .catch(e => {
//   //       console.log('error', e)
//   //   })
//   // ctx.getChatMembersCount('-10018398027')
//   //     .then(s => {
//   //         console.log('logs', s)
//   //     })
//   //     .catch(e => {
//   //         console.log('error', e)
//   //     })

// })
// bot.on('message', async (ctx) => {
// 	// var abcd = ctx.getChatMembers(ctx.chat.id) //[Members]
//   // console.log(abcd);
// 	// var abcd1 =ctx.getChatMembers() //[Members]
//   // console.log(abcd1);
// 	// telegrafGetChatMembers.check(ctx.chat.id) //[Members]
// 	// telegrafGetChatMembers.all //[Chats]
  
// })
bot.launch();