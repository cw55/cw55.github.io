$("body").delegate('.back',"click",function(){
    window.history.back(-1); 
});
$("body").delegate('.back_shouye',"click",function(){
    window.location.href = '../index.html';
});

//获取url
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = (window.location.hash || window.location.search).substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}



