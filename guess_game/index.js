let num=0;
num=Math.floor(Math.random()*100);
let gameover=false;
let tog=true;
function game(){
    document.getElementById("value").innerHTML=num;
    if(gameover) return;
   
    let player=0;
    player=parseInt(document.getElementById("num").value);
    let op="";
    if(player==num){
        op="Your guess is correct";
        gameover=true;
        document.getElementById("game_end").innerHTML='Game End';
    }
    else if(player+5>num&&player-5<num){
        op="you are almost got the number";
    }
    else if(player+10>num&&player-10<num){
        op="You are nearer to the number";
    }
    
    else{
        op="you are far away from number";
    }
    
    document.getElementById("output").innerHTML=op;
    
    document.getElementById("num").value="";
   }
   function restart(){
    num=Math.floor(Math.random()*100);
    gameover=false;
    document.getElementById("game_end").innerHTML='';
    game();
   }
   function toggle(){
    if(tog){
    document.getElementById("body").style.color='white';
    document.getElementById("body").style.backgroundColor='black';
    document.getElementById("main").style.backgroundColor='rgb(58, 58, 58)';
    tog=false;
    }
    else{
        document.getElementById("body").style.color='black';
        document.getElementById("body").style.backgroundColor='rgb(235, 235, 235)';
        document.getElementById("main").style.backgroundColor='white';
        tog=true;
    }

   }
   

//}
// function game(){
//     let num=Math.floor(Math.random()*100);
//     while(true){
//         let ch=prompt("Enter your choice: ");
//         if(ch==num){
//             document.getElementById("output").innerHTML='Congrats You Guessed it Right';
//             break;
//         }
//         else{
//             if(ch+5>num&&ch-5<num){
//                 alert("you are near to real number");
//             }
//             else{
//                 alert("you are far to real number");
//             }
//             let con=prompt("if you want to continue the game press 'c' else press any other key: ");
//             if(con=='c'||con=='C'){
//                 continue;
//             }
//             else
//             break;
//         }
//     }
//     document.getElementById("game_end").innerHTML='GAME FINNISHED';
// }