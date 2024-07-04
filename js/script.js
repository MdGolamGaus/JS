// Expample-1
function textChange(){
    document.getElementById('t_c').innerHTML="Md Golam Gaus";
}

// Expample-2
function playMusic(){
    var music= document.getElementById('myMusic');
    music.play();
}

// Example-3
function fontSizeChange(){
    document.getElementById('c_fs').style.fontSize='35px';
    document.getElementById('c_fs').style.color='red';
}

// Example-4
function hideText(){
    document.getElementById('t_d').style.display='none';
}
function showText(){
    document.getElementById('t_d').style.display='block';
}

// Example-5
function toLower(){
    var text=document.getElementById('l_u').innerHTML;
    document.getElementById('l_u').innerHTML=text.toLowerCase();
    
}
function toUpper(){
    var text=document.getElementById('l_u').innerHTML;
    document.getElementById('l_u').innerHTML=text.toUpperCase();
}