const GeneratePinButton = document.getElementById("genaratepinid");
const ShowPin = document.getElementById("showpinid");

function GetPin() {
  const GetPinNumber = genaratepin();
  const GetPinString = GetPinNumber + "";
  if (GetPinString.length === 4) {
    return GetPinNumber;
  } else {
    GetPin();
  }
}

function genaratepin() {
  const RandomNumber = Math.round(Math.random() * 10000);
  return RandomNumber;
}

GeneratePinButton.addEventListener("click", function () {
  let GetpinNumber = GetPin();
  if (typeof GetpinNumber !== "number") {
    GetpinNumber = GetPin();
  }
  console.log(GetpinNumber + " And Datatype: " + typeof GetpinNumber);
  ShowPin.value = GetpinNumber;
});

///work of Calculator
const TypedNumber=document.getElementById('typednumber');

document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    let TEXT = event.target.innerText;
    //console.log(TEXT + " and Datatype: " + typeof TEXT);

    //const typedNumberField = document.getElementById("typednumber");
     PreviousTypedNumber = TypedNumber.value;

    if (isNaN(TEXT)) {
     // console.log("Without Number : " + TEXT + " and Data Type: " + typeof TEXT);
      if (TEXT === "C") {
        TypedNumber.value = "";
      }
      if (TEXT === "<") {
        PreviousTypedNumber = PreviousTypedNumber.substring(
          0,
          PreviousTypedNumber.length - 1
        );
        TypedNumber.value = PreviousTypedNumber;
      }
    } else {
      TEXT = PreviousTypedNumber + TEXT;
      TypedNumber.value = TEXT;
    }
  });

////Verify
const PINMATCHED=document.getElementById('pin_matched');
const PINUNMATCHED=document.getElementById('pin_unmatched');

const COUNTING=document.getElementById('countsecondid');

COUNTING.style.display='none';

PINMATCHED.style.display='none';
PINUNMATCHED.style.display='none';

let count=3;
document.getElementById('tryid').innerText=count;

document.getElementById("verify_pin").addEventListener("click", function () {
  const GeneratedPin = ShowPin.value;
  console.log("Clicked");
  console.log("Already Generated pin: "+GeneratedPin);
  if(GeneratedPin===''){
    alert("didn't Generate Random Number");
  }else{
    if(TypedNumber.value===''){
        alert("Didn't type any number");
      }else{
        if(GeneratedPin===TypedNumber.value){
            PINMATCHED.style.display='block';
            PINUNMATCHED.style.display='none'
          }else{
            PINUNMATCHED.style.display='block'
            PINMATCHED.style.display='none';
            count--;
            if(count===0){
                document.getElementById('verify_pin').setAttribute('disabled',true);
                document.getElementById('verify_pin').style.backgroundColor='skyblue';
                COUNTING.style.display='block';
                TimingFunction();
                TimingFunction2();
            }
            document.getElementById('tryid').innerText=count;
          }
      }
  }
 
});

let SecondCount=parseFloat(COUNTING.innerText);
function TimingFunction(){
  
  setTimeout(function(){
    document.getElementById('verify_pin').removeAttribute('disabled');
    document.getElementById('verify_pin').style.background= '#495BC3';
    PINUNMATCHED.style.display='none';
    count=3;
    document.getElementById('tryid').innerText=count;

    
  },3000);

  /////Others work start
  // SecondCount--;
  // COUNTING.innerText=SecondCount;
  ////Others work end
}

function TimingFunction2(){
  setInterval(()=>{
    SecondCount--;
    if(SecondCount<0){

    }else{
      COUNTING.innerText=SecondCount;
    }

  },1000)
}
