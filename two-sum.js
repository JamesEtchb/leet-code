// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        j++
      } else {
        let x = nums[i] + nums[j]
        if (x === target) {
          return [i, j]
        }
      }
    }
  }
}

//different way to do it using methods
// function whatsLeft (toGet, inCart) {
// 	return toGet.filter(item => {
// 		return !inCart.includes(item)
// 	})
// }

const twoSum = (array, target) => {
  const set = new Set()
  for (let i = 0; i < array.length; i++) {
    set.add(array[i])
  }
  for (let i = 0; i < array.length; i++) {
    const num = target - array[i]
    if (set.has(num)) {
      return [array[i], num]
    }
  }
}

const twoSumSort = (arr, t) => {
  const sorted = arr.sort((a,b) => a - b)
  let i = 0, j = sorted.length - 1
  while (i < j) {
	const sum = sorted[i] + sorted[j]
	if (sum > target) {
		j--
	} else if (sum < target) {
		i++
	} else {
		return (sorted[i], sorted[j])
	}
  }
}
