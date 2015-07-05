define([], function() {
	var inputs = [{
		view: "text",
		label: "商品名称"
	}, {
		view: "text",
		label: "商品编号"
	}, {
		view: "text",
		label: "拼音码"
	}, {
		view: "richselect",
		label: "商品类型",
		value : "1",
		options: [{
			value: "请选择",
			id: "1"
		}, {
			value: "造型类"
		}, {
			value: "烫染类"
		}, {
			value: "洗护类"
		}, {
			value: "器械类"
		}]
	}, {
		view: "text",
		label: "最少剩余数量"
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
			if (cols.length) {
				for (var i = 0; i < colNum - cols.length; i++) {
					cols.push({});
				}
				rows.push({
					cols: cols
				});
			}
		}
		return rows;
	}
	var formLayout = {
		view: "form",
		//width: 1000,
		elements: [{
			view: "fieldset",
			label: "查询条件",
			body: {
				rows: [{
					height: 30,
					margin: 0,
					cols: [{
						gravity: 0.08,
						view: "button",
						value: "查询",
						inputWidth: 80,
						css: " button_raised",
						align: "left"
					}, {
						view: "button",
						gravity: 0.06,
						value: "清空",
						inputWidth: 80,
						css: "button_warning button_raised",
						align: "left"
					}, {
						gravity: 0.86
					}]
				}].concat(formLayout(3, inputs))
			}
		}],
		elementsConfig: {
			labelWidth: 100,
			inputWidth: 300
		}
	};

	var goodsData = [{
		num: "001",
		name: "飘游",
		asb: "py",
		type: "造型类",
		total: 212,
		qty: 12,
		get_qty: 12,
		inboud_date: "2015-10-1",
		price: 121,
		set_price: 123,
		warn_qty: 10
	}];

	for (var i = 0; i < 20; i++) {
		var goodsInfo = webix.copy(goodsData[0]);
		goodsInfo.num = "00" + i;
		goodsInfo.name = "飘游" + i + "号";
		goodsData.push(goodsInfo);
	}
	var goodsGrid = {
		view: "datatable",
		columns: [{
			id: "num",
			header: "编号"
		}, {
			id: "name",
			header: "商品名称"
		}, {
			id: "asb",
			header: "拼音码"
		}, {
			id: "type",
			header: "商品类型"
		}, {
			id: "total",
			header: "库存总量"
		}, {
			id: "qty",
			header: "剩余数量"
		}, {
			id: "get_qty",
			header: "领用数量"
		}, {
			id: "inboud_date",
			header: "最后入库日期"
		}, {
			id: "price",
			header: "成本价格"
		}, {
			id: "set_price",
			header: "销售价格"
		}, {
			id: "warn_qty",
			header: "报警数量"
		}],
		scroll: "y",
		select: true,
		pager: "goodsPager",
		data: goodsData,

	};

	var pager = {
		view: "pager",
		id: "goodsPager",
		template: "{common.prev()} {common.pages()} {common.next()}",
		size: 10,
		group: 5,
		animate: {
			type: "slide"
		}
	}

	var indexLayout = {
		rows: [{
			cols: [formLayout]
		}, goodsGrid, pager]
	};
	return {
		$ui: indexLayout
	}
});