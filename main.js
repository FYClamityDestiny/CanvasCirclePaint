canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color = "Red";
radius = 1;
wol = 1;
mouseevent = "";
console.log("JS CLEAR");

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
  color=document.getElementById("color").value;
  wol=document.getElementById("wol").value;
  radius=document.getElementById("radius").value;
  mouseevent="mousedown";
  console.log("mousedown event");
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
 mouseevent="mouseup"
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){

    cpmousex = e.clientX - canvas.offsetLeft;
    cpmousey = e.clientY - canvas.offsetTop;
  if(mouseevent == "mousedown"){
   console.log("X:" + cpmousex + " Y:" + cpmousey);
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = wol;
    ctx.arc(cpmousex, cpmousey, radius, 0, 2*Math.PI);
    ctx.stroke();  
    console.log("mousemove event");
}
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
 mouseevent="mouseleave"
}
function clearArea(){
ctx.clearRect(0,0,canvas.width,canvas.height);
}
