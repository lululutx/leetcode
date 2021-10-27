// 704. 二分查找
// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//暴力解法
var search = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            return i;
        }
    }
    return -1
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//二分法   1左闭右闭  [left,right]
var search = function (nums, target) {
    let left = 0, right = nums.length - 1;
    //使得区间左闭右闭，使用<=，当left = right时依然有效
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)//向下取整
        if (nums[mid] > target) {
            right = mid - 1
        } else if (target > nums[mid]) {
            left = mid + 1
        } else {
            return mid
        }
    }
    return -1
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//二分法   1左闭右开  [left,right)
var search = function (nums, target) {
    let left = 0, right = nums.length;//这里注意，不应该-1
    //使得区间左闭右开，使用<，当left = right 时无效
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2)
        if (nums[mid] < target) {
            left = mid + 1 // target 在右区间，在[middle + 1, right)中
        } else if (nums[mid] > target) {
            right = mid// target 在左区间，在[left, middle)中
        } else {
            return mid
        }
    }
    return -1
};