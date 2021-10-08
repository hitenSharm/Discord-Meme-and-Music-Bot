const handleError = (error) => {
  console.log("|| Type of error - >", error.name," || ");
  switch (error.name) {
    //When useer enters an incomplete ccommand like "!yoda"
    case 'DiscordAPIError':
      return "Command is incomplete!"
      break

      //when user tries to skip,stop or resume a song without playing any song
    case 'TypeError':
      return "No song is currently playing!"
      break

      //When a person has not joined voice channel but tries to play the song using bot
    case 'UnknownVoice':
      return "Please join a voice channel!"
      break

      //for rest of the errors
    default:
      return "Invalid command!"
  }
}

module.exports = handleError