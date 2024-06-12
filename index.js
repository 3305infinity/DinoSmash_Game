
let score=0;
let cross=true
audioplay=new Audio('music.mp3')
audiogo=new Audio('gameover.mp3')
setTimeout(()=>{
    audioplay.play()
},1000)
document.onkeydown = function(e) {
    if(e.keyCode==38)
        {
            dino=document.querySelector('.dino')
            dino.classList.add('animateDino');
            setTimeout(()=>{
                dino.classList.remove('animateDino')
            },500);
        }
    if(e.keyCode==39)
        {
            dino=document.querySelector('.dino')
            dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
            dino.style.left=dinox+112+"px";
        }    
    if(e.keyCode==37)
        {
            dino=document.querySelector('.dino')
            dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
            dino.style.left=dinox-112+"px";
        }
    
    }
  setInterval(()=>{
    dino=document.querySelector('.dino')
    enemy=document.querySelector('.enemy')

    gameover=document.querySelector('.heading');
    dx=window.getComputedStyle(dino,null).getPropertyValue('left');
    dx=parseInt(dx);
    dy=window.getComputedStyle(dino,null).getPropertyValue('top');
    dy=parseInt(dy);
    ox=window.getComputedStyle(enemy,null).getPropertyValue('left');
    ox=parseInt(ox);
    oy=window.getComputedStyle(enemy,null).getPropertyValue('top');
    oy=parseInt(oy);
     offsetx=Math.abs(dx-ox);
     offsety=Math.abs(dy-oy);
     console.log(offsetx,offsety)
    if(offsetx<73 && offsety<50 )
        {
            gameover.innerHTML=`Game Over </div>
            <div class="playagain" > Play again `;
            playagain=document.querySelector('.playagain')
            playagain.addEventListener('click',function(){
                location.reload();
            })
            enemy.classList.remove('enemyanimation')
            audiogo.play()
            setTimeout(()=>{
                audiogo.pause()
                audioplay.pause()
            },500)
        }
    else if(offsetx<130 && cross==true)
        {   
            score=score+1; 
            updatescore(score);
            cross=false;
            setTimeout(()=>{
                cross=true
            },1000)
            setTimeout(()=>{
                anidur=parseFloat(window.getComputerStyle(enemy,null).getPropertyValue('animation-duration'));
                newdur=anidur-0.2;
                enemy.style.animationDuration=newdur+"s";
            },500)
        }
    
  },10)
  function updatescore(score){
    scorecnt=document.querySelector('.score')
    scorecnt.innerHTML="Your Score : "+score;
  } 
  window.addEventListener("keydown", function(e) {
}) 

