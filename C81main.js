canvas=document.getElementById("mycanvas")
ctx=canvas.getContext("2d")
color = "green"
ctx.beginPath();
ctx.strokeStyle=color
ctx.lineWidth=2
ctx.arc(200,200,40,0,2*Math.PI)
ctx.stroke();
canvas.addEventListener("mousedown", My_mousedown)
function My_mousedown(e)
{
   mouseEvent="mouseDown"

}
canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
    console.log("Current positionof x and y coordinates= ");
    console.log("x= " + current_position_of_mouse_x,"y= " + current_position_of_mouse_y);
    ctx.beginPath();
    ctx.strokeStyle=color
    ctx.lineWidth=2
    ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,40,0,2*Math.PI);
    ctx.stroke();

    }
}
