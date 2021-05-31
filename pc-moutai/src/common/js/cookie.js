/* 设置coolie属性值 */
export function setCookie(cookieName, value, time) {
  if (time) {
    var date = new Date();
    date.setDate(date.getDate() + time);
    document.cookie = cookieName + "=" + value + ";expires=" + date.toUTCString();
    var d = new Date(date.toUTCString());
    console.log(d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds());
  } else document.cookie = cookieName + "=" + value;
  console.log(cookieName + "的cookie值设置完成")
}
/* 获取cookie属性值 */
export function getCookie(cookieName) {
  if (document.cookie.length > 0) {
    if (document.cookie.indexOf(cookieName + "=") != -1) {
      var array = [];
      array = document.cookie.split(";");
      for (var i = 0; i < array.length; i++) {
        if (array[i].indexOf(cookieName + "=") != -1) {
          return array[i].replace(cookieName + "=", "")
        }
      }
      return "";
    } else return "cookie中" + cookieName + "字段不存在";
  } else return "当前没有cookie存储"
}
