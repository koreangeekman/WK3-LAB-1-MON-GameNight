import { AppState } from "../AppState.js"
import { GameNightPlayer } from "../models/GameNightPlayer.js";
import { gameNightServices } from "../services/GameNightServices.js";
import { getFormData } from "../utils/FormHandler.js";
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
    gameNightServices.scoreMinus1(player)
    _drawPlayers()
  }

  scorePlus1(player) {
    gameNightServices.scorePlus1(player)
    _drawPlayers()
  }
  showNewPlayerForm() { // a show/hide toggle switch
    document.getElementById('formCard').classList.toggle('d-none')
    document.getElementById('toggleAddPlayerForm').classList.toggle('d-none')
  }

  addNewPlayer(event) {
    event.preventDefault();
    gameNightServices.addNewPlayer(getFormData(event.target));

    // alternative original format - more descriptive:
    // const form = event.target;
    // const newPlayerData = getFormData(form);
    // gameNightServices.addNewPlayer(newPlayerData);

    _drawPlayers();
    this.showNewPlayerForm(); // toggle off the form to hide
  }

}