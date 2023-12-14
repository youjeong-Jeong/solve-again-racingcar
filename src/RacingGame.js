import { Random } from "@woowacourse/mission-utils";
import { ERROR } from "./Constants.js";
import InputView from "./InputView.js";

class RacingGame {
  #moveResult;

  constructor() {
    this.#moveResult = [];
  }

  async start() {
    const carNames = await this.userInputCarName();
    const tryCount = await this.userInputTryCount();
    this.#moveResult = this.resetMoveResult(carNames);
    this.repeatGame(carNames, tryCount);
    const winner = this.checkWinner(carNames);

  }

  checkWinner(carNames = []) {
    const moveCountList = this.getLengths();
    const maxNum = Math.max(...moveCountList);
    const winner = [];
    this.#moveResult.forEach( (result, idx) => {
      if(result.length === maxNum) {
        winner.push(carNames[idx]);
      }
    })
    return winner;
  }

  getLengths() {
    return this.#moveResult.map(element => element.length);
  }

  resetMoveResult(carNames = []) {
    const resetArray = [];
    carNames.forEach( () => {
      resetArray.push([]);
    })
    return resetArray;
  }

  repeatGame(carNames = [], tryCount = 0) {
    for(let i = 0; i < tryCount; i += 1)  {
      carNames.forEach( (car, idx) => {
        this.decisionToMove(idx);
      })
    }
  }

  decisionToMove(idx = 0) {
    const result = Random.pickNumberInRange(0, 9);
    if(result >= 4) {
      this.#moveResult[idx].push('-');
    }
  }

  async userInputTryCount() {
    const inputTryCount = await InputView.readTryCount();
    this.validateTryCount(inputTryCount);
    return Number(inputTryCount);
  }

  validateTryCount(inputTryCount = '') {
    this.validateIsEmpty(inputTryCount);
    this.validateInteger(inputTryCount);
    this.validateOutOfRange(inputTryCount);
  }

  validateOutOfRange(inputTryCount = '') {
    const tryCount = Number(inputTryCount);
    if (tryCount < 1) {
      throw new Error(ERROR.error);
    }
  }

  validateInteger(inputTryCount = '') {
    const inputAsNumber = Number(inputTryCount);
    if (Number.isNaN(Number(inputAsNumber))) {
      throw new Error(ERROR.error);
    }
    if (!Number.isInteger(inputAsNumber)) {
      throw new Error(ERROR.error);
    }
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
    carNames.forEach(name => {
      if (name.length > 5) {
        throw new Error(ERROR.error);
      }
    })
  }

  validateOneCar(inputCarNames = '') {
    if (!inputCarNames.includes(',')) {
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
