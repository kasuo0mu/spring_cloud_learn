(function () {
    $(function () {
        var $table = $('#table_bootstrap');
        $table.bootstrapTable({
            url: "/home/list",
            dataType: "json",
            pagination: true, //分页
            singleSelect: false,
            search: false, //显示搜索框
            sidePagination: "client", //客户端处理分页
            //sidePagination: "server", //服务端处理分页
            columns: [{
                title: '待办事项',
                field: 'name',
                align: 'center',
                valign: 'middle'
            },
                {
                    title: '日期',
                    field: 'date',
                    align: 'center',
                    valign: 'middle',
                }
                //{
                //    title: '操作',
                //    field: 'id',
                //    align: 'center',
                //    formatter: function (value, row, index) {
                //        var e = '<a href="#" mce_href="#" onclick="edit(\'' + row.id + '\')">编辑</a> ';
                //        var d = '<a href="#" mce_href="#" onclick="del(\'' + row.id + '\')">删除</a> ';
                //        return e + d;
                //    }
                //}
            ]
        });
    })
})(jQuery);