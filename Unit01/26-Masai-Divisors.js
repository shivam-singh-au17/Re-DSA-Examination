
function runProgram(input) {

    let newInput = input.split(" ").map(Number);

    let A = newInput[0];
    let B = newInput[1];
    let K = newInput[2];

    let count = 0;
    for (let i = A; i <= B; i++) {
        if (i % K == 0) {
            count++;
        }
    }
    console.log(count);

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`1 10 1`);
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
