var marginY = 0;
var destination = 0;
var speed = 5;
var scroller = null;

function initscroll(elementID){
	destination = document.getElementById(elementID).offsetTop;
	
	scroller = setTimeout(function(){
		initscroll(elementID);		
	}, 1);
	
	marginY = marginY + speed;
	
	if (marginY >= destination){
		clearTimeout(scroller);		
	}
	
	window.scroll(0, marginY);

	window.onscroll = function(){
	marginY = this.pageYOffset;	
}
};
