var _ = {
  map: (arr, callback) => {
    let temp = [] // Initializing a new array
    for (item of arr) {
      temp.push(callback(item))
    }
    return temp
  },
  reduce: function(arr, callback) {
    let result = arr[0]
    for (let i = 1; i < arr.length; i++) {
      result = callback(result, arr[i])
    }
    return result
  },
  find: (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        return arr[i]
      }
    }
    return undefined
  },
  filter: (arr, callback, reverse = false) => { 
    let temp = []
    for (let i = 0; i < arr.length; i++) {
      if (!reverse) {
        if (callback(arr[i])) {
          temp.push(arr[i])
        }
      } else {
        if (!callback(arr[i])) {
          temp.push(arr[i])
        }
      }
    }
    return temp
  },
  reject: (arr, callback) => { 
    return _.filter(arr, callback, true)
  }
}


myArr = [6, 3, 6, 1, 1, 1, 3, 7 , 19]
let isOdd = function(number) {
  if (number % 2 === 1) return true
  return false
}
let isEven = function(number) {
  if (number % 2 === 0) return true
  return false
}
let findResult = _.find(myArr, isEven)
let filterResult = _.filter(myArr, isEven)
let rejectResult = _.reject(myArr, isEven)
console.log(rejectResult)
console.log(filterResult)
console.log(findResult)
var sum = _.reduce(myArr, function(prev, next){
  return prev + next
})
console.log(sum)
let double = (number) => {
  return number  
}
let triple = (number) => {
  return number  
}
let doubleResult = _.map(myArr, double)
let tripleResult = _.map(myArr, triple)
console.log(doubleResult)
console.log(tripleResult)
let funky = (number) => {
  if (number % 2 === 0) {
    return "buzz"
  } else {
    return "fizz"
  }
}
console.log(_.map(myArr, funky))
