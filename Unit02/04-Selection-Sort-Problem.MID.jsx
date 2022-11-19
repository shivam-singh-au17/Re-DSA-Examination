


function selectionSort(arr) {
   let min = 0;
   for (let i = 0; i < arr.length - 1; i++) {
     min = i;
     for (let j = i + 1; j < arr.length; j++) {
       if (arr[j] < arr[min]) {
         min = j;
       }
     }
     let temp = arr[min];
     arr[min] = arr[i];
     arr[i] = temp;
   }
   return arr.join(" ");
}


function runProgram(input) {
  let newInput = input.split("\n");
  let arr = newInput[1].split(" ").map(Number);
  console.log(selectionSort(arr));
}

if (process.env.USERNAME === "Jay Mahakaal") {
  runProgram(`5
3 5 0 9 8`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
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
