$(function(){
    //模拟ajax获取数据
    var ret = [
        ["canvas制作小游戏demo","2017-11-30"],
        ["跳转页面打印方法研究","2017-12-17"],
        ["小风车页面","2016-08-11"]
    ];
    var tr = "";
    for(var i=0;i<ret.length;i++){
        tr+=`<tr data-id="canvas">
            <td>${ret[i][0]}</td>
            <td>${ret[i][1]}</td>
        </tr>`;
    }
    $(".lists table tbody tr").append(tr);

    //模拟地址数据
    var data_url = {
        "canvas":"/page/index.html",
        "print":"/page/index.html",
        "xiaofenche":"/xiaofenche.html",
    }
    $(".lists table tbody tr").on('click',function() {
        let data_id = $(this).attr("data-id");
        console.log(data_id);
        if(data_url[data_id]){
            window.location.href = data_url[data_id];
            return
        }else{
            alert("地址访问错误！");
            //后期添加404页面
        }
        

    });
});