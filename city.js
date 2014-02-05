


$('.activities').on('click', showMoreInfo);

function showBigText(text){
	if($('.activities pre:visible').length > 0){
		$('.activities pre').slideUp();
	}
	else{	
		if($('.activities pre').length > 0 ){
			$('.activities pre').slideDown();
		}
		else{
		$('<pre>').html(text).hide().appendTo($('.activities').first()).slideDown();
		}
	}
};

function showMoreInfo() {
	$.get('big_text.txt').then(showBigText);
}