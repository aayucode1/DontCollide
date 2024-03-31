score=0;
cross=true;

//to move coffee continously
document.onkeydown = function(e){
    console.log("key code :",e.keyCode);
    if(e.keyCode==38){
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(()=>{
                console.log("yes");
             dino.classList.remove('animateDino')//this will remove the class animateDino kyuki hmlog ko remove add karna hai taki 
            },700);//700 means jo kam under hoga woh 700milisec ke bad hoga
    }
    if(e.keyCode==39){
        dino = document.querySelector('.dino');
        dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
         dino.style.left = dinoX+112+"px"; 
    }
    if(e.keyCode==37){
        dino = document.querySelector('.dino');
        dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
         dino.style.left = (dinoX - 112)+"px"; 
    }
    

}
//[A.E]any button will be pressed the console will show keywcode..
//key code for right arrow is 38
//set inetrval will check the collison
setInterval(()=>{
dino = document.querySelector('.dino');
gameOver =document.querySelector('.gameOver');
obstacle =document.querySelector('.obstacle');
//dx will show current x value 
dx= parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
dy= parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));

ox= parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
oy= parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

offsetX = Math.abs(dx-ox);
offsetY = Math.abs(dy-oy);
//console.log(offsetX,offsetY);
if(offsetX<93 && offsetY<52){
    gameOver.style.visibility='visible';
    obstacle.classList.remove('obstacleAni')
}
else if(offsetX <145 && cross){
    score+=1;
    updateScore(score);
    cross= false;
    setTimeout(()=>{
        cross=true;
    }
    ,1000);
}
} ,100);
function updateScore(){
   scoreCont.innerHTML="your score"+
   score
}