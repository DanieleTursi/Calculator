// || 

const timeOut=setTimeout(changeColor,1500);

function  changeColor(){
  let dis=document.querySelector(".display");
  dis.className="dmdis";
  let prOpDm = document.getElementById("prevoper");
  prOpDm.id = "prevoperdm";  
  let crOpDm = document.getElementById("curoper");
  crOpDm.id = "curoperdm";  
  cont.forEach(element => {
  element.className="darkmode"
 });
  document.body.style.backgroundColor = 'darkred';
};

const timeOut1=setTimeout(changeColor1,3000);

function  changeColor1(){
  let dis1=document.querySelector(".dmdis");
  dis1.className="display";
  let prOpDm = document.getElementById("prevoperdm");
  prOpDm.id = "prevoper";  
  let crOpDm = document.getElementById("curoperdm");
  crOpDm.id = "curoper";  
  cont1.forEach(element => {
  element.className="btncalc"
 });
  document.body.style.backgroundColor = 'yellow';
};

function scl(x) {
  x.classList.remove('animate__animated','animate__bounceInRight', 'animate__slow')
  x.classList.add('animate__animated', 'animate__tada', 'animate__infinite' ,'animate__slow');
}

function sclback(x) {
  x.classList.remove('animate__animated', 'animate__pulse', 'animate__slower');
}

 function rtt(x) {
  x.classList.add('animate__animated', 'animate__flip', 'animate__infinite', 'animate__slow');
}

function rttback(x) {
  x.classList.remove('animate__animated', 'animate__flip', 'animate__infinite', 'animate__slow');
}

let prpl= document.getElementById("prpl");

prpl.addEventListener('click',()=>{
    document.body.style.backgroundColor = 'rgb(202, 87, 255)';
});

let rd= document.getElementById("rd");

rd.addEventListener('click',()=>{
    document.body.style.backgroundColor = 'red';
});

let yllw= document.getElementById("yllw");

yllw.addEventListener('click',()=>{
    document.body.style.backgroundColor = 'yellow';
});

let moon= document.getElementById("moon");
let cont=Array.from(document.querySelectorAll(".btncalc"));
let dis=document.getElementsByClassName("display");

moon.addEventListener('click',()=>{
  let checkBodyColor= document.body.style.backgroundColor;
  console.log(checkBodyColor);
  if (checkBodyColor==='red'){
    document.body.style.backgroundColor='darkred';
  } else if (checkBodyColor==='rgb(202, 87, 255)'){
      document.body.style.backgroundColor='rgb(101, 6, 145)';
    } else if (checkBodyColor==='yellow'){
      document.body.style.backgroundColor='rgb(200, 218, 0)';
    };
    console.log(document.body.style.backgroundColor)
  let dis=document.querySelector(".display");
  dis.className="dmdis";
  let prOpDm = document.getElementById("prevoper");
  prOpDm.id = "prevoperdm";  
  let crOpDm = document.getElementById("curoper");
  crOpDm.id = "curoperdm";  
  cont.forEach(element => {
  element.className="darkmode"
 });
});

let sun= document.getElementById("sun");
let cont1=Array.from(document.querySelectorAll(".btncalc"));
sun.addEventListener('click',()=>{
  let checkBodyColor1= document.body.style.backgroundColor;
  console.log(checkBodyColor1);
  if (document.body.style.backgroundColor==='darkred'){
    document.body.style.backgroundColor='red';
  } else if (document.body.style.backgroundColor==='rgb(101, 6, 145)'){
    document.body.style.backgroundColor='rgb(202, 87, 255)';
    console.log('working')
  } else if (document.body.style.backgroundColor==='rgb(200, 218, 0)'){
    document.body.style.backgroundColor='yellow';
  };
  let dis1=document.querySelector(".dmdis");
  dis1.className="display";
  let prOpDm = document.getElementById("prevoperdm");
  prOpDm.id = "prevoper";  
  let crOpDm = document.getElementById("curoperdm");
  crOpDm.id = "curoper";  
  cont1.forEach(element => {
  element.className="btncalc"
 });
});

let prevOper=document.getElementById("prevoper");
let curOper=document.getElementById("curoper");
let buttons=Array.from(document.getElementsByClassName("btncalc"));


buttons.map (btncalc => {
    btncalc.addEventListener('click', (e)=>{
       switch (e.target.innerText){

        case "AC":
          curOper.innerText= "";
          prevOper.innerText= "";
          break;
        case "MOD":
          curOper.innerText+='/100';
          curOper.innerText= eval(curOper.innerText);
          break;  
        case "=":
         prevOper.innerText= String(curOper.innerText) + "=";
         curOper.innerText= eval(curOper.innerText);
         curOper.innerText= Number(curOper.innerText).toFixed(2);
        break; 
        
        default:
          curOper.innerText += e.target.innerText;
       }
    })
})

const keyBoard=document.querySelector('body');

keyBoard.addEventListener('keypress', e =>{
  switch(e.keyCode){ 

    case 61:
         prevOper.innerText= String(curOper.innerText) + "=";
         curOper.innerText= eval(curOper.innerText);
         curOper.innerText=Number(curOper.innerText).toFixed(2);
        break; 

    case 'Delete':
      curOper.innerText= "";
      prevOper.innerText= "";
      break;

    case 40:
      curOper.innerText +=  '(';
      break
  
    case 41:
      curOper.innerText += ')';
      break  

    case 58:
      curOper.innerText +=  '/';
      break

    case 47:
      curOper.innerText += '/';
      break

    case 45:
      curOper.innerText +=  '-';
      break

    case 120:
      curOper.innerText += '*';
      break

    case 42:
      curOper.innerText += '*';
      break

    case 43:
      curOper.innerText += "+";
      break
      
    case 46:
      curOper.innerText += '.';
      break
  
    case 57:
      curOper.innerText += '9';
      break

    case 56:
      curOper.innerText += '8';
      break

    case 55:
      curOper.innerText += '7';
      break
      
    case 54:
      curOper.innerText += '6';
      break
  
    case 53:
      curOper.innerText += '5';
      break

    case 52:
      curOper.innerText += '4';
      break

    case 51:
      curOper.innerText += '3';
      break
      
    case 50:
      curOper.innerText += '2';
      break
  
    case 49:
      curOper.innerText += '1';
      break

    case 48:
      curOper.innerText += '0';
      break
        }
});

document.addEventListener("keydown", KeyCheck);  //or however you are calling your method
function KeyCheck(event) {
    var KeyID = event.keyCode;
    switch (KeyID) {
        case 8:
          curOper.innerText= "";
          prevOper.innerText= "";
          break;
    
        case 46:
          curOper.innerText= "";
          prevOper.innerText= "";
          console.log(e.keyCode)
          break;

        case 13:
            prevOper.innerText= String(curOper.innerText) + "=";
            curOper.innerText= eval(curOper.innerText);
            curOper.innerText=Number(curOper.innerText).toFixed(2);
           break; 

        case 53:
          curOper.innerText += '%'
          break;     
      

        default:
          console.log(KeyID)
          break;

        }
}


