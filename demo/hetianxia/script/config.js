//默认地址，热销商品图片地址
var localhost = "http://192.168.1.105";

//banner_url地址
var localhost_pic = "http://192.168.1.155";

//接口地址
var getUrl = localhost + "/index.php/App";

var code = "222";
var cw_confirm = function(confirm_f,callback) {
    var alert_f = `<div class="cw_top_mask_box">
        <div class="cw_top_mask">
            <div class="cw_title aui-padded-l-15 aui-padded-t-15 aui-padded-r-15 aui-padded-b-15 aui-text-center">
                <span>${confirm_f}</span>
            </div>
            <div class="aui-hr"></div>
            <div class="cw_top_confirm aui-row">
                <div class="aui-col-xs-6 aui-text-center aui-padded-t-10 aui-padded-b-10 cw_click" data-id="true" onclick="call(this)">
                    <span>确认</span>
                </div>
                <div class="aui-col-xs-6 aui-text-center aui-padded-t-10 aui-padded-b-10 cw_click" data-id="false" onclick="call(this)">
                    <span>取消</span>
                </div>
            </div>
        </div>
    </div>`;
    $(alert_f).appendTo("body")
    $(".cw_top_mask").css({"width": "14rem","position": "fixed","top": "50%","left": "50%","margin-left": "-7rem","background": "rgba(0, 0, 0, 0.8)","color": "#fff"})
    $(".cw_top_confirm").find("div").eq(0).css("border-right","1px solid #666");
    $(".aui-hr").css("border-bottom","1px solid #666");
    console.log($(".cw_title").css("height"))
    function copy_confirm() {
        var h = Number($(".cw_title").css("height").slice(0, -2)) / 14;
        var h1 = Number($(".cw_top_confirm").css("height").slice(0, -2)) / 14;
        var new_h = h.toFixed(2) + h1.toFixed(2) + "rem";
        var new_h_margin = -(Number(h.toFixed(2)) + Number(h1.toFixed(2))) / 2 + "rem";
        console.log(new_h, new_h_margin)
        $(".cw_top_mask").css("margin-top", new_h_margin)
    }
    copy_confirm();

    return callback(code)
}
function call(confirm){
  code = $(confirm).attr("data-id");
}

$("body").on('click',".cw_click",function(){
  $(".cw_top_mask_box").remove();
  // if($(this).find("span").eq(0).html()=="确认"){
  //   code = true;
  // }else{
  //   code = false;
  // }
});
