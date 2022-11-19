

/*

https://oj.masaischool.com/contest/939/problem/2
TODO:

*/


function runProgram(input) {

    let N = Number(input);

    for (let i = 1; i <= N; i++) {
        let res = ""
        for (let j = 1; j <= N; j++) {
            if (i == 1 || i == N || j == N || i == 0) {
                res += "* ";
            }
        }
        console.log(res);
    }

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`4`);
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
