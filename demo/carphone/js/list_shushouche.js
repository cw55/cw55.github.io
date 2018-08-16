$(function () {
    //全局变量
    var data_list = "";//存放当前被点击的那条数据，进入修改后回写，修改模拟数据

    //模板
    var content = ` <ul>
        <li>
            <span>车牌号</span>
            <input type="text" name="driverCode" id="driverCode">
        </li>
        <li>
            <span>收车时间</span>
            <input type="text" class="form_datetime form-control" name="shoucheTime" id="shoucheTime">
        </li>
        <li>
            <span>收车里程</span>
            <!-- 后期修改为input，给固定格式 -->
            <input type="text" name="shoucheLicheng" id="shoucheLicheng">
        </li>
        <li>
            <span>停放位置</span>
            <select name="park" id="park">
                <option value="路口">路口</option>
                <option value="路口">地下停车场</option>
            </select>
        </li>
        <li>
            <span>本次行程</span>
            <input type="text" name="thisRoute" id="thisRoute" placeholder="0">
        </li>
        <li>
            <span>补贴标准</span>
            <input type="text" placeholder="元/公里" name="butiebz" id="butiebz">
        </li>
        <li>
            <span>补贴金额</span>
            <input type="text" name="butiejine" id="butiejine">
        </li>
        <li>
            <span>出车费用</span>
            <input type="text" name="chuchefy" id="chuchefy">
        </li>
        <li>
            <span>洗车费</span>
            <input type="text" name="xichef" id="xichef">
        </li>
        <li>
            <span>补助费</span>
            <input type="text" name="buzhuf" id="buzhuf">
        </li>
        <li>
            <span>住宿费</span>
            <input type="text" name="zhusuf" id="zhusuf">
        </li>
        <li>
            <span>路桥费</span>
            <input type="text" name="luqiaof" id="luqiaof">
        </li>
        <li>
            <span>停车费</span>
            <input type="text" name="tinchef" id="tinchef">
        </li>
        <li>
            <span>途中加油</span>
            <input type="text" name="tuzhongjiayou" id="tuzhongjiayou">
        </li>
        <li>
            <span>其他费用</span>
            <input type="text" name="qitafy" id="qitafy">
        </li>
        <li>
            <span>收车人</span>
            <select name="shoucheren" id="shoucheren">
                <option value="业务员1">业务员1</option>
                <option value="业务员2">业务员2</option>
            </select>
        </li>
        <li>
            <span>收车说明</span>
            <textarea name="shoucheshuoming" id="shoucheshuoming" cols="30" rows="4"></textarea>
        </li>
        <li>
            <span>收车说明</span>
            <input type="file" name="image" id="image" accept="image/*">
        </li>
    </ul>`;

    //模拟数据
    var shuju = [
        {
            'driverCode': "冀P-0002",
            'shoucheTime': '2018-08-15',
            'shoucheLicheng': '3221',
            'park': '路口',
            'thisRoute': '12.86',
            'butiebz': "1000.00",
            'butiejine': "1000.00",
            'chuchefy': '299.00',
            'xichef': '60',
            'buzhuf': '300',
            'zhusuf': '200',
            'luqiaof': '500',
            'tinchef': '80',
            'tuzhongjiayou': '600',
            'qitafy': "400",
            'shoucheshuoming': '一切正常，准许收车。',
            'shoucheren': "业务员1"
        }
    ];

    //list页面展示数据
    var shuju_arr = shuju;
    function list_zhanshi(arr) {
        var num = 0;
        var str_a = "";
        for (var i = 0; i < arr.length; i++) {
            num++;
            var stt_content = arr[i]["driverCode"] + ' ' + arr[i]["shoucheren"] + ' ' + arr[i]["shoucheTime"] + ' ' + arr[i]["shoucheLicheng"] + ' ' + arr[i]["park"];
            str_a += '<div class="list_box" data-list="' + num + '"><div class="left">' +
                '<span>' + num + '、</span></div><div class="right"><p>' +
                '<span>' + stt_content + '</span></p></div></div>';
        };
        $(".list").html(str_a);
    }
    list_zhanshi(shuju_arr);

    //点击新增
    $("#xinzen").click(function () {
        //重新填充数据 ---- 清空数据
        $(".xq_content").html(content);
        $(".my_list").css("display", "none");
        $(".xiangqing").css("display", "block");
        $(".xiangqing").attr("data-zt", "xinzen");
    });

    //跳转到详情页
    $(".list").delegate('.list_box', "click", function () {
        $(".my_list").css("display", "none");
        $(".xiangqing").css("display", "block");
        data_list = $(this).attr("data-list");
        console.log(data_list);
        //填充到页面
        $(".xq_content").html(content);
        //数据填充
        var shuju_data = shuju_arr[data_list - 1];
        console.log(shuju_data)
        $("#driverCode").val(shuju_data['driverCode']);//车牌号
        $("#shoucheTime").val(shuju_data['shoucheTime']);//收车时间
        $("#shoucheLicheng").val(shuju_data['shoucheLicheng']);//收车里程
        $("#park").val(shuju_data['park']);//停放位置
        $("#thisRoute").val(shuju_data['thisRoute']);//本次行程
        $("#butiebz").val(shuju_data['butiebz']);//补贴标准
        $("#butiejine").val(shuju_data['butiejine']);//补贴金额
        $("#chuchefy").val(shuju_data['chuchefy']);//出车费用
        $("#xichef").val(shuju_data['xichef']);//洗车费
        $("#buzhuf").val(shuju_data['buzhuf']);//补助费
        $("#zhusuf").val(shuju_data['zhusuf']);//住宿费
        $("#luqiaof").val(shuju_data['luqiaof']);//路桥费
        $("#tinchef").val(shuju_data['tinchef']);//停车费
        $("#tuzhongjiayou").val(shuju_data['tuzhongjiayou']);//途中加油费
        $("#qitafy").val(shuju_data['qitafy']);//其他费用
        $("#shoucheshuoming").val(shuju_data['shoucheshuoming']);//收车说明
        $("#shoucheren").val(shuju_data['shoucheren']);//收车人
    });
    //确定
    $("#queding").click(function () {
        $(".my_list").css("display", "block");
        $(".xiangqing").css("display", "none");
        //因为是单页面，所以不同的流程，所拼的数据也有所不同，需要通过data_url来区分
        if ($(".xiangqing").attr("data-zt") == "xinzen") {
            //获取数据
            var driverCode = $("#driverCode").val();//车牌号
            var shoucheTime = $("#shoucheTime").val();//收车时间
            var shoucheLicheng = $("#shoucheLicheng").val();//收车里程
            var park = $("#park").val();//停放位置
            var thisRoute = $("#thisRoute").val();//本次行程
            var butiebz = $("#butiebz").val();//补贴标准
            var butiejine = $("#butiejine").val();//补贴金额
            var chuchefy = $("#chuchefy").val();//出车费用
            var xichef = $("#xichef").val();//洗车费
            var buzhuf = $("#buzhuf").val();//补助费
            var zhusuf = $("#zhusuf").val();//住宿费
            var luqiaof = $("#luqiaof").val();//路桥费
            var tinchef = $("#tinchef").val();//停车费
            var tuzhongjiayou = $("#tuzhongjiayou").val();//途中加油费
            var qitafy = $("#qitafy").val();//其他费用
            var shoucheshuoming = $("#shoucheshuoming").val();//收车说明
            var shoucheren = $("#shoucheren").val();//收车人
            //拼成对象
            var xinzen_obj = {
                'driverCode': driverCode,
                'shoucheTime': shoucheTime,
                'shoucheLicheng': shoucheLicheng,
                'park': park,
                'thisRoute': thisRoute,
                'butiebz': butiebz,
                'butiejine': butiejine,
                'chuchefy': chuchefy,
                'xichef': xichef,
                'buzhuf': buzhuf,
                'zhusuf': zhusuf,
                'luqiaof': luqiaof,
                'tinchef': tinchef,
                'tuzhongjiayou': tuzhongjiayou,
                'qitafy': qitafy,
                'shoucheshuoming': shoucheshuoming,
                'shoucheren': shoucheren
            }
            console.log(xinzen_obj)
            shuju_arr.push(xinzen_obj);
            list_zhanshi(shuju_arr);
        } else {
            //都是修改
            //data_list 为1，则对应模拟数据的下标为1-1=0
            //获取数据
            var driverCode = $("#driverCode").val();//车牌号
            var shoucheTime = $("#shoucheTime").val();//收车时间
            var shoucheLicheng = $("#shoucheLicheng").val();//收车里程
            var park = $("#park").val();//停放位置
            var thisRoute = $("#thisRoute").val();//本次行程
            var butiebz = $("#butiebz").val();//补贴标准
            var butiejine = $("#butiejine").val();//补贴金额
            var chuchefy = $("#chuchefy").val();//出车费用
            var xichef = $("#xichef").val();//洗车费
            var buzhuf = $("#buzhuf").val();//补助费
            var zhusuf = $("#zhusuf").val();//住宿费
            var luqiaof = $("#luqiaof").val();//路桥费
            var tinchef = $("#tinchef").val();//停车费
            var tuzhongjiayou = $("#tuzhongjiayou").val();//途中加油费
            var qitafy = $("#qitafy").val();//其他费用
            var shoucheshuoming = $("#shoucheshuoming").val();//收车说明
            var shoucheren = $("#shoucheren").val();//收车人
            //拼成对象
            var xinzen_obj = {
                'driverCode': driverCode,
                'shoucheTime': shoucheTime,
                'shoucheLicheng': shoucheLicheng,
                'park': park,
                'thisRoute': thisRoute,
                'butiebz': butiebz,
                'butiejine': butiejine,
                'chuchefy': chuchefy,
                'xichef': xichef,
                'buzhuf': buzhuf,
                'zhusuf': zhusuf,
                'luqiaof': luqiaof,
                'tinchef': tinchef,
                'tuzhongjiayou': tuzhongjiayou,
                'qitafy': qitafy,
                'shoucheshuoming': shoucheshuoming,
                'shoucheren': shoucheren
            }
            console.log(xinzen_obj);
            shuju_arr.splice([data_list - 1], 1, xinzen_obj);
            console.log(shuju_arr)
            list_zhanshi(shuju_arr);
        }
    });
    //取消
    $("#quxiao").click(function () {
        $(".my_list").css("display", "block");
        $(".xiangqing").css("display", "none");
    });
});