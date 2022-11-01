var klick = "#";

$(document).keyup(function(e) {
if (e.keyCode == 65) { klick = "ㅁ"; countKlick(); }
if (e.keyCode == 66) { klick = "ㅠ"; countKlick(); }
if (e.keyCode == 67) { klick = "ㅊ"; countKlick(); }
if (e.keyCode == 68) { klick = "ㅇ"; countKlick(); }
if (e.keyCode == 69) { klick = "ㄷ"; countKlick(); }
if (e.keyCode == 70) { klick = "ㄹ"; countKlick(); }
if (e.keyCode == 71) { klick = "ㅎ"; countKlick(); }
if (e.keyCode == 72) { klick = "ㅗ"; countKlick(); }
if (e.keyCode == 73) { klick = "ㅑ"; countKlick(); }
if (e.keyCode == 74) { klick = "ㅓ"; countKlick(); }
if (e.keyCode == 75) { klick = "ㅏ"; countKlick(); }
if (e.keyCode == 76) { klick = "ㅣ"; countKlick(); }
if (e.keyCode == 77) { klick = "ㅡ"; countKlick(); }
if (e.keyCode == 78) { klick = "ㅜ"; countKlick(); }
if (e.keyCode == 79) { klick = "ㅐ"; countKlick(); }
if (e.keyCode == 80) { klick = "ㅔ"; countKlick(); }
if (e.keyCode == 81) { klick = "ㅂ"; countKlick(); }
if (e.keyCode == 82) { klick = "ㄱ"; countKlick(); }
if (e.keyCode == 83) { klick = "ㄴ"; countKlick(); }
if (e.keyCode == 84) { klick = "ㅅ"; countKlick(); }
if (e.keyCode == 85) { klick = "ㅕ"; countKlick(); }
if (e.keyCode == 86) { klick = "ㅍ"; countKlick(); }
if (e.keyCode == 87) { klick = "ㅈ"; countKlick(); }
if (e.keyCode == 88) { klick = "ㅌ"; countKlick(); }
if (e.keyCode == 89) { klick = "ㅛ"; countKlick(); }
if (e.keyCode == 90) { klick = "ㅋ"; countKlick(); }
if (e.keyCode == 27) { klick = "";}
});

document.getElementById('Input_text').onsubmit = function()
{
  event.preventDefault();
  let text = document.getElementById("Text_Input").value;
 // 여기까지 테스트 완료
  for(var i = 0; i < 20; i++){
    setTimeout(function(){
      var div_2 = document.createElement("div"); // div 생성
      var str_2 = document.createTextNode(text); // node에 text 입력
      div_2.appendChild(str_2); // div에 node 넣기

      // 밑부터는 div 스타일 설정----------------------------------------------
      div_2.style.position = 'absolute';
      div_2.style.top = Math.floor(Math.random() * (0))+ "px";
      div_2.style.left = Math.floor(Math.random() * (1500)) + "px"; // gen place width 0 to 1500 
      div_2.className = 'rain';
      div_2.style.opacity = '0';
      div_2.style.fontSize = (Math.random() * 50) +"px";// font size random 1 to 50
      //------------------------------------------------------------------------------
      $("#letters").append(div_2);
    },Math.random() * 5000);
  }
}

function countKlick() {
  var div = document.createElement("div");
  var str = document.createTextNode(klick);
  div.appendChild(str);
  
  
  div.style.position = 'absolute';
  div.style.top = Math.floor(Math.random() * (0))+ "px";
  div.style.left = Math.floor(Math.random() * (1500)) + "px"; // gen place width 0 to 1500 
  div.className = 'rain';
  div.style.opacity = '0';
  div.style.fontSize = (Math.random() * 50) +"px";// font size random 1 to 50

  
  $("#letters").append(div);
}

window.setInterval(function(){
  countKlick();
}, /* Math.random() * */ 100);