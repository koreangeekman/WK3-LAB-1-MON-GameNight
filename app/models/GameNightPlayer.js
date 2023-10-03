


export class GameNightPlayer {
  constructor(name, imgurl) {
    this.name = name;
    this.imgurl = imgurl;
    // The score is defaulted to start at 0
    this.score = 0;
  }

  get PlayerCard() {
    return `
    <div class="col-12 col-md-4 p-3">
      <div class="playerCard d-flex align-items-center justify-content-between ">
        <img class="playerImg"
          src="${this.imgurl}"
          alt="${this.name}">
        <p class="fs-3 fw-bold ps-2 mb-0 text-center">${this.name}</p>
        <span class="fs-1 d-flex align-items-center p-2">
          <i onclick="app.GameNightController.scoreMinus1('${this.name}')" type="button" class="mdi mdi-minus-circle"></i>
          <p class="fw-bold mb-0 p-2">${this.score}</p>
          <i onclick="app.GameNightController.scorePlus1('${this.name}')" type="button" class="mdi mdi-plus-circle"></i>
        </span>
      </div>
    </div>
    `
  }

}

