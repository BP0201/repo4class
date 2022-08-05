function convertStringsToNums(nums) {
    let res = []

    for (let i = 0; i < nums.length; i++) {
        let num = Number(nums[i])

        if (Number.isNaN(num)) {
            return new Error(`The value '${nums[i]}' is not a valid number.`)
        }
        res.push(num)
    }
    return res
}

function mean(nums) {
    // let numArr = [...nums]
    if(nums.length === 0) return 0;
  return nums.reduce(function (acc, cur) {
    return acc + cur;
  }) / nums.length
}

function median(nums) {
    // let res;
    // nums.sort()

    // if  (nums.length % 2 === 0) {
    //         res = nums[Math.floor(nums.length / 2)] + nums[Math.ceil(nums.length / 2)]
    //         res = res / 2
    // } else {
    //         res = nums[nums.length / 2]
    // }

    // return res;
    nums.sort((a, b) => a - b);

  let middleIndex = Math.floor(nums.length / 2);
  let median;

  if (nums.length % 2 === 0) {
    median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
  } else {
    median = nums[middleIndex];
  }
  return median
}

function mode(nums) {
    let count = {}

    for (let num of nums) {
        if (count[num]) {
            count[num] += 1
        } else {
            count[num] = 1
        }
    }
    let arr = Object.values(count)
    let max = Math.max(...arr)
    return Object.keys(count).find(key => count[key] === max);
    
}


module.exports = {
    mean, 
    median, 
    mode,
    convertStringsToNums
}