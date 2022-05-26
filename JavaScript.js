// || 

const timeOut=setTimeout(changeColor,3000);

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
  document.body.style.backgroundColor = '#650691';
};

const timeOut1=setTimeout(changeColor1,6000);

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


let prpl= document.getElementById("prpl");

prpl.addEventListener('click',()=>{
    document.body.style.backgroundColor = '#CA57FF';
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
// let checkColor=document.getElementById('body');
moon.addEventListener('click',()=>{
    if (document.body.style.backgroundColor==='red'){
      document.body.style.backgroundColor='darkred';
    } else if (document.body.style.backgroundColor==='#CA57FF'){
      document.body.style.backgroundColor='#650691';
    } else if (document.body.style.backgroundColor==='yellow'){
      document.body.style.backgroundColor='#C8DA00';
    }
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
  if (document.body.style.backgroundColor==='darkred'){
    document.body.style.backgroundColor='red';
  } else if (document.body.style.backgroundColor==='#650691'){
    document.body.style.backgroundColor='#CA57FF';
  } else if (document.body.style.backgroundColor==='#C8DA00'){
    document.body.style.backgroundColor='yellow';
  }
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
        case "DEL":
          curOper.innerText= "";
          break;  
  
        case "=":
         prevOper.innerText= String(curOper.innerText) + "=";
         curOper.innerText= eval(curOper.innerText);
         curOper.innerText=Number(curOper.innerText).toFixed(2);
        break; 
        
        default:
          curOper.innerText += e.target.innerText;
       }
    })
})

// const keyBoard=document.querySelector('body');

// keyBoard.addEventListener('keypress', e =>{
//   switch(e.keyCode){

//     case 13:
//          prevOper.innerText= String(curOper.innerText) + "=";
//          curOper.innerText= eval(curOper.innerText);
//          curOper.innerText=Number(curOper.innerText).toFixed(2);
//         break; 

//     case 61:
//          prevOper.innerText= String(curOper.innerText) + "=";
//          curOper.innerText= eval(curOper.innerText);
//          curOper.innerText=Number(curOper.innerText).toFixed(2);
//         break; 

//     case 'Delete':
//       curOper.innerText= "";
//       prevOper.innerText= "";
//       console.log(e.keyCode)
//       break;

//     case 40:
//       curOper.innerText +=  '(';
//       break
  
//     case 41:
//       curOper.innerText += ')';
//       break  

//     case 58:
//       curOper.innerText +=  '/';
//       break

//     case 47:
//       curOper.innerText += '/';
//       break

//     case 45:
//       curOper.innerText +=  '-';
//       break

//     case 120:
//       curOper.innerText += '*';
//       break

//     case 42:
//       curOper.innerText += '*';
//       break

//     case 43:
//       curOper.innerText += "+";
//       break
      
//     case 46:
//       curOper.innerText += '.';
//       break
  
//     case 57:
//       curOper.innerText += '9';
//       break

//     case 56:
//       curOper.innerText += '8';
//       break

//     case 55:
//       curOper.innerText += '7';
//       break
      
//     case 54:
//       curOper.innerText += '6';
//       break
  
//     case 53:
//       curOper.innerText += '5';
//       break

//     case 52:
//       curOper.innerText += '4';
//       break

//     case 51:
//       curOper.innerText += '3';
//       break
      
//     case 50:
//       curOper.innerText += '2';
//       break
  
//     case 49:
//       curOper.innerText += '1';
//       break

//     case 48:
//       curOper.innerText += '0';
//       break
//         }
// });

document.addEventListener("keydown", KeyCheck);  //or however you are calling your method
function KeyCheck(event) {
    var KeyID = event.keyCode;
    switch (KeyID) {
        case 8:
            alert("backspace");
            break;
        case 46:
            alert("delete");
            break;

            default:
              console.log(KeyID)
              break;
    
    case 13:
         prevOper.innerText= String(curOper.innerText) + "=";
         curOper.innerText= eval(curOper.innerText);
         curOper.innerText=Number(curOper.innerText).toFixed(2);
        break; 

    case 61:
         prevOper.innerText= String(curOper.innerText) + "=";
         curOper.innerText= eval(curOper.innerText);
         curOper.innerText=Number(curOper.innerText).toFixed(2);
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
}


