module.exports=function(c_name, value, expiredays){
  this.setCookie=function(c_name, value, expiredays){
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
  };
  this.getCookie=function(c_name){
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
    return (arr[2]);
    else
    return null;
  }
  this.delCookie=function(c_name){
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
  }
}
