import { AppState } from "../AppState.js"
import { GameNightPlayer } from "../models/GameNightPlayer.js";

class GameNightServices {

  constructor() {
    console.log('Game Night Services Accessed');
  }

  scoreMinus1(playerName) {
    const thisPlayer = AppState.GameNightPlayers.find(player => player.name == playerName);
    thisPlayer.score--;
    console.log('subtracted');
  }

  scorePlus1(playerName) {
    const thisPlayer = AppState.GameNightPlayers.find(player => player.name == playerName);
    thisPlayer.score++;
    console.log('added');
  }

}

export const gameNightServices = new GameNightServices()