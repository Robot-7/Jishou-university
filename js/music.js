var music = document.getElementById("music");
var musicTitle = document.getElementById("music-title");
var musicTime = document.getElementById("music-time");
var playTime = document.getElementById("music-playTime");

var soundBar = document.getElementById("sound-bar");
var soundPoint = document.getElementById("sound-point");

var musicImg = document.getElementById("music-img");

var img = document.getElementById("music-photo");
var imgWrap = document.getElementById("wrap-photo");

var musicListName = {
	'0': '火箭少女',
	'1': '天空之城',
	'2': '可能否',
	'3': '出山'
};

var n = -1;

var flag = 1;

var transform = 0;

function tansformImg() {

	transform += 30;

	img.style.transform = "rotate(" + transform + "deg)";

}

var width = img.getBoundingClientRect().width;

function imgPlay(n) {

	imgWrap.style.left = -n * width + "px";

}

function musicPlay(name) {

	$("#music-title").empty();

	var src = "music/" + name + ".mp3";

	$("#music").attr('src', src);

	music.load();

	music.play();

}

function getMousePoint() {
	var e = event;
	return e.clientY;
}

music.load();

var height = 0;

soundBar.addEventListener("click", function() {

	var valueHeight = soundBar.getBoundingClientRect().bottom - getMousePoint();

	soundPoint.style.height = valueHeight + "px";

	var height = soundBar.getBoundingClientRect().height;

	var i = valueHeight / height * 0.6;

	music.volume = i;

})
var timeS;

function creatTimeS() {

	timeS = setInterval(function() {

		tansformImg();

	}, 2000);

}

function borderN(n) {
	
	

	if(n > 3) {
		n = 0;
	}

	if(n < 0) {
		n = 3;
	}

	return n;

}

$(document).ready(function() {

	music.volume = 20 / 80 * 0.6;

	$("#play-button").click(function() {

		if(flag % 2 != 0) {
			
			if(n==-1)
			{
				n=0;
			}

			$("#music-title").empty();
			
			console.log(n);
			
            
            

            musicPlay(musicListName[n]);
           
			music.play(musicListName[n]);

			musicTitle.append(musicListName[n]);

			showTime(n);

			creatTimeS();

		} else {

			music.pause();

			musicTitle.append('(已暂停播放)');

			flag = flag % 2;

			clearInterval(timeS);

		}

		flag++;

	})

	$("#next-button").click(function() {

		
		n++;
		
		$("#music-title").empty();

		n = borderN(n);

		if(flag == 2) {
			musicPlay(musicListName[n]);
		}

		imgPlay(n);

		musicTitle.append(musicListName[n]);

		showTime(n);
		
		console.log(n);

	})

	$("#last-button").click(function() {
		
		n--;
		
		$("#music-title").empty();

		n = borderN(n);

		if(flag == 2) {
			musicPlay(musicListName[n]);
		}

		imgPlay(n);

		musicTitle.append(musicListName[n]);

		showTime(n);
		
		console.log(n);

	})

})

music.ontimeupdate = function() {

	$("#music-playTime").empty();

	var str = "已播放时间:" + parseInt(music.currentTime / 60) + "分" + parseInt(music.currentTime % 60) + "秒";

	playTime.append(str);

}

musicTime.append("总时间:" + 0 + "分" + 0 + "秒");

function showAllTime() {

	$("#music-time").empty();

	var time = music.duration;

	var str = "总时间:" + parseInt(time / 60) + "分" + parseInt(time % 60) + "秒";

	musicTime.append(str);
}

function showTime(n) {

	music.oncanplay = function() {

		showAllTime();

	}
}