let a = 0;
let b = 0;
let bool = false;
let op = 0;
let inp="";
let tog=true;
function key(num) {
  if (num > 9) {
    if(num==10)
        inp=inp+'+';
    else if(num==11)
        inp+='-';
    else if(num==12)
    inp+='x';
    else if(num==13)
        inp+='%';
    else 
    inp+='/';

    bool = true;
    op = num;
  } 
  else if (!bool) {
    if(num==-1){
      a*=100;
      inp+="00";
    }
    else{
    a = a * 10 + num;
    inp+=num;
    }
  } else {
    if(num==-1){
      b*=100;
      inp+="00";
    }
    else{
    b = b * 10 + num;
    inp+=num;
    }
  }
  document.getElementById("display").innerHTML=inp;
}
let res = 0;
function fun() {
  if (op == 10) {
    res = a + b;
  } else if (op == 11) {
    res = a - b;
  } else if(op==12){
    res = a * b;
  }
  else if(op==13){
    res=a%b;
  }
  else{
    res=a/b;
  }
  document.getElementById("display").innerHTML = res;
  a=res;
  inp=a;
  res=0;
  b=0;
  
}
function reset(){
    a=0;
    b=0;
    res=0;
    bool=false;
    inp="";
    document.getElementById("display").innerHTML='0';
}

function toggl(){
    if(tog){
    document.getElementById("body").style.backgroundColor='black';
    document.getElementById("box").style.backgroundColor='white';
    tog=false;
    }
    else{
        document.getElementById("body").style.backgroundColor='white';
        document.getElementById("box").style.backgroundColor='black';
        tog=true;
    }
}