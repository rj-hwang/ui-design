(function($) {
	var model = {
		columns: [
			{},
			{resizable: true},
			{},
			{resizable: true}
		]
	};
	var $g = $(".grid");

	// 字体大小
	$(":input[name=configFontSize]").on("change",function(){
		console.log(this.value);
		$(this).next().text(this.value);
		document.body.style.fontSize = this.value + "px";
	});

	// 行高
	$(":input[name=configLineHeight]").on("change",function(){
		console.log(this.value);
		$(this).next().text(this.value);
		document.body.style.lineHeight = this.value;
	});

	// 标题行
	$(":radio[name=configHeaderWrap]").on("change",function(){
		console.log(this.value);
		var wrap = this.value=='1';
		$g.find(">table>thead>tr").toggleClass("nowrap",!wrap).toggleClass("auotwrap",wrap);
	});
	$(":radio[name=configHeaderCellHAlign]").on("change",function(){
		console.log(this.value);
		$g.find(">table>thead>tr")
			.removeClass("left center right justify")
			.toggleClass(this.value,true);
	});
	$(":radio[name=configHeaderCellVAlign]").on("change",function(){
		console.log(this.value);
		$g.find(">table>thead>tr")
			.removeClass("top middle bottom")
			.toggleClass(this.value,true);
	});

	// 数据行
	$(":radio[name=configCellWrap]").on("change",function(){
		console.log(this.value);
		var wrap = this.value=='1';
		$g.find(">table>tbody>tr").toggleClass("nowrap",!wrap).toggleClass("auotwrap",wrap);
	});
	$(":radio[name=configCellHAlign]").on("change",function(){
		console.log(this.value);
		$g.find(">table>tbody>tr")
			.removeClass("left center right justify")
			.toggleClass(this.value,true);
	});
	$(":radio[name=configCellVAlign]").on("change",function(){
		console.log(this.value);
		$g.find(">table>tbody>tr")
			.removeClass("top middle bottom")
			.toggleClass(this.value,true);
	});

	// 列宽指示
	$g.on("mousemove",">table>thead>tr>*",function(e){
		if(this.cellIndex > 0 && model.columns[this.cellIndex-1].resizable){
			var $t = $(this);
			var x=e.pageX - $t.offset().left, w=this.offsetWidth;
			console.log("px=" + e.pageX + ",cx=" + e.clientX  + ",ox=" + e.offsetX + ",ol=" + this.offsetLeft + ",cl=" + this.clientLeft + ",cw=" + this.clientWidth + ",ow=" + this.offsetWidth);
			console.log("l1=" + $t.offset().left + ",l2=" + $t.position().left + ",x=" + x);
			if(x<=5){
				$t.css("cursor","col-resize");
				console.log(e);
			}else{
				$t.css("cursor","default");
			}
		}
	});

	// 鼠标滚动事件
	$g.on("mousewheel",function(e, delta){
		console.log(delta);
		console.log(e);
	});
})(jQuery);