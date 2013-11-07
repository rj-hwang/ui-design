(function($) {
	console.log("print");

	// 自动生成测试数据:div
	var $rows = $("div.rows");
	var data=[];
	var n;
	var breakRowNum = 30;
	for(var i=0;i<50;i++){
		n = i + 1;
		data.push('<div class="row'+(i > 0 && i % breakRowNum == 0 ? ' breakAfter' : '')+'">'+n+') div测试数据'+'</div>');
	}
	$rows.html(data.join(""));

	// 自动生成测试数据table
	$rows = $("table.rows>tbody");
	data=[];
	breakRowNum = 30;
	for(var i=0;i<100;i++){
		n = i + 1;
		data.push('<tr class="row'+(i > 0 && i % breakRowNum == 0 ? ' breakAfter' : '')+'"><td>'+n+') tr测试数据'+'</td></tr>');
	}
	$rows.html(data.join(""));
})(jQuery);