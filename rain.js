var klick = "#";

$(document).keyup(function(e) {
if (e.keyCode == 65) { klick += "ㅁ"; countKlick(); }
if (e.keyCode == 66) { klick += "ㅠ"; countKlick(); }
if (e.keyCode == 67) { klick += "ㅊ"; countKlick(); }
if (e.keyCode == 68) { klick += "ㅇ"; countKlick(); }
if (e.keyCode == 69) { klick += "ㄷ"; countKlick(); }
if (e.keyCode == 70) { klick += "ㄹ"; countKlick(); }
if (e.keyCode == 71) { klick += "ㅎ"; countKlick(); }
if (e.keyCode == 72) { klick += "ㅗ"; countKlick(); }
if (e.keyCode == 73) { klick += "ㅑ"; countKlick(); }
if (e.keyCode == 74) { klick += "ㅓ"; countKlick(); }
if (e.keyCode == 75) { klick += "ㅏ"; countKlick(); }
if (e.keyCode == 76) { klick += "ㅣ"; countKlick(); }
if (e.keyCode == 77) { klick += "ㅡ"; countKlick(); }
if (e.keyCode == 78) { klick += "ㅜ"; countKlick(); }
if (e.keyCode == 79) { klick += "ㅐ"; countKlick(); }
if (e.keyCode == 80) { klick += "ㅔ"; countKlick(); }
if (e.keyCode == 81) { klick += "ㅂ"; countKlick(); }
if (e.keyCode == 82) { klick += "ㄱ"; countKlick(); }
if (e.keyCode == 83) { klick += "ㄴ"; countKlick(); }
if (e.keyCode == 84) { klick += "ㅅ"; countKlick(); }
if (e.keyCode == 85) { klick += "ㅕ"; countKlick(); }
if (e.keyCode == 86) { klick += "ㅍ"; countKlick(); }
if (e.keyCode == 87) { klick += "ㅈ"; countKlick(); }
if (e.keyCode == 88) { klick += "ㅌ"; countKlick(); }
if (e.keyCode == 89) { klick += "ㅛ"; countKlick(); }
if (e.keyCode == 90) { klick += "ㅋ"; countKlick(); }
if (e.keyCode == 27) { klick = "";}
});

function countKlick() {
  
  var div = document.createElement("div");
  var str = document.createTextNode(klick);  
  div.appendChild(str);
  
  
  div.style.position = 'absolute';
  div.style.top = Math.floor(Math.random() * (0))+ "px";
  div.style.left = Math.floor(Math.random() * (500)) + "px";
  div.className = 'rain';
  div.style.opacity = '0';

  
  $("#letters").append(div);
}

window.setInterval(function(){
  countKlick();
}, 100);