$(function(){
    //模拟ajax获取数据
    var ret = [
        ["canvas","canvas制作小游戏demo","2017-11-30"],
        ["print","跳转页面打印方法研究","2017-12-17"],
        ["xiaofenche","小风车页面","2016-08-11"],
        ["dangjian","湖北党建官网","2018-05-23"],
        ["hetianxia","阖天下黄金手机APP","2018-05-24"],
        ["photo","照片墙show time","2018-06-20"],
        ["yuesoft","南京阅软信息技术有限公司官网","2018-07-04"],
        ["carphone","手机端车辆管理demo","2018-08-16"],
        ["angularForm","angular表单验证","2018-09-07"],
    ];
    var tr = "";
    ret.sort(function(a,b){
        return a[2]<b[2]
    })
    for(var i=0;i<ret.length;i++){
        tr+=`<tr data-id="${ret[i][0]}">
            <td>${ret[i][1]}</td>
            <td>${ret[i][2]}</td>
        </tr>`;
    }
    $(tr).appendTo(".lists table tbody");

    //模拟地址数据
    var data_url = {
        "canvas":"/page/index.html",
        "print":"/page/index.html",
        "xiaofenche":"/xiaofenche.html",
        "dangjian":"/demo/dangjian/index.html",
        "hetianxia":"/demo/hetianxia/login.html",
        "yuesoft":"/demo/yuesoft/index.html",
        "photo":"/demo/photo/photo.html",
        "carphone":"/demo/carphone/index.html",
        "angularForm":"/demo/angularForm/index.html"
    }
    $(".lists table tbody tr").on('click',function() {
        let data_id = $(this).attr("data-id");
        console.log(data_id);
        if(data_url[data_id]){
            window.open(data_url[data_id]);
            return
        }else{
            alert("地址访问错误！");
            //后期添加404页面
        }
        

    });
});