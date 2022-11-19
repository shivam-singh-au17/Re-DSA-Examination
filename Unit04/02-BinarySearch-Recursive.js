
function binarySearch(arr, key, low, high) {


    if (low <= high) {

        let mid = Math.floor(low + (high - low) / 2);

        if (arr[mid] === key) {
            return 1;
        }

        if (arr[mid] > key) {
            return binarySearch(arr, key, low, mid - 1);
        } else if (arr[mid] < key) {
            return binarySearch(arr, key, mid + 1, high)
        }
        
    } else {
        return -1;
    }

}



function runProgram(input) {
    let newInput = input.split("\n");
    let lenAndKey = newInput[0].split(" ").map(Number);
    let key = lenAndKey[1];
    let arr = newInput[1].split(" ").map(Number);
    let low = 0;
    let high = arr.length - 1;
    arr.sort((a, b) => { return a - b });
    console.log(binarySearch(arr, key, low, high))
}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`5 0
2 -2 0 3 4`);
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
