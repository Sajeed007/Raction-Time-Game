window.onload = appear();
var start;
var clicked;


function disappear() {
    document.getElementById("class").style.display = 'none';
    var reaction_delay =((Math.random()*3)+1)*1000;
    setTimeout(appear,reaction_delay);
    clicked = Date.now();
var reaction_Time = (clicked-start)/1000;
document.getElementById("show").innerHTML = (reaction_Time + 'Seconds');


}
function appear(){
    var random_top = Math.random()*400;
    var random_left = Math.random()*400;
    var random_width = Math.random()*200+10;
    var random_height = Math.random()*200+10;
    var random_curve = Math.random();
    var random_colour ="#" + ((1<<24)*Math.random() | 0).toString(16);
    
    if( random_curve < 0.5){
        document.getElementById("class").style.borderRadius = 25 +'px';
    }else{
        document.getElementById("class").style.borderRadius = 0 +'px';
    }
    document.getElementById("class").style.backgroundColor =  random_colour; 
   document.getElementById("class").style.top = random_top+'px' ;
    document.getElementById("class").style.left =  random_left+'px';
    document.getElementById("class").style.width = random_width+'px';
    document.getElementById("class").style.height =  random_height+'px';
    document.getElementById("class").style.display = 'block';
start = Date.now();

}