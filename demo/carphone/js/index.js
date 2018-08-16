$(function(){
    console.log("index.js")
    //监听page_box
    $(".shouye_content").delegate(".page_box",'click',function(){
        var data_id = $(this).attr("data-id");
        console.log(data_id);
        // window.location.href='./page/list.html?data='+data_id;
        window.location.href='./page/list_'+data_id+'.html';
    });

    
});