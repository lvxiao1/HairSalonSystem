define([], function() {

    return {
        $ui: {
            view: "submenu",
            id: "profilePopup",
            width: 200,
            padding: 0,
            data: [{
                id: 1,
                icon: "user",
                value: "我的信息"
            }, {
                id: 2,
                icon: "cog",
                value: "我的账户"
            }, {
                id: 3,
                icon: "calendar",
                value: "我的行程"
            }, {
                id: 5,
                icon: "tasks",
                value: "我的任务"
            }, {
                $template: "Separator"
            }, {
                id: 4,
                icon: "sign-out",
                value: "注销"
            }],
            type: {
                template: function(obj) {
                    if (obj.type)
                        return "<div class='separator'></div>";
                    return "<span class='webix_icon alerts fa-" + obj.icon + "'></span><span>" + obj.value + "</span>";
                }
            }

        }
    };

});
