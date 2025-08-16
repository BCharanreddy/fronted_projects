function rps(ch){
    
    let num=Math.floor(Math.random()*10);
    num%=3;
    let real="";
    if(num==0){
        real="ROCK";
    }
    else if(num==1){
        real="PAPER";
    }
    else{
        real="SCISSOR";
    }
  
    let player_choice=ch;
    let win="";
    player_choice=player_choice.toUpperCase();
    if(real.length==4){
        if(player_choice.length==4){
            win="draw";
        }
        else if(player_choice.length==5){
            win="player";
        }
        else{
            win="system";
        }
    }
    else if(real.length==5){
        if(player_choice.length==5){
            win="draw";
        }
        else if(player_choice.length==7){
            win="player";
        }
        else{
            win="system";
        }
    }
    else{
        if(player_choice.length==7){
            win="draw";
        }
        else if(player_choice.length==4){
            win="player";
        }
        else{
            win="system";
        }
    }
    if(win==="draw"){
        document.getElementById("rps_print").innerHTML='The game is DRAW';
    }
    else{
        document.getElementById("rps_print").innerHTML=`The Game is Won by: ${win}`;
    }
   
    let color=Math.floor(Math.random()*1000);
    let r=color%255;
    let g=(color+50)%255;
    let b=(color+100)%255;

  document.getElementById("rps_end").style.color=`rgb(${r},${g},${b})`;
}