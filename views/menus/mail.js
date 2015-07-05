define( [], function() {

    return {
        $ui: {
            view: "popup",
            id: "mailPopup",
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
                        name: "曾小姐",
                        text: "我需要预约8点的洗剪吹",
                        personId: 2
                    }, {
                        id: 2,
                        name: "吕助理",
                        text: "请假,家中有事",
                        personId: 1
                    }],
                    type: {
                        height: 45,
                        template: "<img class='photo' src='image/user2.png' /><span class='text'>#text#</span><span class='name'>#name#</span>"

                    }
                }, {
                    css: "show_all",
                    template: "查看所有邮件 <span class='webix_icon fa-angle-double-right'></span>",
                    height: 40
                }]

            }
        }
    };

});