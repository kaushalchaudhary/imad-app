console.log('Loaded!');
//changing the text
var element = document.getElementById("maintext");
element.innerHTML = 'New value';
//move the image
var img = document.getElementById('madi');
marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}
 img.onclick = function (){ 
    var interval = setInterval(moveRight, 50)
};