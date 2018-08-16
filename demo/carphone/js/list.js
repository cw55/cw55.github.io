$(function () {
    //全局变量
    var data_list = "";//存放当前被点击的那条数据，进入修改后回写，修改模拟数据

    //模拟数据
    var shuju = {
        "yongchesq": [
            ["2018-08-02", "王益", "商务车", "北京", "业务", "2018-08-12"],
            ["2018-08-02", "李猛", "商务车", "南京", "业务", "2018-08-12"],
            ["2018-08-02", "周秦汉", "商务车", "上海", "业务", "2018-08-12"]
        ],
        "shushouche": [
            ["2018-08-02", "苏A-2111S", "张琦驾驶", "李兴用车", "杭州", "业务"],
            ["2018-08-02", "苏A-2111S", "张琦驾驶", "李兴用车", "南京", "业务"],
        ],
        "jiayou": [
            ["冀P-0001", "2018-01-12", "93#", "400", "中心加油站"],
            ["冀P-0002", "2018-03-12", "93#", "300", "郊区加油站", "李欣"],
        ],
        "weixiu": [
            ["冀P-0003", "2018-03-12", "起鹰维修", "李星", "2018-03-13,400"],
            ["苏P-0003", "2018-05-12", "起鹰维修", "周秦汉", "2018-05-13,2000"]
        ]
    };
    var url_data = getQueryString("data");
    console.log(url_data);
    //页面展示数据
    var shuju_arr = shuju[url_data];
    function zhanshi(arr) {
        var num = 0;
        var str_a = "";
        for (var i = 0; i < arr.length; i++) {
            num++;
            var stt_content = arr[i].join(" ");
            str_a += '<div class="list_box" data-list="' + num + '"><div class="left">' +
                '<span>' + num + '、</span></div><div class="right"><p>' +
                '<span>' + stt_content + '</span></p></div></div>';
        };
        $(".list").html(str_a);
    }
    zhanshi(shuju_arr);

    //点击新增
    $("#xinzen").click(function () {
        $(".my_list").css("display", "none");
        $(".xiangqing").css("display", "block");
        $(".xiangqing").attr("data-zt", "xinzen");
        //填充到页面
        var list = yon_shuju[url_data];
        $(".xiangqing_title span").html(list["xiangqing_title"]);
        $(".xq_content").html(list["xq_content"]);
    });

    //跳转到详情页
    $(".list").delegate('.list_box', "click", function () {
        $(".my_list").css("display", "none");
        $(".xiangqing").css("display", "block");
        data_list = $(this).attr("data-list");
        console.log(data_list);

        var list = yon_shuju[url_data];
        //填充到页面
        $(".xiangqing_title span").html(list["xiangqing_title"]);
        $(".xq_content").html(list["xq_content"]);
        var shuju_data = shuju_arr[data_list - 1];
        console.log(shuju_data)
        var time = $("#sq_time").val(shuju_data[0]);//申请时间
        var sqr = $("#sqr").val(shuju_data[1]);//申请人
        var sq_leixing = $("#sq_leixing").val(shuju_data[2]);//车类型
        var sq_target = $("#sq_target").val(shuju_data[3]);//目的地
        var sq_shiyou = $("#sq_shiyou").val(shuju_data[4]);//用车事由
        var jieshutime = $("#jieshutime").val(shuju_data[5]);//结束时间
    });
    //确定
    $("#queding").click(function () {
        $(".my_list").css("display", "block");
        $(".xiangqing").css("display", "none");
        //因为是单页面，所以不同的流程，所拼的数据也有所不同，需要通过data_url来区分
        if ($(".xiangqing").attr("data-zt") == "xinzen") {
            //新增，这边需要打入一条新数据
            var time = $("#sq_time").val();//申请时间
            var sqr = $("#sqr").val();//申请人
            var sq_leixing = $("#sq_leixing").val();//车类型
            var sq_target = $("#sq_target").val();//目的地
            var sq_shiyou = $("#sq_shiyou").val();//用车事由
            var jieshutime = $("#jieshutime").val();//结束时间

            var push_a = time + ',' + sqr + ',' + sq_leixing + ',' + sq_target + ',' + sq_shiyou + ',' + jieshutime;
            shuju_arr.push(push_a.split(','));
            zhanshi(shuju_arr);
        } else {
            //都是修改
            //data_list 为1，则对应模拟数据的下标为1-1=0
            var time = $("#sq_time").val();//申请时间
            var sqr = $("#sqr").val();//申请人
            var sq_leixing = $("#sq_leixing").val();//车类型
            var sq_target = $("#sq_target").val();//目的地
            var sq_shiyou = $("#sq_shiyou").val();//用车事由
            var jieshutime = $("#jieshutime").val();//结束时间
            console.log(time, sqr, sq_leixing, sq_target, sq_shiyou, jieshutime);

            var push_a = time + ',' + sqr + ',' + sq_leixing + ',' + sq_target + ',' + sq_shiyou + ',' + jieshutime;
            shuju_arr.splice([data_list - 1], 1, push_a.split(','));
            console.log(shuju_arr)
            zhanshi(shuju_arr);
        }
    });
    //取消
    $("#quxiao").click(function () {
        $(".my_list").css("display", "block");
        $(".xiangqing").css("display", "none");
    });
});