
function runProgram(input) {

    let N = Number(input);

    for (let i = 1; i <= 10; i++) {
        console.log(N + " x " + i + " = " + N * i);
    }

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`2`);
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
