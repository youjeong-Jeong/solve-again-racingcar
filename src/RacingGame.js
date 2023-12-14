import {ERROR} from "./Constants.js";
import InputView from "./InputView.js";

class RacingGame {
  constructor() {}

  async start() {
    const carNames = await this.userInputCarName();
  }

  async userInputCarName() {
    const inputCarNames = await InputView.readCarName();
    this.validateCarName(inputCarNames);
    return inputCarNames.split(',');
  }

  validateCarName(inputCarNames = '') {
    this.validateIsEmpty(inputCarNames);
    this.validateOneCar(inputCarNames);
    const carNames = inputCarNames.split(',');
    this.validateCarNameLength(carNames);
  }

  validateCarNameLength(carNames = []) {
    carNames.forEach( name => {
      if(name.length > 5) {
        throw new Error(ERROR.error);
      }
    })
  }

  validateOneCar(inputCarNames = '') {
    if(!inputCarNames.includes(',')) {
      throw new Error(ERROR.error);
    }
  }

  validateIsEmpty(input = '') {
    if (!input.trim()) {
      throw new Error(ERROR.error);
    }
  }
}

export default RacingGame;
