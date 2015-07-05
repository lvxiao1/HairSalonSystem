define([], function() {

    return {
        $ui: {
            view: "popup",
            id: "searchPopup",

            width: 300,
            body: {
                rows: [{
                    view: "search"
                }, {
                    borderless: true,
                    css: "extended_search",
                    template: "<span>展开所有查询</span>",
                    height: 40
                }]

            }
        }
    };

});