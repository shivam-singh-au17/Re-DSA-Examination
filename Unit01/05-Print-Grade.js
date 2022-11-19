
function runProgram(input) {

    let N = Number(input);

    if (N === 100) {
        console.log("A");
    } else if (N >= 90) {
        console.log("B");
    } else if (N >= 80) {
        console.log("C");
    } else {
        console.log("F");
    }

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`80`);
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
