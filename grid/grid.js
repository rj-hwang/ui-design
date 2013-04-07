(function($) {
	var $g = $(".grid");
	$(":radio[name=configHeaderWrap]").on("click",function(){
		$g.find("thead>tr").toggleClass("wrap",this.value=='1');
	});
	$(":radio[name=configHeaderCellHAlign]").on("click",function(){
		console.log(this.value);
		$g.find("thead>tr").removeClass("halign-left halign-center halign-right halign-justify")
			.toggleClass(this.value,true);
	});
})(jQuery);