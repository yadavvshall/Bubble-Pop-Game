var timer = 60;
var score = 0;
var hitran = 0;
function scoreinc(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
function hitVal(){
    hitran = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitran;
}
function makeBubble(){
    var clutter = "";
for(var i=1; i<=189; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`
}
document.querySelector("#pbtm").innerHTML = clutter;
}
function timerInt(){ 
       var timerSet = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#interval").textContent  = timer;
        }
        else{
            clearInterval(timerSet);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
        },1000);  
}
document.querySelector("#pbtm").addEventListener("click",function (dets){
   var clickedNum = Number(dets.target.textContent);
   if(clickedNum === hitran){   
    scoreinc();
    makeBubble();
    hitVal();
   }
});

timerInt();
makeBubble();
hitVal();


 