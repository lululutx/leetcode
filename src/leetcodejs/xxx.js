//计算动态列
let data = [
  {
    id: 1, name: '1', children: [
      {
        id: 11, name: '11', A: 21, B: 31, C: 52
      },
      {
        id: 12, name: '12', A: 42, B: 31, C: 73
      },
      {
        id: 13, name: '13', A: 54, B: 97, C: 11
      }
    ]
  },
  {
    id: 2, name: '2', children: [
      {
        id: 21, name: '21', A: 54, B: 32, C: 98
      },
      {
        id: 22, name: '22', A: 32, B: 54, C: 97,
      }
    ]
  }
]


function sumChildList(data) {
  let columnList = [];
  for (let cKey in data[0].children[0]) {
    if (cKey != 'children' && cKey != 'id' && cKey != 'name') {
      columnList.push(cKey)
    }
  }
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < columnList.length; j++) {
      let listSum = 0
      data[i].children.forEach(e => {
        listSum += parseFloat(e[columnList[j]])
      });
      data[i][columnList[j]] = listSum
    }
  }
  console.info(" shuchu",data)
}

sumChildList(data)