// 88. 合并两个有序数组
// 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。

// 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

// 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/merge-sorted-array
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m, ...nums2);
  nums1.sort((a, b) => a - b);
  console.info("ans", nums1);
};

nums1 = [1, 2, 3, 0, 0, 0];
m = 3;
nums2 = [2, 5, 6];
n = 3;

// merge(nums1, m, nums2, n);

//双指针
// 方法一没有利用数组 nums1 与 nums2
// ​已经被排序的性质。为了利用这一性质，我们可以使用双指针方法。这一方法将两个数组看作队列，每次从两个数组头部取出比较小的数字放到结果中。
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge2 = function(nums1, m, nums2, n) {
  let p1 = 0,
    p2 = 0;
  const sorted = new Array(m + n).fill(0);
  var cur;
  while (p1 < m || p2 < n) {
    if (p1 == m) {
      cur = nums2[p2++];
    } else if (p2 == n) {
      cur = nums1[p1++];
    } else if (nums1[p1] > nums2[p2]) {
      cur = nums2[p2++];
    } else {
      cur = nums1[p1++];
    }
    sorted[p1 + p2 - 1] = cur;
  }
  for (let i = 0; i < m + n; i++) {
    nums1[i] = sorted[i];
  }
  console.info("ans2", nums1);
};
// merge2(nums1, m, nums2, n);

//逆向双指针
// 方法二中，之所以要使用临时变量sorted,是因为如果直接合并到数组nums1中，很可能覆盖元素
//观察得知nums1后半部分是空的可以直接覆盖，因此可以从后向前遍历，取较大的放后面。
//分析得知，任意时刻，nums1有m+n-p1-1个位置，而nums1有m-p1-1个元素被取出，nums2有n-p2-1个元素被取出
//  m+n-p1-1 ? (m-p1-1) + (n-p2-1)
//  m+n-p1-1 ? m+n-p1-p2-2
//  -1 ? -p2-2
//  p2 ? -1
//  p2 > -1 恒成立，所以不会被覆盖

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge3 = function(nums1, m, nums2, n) {
  let p1 = m - 1,
    p2 = n - 1;
  var cur = 0;
  var tail = n + m - 1;
  while (p1 >= 0 || p2 >= 0) {
    if (p1 < 0) {
      cur = nums2[p2--];
    } else if (p2 < 0) {
      cur = nums1[p1--];
    } else if (nums1[p1] > nums2[p2]) {
      cur = nums1[p1--];
    } else {
      cur = nums2[p2--];
    }
    nums1[tail--] = cur;
  }
  console.info("ans3", nums1);
};
merge3(nums1, m, nums2, n);
