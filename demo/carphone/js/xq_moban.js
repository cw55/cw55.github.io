var yon_shuju = {
    "yongchesq":{
        "xiangqing_title":"用车申请",
        "xq_content":`<ul>
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
                    <input type="text" placeholder="格式为：20180810" name="sq_time" id="sq_time">
                </li>
                <li>
                    <span>申请人</span>
                    <input type="text" name="sqr" id="sqr">
                </li>
                <li>
                    <span>用车部门</span>
                    <select name="sq_bumen" id="sq_bumen">
                        <option value="管理员">管理员</option>
                        <option value="总办">总办</option>
                    </select>
                </li>
                <li>
                    <span>申请类型</span>
                    <select name="sq_leixing" id="sq_leixing">
                        <option value="商务车">商务车</option>
                        <option value="轿车">轿车</option>
                    </select>
                </li>
                <li>
                    <span>目的地</span>
                    <select name="sq_target" id="sq_target">
                        <option value="北京">北京</option>
                        <option value="南京">南京</option>
                    </select>
                </li>
                <li>
                    <span>用车事由</span>
                    <select name="sq_shiyou" id="sq_shiyou">
                        <option value="业务">业务</option>
                        <option value="临时有事">临时有事</option>
                    </select>
                </li>
                <li>
                    <span>起始时间</span>
                    <input type="text" placeholder="格式为：20180810" name="qishitime" id="qishitime">
                </li>
                <li>
                    <span>结束时间</span>
                    <input type="text" placeholder="格式为：20180811" name="jieshutime" id="jieshutime">
                </li>
                <li>
                    <span>随行人员</span>
                    <select name="sq_shiyou" id="sq_shiyou">
                        <option value="业务员1">业务员1</option>
                        <option value="业务员2">业务员2</option>
                    </select>
                </li>
                <li>
                    <span>其他说明</span>
                    <textarea name="shuoming" id="shuoming" cols="30" rows="10"></textarea>
                </li>
                </ul>`
    },
    "shushouche":{
        "xiangqing_title":"出收车登记 - 车牌号：冀P-0002",
        "xq_content":` <ul>
                <li>
                    <span>收车时间</span>
                    <input type="text" name="sq_time" id="sq_time">
                </li>
                <li>
                    <span>收车里程</span>
                    <!-- 后期修改为input，给固定格式 -->
                    <input type="text" name="time">
                </li>
                <li>
                    <span>停放位置</span>
                    <select name="sq_bumen" id="sq_bumen">
                        <option value="路口">路口</option>
                        <option value="路口">路口</option>
                    </select>
                </li>
                <li>
                    <span>本次行程</span>
                    <input type="text" name="xncheng" placeholder="0">
                </li>
                <li>
                    <span>补贴标准</span>
                    <input type="text" placeholder="元/公里">
                </li>
                <li>
                    <span>补贴金额</span>
                    <input type="text">
                </li>
                <li>
                    <span>出车费用</span>
                    <input type="text">
                </li>
                <li>
                    <span>洗车费</span>
                    <input type="text">
                </li>
                <li>
                    <span>补助费</span>
                    <input type="text">
                </li>
                <li>
                    <span>住宿费</span>
                    <input type="text">
                </li>
                <li>
                    <span>路桥费</span>
                    <input type="text">
                </li>
                <li>
                    <span>停车费</span>
                    <input type="text">
                </li>
                <li>
                    <span>途中加油</span>
                    <input type="text">
                </li>
                <li>
                    <span>其他费用</span>
                    <input type="text">
                </li>
                <li>
                    <span>收车说明</span>
                    <input type="text">
                </li>
                <li>
                    <span>收车人</span>
                    <select name="sq_shiyou" id="sq_shiyou">
                        <option value="业务员1">业务员1</option>
                        <option value="业务员2">业务员2</option>
                    </select>
                </li>
            </ul>`
    }
}