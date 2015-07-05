define([], function() {
	var ba = {
		height: 136,
		css: "tiles",
		template: function(data) {
			var t = null;
			var items = data.items;
			var html = "<div class='flex_tmp'>";
			for (var i = 0; i < items.length; i++) {
				t = items[i];
				html += "<div class='item " + t.css + " bg_panel'>";
				html += "<div class='webix_icon icon fa-" + t.icon + "'></div>";
				html += "<div class='details'><div class='value'>" + t.value + "</div><div class='text'>" + t.text + "</div></div>";
				html += "<div class='footer'>显示更多... <span class='webix_icon fa-angle-double-right'></span></div>";
				html += "</div>";
			}
			html += "</div>";
			return html;
		},
		data: {
			items: [{
				id: 1,
				text: "新增会员",
				value: 250,
				icon: "check-square-o",
				css: "orders"
			}, {
				id: 2,
				text: "消费项目",
				value: 300,
				icon: "user",
				css: "users"
			}, {
				id: 4,
				text: "短信剩余",
				value: 40,
				icon: "quote-right",
				css: "feedbacks"
			}, {
				id: 3,
				text: "营业额",
				value: "+25%",
				icon: "line-chart",
				css: "profit"
			}]
		}
	}

	return {
		$ui: {
			rows: [ba]
		}
	}
})