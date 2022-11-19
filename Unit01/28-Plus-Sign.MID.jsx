
/*

https://oj.masaischool.com/contest/938/problem/2
TODO:

*/


function runProgram(input) {

    let N = Number(input) + 2;

    let res = ""
    for (let j = 1; j <= N; j++) {
        res += j + " ";
        console.log(res);
    }

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`1`);
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
