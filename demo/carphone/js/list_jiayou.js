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
		    <span>加油卡号</span>
		    <input type="text"  name="jykh" id="jykh">
		</li>
        <li>
            <span>加油日期</span>
            <input type="text" class="form_datetime form-control" name="jiayouDate" id="jiayouDate">
        </li>
        <li>
            <span>油卡余额</span>
            <!-- 后期修改为input，给固定格式 -->
            <input type="text" name="youkayue" id="youkayue">
        </li>
        <li>
            <span>油料品种</span>
            <select name="pingzhong" id="pingzhong">
                <option value="93#">93#</option>
                <option value="95#">95#</option>
            </select>
        </li>
        <li>
            <span>单价</span>
            <input type="text" name="danjia" id="danjia" placeholder="0">
        </li>
        <li>
            <span>数量</span>
            <input type="text"  name="shuliang" id="shuliang">
        </li>
        <li>
            <span>加油站</span>
            <input type="text" name="jiayouzhan" id="jiayouzhan">
        </li>
        <li>
	        <span>经办人</span>
	        <select name="jingbanren" id="jingbanren">
	            <option value="业务员1">业务员1</option>
	            <option value="业务员2">业务员2</option>
	        </select>
	    </li>
        <li>
            <span>加油里程</span>
            <input type="text" name="jiayoulicheng" id="jiayoulicheng">
        </li>
        <li>
            <span>上次加油里程</span>
            <input type="text" name="scjiayoulicheng" id="scjiayoulicheng">
        </li>
        <li>
            <span>本次油耗</span>
            <input type="text" name="benciyouhao" id="benciyouhao">
        </li>
        <li>
            <span>本次里程</span>
            <input type="text" name="bencilicheng" id="bencilicheng">
        </li>
        <li>
            <span>上次耗油</span>
            <input type="text" name="shangcihaoyou" id="shangcihaoyou">
        </li>
        <li>
            <span>本次油卡余额</span>
            <input type="text" name="benciyoukayue" id="benciyoukayue">
        </li>
        
        <li>
            <span>单据编号</span>
            <input type="text" name="djbh" id="djbh">
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
            'jykh': '无',
            'jiayouDate': '2018-08-15',
            'youkayue': '0',
            'pingzhong': '93#',
            'danjia': "7.95",
            'shuliang': "300",
            'jiayouzhan': '中心加油站',
            'jingbanren': '业务员1',
            'jiayoulicheng': '5000',
            'scjiayoulicheng': '4000',
            'benciyouhao': '0.75',
            'bencilicheng': '5000',
            'shangcihaoyou': '0',
            'benciyoukayue': "0",
            'beizhu': '行驶距离较远，油不足，需加油。',
            'djbh': "2012000001"
        }
    ];

    //list页面展示数据
    var shuju_arr = shuju;
    function list_zhanshi(arr) {
        var num = 0;
        var str_a = "";
        for (var i = 0; i < arr.length; i++) {
            num++;
            var stt_content = arr[i]["chepaihao"] + ' ' + arr[i]["jykh"] + ' ' + arr[i]["jiayouDate"] + ' ' + arr[i]["youkayue"] + ' ' + arr[i]["pingzhong"] + ' ' + arr[i]["danjia"]
            + ' ' + arr[i]["jiayouzhan"] + ' ' + arr[i]["jingbanren"] + ' ' + arr[i]["djbh"];
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
        $("#jykh").val(shuju_data['jykh']);//加油卡号
        $("#jiayouDate").val(shuju_data['jiayouDate']);//加油日期
        $("#youkayue").val(shuju_data['youkayue']);//油卡余额
        $("#pingzhong").val(shuju_data['pingzhong']);//油料品种
        $("#danjia").val(shuju_data['danjia']);//单价
        $("#shuliang").val(shuju_data['shuliang']);//数量
        $("#jiayouzhan").val(shuju_data['jiayouzhan']);//加油站
        $("#jingbanren").val(shuju_data['jingbanren']);//经办人
        $("#jiayoulicheng").val(shuju_data['jiayoulicheng']);//加油里程
        $("#scjiayoulicheng").val(shuju_data['scjiayoulicheng']);//上次加油里程
        $("#benciyouhao").val(shuju_data['benciyouhao']);//本次油耗(百公里)
        $("#bencilicheng").val(shuju_data['bencilicheng']);//本次里程
        $("#shangcihaoyou").val(shuju_data['shangcihaoyou']);//上次耗油(百公里)
        $("#benciyoukayue").val(shuju_data['benciyoukayue']);//本次油卡余额
        $("#beizhu").val(shuju_data['beizhu']);//备注
        $("#djbh").val(shuju_data['djbh']);//单据编号
    });
    //确定
    $("#queding").click(function () {
        $(".my_list").css("display", "block");
        $(".xiangqing").css("display", "none");
        //因为是单页面，所以不同的流程，所拼的数据也有所不同，需要通过data_url来区分
        if ($(".xiangqing").attr("data-zt") == "xinzen") {
            //获取数据
            var chepaihao = $("#chepaihao").val();//车牌号
            var jykh = $("#jykh").val();//加油卡号
            var jiayouDate = $("#jiayouDate").val();//加油日期
            var youkayue = $("#youkayue").val();//油卡余额
            var pingzhong = $("#pingzhong").val();//油料品种
            var danjia = $("#danjia").val();//单价
            var shuliang = $("#shuliang").val();//数量
            var jiayouzhan = $("#jiayouzhan").val();//加油站
            var jingbanren = $("#jingbanren").val();//经办人
            var jiayoulicheng = $("#jiayoulicheng").val();//加油里程
            var scjiayoulicheng = $("#scjiayoulicheng").val();//上次加油里程
            var benciyouhao = $("#benciyouhao").val();//本次油耗(百公里)
            var bencilicheng = $("#bencilicheng").val();//本次里程
            var shangcihaoyou = $("#shangcihaoyou").val();//上次耗油(百公里)
            var benciyoukayue = $("#benciyoukayue").val();//本次油卡余额
            var beizhu = $("#beizhu").val();//备注
            var djbh = $("#djbh").val();//单据编号
            //拼成对象
            var xinzen_obj = {
            		
                'chepaihao': chepaihao,
                'jykh': jykh,
                'jiayouDate': jiayouDate,
                'youkayue': youkayue,
                'pingzhong': pingzhong,
                'danjia': danjia,
                'shuliang': shuliang,
                'jiayouzhan': jiayouzhan,
                'jingbanren': jingbanren,
                'jiayoulicheng': jiayoulicheng,
                'scjiayoulicheng': scjiayoulicheng,
                'benciyouhao': benciyouhao,
                'bencilicheng': bencilicheng,
                'shangcihaoyou': shangcihaoyou,
                'benciyoukayue': benciyoukayue,
                'beizhu': beizhu,
                'djbh': djbh
            }
            console.log(xinzen_obj)
            shuju_arr.push(xinzen_obj);
            list_zhanshi(shuju_arr);
        } else {
            //都是修改
            //data_list 为1，则对应模拟数据的下标为1-1=0
            //获取数据
            var chepaihao = $("#chepaihao").val();//车牌号
            var jykh = $("#jykh").val();//加油卡号
            var jiayouDate = $("#jiayouDate").val();//加油日期
            var youkayue = $("#youkayue").val();//油卡余额
            var pingzhong = $("#pingzhong").val();//油料品种
            var danjia = $("#danjia").val();//单价
            var shuliang = $("#shuliang").val();//数量
            var jiayouzhan = $("#jiayouzhan").val();//加油站
            var jingbanren = $("#jingbanren").val();//经办人
            var jiayoulicheng = $("#jiayoulicheng").val();//加油里程
            var scjiayoulicheng = $("#scjiayoulicheng").val();//上次加油里程
            var benciyouhao = $("#benciyouhao").val();//本次油耗(百公里)
            var bencilicheng = $("#bencilicheng").val();//本次里程
            var shangcihaoyou = $("#shangcihaoyou").val();//上次耗油(百公里)
            var benciyoukayue = $("#benciyoukayue").val();//本次油卡余额
            var beizhu = $("#beizhu").val();//备注
            var djbh = $("#djbh").val();//单据编号
            //拼成对象
            var xinzen_obj = {
            		'chepaihao': chepaihao,
            		'jykh': jykh,
            		'jiayouDate': jiayouDate,
            		'youkayue': youkayue,
            		'pingzhong': pingzhong,
            		'danjia': danjia,
            		'shuliang': shuliang,
            		'jiayouzhan': jiayouzhan,
            		'jingbanren': jingbanren,
            		'jiayoulicheng': jiayoulicheng,
            		'scjiayoulicheng': scjiayoulicheng,
            		'benciyouhao': benciyouhao,
            		'bencilicheng': bencilicheng,
            		'shangcihaoyou': shangcihaoyou,
            		'benciyoukayue': benciyoukayue,
            		'beizhu': beizhu,
            		'djbh': djbh
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