$(function(){
    $(".learn-more").click(function(){
        window.location.href = "./demo/lists/list.html";
    });

    //获取上一页的地址
    let re_url = document.referrer;
    console.log(re_url);
    
    
    //跳转地址
    $("#home").click(function(){
        let home_rul = "/index.html";
        if(home_rul == re_url){
            window.history(-1);
        }else{
            window.location.href = home_rul;
        }
    });
    $("#about").click(function(){
        alert("sorry，此项功能正在搭建中");
        // let about_rul = "/index.html";
        // if(about_rul == re_url){
        //     window.history(-1);
        // }else{
        //     window.location.href = about_rul;
        // }
    });
    $("#other").click(function(){
        let other_rul = "/demo/lists/list.html";
        if(other_rul == re_url){
            window.history(-1);
        }else{
            window.location.href = other_rul;
        }
    });

})