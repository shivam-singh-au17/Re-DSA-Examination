
function runProgram(input) {

    let newInput = input.split("\n");
    let arr = newInput[1].split(" ").map(Number);
    console.log('arr:', arr)

    let stack = [];
    stack.push(arr[0]);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < stack[stack.length - 1]) {
            stack.push(arr[i]);
        }
    }
    console.log(stack[stack.length - 1]);

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`5
3 5 0 9 8 -1 -5 9 6 4 -8`);
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
