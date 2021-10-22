//566. 重塑矩阵
// 在 MATLAB 中，有一个非常有用的函数 reshape ，它可以将一个 m x n 矩阵重塑为另一个大小不同（r x c）的新矩阵，但保留其原始数据。
// 给你一个由二维数组 mat 表示的 m x n 矩阵，以及两个正整数 r 和 c ，分别表示想要的重构的矩阵的行数和列数。
// 重构后的矩阵需要将原始矩阵的所有元素以相同的 行遍历顺序 填充。
// 如果具有给定参数的 reshape 操作是可行且合理的，则输出新的重塑矩阵；否则，输出原始矩阵。

var mat = [
  [1, 2],
  [3, 4]
];
var r = 1;
var c = 4;
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  let longArray = [];
  let ansArray = [];
  for (let i = 0; i < mat.length; i++) {
    longArray.push(...mat[i]);
  }
  if (r * c != longArray.length) {
    return mat;
  }
  //一共有r行
  for (let x = 0; x < r; x++) {
    const rowArray = [];
    //每行c个
    for (let y = 0; y < c; y++) {
      rowArray.push(longArray.shift(longArray[x]))
    }
    ansArray.push(rowArray)
  }
  console.info("ans", ansArray);
  return ansArray;
};

matrixReshape(mat, r, c);


var matrixReshape2 = function(nums, r, c) {
  const m = nums.length;
  const n = nums[0].length;
  if (m * n != r * c) {
      return nums;
  }

  const ans = new Array(r).fill(0).map(() => new Array(c).fill(0));
  for (let x = 0; x < m * n; ++x) {
      ans[Math.floor(x / c)][x % c] = nums[Math.floor(x / n)][x % n];
  }
  return ans;
};


