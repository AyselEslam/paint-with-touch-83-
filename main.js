canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
last_position_of_x = 0;
last_position_of_touch_x = 0;
last_position_of_y = 0;
last_position_of_touch_y = 0;
var mouseevent = "";
var color = document.getElementById("color").value;
var width = document.getElementById("width").value;
var current_position_of_touch_x=""
var current_position_of_touch_y=""
var current_position_of_mouse_x=""
var current_position_of_mouse_y=""


canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    mouseevent = "mousedown"
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseevent = my_mouseup
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseevent = my_mouseleave
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{

    current_position_of_mouse_x = e.clientX - canvas.offsetLeft
    current_position_of_mouse_y = e.clientY - canvas.offsetTop

    if (mouseevent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetleft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle= color;
    ctx.lineWidth = width;
    ctx.moveTo (last_position_of_touch_x, last_position_of_touch_y);
    ctx.lineTo (current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    last_position_of_touch_x = current_position_of_touch_x;
    last_position_of_touch_y = current_position_of_touch_y;
}

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e)
{
    last_position_of_touch_x = current_position_of_touch_x;
    last_position_of_touch_y = current_position_of_touch_y;
}