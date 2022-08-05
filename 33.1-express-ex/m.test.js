const { mean, median, mode } = require("./m")

describe("#median", function(){
    it("finds the median of an even amount of nums", function(){ 
      expect(median([1,2,3,4])).toEqual(2.5)
    })
    it("finds the median of an odd amount of nums", function () { 
      expect(median([1,2,3,4,5])).toEqual(3)
    })
  })
  
  describe("#mean", function () {
    it("finds the mean of an empty array", function () { 
      expect(mean([0])).toEqual(0)
    })
    it("finds the mean of an array of nums", function () { 
      expect(mean([2,4,6,8])).toEqual(5)
    })
  })
  
  describe("#mode", function () {
    it("finds the mode", function () { 
      expect(mode([1,1,1,2,2,3])).toEqual("1")
    })
  })