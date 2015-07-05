require.config({
    paths: {
        routie: "../libs/routie",
        libs: "../libs",
        helpers: "../helpers",
        module: "../module",
        views: "../views"
    },
    baseUrl: 'views'
});

webix.skin.app = {
    topLayout: "space",
    //bar in accordion
    barHeight: 45, //!!!Set the same in skin.less!!!
    tabbarHeight: 47,
    rowHeight: 38,
    toolbarHeight: 22,
    listItemHeight: 34, //list, grouplist, dataview, etc.
    inputHeight: 30,
    buttonHeight: 38,
    inputPadding: 2,
    menuMargin: 0,
    menuHeight: 34,
    labelTopHeight: 16,
    propertyItemHeight: 34,

    //margin - distance between cells
    layoutMargin: {
        material: 10,
        space: 10,
        wide: 10,
        clean: 0,
        head: 4,
        line: -1,
        toolbar: 4,
        form: 16,
        accordion: 0
    },
    //padding - distance insede cell between cell border and cell content
    layoutPadding: {
        material: 10,
        space: 10,
        wide: 0,
        clean: 0,
        head: 0,
        line: 0,
        toolbar: 4,
        form: 16,
        accordion: 0
    },
    //space between tabs in tabbar
    tabMargin: 0,
    tabOffset: 0,
    tabBottomOffset: 0,
    tabTopOffset: 0,

    customCheckbox: true,
    customRadio: true,

    calendarHeight: 70,
    padding: 0,
    accordionType: "accordion"
};

webix.i18n.locales["zh-CN"] = {
    groupDelimiter: ",",
    groupSize: 3,
    decimalDelimiter: ".",
    decimalSize: 2,

    dateFormat: "%y-%m-%d",
    timeFormat: "%h:%i %A",
    longDateFormat: "%d %F %Y",
    fullDateFormat: "%m/%d/%Y %h:%i %A",
    am: ["上午", "上午"],
    pm: ["下午", "下午"],
    price: "¥{obj}",
    priceSettings: {
        groupDelimiter: ",",
        groupSize: 3,
        decimalDelimiter: ".",
        decimalSize: 2
    },
    fileSize: ["b", "Kb", "Mb", "Gb", "Tb", "Pb", "Eb"],

    calendar: {
        monthFull: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        monthShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        dayFull: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        dayShort: ["日", "一", "二", "三", "四", "五", "六"],
        hours: "时",
        minutes: "分",
        done: "完成",
        clear: "清空",
        today: "今日"
    },

    controls: {
        select: "Select"
    }
};
webix.i18n.setLocale("zh-CN");
webix.skin.set("app");
require([
    "libs/core",
    "helpers/menu", 
    "libs/prototype"
], function(core, menu) {


    //webix.codebase = "libs/webix/";
    //CKEditor requires full path
    webix.codebase = document.location.href.split("#")[0].replace("index.html", "") + "libs";

    if (!webix.env.touch && webix.ui.scrollSize && webix.CustomScroll)
        webix.CustomScroll.init();


    if (webix.production)
        tracker.init({
            accessToken: '650b007d5d794bb68d056584451a57a8',
            captureUncaught: true,
            source_map_enabled: true,
            code_version: "0.8.0",
            payload: {
                environment: 'production'
            }
        });

    //configuration
    var app = core.create({
        id: "admin-demo",
        name: "Webix Admin",
        version: "0.1",
        debug: true,
        start: "/app/home/indexUI"
    });

    app.use(menu);
    return app;
});