$(function(){
    $(".lists table tbody tr").on('click',function() {
        let data_id = $(this).attr("data-id");
        console.log(data_id);
        if(data_id == "canvas"){
            window.location.href = "/page/index.html";
            return
        }else if(data_id == "print"){
            window.location.href = "/untile.html";
            return
        }

    });
});