import RacingGame from "./RacingGame.js";

class App {
  async play() {
    const racingGame = new RacingGame();
    racingGame.start();
  }
}

export default App;
