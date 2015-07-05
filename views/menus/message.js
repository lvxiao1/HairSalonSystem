define([], function() {

    return {
        $ui: {
            view: "popup",
            id: "messagePopup",
            width: 300,
            padding: 0,
            css: "list_popup",
            body: {
                type: "clean",
                borderless: true,
                rows: [{
                    view: "list",
                    autoheight: true,
                    data: [{
                        id: 1,
                        name: "系统",
                        text: "当日营业额详情",
                        personId: 1
                    }, {
                        id: 2,
                        name: "李店长",
                        text: "国庆假前调休计划",
                        personId: 2
                    }],
                    type: {
                        height: 45,
                        template: "	<img class='photo' src='image/user2.png' /><span class='text'>#text#</span><span class='name'>#name#</span>"

                    }
                }, {
                    css: "show_all",
                    template: "查看所有信息 <span class='webix_icon fa-angle-double-right'></span>",
                    height: 40
                }]

            }
        }
    };

});