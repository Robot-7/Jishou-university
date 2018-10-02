var Indexbtn = document.getElementsByClassName("not-active");
var Pagechange = document.getElementById("item4-img");

var LeftBtn = document.getElementById("leftBtn");
var RightBtn = document.getElementById("rightBtn");

var Flowadv = document.getElementById("item-flow");
var Flowbtn = document.getElementById("item-flowbtn");

var Pagechange2=document.getElementById("item5-Ntright");
var Indexbtn2=document.getElementsByClassName("item5-btn");

var picture=document.createElement("img");

var nowtop;
var nowleft;
var nowbottom;
var nowright;


var level=30;
var vertical=30;


  picturex(0);
        Pagechange2.appendChild(picture);
for(var i=0;i<Indexbtn2.length;i++)
{
	(function(n){
	  Indexbtn2[n].onclick=function(){
	  	var activebtn2=document.getElementsByClassName("item5-btn active2")[0];
	  	activebtn2.className="item5-btn not-active2";
	  	Indexbtn2[n].className="item5-btn active2";
	    picturex(n);
        Pagechange2.appendChild(picture);
};
})(i);
}

 
function play3(){
	
	for(var i=0;i<6;i++)
	{
		if(Indexbtn2[i].className=="item5-btn active2")
		break;
	}

    
	console.log(i);
	var activebtn2=document.getElementsByClassName("item5-btn active2")[0];
	activebtn2.className="item5-btn not-active2";
	
	
	if(i+1>5)
	{
		i=-1;
	}
	picturex(i+1);
    Pagechange2.appendChild(picture);
	Indexbtn2[i+1].className="item5-btn active2";
	
}

function picturex(n){
	if(n==0)
	{
		 picture.src="./img/bk1.png";
	}
	else if(n==1)
	{
		picture.src="./img/bk2.png";
	}
	else if(n==2)
	{
		picture.src="./img/bk3.png";
	}
	else if(n==3)
	{
		picture.src="./img/bk4.png";
	}
	else if(n==4)
	{
		picture.src="./img/bk5.png";
	}
	else if(n==5)
	{
		picture.src="./img/bk6.png";
	}
}

Flowbtn.onclick = function() {
	Flowadv.style.display = "none";
}

Flowadv.addEventListener("mouseover", function() {
	clearInterval(time2);
});

Flowadv.addEventListener("mouseout", function() {
	play2();
});

Pagechange.addEventListener("mouseover", function() {
	clearInterval(time);
});

Pagechange.addEventListener("mouseout", function() {
	play();
});

for(var i = 0; i < Indexbtn.length; i++) {
	(function(n) {
		Indexbtn[n].onmouseover = function() {

			var activeIndexbtn = document.getElementsByClassName("active")[0];

			activeIndexbtn.className = "not-active";
			Indexbtn[n].className = "active not-active";
			Pagemove(n);

		};
	})(i);
}

LeftBtn.onclick = function() {
	Clickmove(-1);
}
RightBtn.onclick = function() {
	Clickmove(1);
}

function Clickmove(n) {
	for(var i = 0; i < Indexbtn.length; i++) {
		if(Indexbtn[i].className == "active not-active") {
			
			Indexbtn[i].className = "not-active";
			if(n + i > 5) {
				i = 0;
				n = 0;
			} else if(n + i < 0) {
				i = 0;
				n = 5;
			}
			Indexbtn[i + n].className = "active not-active";
			Pagemove(i + n);
			break;
		}
	}
}

function Pagemove(n) {

	if(n == 0) {
		Pagechange.style.background = 'url(./img/banner-bosi.jpg)';
	}
	if(n == 1) {

		Pagechange.style.background = 'url(./img/banner2-n.jpg)';
	}

	if(n == 2) {

		Pagechange.style.background = 'url(./img/banner3.jpg)';
	}

	if(n == 3) {

		Pagechange.style.background = 'url(./img/banner-zy.jpg)';
	}

	if(n == 4) {

		Pagechange.style.background = 'url(./img/zjjxq.jpg)';
	}

	if(n == 5) {

		Pagechange.style.background = 'url(./img/lsbanner_03.jpg)';
	}
}

function play() {
	
	time = setInterval(function() {
		Clickmove(1);
		play3();
		
	}, 2500);

}

var flag1=3;
var flag2=3;


function play2() {
	time2 = setInterval(function() {	
		
		nowleft=Flowadv.getBoundingClientRect().left;
		
		nowtop = Flowadv.getBoundingClientRect().top;
		
		
		console.log(nowleft);
		

		console.log(flag1);
        Flowadv.style.left=nowleft+flag1+"px";
        Flowadv.style.top=nowtop+flag2+"px";
    if(nowleft>1250)
    {
    	flag1=-3;
    }
    if(nowleft<0)
    {
    	flag1=3;
    }
    if(nowtop>780)
    {
    	flag2=-3;
    }
    if(nowtop<0)
    {
    	flag2=3;
    }
        
   
        
    
       				
	}, 50)
}
play2();

play();
