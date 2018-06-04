$(document).ready(function(){
    var token = $("#token").val();
    $(".sysbtn_td").click(function () {
        if($(this).html().indexOf("工艺工法(新)") > 0){
            window.open("/basis/sche/index.html?Token=" + token);
        }
        else if($(this).html().indexOf("系统设置") > 0){
            window.open("/project/?Token=" + token);
        }
        else if($(this).html().indexOf("进度协同") > 0){
            window.open("http://plan.mingshi58.com/?Token=" + token);
        }
        else if($(this).html().indexOf("安全管理") > 0){
            window.open("http://safe.mingshi58.com/default.aspx?Token=" + token);
        }
        else if($(this).html().indexOf("质量管理") > 0){
            window.open("http://task.mingshi58.com/?Token=" + token);
        }
        else if($(this).html().indexOf("项目OA") > 0){
            window.open("http://oa.mingshi58.com/?Token=" + token);
        }
        else if($(this).html().indexOf("工艺工法") > 0){
            window.open("http://gf.mingshi58.com/?Token=" + token);
        }
    });
    $("#logout").click(function () {
       $("form").submit();
    });

    $(document).on('mouseover', '.sysbtn_td', function () {
        $(this).addClass('sysbtn_td_in');
    });
    $(document).on('mouseout', '.sysbtn_td', function () {
        $(this).removeClass('sysbtn_td_in');
    });
});