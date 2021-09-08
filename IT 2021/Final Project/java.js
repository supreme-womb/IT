var image1 = new Image();
image1.src = "1.jpg" ;
var image2 = new Image() ;
image2.src = "2.jpg" ;
var image3 = new Image() ;
image3.src = "3.jpg";

var step=1
function slideit(){
	if (!document.images){
		return; 
	}
	document.images.slide.src=eval("image"+step+".src");
	if (step<3){
		step++;
	}
	else{
		step=1;
	}
	setTimeout("slideit()", 2500);
}
slideit();


