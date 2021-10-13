/* 获取日期列表 */
function getDateWeek(date) {
  /* 得到当前日期的时间戳 */
  //   const timestamp = Date.now();
  const timestamp = new Date(date).getTime();
  let year = date.split("-")[0];
  let mon = date.split("-")[1];
  var day = new Date(year, mon, 0); //最后一个参数为0,意为获取本月一共多少天
  const dateWeek = Array.from(new Array(day.getDate())).map((_, i) => {
    /* 得到每一天的时间戳 */
    const weekTimestamp = new Date(timestamp + i * 24 * 60 * 60 * 1000);
    const date =
      String(weekTimestamp.getFullYear()) +
      "-" +
      String(weekTimestamp.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(new Date(weekTimestamp).getDate()).padStart(2, "0");
    return {
      date
    };
  });
  console.log(dateWeek); //得到如下结果
  return dateWeek
}

getDateWeek("2021-09-01");
