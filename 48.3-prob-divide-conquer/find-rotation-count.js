function findRotationCount(arr) {
    let min;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i - 1] || i === 0) {
        min = arr[i]
    }
  }
  return arr.indexOf(min)
}

module.exports = findRotationCount