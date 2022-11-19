

/*

https://oj.masaischool.com/contest/938/problem/3
TODO:

*/

function findAllPrime(num1, num2) {
    let res = "";
    for (let i = num1; i <= num2; i++) {
        let count = 0;
        for (let j = num1; j <= num2; j++) {
            if (i % j == 0) {
                count++
            }
        }
        if (count == 1) {
            res += i + " ";
        }
    }
    console.log(res);
}



function runProgram(input) {

    let newInput = input.split(" ").map(Number);

    let L = newInput[0];
    let R = newInput[1];
    let temp = 0;
    if (L == 1) {
        temp = 2;
    } else {
        temp = L
    }
    findAllPrime(temp, R)

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`2 5`);
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
