var mousEvent = "empty";
var last_position_of_x,last_position_of_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "blue";
width_of_line = 3;
canvas.addEventListener("mousedown",mymousedown);

function mymousedown(e){
    mousEvent= "mousedown";
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mousEvent = "mouseup"; 
}

canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mousEvent = "mouseleave";

}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;
    if (mousEvent== "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log("last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);
        console.log("current position of x and y coordinates = ");
        console.log("x = " + current_position_of_x + "y = " + current_position_of_y);
        ctx.lineTo(current_position_of_x,current_position_of_y);
        ctx.stroke();

    }
    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;

}

