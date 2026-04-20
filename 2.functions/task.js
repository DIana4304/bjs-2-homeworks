"use strict"

function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }

    sum += arr[i];
  }

  avg = sum / arr.length;

  return { min: min, max: max, avg: +avg.toFixed(2) };
}

function summElementsWorker(...arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        let sum = arr.reduce((acc, n) => acc + n, 0);
        return sum;
    }
}

function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        let max = Math.max(...arr);
        let min = Math.min(...arr);
        return max - min;
    }
}

function differenceEvenOddWorker(...arr) {

    if (arr.length === 0) {
        return 0;
    } else {
        let sumEvenElement = 0;
        let sumOddElement = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                sumEvenElement += arr[i];
            } else {
                sumOddElement += arr[i];
            }
        }

        return sumEvenElement - sumOddElement;
    }
}

function averageEvenElementsWorker(...arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        let sumEvenElement = 0;
        let countEvenElement = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                sumEvenElement += arr[i];
                countEvenElement++;
            }
        }

        return sumEvenElement / countEvenElement;
    }
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let result = [];

  for (let elem of arrOfArr) {
    let i = 0;
    result.push(func(...elem)); // вызываем коллбэк и сохраняем результат
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i] > maxWorkerResult) {
      maxWorkerResult = result[i];
    }
  }

  return maxWorkerResult;
}
