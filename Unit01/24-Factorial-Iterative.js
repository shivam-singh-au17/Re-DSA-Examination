
function runProgram(input) {

    let N = Number(input);

    let prod = 1;
    for (let i = 1; i <= N; i++) {
        prod *= i;
    }
    console.log(prod);

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`5`);
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
