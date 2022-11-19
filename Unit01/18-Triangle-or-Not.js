
function runProgram(input) {

    let newInput = input.split(" ").map(Number);

    let A = newInput[0];
    let B = newInput[1];
    let C = newInput[2];

    if (A + B > C && B + C > A && C + A > B) {
        console.log("Yes");
    } else {
        console.log("No");
    }

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`11 3 17`);
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
