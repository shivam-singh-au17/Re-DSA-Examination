
function runProgram(input) {

    let newInput = input.split(" ").map(Number);

    let A = newInput[0];
    let B = newInput[1];
    let C = newInput[2];
    let D = newInput[3];
    let E = newInput[4];

    let sum = (A) * (B) * (C) * (D) * (E);
    console.log(sum)

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`1 2 3 4 5`);
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
