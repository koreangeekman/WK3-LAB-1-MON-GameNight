export const GameNightView = `
<div class="container-fluid">
      <div class="row">
        <div class="col-12 p-3">

          <form class="card p-3 d-none" id="formCard" onsubmit="app.GameNightController.addNewPlayer(event)">
            <div class="form-group pb-2">
              <label for="playerName">Player Name: </label>
              <input class="form-control" type="text" name="playerName" id="playerName" placeholder="John Doe" required>
            </div>

            <div class="form-group">
              <label for="playerImgURL">Player Image URL:</label>
              <input class="form-control" type="url" name="playerImgURL" id="playerImgURL"
                placeholder="https://unsplash.com/photos/x_8oJhYU31k" required>
            </div>
            <button class="btn btn-success mt-4 mx-5" type="submit">Add Player</button>
          </form>
          <div class="card p-3 bg-light" id="toggleAddPlayerForm">
            <button class="btn btn-success mx-5" type="button" onclick="app.GameNightController.showNewPlayerForm()">Add
              New Player</button>
          </div>

        </div>
        <!-- SECTION PLAYER LIST DRAW POINT -->
        <section id="playerList">
          <!--
          <div class="col-12 col-md-4 p-3">
            <div class="playerCard d-flex align-items-center justify-content-between ">
              <img class="playerImg"
                src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                alt="example image">
              <p class="fs-3 fw-bold ps-2 mb-0 text-center">Average Joebobadob</p>
              <span class="fs-1 d-flex align-items-center p-2">
                <i onclick=" scoreMinus1('user')" type="button" class="mdi mdi-minus-circle"></i>
                <p class="fw-bold mb-0 p-2">0</p>
                <i onclick="scorePlus1('user')" type="button" class="mdi mdi-plus-circle"></i>
              </span>
            </div>
          </div> -->

        </section>
        <!-- !SECTION PLAYER LIST DRAW POINT -->

      </div>
    </div>
`