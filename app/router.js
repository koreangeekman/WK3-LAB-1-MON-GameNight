import { AboutController } from "./controllers/AboutController.js";
import { GameNightController } from "./controllers/GameNightController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { GameNightView } from "./views/GameNightView.js";


export const router = [
  {
    path: '',
    controller: GameNightController,
    view: GameNightView
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]