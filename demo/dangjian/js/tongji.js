$(function(){

    var data = ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'];
    var data_val = [122,123,233,44,551];

    //上面饼图
    var myChart = echarts.init(document.getElementById('main'));
    var option = {
        title : {
            text: '根据入党积极分子、正式党员、总人数进行统计',
            x:'left'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            y: "bottom",
            data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
            formatter: function(name) {
                var index = 0;
                data.forEach(function(value,i){
                    if(value == name){
                        index = i;
                    }
                });
                return name + "    " + data_val[index] + "个";
            }
        },
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}
                ]
            }
        ]
    };

    myChart.setOption(option);


    var data2 = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    var data2_val = [120, 200, 150, 80, 70, 110, 130];
    //柱状图
    var myChart2 = echarts.init(document.getElementById('main1'));
    var option2 = {
        title : {
            text: '根据各个村人数进行统计',
            x:'left'
        },
        xAxis: {
            type: 'category',
            data: data2
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: data2_val,
            type: 'bar'
        }]
    };
    myChart2.setOption(option2);
});