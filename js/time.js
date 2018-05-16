$(function(){
    //开始工作时间
    const init_time = "2016/06/11 00:00:00";
    console.log(init_time)

    //计时函数
    let getTime = function(){
        let time = new Date();
        let newTime = time.getFullYear()+"/"+(time.getMonth()+1)+"/"+time.getDate()+" "+time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
        let time_arr = GetDateDiff(init_time,newTime);
        $(".days .number").html(time_arr[0]);
        $(".hours .number").html(time_arr[1]);
        $(".minutes .number").html(time_arr[2]);
        $(".seconds .number").html(time_arr[3]);
        
    }
    getTime();//默认进入调用一次
    function GetDateDiff(startDate,endDate){
        let startTime = new Date(Date.parse(startDate.replace(/-/g,   "/"))).getTime();
        let endTime = new Date(Date.parse(endDate.replace(/-/g,   "/"))).getTime();
        let day = parseInt(Math.abs((startTime - endTime))/(1000*60*60*24));
        let hour = parseInt(Math.abs((startTime - endTime))/(1000*60*60)%24);
        let min = parseInt(Math.abs((startTime - endTime))/(1000*60)%60);
        let sec = parseInt(Math.abs((startTime - endTime))/(1000)%60);
        //判断位数
        if(String(hour).length==1){
            hour = "0" + hour;
        }
        if(String(min).length==1){
            min = "0" + min;
        }
        if(String(sec).length==1){
            sec = "0" + sec;
        }
        return  [day,hour,min,sec];
    }
    let getIv = setInterval(getTime,1000);


})