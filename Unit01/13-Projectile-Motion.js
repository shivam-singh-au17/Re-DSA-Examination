
function runProgram(input) {

    let newInput = input.split(" ").map(Number);

    let A = newInput[0];
    let B = newInput[1];
    let C = newInput[2];
    let L = newInput[3];
    let R = newInput[4];

    let prod = 1;
    for (let i = L; i <= R; i++) {
        prod *= A * i * i + B * i + C;
    }
    console.log(prod)

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`-1 3 8 -2 2`);
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
