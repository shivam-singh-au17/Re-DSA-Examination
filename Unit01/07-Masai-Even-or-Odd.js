
function runProgram(input) {

    let N = Number(input);

    if (N % 2 == 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`3`);
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
