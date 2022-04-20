// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }
  // becomes
  const filterOutOdds = (...vals) => vals.filter(num => num % 2 === 0)

  const findMin = (...nums) => nums.reduce((num, next) => next > num ? next : num)

  const mergeObjects = (obj, obj2) => {
      return {...obj, ...obj2}
  }

const doubleAndReturnArgs = (arr, ...vals) => {
    const doubledArr = arr.map((num) => num * 2)
    const doubledVals = arr.map((num)=> num*2)
    return [...doubledArr, ...doubledVals]
}

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
    let num = Math.floor(Math.random() * items.length)
    const final = [...items]
    final.splice(num, 1)
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
    const final = [...array1,...array2]
    return final
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    const final = {...obj}
    final[key] = val
    return final;
}


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    const final = obj;
    delete final[key]
    return final;
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    const final = {...obj1, ...obj2}
    return final;
}


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    const final = {...obj};
    final[key] = val;
    return final;
}