import { AppState } from "../AppState.js"
import { GameNightServices } from "../services/GameNightServices.js";
import { setHTML } from "../utils/Writer.js";

function _drawPlayers() {
  let contentHTML = '';
  AppState.GameNightPlayers.forEach(player => contentHTML += player.PlayerCard)
  setHTML('playerList', contentHTML)
}



export class GameNightController {

  constructor() {
    console.log('Game Night Controller has been loaded. Player Array:', AppState.GameNightPlayers)
    _drawPlayers()
  }

  scoreMinus1(player) {
    console.log('subtracted trigger')
    GameNightServices.scoreMinus1(player)
    _drawPlayers()
  }

  scorePlus1(player) {
    console.log('added trigger')
    GameNightServices.scorePlus1(player)
    _drawPlayers()
  }
  showNewPlayerForm() {
    document.getElementById('formCard').classList.toggle('d-none')
    document.getElementById('toggleAddPlayerForm').classList.toggle('d-none')
  }

}