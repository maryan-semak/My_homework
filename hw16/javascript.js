
//Знижка

let procent;
let sum=prompt("Введіть будьласка суму покупки")


if (sum<200) {
    procent=5;
    
} else if (sum<500) {
  procent=7;
    
} else {
    
   procent=10;
}
const result = Number(sum-(sum/100*procent));
alert ("Сума до оплати зі знижкою "+result)

//Вік дюдини

let typePeople;
let age =prompt("Введіть будьласка свій вік");

if (age<12) {
   typePeople= 'Ви дитина' ;
} else if (age<18) {
   typePeople=  'Ви підліток' ;
} else if (age<60) {
   typePeople= 'Ви дорослий' ;
}else  {
   typePeople= "Ви пенсіонер" ;
    
}  
alert(typePeople ); 

//Символи

let symbol;
let num;
 num =prompt("Введіть будьласка число від 0 до 9");
switch (num) {
   case '0':
      symbol = ")";
       break;
   case '1':
      symbol = "!";
       break;
   case '2':
      symbol = "@";
       break;
   case '3':
      symbol = "#";
       break;
   case '4':
      symbol= "$";
       break;
   case '5':
      symbol = "%";
       break;
   case '6':
      symbol = "^";
       break;
   case '7':
      symbol = "&";
       break;
   case '8':
       symbol = "*";
       break;
   case '9':
      symbol= "("; 
       break;  
    default: 
    symbol= "Це не число"; 
}
alert("Число "+num+ " відповідає символу " +symbol +" на клавіатурі"); 

//конвертер валют

let res;
let money;  
let current=prompt("Введіть будьласка суму в гривнях")
let code=prompt("Введіть будьласка код валюти 1 USD 2 EUR 3 PLN ")
switch (code) {
   case '1':
      money = 28.3;
       break;
   case '2':
      money = 34.8;
       break;
   case '3':
      money = 7.4;
       break;
    default: 
    res="Ми не працюєм з такими валютами"; 
}
res=Number(money*current)
alert("Ваша сумма "+res); 

// Рік високосний

let year;
year=prompt("Введіть будьласка рік")
if (+year%4==0 || +year%400==0 && +year%100!==0) {
   alert("Рік високосний");
}
else
alert("Рік не високосний");

//Число паліндром

let r;
let cod=prompt("Введіть будьласка число");

if(cod===cod.split("").reverse().join("")){
   r="Число паліндром";
}
else 
   r="Число не є паліндромом"; 

alert(r);

// Коло в квадрата
let resu
let square=prompt("Введіть будьласка периметр квадрата");
let circle=prompt("Введіть будьласка довжину кола");
square=Number(square)/4;
circle=Number(circle)/3.14;
if (square>circle) {
   alert('Коло поміститься в квадрат');
} else  { 
   resu="6";
alert('Коло не поміститься в квадрат');
}





