var u_wep='http://api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=7&appid=88c5995ebb4b0ae24a0da431adfc8e89';
var url='http://api.openweathermap.org/data/2.5/forecast/daily?q=';
var unit='&units=metric&cnt=5&';
var city='London';
var appid='appid=88c5995ebb4b0ae24a0da431adfc8e89';




var obj=JSON.parse(u_wep);





function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}
