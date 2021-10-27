// 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

nums = [-4, -1, 0, 3, 10];
/**
 * @param {number[]} nums
 * @return {number[]}
 */
//暴力解法
var sortedSquares = function (nums) {
    let ansArray = [];
    nums.forEach((e) => {
        ansArray.push(e * e)
    })
    ansArray.sort((a, b) => {
        return a - b;//别忘了return。。。
    })
    return ansArray
};


/**
 * @param {number[]} nums
 * @return {number[]}
 */
//双指针
//参数数组可能由正数和负数组成，负数的平方可能大于正数的平方。
//用两个指针分别放在参数数组的两边，哪个平方大就放在结果数组的尾部，俩指针向中间遍历。
var sortedSquares2 = function (nums) {
    let ansArray = new Array(nums.length).fill(0)
    let left = 0, right = nums.length - 1;
    let n = nums.length - 1
    while (left <= right) {
        if (nums[left] * nums[left] < nums[right] * nums[right]) {
            ansArray[n--] = (nums[right] * nums[right])
            right--
        } else {
            ansArray[n--] = (nums[left] * nums[left])
            left++
        }
    }
    console.info("ans", ansArray)
    return ansArray
};
sortedSquares2(nums)



/**
 * @param {number[]} nums
 * @return {number[]}
 */
//双指针再优化一些，可以用unshift往数组尾部存放数据
var sortedSquares3 = function (nums) {
    let ansArray = []
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        if (nums[left] * nums[left] < nums[right] * nums[right]) {
            ansArray.unshift(nums[right] * nums[right])
            right--
        } else {
            ansArray.unshift(nums[left] * nums[left])
            left++
        }
    }
    return ansArray
};