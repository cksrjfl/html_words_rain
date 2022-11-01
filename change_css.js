document.getElementById('back_color').onchange = function(){
    var background_color = document.getElementById("back_color").value;
    let body = document.getElementById("body");
    body.style.backgroundColor = background_color;
}
document.getElementById('font_color').onchange = function(){
    var font_color = document.getElementById("font_color").value;
    let font = document.getElementById("letters");
    font.style.color = font_color;
}