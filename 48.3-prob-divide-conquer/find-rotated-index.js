function findRotatedIndex(arr, target) {
    let res = -1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            res = i
        }
    }
    return res
}

module.exports = findRotatedIndex