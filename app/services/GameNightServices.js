import { AppState } from "../AppState.js"
import { GameNightPlayer } from "../models/GameNightPlayer.js";

class GameNightServices {

  constructor() {
    console.log('Game Night Services Accessed');
  }

  scoreMinus1(playerName) {
    const thisPlayer = AppState.GameNightPlayers.find(player => player.name == playerName);
    thisPlayer.score--;
  }

  scorePlus1(playerName) {
    const thisPlayer = AppState.GameNightPlayers.find(player => player.name == playerName);
    thisPlayer.score++;
  }

  addNewPlayer(newPlayerData) {
    const newPlayer = new GameNightPlayer(newPlayerData.playerName, newPlayerData.playerImgURL);
    console.log(newPlayer)

    AppState.GameNightPlayers.push(newPlayer);
  }

}

export const gameNightServices = new GameNightServices()