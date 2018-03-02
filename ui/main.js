console.log('Loaded!');
//changing the text
var element = document.getElementById("maintext");
element.innerHTML = 'New value';
//move the image
var img = document.getElementById('madi');
 img.onclick = function (){ 
    img.style.marginLeft = '100px';
};