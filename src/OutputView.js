import { Console } from "@woowacourse/mission-utils";

const OutputView = {
    printResultMessage() {
      Console.print('실행 결과');
    },

    printResult(carNames, moveResult) {
        carNames.forEach( (car, idx) => {
          Console.print(`${car} : ${moveResult[idx].join('')}`);
        })
    },

    printWinner(winner) {
      Console.print(`최종 우승자 : ${winner.join(', ')}`);
    }
}

export default OutputView;
