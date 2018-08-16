$(function () {
    //全局变量
    var data_list = "";//存放当前被点击的那条数据，进入修改后回写，修改模拟数据

    //模板
    var content = ` <ul>
	    <li>
		    <span>车牌号</span>
		    <input type="text"  name="chepaihao" id="chepaihao">
		</li>
		<li>
		    <span>维修里程</span>
		    <input type="text"  name="wxlc" id="wxlc">
		</li>
        <li>
            <span>送修时间</span>
            <input type="text" class="form_datetime form-control" name="sxTime" id="sxTime">
        </li>
        <li>
            <span>修理厂</span>
            <select name="xiulichang" id="xiulichang">
	            <option value="栖霞修理厂">栖霞修理厂</option>
	            <option value="雨花修理厂">雨花修理厂</option>
	        </select>
        </li>
        <li>
            <span>经办人</span>
            <select name="jbr" id="jbr">
	            <option value="业务员1">业务员1</option>
	            <option value="业务员2">业务员2</option>
            </select>
        </li>
        <li>
            <span>预计取车</span>
            <input type="text" class="form_datetime form-control" name="yjqcTime" id="yjqcTime">
        </li>
        <li>
            <span>送修原因</span>
            <input type="text"  name="sxyy" id="sxyy">
        </li>
        <li>
            <span>取车时间</span>
            <input type="text" class="form_datetime form-control" name="qucheTime" id="qucheTime">
        </li>
        <li>
	        <span>单据编号</span>
	        <input type="text" name="djbh" id="djbh">
	    </li>
        <li>
            <span>维修类别</span>
	        <select name="wxlb" id="wxlb">
	            <option value="检修底盘">检修底盘</option>
	            <option value="更换室内灯">更换室内灯</option>
	            <option value="更换电池">更换电池</option>
	            <option value="更换刹车总泵修理包">更换刹车总泵修理包</option>
	            <option value="大修变速箱">大修变速箱</option>
	            <option value="更换车门把手">更换车门把手</option>
	            <option value="更换半轴油封">更换半轴油封</option>
	        </select>
        </li>
        <li>
            <span>维修费用</span>
            <input type="text" name="wxfy" id="wxfy">
        </li>
        <li>
            <span>维修项目</span>
            <textarea name="wxxm" id="wxxm" cols="30" rows="3"></textarea>
        </li>
        <li>
            <span>备注</span>
            <textarea name="beizhu" id="beizhu" cols="30" rows="3"></textarea>
        </li>
	    <li>
		    <span>照片</span>
		    <input type="file" id='image' accept="image/*" >
	    </li>
		
    </ul>`;

    //模拟数据
    var shuju = [
        {
            'chepaihao': '冀P-0003',
            'wxlc': '5000',
            'sxTime': '2018-08-16',
            'xiulichang': '栖霞修理厂',
            'jbr': '业务员1',
            'yjqcTime': "2018-08-17",
            'sxyy': "大灯闪烁",
            'qucheTime': '2018-08-17',
            'djbh': '201808160001',
            'wxlb': '更换室内灯',
            'wxfy': '4000',
            'wxxm': '更换室内灯',
            'beizhu': '室内灯和大灯同时更换'
        },
        {
            'chepaihao': '冀P-0004',
            'wxlc': '6500',
            'sxTime': '2018-08-17',
            'xiulichang': '雨花修理厂',
            'jbr': '业务员2',
            'yjqcTime': "2018-08-18",
            'sxyy': "大灯闪烁",
            'qucheTime': '2018-08-18',
            'djbh': '201808160001',
            'wxlb': '更换室内灯',
            'wxfy': '4000',
            'wxxm': '更换室内灯',
            'beizhu': '室内灯和大灯同时更换'
        }
    ];

    //list页面展示数据
    var shuju_arr = shuju;
    function list_zhanshi(arr) {
        var num = 0;
        var str_a = "";
        for (var i = 0; i < arr.length; i++) {
            num++;
            var stt_content = arr[i]["chepaihao"] + ' ' + arr[i]["wxlc"] + ' ' + arr[i]["sxTime"] + ' ' + arr[i]["xiulichang"] + ' ' + arr[i]["jbr"] + ' ' + arr[i]["yjqcTime"]
            + ' ' + arr[i]["sxyy"] + ' ' + arr[i]["djbh"] + ' ' + arr[i]["wxfy"]; 
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
        $("#chepaihao").val(shuju_data['chepaihao']);//车牌号
        $("#wxlc").val(shuju_data['wxlc']);//维修里程
        $("#sxTime").val(shuju_data['sxTime']);//送修时间
        $("#xiulichang").val(shuju_data['xiulichang']);//修理厂
        $("#jbr").val(shuju_data['jbr']);//经办人
        $("#yjqcTime").val(shuju_data['yjqcTime']);//预计取车
        $("#sxyy").val(shuju_data['sxyy']);//送修原因
        $("#qucheTime").val(shuju_data['qucheTime']);//取车时间
        $("#djbh").val(shuju_data['djbh']);//单据编号
        $("#wxlb").val(shuju_data['wxlb']);//维修类别
        $("#wxfy").val(shuju_data['wxfy']);//维修费用
        $("#wxxm").val(shuju_data['wxxm']);//维修项目
        $("#beizhu").val(shuju_data['beizhu']);//备注
    });
    //确定
    $("#queding").click(function () {
        $(".my_list").css("display", "block");
        $(".xiangqing").css("display", "none");
        //因为是单页面，所以不同的流程，所拼的数据也有所不同，需要通过data_url来区分
        if ($(".xiangqing").attr("data-zt") == "xinzen") {
            //获取数据
            var chepaihao = $("#chepaihao").val();//车牌号
            var wxlc = $("#wxlc").val();//维修里程
            var sxTime = $("#sxTime").val();//送修时间
            var xiulichang = $("#xiulichang").val();//修理厂
            var jbr = $("#jbr").val();//经办人
            var yjqcTime = $("#yjqcTime").val();//预计取车
            var sxyy = $("#sxyy").val();//送修原因
            var qucheTime = $("#qucheTime").val();//取车时间
            var djbh = $("#djbh").val();//单据编号
            var wxlb = $("#wxlb").val();//维修类别
            var wxfy = $("#wxfy").val();//维修费用
            var wxxm = $("#wxxm").val();//维修项目
            var beizhu = $("#beizhu").val();//备注
            //拼成对象
            var xinzen_obj = {
            		
                'chepaihao': chepaihao,
                'wxlc': wxlc,
                'sxTime': sxTime,
                'xiulichang': xiulichang,
                'jbr': jbr,
                'yjqcTime': yjqcTime,
                'sxyy': sxyy,
                'qucheTime': qucheTime,
                'djbh': djbh,
                'wxlb': wxlb,
                'wxfy': wxfy,
                'wxxm': wxxm,
                'beizhu': beizhu
            }
            console.log(xinzen_obj)
            shuju_arr.push(xinzen_obj);
            list_zhanshi(shuju_arr);
        } else {
            //都是修改
            //data_list 为1，则对应模拟数据的下标为1-1=0
            //获取数据
        	var chepaihao = $("#chepaihao").val();//车牌号
            var wxlc = $("#wxlc").val();//维修里程
            var sxTime = $("#sxTime").val();//送修时间
            var xiulichang = $("#xiulichang").val();//修理厂
            var jbr = $("#jbr").val();//经办人
            var yjqcTime = $("#yjqcTime").val();//预计取车
            var sxyy = $("#sxyy").val();//送修原因
            var qucheTime = $("#qucheTime").val();//取车时间
            var djbh = $("#djbh").val();//单据编号
            var wxlb = $("#wxlb").val();//维修类别
            var wxfy = $("#wxfy").val();//维修费用
            var wxxm = $("#wxxm").val();//维修项目
            var beizhu = $("#beizhu").val();//备注
            //拼成对象
            var xinzen_obj = {
            		'chepaihao': chepaihao,
                    'wxlc': wxlc,
                    'sxTime': sxTime,
                    'xiulichang': xiulichang,
                    'jbr': jbr,
                    'yjqcTime': yjqcTime,
                    'sxyy': sxyy,
                    'qucheTime': qucheTime,
                    'djbh': djbh,
                    'wxlb': wxlb,
                    'wxfy': wxfy,
                    'wxxm': wxxm,
                    'beizhu': beizhu
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