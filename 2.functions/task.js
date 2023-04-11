function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let avg = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++){
    if (min > arr[i]){
      min = arr[i];
    }
    if (max < arr[i]){
      max = arr[i];
    }
    sum += arr[i];
  }
  avg = Number((sum/arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = arr.reduce((currentSum, currentNumber) => {
    return currentSum + currentNumber 
  }, 0)
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let max = Math.max(...arr); 
  let min = Math.min(...arr);

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0){
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement; 
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0){
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  } 
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
   let maxWorkerResult = -Infinity;
   let arrOfArr = [...value];
   const arr = [...arrOfArr];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]){
      max = arr[i];
    }
   console.log(makeWork(arr, func));
  }

}
