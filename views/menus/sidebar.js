define([], function() {
    var data = [{
        id: "main",
        value: "主功能",
        open: true,
        data: [{
            id: "home",
            value: "首页",
            icon: "home",
            $css: "dashboard",
            details: "常用功能",
            viewUrl : "home/indexUI"
        }, /*{
            id: "orders",
            value: "员工考勤",
            icon: "check-square-o",
            $css: "orders",
            hidden : true,
            details: "可查看员工最近的考勤记录"
        }, */{
            id: "products",
            value: "会员开卡",
            icon: "cube",
            $css: "products",
            details: "新会员注册",
            viewUrl : "member/index"
        }, {
            id: "product_edit",
            value: "商品资料管理",
            icon: "pencil-square-o",
            details: "入库后需在入库管理中审核",
            viewUrl : "inventory/goods/index"
        }]
    }/*, {
        id: "components",
        open: true,
        value: "Components",
        data: [{
            id: "datatables",
            value: "Datatables",
            icon: "table",
            details: "datatable examples"
        }, {
            id: "charts",
            value: "Charts",
            icon: "bar-chart-o",
            details: "charts examples"
        }, {
            id: "forms",
            value: "Forms",
            icon: "list-alt",
            details: "forms examples"
        }, {
            id: "typography",
            value: "Typography",
            icon: "align-left",
            details: "typography examples"
        }]
    }, {
        id: "uis",
        value: "UI Examples",
        open: 1,
        data: [{
                id: "calendar",
                value: "My Calendar",
                icon: "calendar",
                details: "calendar example"
            }, {
                id: "files",
                value: "File Manager",
                icon: "folder-open-o",
                details: "file manager example"
            }

        ]
    }*/];


    return {
        $ui: {
            width: 200,

            rows: [{
                view: "tree",
                id: "app:menu",
                type: "menuTree2",
                css: "menu",
                activeTitle: true,
                select: true,
                tooltip: {
                    template: function(obj) {
                        return obj.$count ? "" : obj.details;
                    }
                },
                on: {
                    onBeforeSelect: function(id) {
                        return !this.getItem(id).$count;
                    },
                    onAfterSelect: function(id) {
                        var item = this.getItem(id);
                        this.$scope.show("./" + item.viewUrl);
                        webix.$$("title").parse({
                            title: item.value,
                            details: item.details
                        });
                    }
                },
                data: data
            }]
        }
    };

});