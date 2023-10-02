import { GameNightPlayer } from "./models/GameNightPlayer.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  GameNightPlayers = [
    new GameNightPlayer('Average Joesmith', 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'),
    new GameNightPlayer('Wandering Warbler', 'https://images.unsplash.com/photo-1593766821405-f605e0f9535f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3BvcnRzbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')
  ]



  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
