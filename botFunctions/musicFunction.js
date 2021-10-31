const Discord = require("discord.js");
const boolVC = require("../utils/boolVC");
const { getChart } = require("billboard-top-100");

var todayDate = new Date(Date.now() - 24 * 60 * 60 * 1000 * 7) //billboard data from a week ago
  .toISOString()
  .slice(0, 10);
let songTitle = "hello";

//gets first song ready when bot starts
getChart("hot-100", todayDate, (err, chart) => {
  if (err) console.log(err);
  songTitle = chart.songs[Math.round(Math.random() * 99)].title;
});

const playMusic = async (msg, args, guildQueue, queue) => {
  await queue.join(msg.member.voice.channel);
  //setting data -> skipCounts and userRequests
  //checks if user and bot are in the same channel and if there is an argument
  if (boolVC.sameVC(msg) && !args.length === 0) {
    song = await queue.play(args.join(" ")).catch((_) => {
      if (!guildQueue) queue.stop();
    });
    song.setData({
      skipCounts: 0,
      userRequest: [],
    });
    var embed = new Discord.MessageEmbed()
      .setTitle("Adding to queue")
      .setDescription(song.name)
      .setImage(song.thumbnail, 300, 300);
    msg.channel.send({ embeds: [embed] });
    return song;
  } //if no argument
  else if (boolVC.sameVC(msg)) {
    //gets song from billboard hot 100
    song = await queue.play(songTitle).catch((_) => {
      if (!guildQueue) queue.stop();
    });
    song.setData({
      skipCounts: 0,
      userRequest: [],
    });
    var embed = new Discord.MessageEmbed()
      .setTitle("Adding to queue")
      .setDescription(song.name)
      .setImage(song.thumbnail, 300, 300);
    msg.channel.send({ embeds: [embed] });
    //gets next song ready
    getChart("hot-100", todayDate, (err, chart) => {
      if (err) console.log(err);
      songTitle = chart.songs[Math.round(Math.random() * 99)].title;
    });
    return song;
  }
};

const stopMusic = (msg, guildQueue) => {
  if (boolVC.sameVC(msg)) guildQueue.stop();
};

const progressBar = (msg, guildQueue) => {
  const ProgressBar = guildQueue.createProgressBar();
  if (boolVC.sameVC(msg)) msg.reply(ProgressBar.prettier);
};

const pauseMusic = (msg, guildQueue) => {
  if (boolVC.sameVC(msg)) guildQueue.setPaused(true);
  // bbList('hot-100', '2021-08-27');
};

const resumeMusic = (msg, guildQueue) => {
  if (boolVC.sameVC(msg)) guildQueue.setPaused(false);
};

const skipMusic = (msg, guildQueue, song) => {
  let num = 0;
  msg.member.voice.channel.members.forEach((mem) => {
    //checks if user if deaf
    if (!mem.voice.deaf) num = num + 1;
  });
  console.log(song.data.skipCounts);
  //checks if user_id is repeating, if not adds skipCount and
  //appends user to userRequest
  if (!song.data.userRequest.includes(msg.author.id)) {
    song.data.skipCounts = song.data.skipCounts + 1;
    song.data.userRequest.push(msg.author.id);
    msg.reply(`\n\t ** ${song.data.skipCounts} / ${num - 1} ** want to skip`);
  }
  //prevents repeating requests
  else msg.reply("(≖᷆︵︣≖)👎");
  //checks if condition is satisfied
  if (song.data.skipCounts >= 0.5 * (num - 1)) {
    guildQueue.skip();
    song.data.skipCounts = 0;
    song.data.userRequest = [];
  }
};

module.exports = {
  stopMusic,
  progressBar,
  pauseMusic,
  resumeMusic,
  skipMusic,
  playMusic,
};
