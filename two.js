divs = document.getElementsByTagName("div");
for (div of divs) div.onmousedown = onMouseDown;

document.onmousemove = onMouseMove;
document.onmouseup   = onMouseUp;

// canvas.width = window.innerWidth - 20;
// canvas.height = window.innerHeight - 20;

var the_moving_div = ''; 
var the_last_mouse_position = { x:0, y:0 };

function onMouseDown(e) {
    e.preventDefault();
    the_moving_div            = e.target.id;      // remember which div has been selected 
    the_last_mouse_position.x = e.clientX;        // remember where the mouse was when it was clicked
    the_last_mouse_position.y = e.clientY;
    e.target.style.border = "6px solid transparent";     // highlight the border of the div

    var divs = document.getElementsByTagName("div");
    e.target.style.zIndex = divs.length;          // put this div  on top
    var i = 1; for (div of divs) if (div.id != the_moving_div) div.style.zIndex = i++;   // put all other divs behind the selected one
}

function onMouseMove(e) {
    e.preventDefault();
    if (the_moving_div == "") return;
    var d = document.getElementById(the_moving_div);
    d.style.left = d.offsetLeft + e.clientX - the_last_mouse_position.x + "px";     // move the div by however much the mouse moved
    d.style.top  = d.offsetTop  + e.clientY - the_last_mouse_position.y + "px";
    the_last_mouse_position.x = e.clientX;                                          // remember where the mouse is now
    the_last_mouse_position.y = e.clientY;
    drawConnectors();
}

function onMouseUp(e) {
    e.preventDefault();
    if (the_moving_div == "") return;
    document.getElementById(the_moving_div).style.border = "none";             // hide the border again
    the_moving_div = "";
}

var black = document.getElementById("black");  
var blue = document.getElementById("blue");  
var brown = document.getElementById("brown");  
var cyan = document.getElementById("cyan");  
var green = document.getElementById("green");  
var lime = document.getElementById("lime");  
var orange = document.getElementById("orange");  
var red = document.getElementById("red");  
var tan = document.getElementById("tan");  
var white = document.getElementById("white"); 

var blacki = 0;   
black.addEventListener("dblclick", function () {
    if (blacki === 0) {
        black.style.backgroundImage = "url('img/blackdead.png')";
        blacki++;
    } 
    else {
        black.style.backgroundImage = "url('img/black.png')";
        blacki--;
    }
}); 

var bluei = 0;   
blue.addEventListener("dblclick", function () {
    if (bluei === 0) {
        blue.style.backgroundImage = "url('img/bluedead.png')";
        bluei++;
    } 
    else {
        blue.style.backgroundImage = "url('img/blue.png')";
        bluei--;
    }
}); 

var browni = 0;   
brown.addEventListener("dblclick", function () {
    if (browni === 0) {
        brown.style.backgroundImage = "url('img/browndead.png')";
        browni++;
    } 
    else {
        brown.style.backgroundImage = "url('img/brown.png')";
        browni--;
    }
}); 

var cyani = 0;   
cyan.addEventListener("dblclick", function () {
    if (cyani === 0) {
        cyan.style.backgroundImage = "url('img/cyandead.png')";
        cyani++;
    } 
    else {
        cyan.style.backgroundImage = "url('img/cyan.png')";
        cyani--;
    }
}); 

var greeni = 0;   
green.addEventListener("dblclick", function () {
    if (greeni === 0) {
        green.style.backgroundImage = "url('img/greendead.png')";
        greeni++;
    } 
    else {
        green.style.backgroundImage = "url('img/green.png')";
        greeni--;
    }
}); 

var limei = 0;   
lime.addEventListener("dblclick", function () {
    if (limei === 0) {
        lime.style.backgroundImage = "url('img/limedead.png')";
        limei++;
    } 
    else {
        lime.style.backgroundImage = "url('img/lime.png')";
        limei--;
    }
}); 

var orangei = 0;   
orange.addEventListener("dblclick", function () {
    if (orangei === 0) {
        orange.style.backgroundImage = "url('img/orangedead.png')";
        orangei++;
    } 
    else {
        orange.style.backgroundImage = "url('img/orange.png')";
        orangei--;
    }
}); 

var pinki = 0;   
pink.addEventListener("dblclick", function () {
    if (pinki === 0) {
        pink.style.backgroundImage = "url('img/pinkdead.png')";
        pinki++;
    } 
    else {
        pink.style.backgroundImage = "url('img/pink.png')";
        pinki--;
    }
}); 

var purplei = 0;   
purple.addEventListener("dblclick", function () {
    if (purplei === 0) {
        purple.style.backgroundImage = "url('img/purpledead.png')";
        purplei++;
    } 
    else {
        purple.style.backgroundImage = "url('img/purple.png')";
        purplei--;
    }
}); 

var redi = 0;   
red.addEventListener("dblclick", function () {
    if (redi === 0) {
        red.style.backgroundImage = "url('img/reddead.png')";
        redi++;
    } 
    else {
        red.style.backgroundImage = "url('img/red.png')";
        redi--;
    }
}); 

var tani = 0;   
tan.addEventListener("dblclick", function () {
    if (tani === 0) {
        tan.style.backgroundImage = "url('img/tandead.png')";
        tani++;
    } 
    else {
        tan.style.backgroundImage = "url('img/tan.png')";
        tani--;
    }
}); 

var whitei = 0;   
white.addEventListener("dblclick", function () {
    if (whitei === 0) {
        white.style.backgroundImage = "url('img/whitedead.png')";
        whitei++;
    } 
    else {
        white.style.backgroundImage = "url('img/white.png')";
        whitei--;
    }
}); 