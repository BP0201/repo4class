// new Set([1,1,2,2,3,4])
// will return a set containing 1,2,3,4 and no duplicates

// [...new Set("referee")].join("")
// should return a set containing ref

// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);
// will look like {[1,2,3] => true} {[1,2,3] => false}

function hasDuplicate(arr){
    const arrSet = new Set(arr);
    const final = [...arrSet]
    if(arr.length === final.length){
        return false
    }
    return true;
}

function vowelCount(str){
    const strMap = new Map()
    for(let char of str){
    let letter = char.toLowerCase()
        if('aeiou'.indexOf(letter) !== -1){
            if(strMap.has(letter)){
                strMap.set(letter, strMap.get(letter) + 1)
            } else {
                strMap.set(letter, 1)
            }
        }
    }
    return strMap;
}