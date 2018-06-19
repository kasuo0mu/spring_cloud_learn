$(document).ready(function () {
    //dataTables

    //$(document).ready(function() {
    //    $('#table_data').DataTable(options);
    //});
    var options = {
        ajax: "/ui/dataTables",
        columns: [
            {data: "name"},
            {data: "phone"},
            {data: "address"}
        ]
    };
    $("#data_tables").click(function () {
        $('#table_data').DataTable(options);
    });

    //easyui
    $('#dg').datagrid({
        title: '统计 报表',
        iconCls: 'icon-save',
        width: 1800,
        height: 800,
        url: "/ui/easyUi",
        method:'get',
        columns: [[
            { field: 'name', title: '名称' },
            { field: 'phone', title: '电话', align: 'right' },
            { field: 'address', title: '地址', align: 'left' }
        ]],
        pagination: true,
        rownumbers: true,
    });

});