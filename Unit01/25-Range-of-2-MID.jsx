
function runProgram(input) {

    let newInput = input.split(" ").map(Number);

    let A = newInput[0];
    let B = newInput[1];

    let res = "";
    let sum = A;
    for (let i = A; i <= B; i++) {
        if (i % A == 0 && i == sum) {
            res += i + " ";
            sum += i;
        }
    }
    console.log(res);

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`4 16`);
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
