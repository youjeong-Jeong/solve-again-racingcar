import OutputView from "./OutputView.js";
import RacingGame from "./RacingGame.js";

class App {
  async play() {
    try {
      const racingGame = new RacingGame();
      await racingGame.start();
    } catch (error) {
      throw error;
    }
  }
}

export default App;
