$(function(){
    //获取url
    var url_data = getQueryString("data");
    console.log(url_data);
    var url_list = getQueryString("list");
    console.log(url_list);

    var list = yon_shuju[url_data];
    console.log(list);
    //填充到页面
    $(".xiangqing_title span").html(list["xiangqing_title"]);
    $(".xq_content").html(list["xq_content"]);
});