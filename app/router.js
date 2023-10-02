import { AboutController } from "./controllers/AboutController.js";
import { GameNightController } from "./controllers/GameNightController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  {
    path: '',
    controller: GameNightController,
    view: null
  }
  // {
  //   path: '#/about',
  //   controller: [AboutController, ValuesController],
  //   view: AboutView
  // }
]