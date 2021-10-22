//350. 两个数组的交集 II
//给定两个数组，编写一个函数来计算它们的交集。

//哈希表
// 先用Hashmap记录第一个数组中的元素【放在key】，和出现的次数【放在value】。
// 然后再遍历第二个数组，如果找到对应元素，则添加这个元素到返回数组里。
// 如果value值大于1，HashMap中的value值减 1，表示已经找到一个相同的了。
// 如果value值等于1，则删除该元素。
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let hash = new Map();
  let res = [];
  for (let i = 0; i < nums1.length; i++) {
    if (hash.has(nums1[i])) {
      hash.set(nums1[i], hash.get(nums1[i]) + 1);
    } else {
      hash.set(nums1[i], 1);
    }
  }
  for (let j = 0; j < nums2.length; j++) {
    if (hash.has(nums2[j]) && hash.get(nums2[j]) > 0) {
      res.push(nums2[j]);
      hash.set(nums2[j], hash.get(nums2[j]) - 1);
    }
  }
  console.info("ans", res);
  return res;
};
nums1 = [4, 9, 5];
nums2 = [9, 4, 9, 8, 4];
// intersect(nums1, nums2);


//双指针
// 两个数组排序
// 设定两个为0的指针，比较两个指针的元素是否相等
// 如果相等，元素push到返回值里，两个指针同时往前
// 如果不相等，元素小的指针往前
// 如果相等，那肯定比较过的元素就没用了，两个指针++
// 如果不相等，那把元素小的数组指针++。
// 因为大元素可能在小元素数组里存在，但是小元素在大元素所在数组肯定不存在。因为已经排过序了。
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect2 = function(nums1, nums2) {
  let p1 = 0,
    p2 = 0;
  let res = [];
  nums1 = nums1.sort((a, b) => {
    return a - b;
  });
  nums2 = nums2.sort((a, b) => {
    return a - b;
  });
  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] == nums2[p2]) {
      res.push(nums1[p1]);
      p1++;
      p2++;
    } else if (nums1[p1] < nums2[p2]) {
      p1++;
    } else {
      p2++;
    }
  }
  console.info("ans", res);
  return res;
};
intersect2(nums1, nums2);



//暴力循环
// 时间复杂度O(n^2)
// 遍历第一个数组，然后在第二个数组查找是否有当前元素。
// 如果有，把当前元素push进返回值。然后把第二个数组里该下标元素删除。
// 优化一下，可以遍历length短的那个数组，在length长的数组里查找。
// 对应进阶第二条。
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect3 = function(nums1, nums2) {
    let res = [];
    if (nums1.length < nums2.length) [nums1, nums2] = [nums2, nums1];
    for (let i = 0; i < nums1.length; i++) {
        let key = nums2.indexOf(nums1[i]);
        if (key !== -1) res.push(nums2.splice(key, 1));
    }
    return res;
};

