//타이핑 효과
var typing = document.getElementById('gocoder_typing');

var typewriter = new Typewriter(typing, {
    loop: true
});

typewriter.typeString('바로 "일상에서 느끼는 부정적인 감정을 평가하고 비교할 것"입니다.') //글자입력
    .pauseFor(2500)
    .deleteAll() // 글자 지우기
    .start();



//스크롤 작용
window.onscroll = function(){
		var t =document.documentElement.scrollTop + document.body.scrollTop;
		moniter.innerHTML = t

			if (t > 400) {
			people1_4.style.animation = "peo 0.3s infinite ease-in alternate";
			people1_3.style.animation = "peo 0.3s 0.2s infinite ease-in alternate";
			people1_2.style.animation = "peo 0.3s 0.4s infinite ease-in alternate";
			people1_1.style.animation = "peo 0.3s 0.6s infinite ease-in alternate";

		}

		if (t > 800) {
			people1_24.style.animation = "peo 0.3s infinite ease-in alternate";
			people1_23.style.animation = "peo 0.3s 0.2s infinite ease-in alternate";
			people1_22.style.animation = "peo 0.3s 0.4s infinite ease-in alternate";
			people1_21.style.animation = "peo 0.3s 0.6s infinite ease-in alternate";

		}
		if (t > 3000) {
			text31.style.opacity = "100%";
			text32.style.opacity = "100%";
			text33.style.opacity = "100%";
			text34.style.opacity = "100%";
			text35.style.opacity = "100%";
			text36.style.opacity = "100%";
			text37.style.opacity = "100%";
			text38.style.opacity = "100%";

		}

		if (t > 3400) {
			sword1_2.style.opacity = "0%";
			sword2_2.style.opacity = "0%";
			sword3_2.style.opacity = "0%";
			sword4_2.style.opacity = "0%";
			sword5_2.style.opacity = "0%";
			sword6_2.style.opacity = "0%";
			sword7_2.style.opacity = "0%";

		}
		else{

			}

		if (t > 5300) {
			trophy.style.animation = "tro 2s ease alternate";
			trophy2.style.animation = "tro 2s ease alternate";
			trophy2.style.opacity = "100%";
			trophy.style.opacity = "0%";
				text5.style.opacity = "100%";

		}
		else{
			trophy.style.animation = "";
			trophy2.style.animation = "";
			trophy2.style.opacity = "";
			trophy.style.opacity = "";
				text5.style.opacity = "";
		}

		if (t > 7000) {
			people5_1arm.style.animation = "armmovefi 2s forwards";
			people5_2arm.style.animation = "armmovefii 2s forwards";

		}
		else{
			people5_1arm.style.animation = "";
			people5_2arm.style.animation = "";
		}

}


//스크롤시 다른 링크로 이동

   $(window).scroll(function() {
        var scrolltop = $(document).scrollTop();
        console.log(scrolltop);
        var height = $(document).height();
        console.log(height);
        var height_win = $(window).height();
        console.log(height_win);
        
        
     if (Math.round( $(window).scrollTop()) == $(document).height() - $(window).height()) {
        
      var url = "https://jjoohee.github.io/voice/";
		$(location).attr('href',url);
        
    }
});

//로딩화면

 document.addEventListener("DOMContentLoaded", function() {
  	requestAnimationFrame(function() {
			document.getElementById("loadingBar").style.width = "100%";
      });
    });

window.onload = function () {
document.getElementById("loadingIndicator").style.opacity = "0";
setTimeout(function() {
    document.getElementById("loadingIndicator").style.display = "none";}, 450);
}
