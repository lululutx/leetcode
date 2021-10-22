/**
 * 由一维数组构建树
 * @param parentId
 * @param data
 */
function constructTree(data) {
  for (let i in data) {
    let fg = true;
    for (let j in data) {
      if (data[j].id == data[i].parentId) {
        if (data[j].children == null) {
          data[j].children = [];
        }
        fg = false;
        data[j].children.push(data[i]);
      }
    }
    if (fg) data[i].parentId = null;
  }
  // 过滤已经子类,只剩下pid为空的
  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (
      data[i].parentId == null ||
      data[i].parentId == 0 ||
      data[i].parentId == "" ||
      data[i].parentId == undefined
    ) {
      result.push(data[i]);
    }
  }
  console.info("ans", result)
  return result;
}

var data = [
  { id: 1, parentId: 22 },
  { id: 10, parentId: 1 },
  { id: 11, parentId: 1 },
  { id: 100, parentId: 10 },
  { id: 101, parentId: 10 },
  { id: 1000, parentId: 100 },
  { id: 1001, parentId: 100 },
];
// constructTree(data)

function fliteTree (list = []) {
  const data = JSON.parse(JSON.stringify(list)) // 浅拷贝不改变源数据
  const result = []
  const map = {}
  data.forEach(item => {
    map[item.id] = item
    item.children = []
  })
  data.forEach(item => {
    const parent = map[item.parentId]
    if (parent) {
      parent.children.push(item)
    } else {
      result.push(item)
    }
  })
  console.info("ans",result)
  return result
}
fliteTree(data)


