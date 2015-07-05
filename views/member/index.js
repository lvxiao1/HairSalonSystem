define(["module/text/helpText"], function() {

	var inputs = [{
		view: "helpText",
		label: "手机号码",
		id : "num"
	}, {
		view: "text",
		label: "会员姓名",
		required: true
	}, {
		view: "richselect",
		label: "卡 类 型",
		value: "1",
		options: [{
			value: "请选择",
			id: "1"
		}, {
			value: "金卡"
		}, {
			value: "银卡"
		}, {
			value: "测试卡"
		}]
	}, {
		view: "text",
		label: "会员卡号"
	}, {
		view: "text",
		label: "收工本费"
	}, {
		view: "search",
		label: "开 卡 人"
	}, {
		view: "text",
		label: "项目折扣"
	}, {
		view: "text",
		label: "卖品折扣"
	}, {
		view: "radio",
		label: "性　　别",
		value: "男",
		options: [{
			id: "男",
			value: "男"
		}, {
			id: "女",
			value: "女"
		}]
	}, {
		view: "datepicker",
		label: "生　　日",
		format: "%Y-%m-%d"
	}, {
		view: "richselect",
		label: "会员分类",
		value: "1",
		options: [{
				id: "1",
				value: "请选择"
			}, {
				id: "2",
				value: "A级顾客"
			}, {
				id: "3",
				value: "B级顾客"
			}, {
				id: "4",
				value: "C级顾客"
			}

		]
	}, {
		view: "datepicker",
		label: "失效日期",
		format: "%Y-%m-%d"
	}, {
		label: "备　　注",
		view: "textarea",
		inputWidth: 700
	}];

	function formLayout(colNum, inputs) {
		var rows = [],
			cols,
			len = inputs.length,
			rowNum = len % colNum === 0 ? len / colNum : len / colNum + 1,
			index = 0;
		for (var row = 0; row < rowNum; row++) {
			cols = [];
			for (var col = 0; col < colNum && index < len; col++) {
				cols.push(inputs[index++]);
			}
			rows.push({
				cols: cols
			});
		}

		return rows;
	}

	var formView = {
		view: "form",
		width: 800,
		elements: formLayout(2, inputs),
		borderless: true,
		elementsConfig: {
			labelWidth: 100,
			inputWidth: 350
		}
	}

	var indexLayout = {
		cols: [{
			margin: 0,
			paddingX: 10,
			paddingY:10,
			rows: [{
				view: "button",
				value: "确认添加",
				css: " button_raised",
				width: 100,
				margin: 10
			}, formView]
		}, {}]
	}

	return {
		$ui: indexLayout
	}
})