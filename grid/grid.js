(function($) {
	var $g = $(".grid");
	$(":radio[name=configHeaderWrap]").on("click",function(){
		console.log("radio");
		$g.find("thead>tr").toggleClass("wrap",this.value=='1');
	});
})(jQuery);