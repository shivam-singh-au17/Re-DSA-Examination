
function runProgram(input) {
    let newInput = input.split("\n");
    let testCases = Number(newInput[0]);
    let stack = [];
    for (let i = 1; i <= testCases; i++) {
        let data = newInput[i].split(" ").map(Number);
        if (data[0] === 1) {
            stack.push(data[1]);
        } else if (data[0] === 2) {
            if (stack.length !== 0) {
                stack.pop();
            }
        } else {
            if (stack.length !== 0) {
                console.log(stack[stack.length - 1]);
            } else {
                console.log("Empty!");
            }
        }
    }
}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`6
1 15
1 20
2
3
2
3`);
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
