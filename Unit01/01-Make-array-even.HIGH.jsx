
/*

TODO:

*/

function makeArrEven(arr) {

  if (arr.length == 1) {
    if (arr[0] % 2 == 0) {
      return "yes";
    } else {
      return "no";
    }
  } else {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        arr[j] = arr[i];
        sum += arr[j];
      }
    }
    console.log("sum:", sum);
    if (sum % 2 == 0) {
      return "yes";
    } else {
      return "no";
    }
  }
}

function runProgram(input) {
  let newInput = input.split("\n");
  let testCases = Number(newInput[0]);
  for (let i = 1; i <= testCases; i++) {
    let arr = newInput[i * 2].trim().split(" ").map(Number);
    console.log(makeArrEven(arr));
  }
}

if (process.env.USERNAME === "Jay Mahakaal") {
  runProgram(`2
1
2
3
1 2 3`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  var read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
