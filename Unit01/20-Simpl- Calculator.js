
function runProgram(input) {

    let newInput = input.split(" ");

    let A = Number(newInput[0]);
    let B = newInput[1];
    let C = Number(newInput[2]);

    if (B === "+") {
        console.log(A + C);
    } else if (B === "-") {
        console.log(A - C);
    } else if (B === "*") {
        console.log(A * C);
    } else if (B === "/") {
        console.log(Math.floor(A / C));
    }

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`2 * 3`);
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
