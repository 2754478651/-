function getDate(timer){
    var now = new Date();
    var year = now.getFullYear(); //年
    var month = now.getMonth();//月
    var date = now.getDate();//日期
    var day = now.getDay();//周几
    var hour = now.getHours();//小时
    var minu = now.getMinutes();//分钟
    var sec = now.getSeconds();//秒
    month = month + 1;
    if (month < 10) month = "0" + month;
    if (date < 10) date = "0" + date;
    if (hour < 10) hour = "0" + hour;
    if (minu < 10) minu = "0" + minu;
    if (sec < 10) sec = "0" + sec;
    var time = "";
    //精确到天
    if(timer==1){
      time = year + "-" + month + "-" + date;
    }
    //精确到分
    else if(timer==2){
      time = year + "-" + month + "-" + date+ " " + hour + ":" + minu + ":" + sec;
    }
    return time;
  }
  console.log(getDate(2))
module.exports = {
    getDate
}