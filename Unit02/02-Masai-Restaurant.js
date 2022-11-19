
function runProgram(input) {
    let newInput = input.split("\n");
    let testCases = Number(newInput[0]);
    let stack = [];
    for (let i = 1; i <= testCases; i++) {
        let data = newInput[i].split(" ").map(Number);
        if (data[0] === 1) {
            if (stack.length !== 0) {
                let food = stack.pop();
                console.log(food);
            } else {
                console.log("No Food");
            }
        } else if (data[0] === 2) {
            stack.push(data[1])
        }
    }
}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`6
1
2 5
2 7
2 9
1
1`);
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
