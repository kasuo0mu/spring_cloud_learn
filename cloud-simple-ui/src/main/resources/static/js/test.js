(function () {
    var pageData = [];
    $.ajax({
        type: "GET",
        url: "/home/list",
        data: {},
        async: false,
        success: function (data) {
            $.each(data, function (i, n) {
                var data =
                    '<tr>' +
                    '<td class="planmsg_td">' +
                    '<a href="' + n.url + '" target="_blank">' +
                    '<span>' + n.title + '</span>' +
                    '</a>' +
                    '</td>' +
                    '<td class="plantime_td">' +
                    '<span class="a_spantime">' + n.createdate + '</span>' +
                    '</td>' +
                    '</tr>' +
                    '<tr><td colspan="2"><hr/></td></tr>';
                pageData.push(data);
            });
        }
    });
    $(function () {
        if (pageData.length == 0) {
            $('#table').append("没有待办数据！");
            return;
        }
        var Count = pageData.length;//记录条数
        var PageSize = 10;//设置每页示数目
        var PageCount = Math.ceil(Count / PageSize);//计算总页数
        var currentPage = 1;//当前页，默认为1。
        //造个简单的分页按钮
        setPageHtml(1, PageCount, 1);
        $('#table').empty();
        //显示默认页（第一页）
        for (var i = (currentPage - 1) * PageSize; i < PageSize * currentPage; i++) {
            $('#table').append(pageData[i]);
        }
        //显示选择页的内容
        $(".selectPage").unbind('click');
        $(document).on('click', '.pagertxt', function () {
            //var selectPage = $(this).children().attr('selectPage');
            var selectPage = $(this).html();
            var currentPage = $(this).parent().find(".pagercurtxt");
            var pageNum = parseInt(currentPage.html());
            if (selectPage == "&lt;") {
                pageNum = pageNum - 1;
                if (pageNum == 0) {
                    pageNum = 1;
                }
            } else if (selectPage == "&gt;") {
                pageNum = pageNum + 1;
                if (pageNum > PageCount) {
                    pageNum = PageCount;
                }
            } else if (selectPage == "&lt;&lt;") {
                pageNum = 1;
            } else if (selectPage == "&gt;&gt;") {
                pageNum = PageCount;
            } else {
                pageNum = selectPage;
            }
            setPageHtml(pageNum, PageCount, selectPage);
            $('#table').html('');
            for (var i = (pageNum - 1) * PageSize; i < PageSize * pageNum; i++) {
                $('#table').append(pageData[i]);
            }
        });
        $(document).on('mouseover', '.pagertxt', function () {
            $(this).addClass('hoverclass');
        });
        $(document).on('mouseout', '.hoverclass', function () {
            $(this).removeClass('hoverclass');
        });
    });

    function setPageHtml(pageNum, PageCount, selectPage) {
        $('#page').html('');
        //$('#page').append('<div class="pagertxt"><a href="#" class="selectPage" selectPage="first">&lt;&lt;</a></div>');
        //$('#page').append('<div class="pagertxt"><a href="#" class="selectPage" selectPage="lt">&lt;</a></div>');
        $('#page').append('<div class="pagertxt"><<');
        $('#page').append('<div class="pagertxt"><');
        for (var i = 1; i <= PageCount; i++) {
            if (i == pageNum) {
                var preDiv = '<div class="pagercurtxt">';
            } else {
                var preDiv = '<div class="pagertxt">';
            }
            var postDiv = '</div>';
            if (Math.floor(i / 5.1) == Math.floor(pageNum / 5.1)) {
                //var pageN = '<a href="#" class="selectPage" selectPage=' + i + ' >' + i + '</a>';
                var pageN = i;
                var pageHtml = preDiv + pageN + postDiv;
                $('#page').append(pageHtml);
            }
        }
        //$('#page').append('<div class="pagertxt"><a href="#" class="selectPage" selectPage="gt">&gt;</a></div>');
        //$('#page').append('<div class="pagertxt"><a href="#" class="selectPage" selectPage="last">&gt;&gt;</a></div>');
        $('#page').append('<div class="pagertxt">>');
        $('#page').append('<div class="pagertxt">>>');
        var pagertext = '<div class="pagertext">共</div>' +
            '<div class = "pagertext">' + PageCount + '</div>' +
            '<div class="pagertext">页</div>';

        $('#page').append(pagertext);
    }
})(jQuery);