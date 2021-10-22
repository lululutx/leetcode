//36. 有效的数独
// 请你判断一个 9x9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。

// 数字 1-9 在每一行只能出现一次。
// 数字 1-9 在每一列只能出现一次。
// 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
// 数独部分空格内已填入了数字，空白格用 '.' 表示。

// 注意：
// 一个有效的数独（部分已被填充）不一定是可解的。
// 只需要根据以上规则，验证已经填入的数字是否有效即可。


const board =
    [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
    const columns = new Array(9).fill(0).map(() => new Array(9).fill(0));
    const subBoxes = new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)))
    for (let i = 0; i < board.length; i++) {
        for (j = 0; j < board[0].length; j++) {
            const b = board[i][j]
            if (b != '.') {
                const index = parseInt(b) - 1
                rows[i][index]++;
                columns[j][index]++;
                subBoxes[Math.floor(i / 3)][Math.floor(j / 3)][index]++;
                if (rows[i][index] > 1 || columns[j][index] > 1 || subBoxes[Math.floor(i / 3)][Math.floor(j / 3)][index] > 1) {
                    return false
                }
            }
        }
    }
    return true

};
isValidSudoku(board)