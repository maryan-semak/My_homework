//Завдання №1
 
let numOne =+prompt("Введіть будьласка перше число");
let numTwo =+prompt("Введіть будьласка друге число");
function compare() {
   if (numOne<numTwo) {
   alert(-1);
}
   else if   (numOne>numTwo) {
   alert(1);  
}     
   else {
   alert(0);
}
}
compare();

//Завдання №2
 
let n =+prompt("Введіть будьласка число");
function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

alert(/*"ФАКТОРІАЛ "*/ factorial(n) ); 

//Завдання №3

let num1 =prompt("Введіть будьласка перше число");
let num2 =prompt("Введіть будьласка друге число");
let num3 =prompt("Введіть будьласка третє число");
let total;
function concat() {
   total=num1+num2+num3;
   alert(total);
}
concat(); 

//Завдання №4

let side1 =+prompt("Введіть будьласка довжину однієї сторони");
let side2 =+prompt("Введіть будьласка довжину іншої сторони");
let squ;
function square() {
   if (side1==0) {
      squ=side2*side2;
      alert("Площа квадрата " +squ);
   }
   else if (side2==0) {
      squ=side1*side1;
      alert("Площа квадрата " +squ);
   }
   else {
      squ=side1*side2;
      alert("Площа прямокутника " +squ);
   }
   
}
square(); 

//Завдання №8

let hours =+prompt("Введіть будьласка  години");
let minutes =+prompt("Введіть будьласка хвилини");
let seconds =+prompt("Введіть будьласка секунди");

let time;
function  setTime() {
   if (hours==0) {
      hours='00';
   }
   if (minutes==0) {
      minutes='00';
   }
   if (seconds==0) {
      seconds='00';
   }
   
   alert("Введений час: «"+hours+":"+minutes+":"+seconds+"»");
}
setTime();
  
 //Завдання №9

function  countTime() {
      time=hours*3600+minutes*60+seconds;
      alert(time);
}
countTime();

 //Завдання №10

let hours1 =+prompt("Введіть будьласка  години №1");
let minutes1 =+prompt("Введіть будьласка хвилини №1");
let seconds1 =+prompt("Введіть будьласка секунди №1");
let hours2 =+prompt("Введіть будьласка  години №2");
let minutes2 =+prompt("Введіть будьласка хвилини №2");
let seconds2 =+prompt("Введіть будьласка секунди №2");
let time1;
let time2;

function  countTimes() {
   time1=hours1*3600+minutes1*60+seconds1;
   time2=hours2*3600+minutes2*60+seconds2;
}
countTimes();

function  diferenceTime() {
   timeDif=time1-time2;
hours=(timeDif/3600);
hours=Math.floor(hours); 
minutes=(timeDif/60);
minutes=Math.floor(minutes);
minutes=(minutes%60);
seconds=timeDif-(hours*3600)-(minutes*60);

alert("Різниця часу: «"+hours+":"+minutes+":"+seconds+"»");
}

diferenceTime();

