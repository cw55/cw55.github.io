$(function () {
    //全局变量
    var data_list = "";//存放当前被点击的那条数据，进入修改后回写，修改模拟数据

    //模板
    var content = `<ul>
        <li>
            <span>发送短信</span>
            <select name="duanxin" id="duanxin">
                <option value="13645150222">13645150222</option>
                <option value="13845150222">13845150222</option>
            </select>
        </li>
        <li>
            <span>申请日期</span>
            <!-- 后期修改为input，给固定格式 -->
            <input type="text" class="form_datetime" name="sqTime" id="sqTime">
        </li>
        <li>
            <span>申请人</span>
            <input type="text" name="sqman" id="sqman">
        </li>
        <li>
            <span>用车部门</span>
            <select name="getCarbumen" id="getCarbumen">
                <option value="管理员">管理员</option>
                <option value="总办">总办</option>
            </select>
        </li>
        <li>
            <span>申请类型</span>
            <select name="sqLeixing" id="sqLeixing">
                <option value="商务车">商务车</option>
                <option value="轿车">轿车</option>
            </select>
        </li>
        <li>
            <span>目的地</span>
            <select name="destination" id="destination">
                <option value="北京">北京</option>
                <option value="南京">南京</option>
            </select>
        </li>
        <li>
            <span>用车事由</span>
            <select name="cause" id="cause">
                <option value="业务">业务</option>
                <option value="临时有事">临时有事</option>
            </select>
        </li>
        <li>
            <span>起始时间</span>
            <input type="text" class="form_datetime" name="startTime" id="startTime">
        </li>
        <li>
            <span>结束时间</span>
            <input type="text" class="form_datetime" name="endTime" id="endTime">
        </li>
        <li>
            <span>随行人员</span>
            <select name="suixingren" id="suixingren">
                <option value="业务员1">业务员1</option>
                <option value="业务员2">业务员2</option>
            </select>
        </li>
        <li>
            <span>其他说明</span>
            <textarea name="qitashuoming" id="qitashuoming" cols="30" rows="4"></textarea>
        </li>
    </ul>`;
    //模拟数据
    var shuju = [
        {
            'duanxin': "13645159255",
            'sqTime': "2018-08-02",
            'sqman': '王益',
            'getCarbumen': "实施部",
            'sqLeixing': "商务车",
            'destination': "杭州",
            'cause': "业务",
            'startTime': "2018-08-02",
            'endTime': "2018-08-04",
            'suixingren': '小程',
            'qitashuoming': '1、商讨如何规范车辆运行管理；2、如何监管到位，科学有效；3、有效降低行政成本。'
        },
        {
            'duanxin': "13645159255",
            'sqTime': "2018-08-02",
            'sqman': '王益',
            'getCarbumen': "实施部",
            'sqLeixing': "商务车",
            'destination': "北京",
            'cause': "临时有事",
            'startTime': "2018-08-08",
            'endTime': "2018-08-12",
            'suixingren': '小红',
            'qitashuoming': '与王总交流，争取获取新的单子。'
        },
        {
            'duanxin': "13645159255",
            'sqTime': "2018-08-02",
            'sqman': '王益',
            'getCarbumen': "实施部",
            'sqLeixing': "轿车",
            'destination': "杭州",
            'cause': "业务",
            'startTime': "2018-08-04",
            'endTime': "2018-08-06",
            'suixingren': '小程',
            'qitashuoming': ''
        },
    ];
    
    //list页面展示数据
    var shuju_arr = shuju;
    function list_zhanshi(arr) {
        var num = 0;
        var str_a = "";
        for (var i = 0; i < arr.length; i++) {
            num++;
            var stt_content = arr[i]["sqTime"] + ' ' + arr[i]["sqman"] + ' ' + arr[i]["sqLeixing"] + ' ' + arr[i]["destination"] + ' ' + arr[i]["cause"] + ' ' + arr[i]["endTime"];
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
        $("#duanxin").val(shuju_data['duanxin']);//短信号码
        $("#sqTime").val(shuju_data['sqTime']);//申请时间
        $("#sqman").val(shuju_data['sqman']);//申请人
        $("#getCarbumen").val(shuju_data['getCarbumen']);//申请部门
        $("#sqLeixing").val(shuju_data['sqLeixing']);//车类型
        $("#destination").val(shuju_data['destination']);//目的地
        $("#cause").val(shuju_data['cause']);//用车事由
        $("#startTime").val(shuju_data['startTime']);//开始时间
        $("#endTime").val(shuju_data['endTime']);//结束时间
        $("#suixingren").val(shuju_data['suixingren']);//随行人
        $("#qitashuoming").val(shuju_data['qitashuoming']);//备注
    });
    //确定
    $("#queding").click(function () {
        $(".my_list").css("display", "block");
        $(".xiangqing").css("display", "none");
        //因为是单页面，所以不同的流程，所拼的数据也有所不同，需要通过data_url来区分
        if ($(".xiangqing").attr("data-zt") == "xinzen") {
            //获取数据
            var duanxin = $("#duanxin").val();//短信号码
            var sqTime = $("#sqTime").val();//申请时间
            var sqman = $("#sqman").val();//申请人
            var getCarbumen = $("#getCarbumen").val();//申请部门
            var sqLeixing = $("#sqLeixing").val();//车类型
            var destination = $("#destination").val();//目的地
            var cause = $("#cause").val();//用车事由
            var startTime = $("#startTime").val();//开始时间
            var endTime = $("#endTime").val();//结束时间
            var suixingren = $("#suixingren").val();//随行人
            var qitashuoming = $("#qitashuoming").val();//备注
            //拼成对象
            var xinzen_obj = {
                'duanxin': duanxin,
                'sqTime': sqTime,
                'sqman': sqman,
                'getCarbumen': getCarbumen,
                'sqLeixing': sqLeixing,
                'destination': destination,
                'cause': cause,
                'startTime': startTime,
                'endTime': endTime,
                'suixingren': suixingren,
                'qitashuoming': qitashuoming
            }
            console.log(xinzen_obj)
            shuju_arr.push(xinzen_obj);
            list_zhanshi(shuju_arr);
        } else {
            //都是修改
            //data_list 为1，则对应模拟数据的下标为1-1=0
            //获取数据
            var duanxin = $("#duanxin").val();//短信号码
            var sqTime = $("#sqTime").val();//申请时间
            var sqman = $("#sqman").val();//申请人
            var getCarbumen = $("#getCarbumen").val();//申请部门
            var sqLeixing = $("#sqLeixing").val();//车类型
            var destination = $("#destination").val();//目的地
            var cause = $("#cause").val();//用车事由
            var startTime = $("#startTime").val();//开始时间
            var endTime = $("#endTime").val();//结束时间
            var suixingren = $("#suixingren").val();//随行人
            var qitashuoming = $("#qitashuoming").val();//备注
            //拼成对象
            var xinzen_obj = {
                'duanxin': duanxin,
                'sqTime': sqTime,
                'sqman': sqman,
                'getCarbumen': getCarbumen,
                'sqLeixing': sqLeixing,
                'destination': destination,
                'cause': cause,
                'startTime': startTime,
                'endTime': endTime,
                'suixingren': suixingren,
                'qitashuoming': qitashuoming
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