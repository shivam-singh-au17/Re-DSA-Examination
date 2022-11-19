
function runProgram(input) {

    let N = Number(input);

    let sum = 0;
    for (let i = 1; i <= N; i++){
        if (i % 2 == 1) {
            sum += i;
        }
    }
    console.log(sum);

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`7`);
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
