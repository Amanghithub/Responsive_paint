var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    var width = screen.width;
var new_width = screen.width-70;
var new_height = screen.height-300;
if(width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}
    canvas.addEventListener("touchstart",my_touchstart);
    function my_touchstart(e){
        console.log("my touch start");
        //color=document.getElementById("color").value;
        //width_of_line=document.getElementById("width_of_line").value;
        last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
        last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
        
    }
    canvas.addEventListener("touchmove",my_touchmove);
    function my_touchmove(e){
        console.log("my touch move");
        current_position_offtouchX=e.touches[0].clientX-canvas.offsetLeft;
        current_position_offtouchY=e.touches[0].clientY-canvas.offsetTop; 
        ctx.beginPath()
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.moveTo(last_position_of_x,last_position_of_y);
        ctx.lineTo(current_position_offtouchX,current_position_offtouchY);
        ctx.stroke();
    }


