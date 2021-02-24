//Завдання №1

let numStart=+prompt("Введіть будьласка перше число");
let numEnd=+prompt("Введіть будьласка друге число");
let sum=0;
for (let z = numStart; z<=numEnd; z++){
    sum=sum+z;
}

alert(sum);
/*
//Завдання №10
let num=100;
//let numWin=+confirm("Це чмсло " +num +"?");
let qu =+confirm("Це чмсло менше "+num +"?");

if (qu) {
    num=num/2;
    alert("Це чмсло " +num);
}
    
     else {
    document.querySelector('#result').textContent = 'Вы ответили, что Вам не нравится JavaScript';
    }
if (numWin=true) {
    alert("Це чмсло " +num);
}
 if(qu=true)  {
    num/2
 alert('Коло не поміститься в квадрат');
 }
 
 else(qu=false)
 */
//Завдання №8

let day= new Date();
var days = ["Неділя","Понеділок","Вівторок","Середа","Четвер","Пятниця","Субота"];
let d=( days[day.getDay()]);
let dayWeek=+confirm("Сьогодні "+d);

      if (dayWeek) {
      
        for (n = +day.getDay(); n<=6; n++) {
            let d=( days[day.getDay()+n]);
            +confirm("Хотите увидеть следующий день " +d);
            
                  }

        
        } else {
        
          alert("Ви нажали кнопку скасувати!")
        
        }

//Завдання №4

let x=+prompt("Введіть будьласка  число");
alert(String(x).length);


//Завдання №6

if (confirm("Скористатись калькулятором?")) {
    for (i = 0; i < 2; i++) {     
    let numOne=+prompt("Введіть будьласка перше число");
    let numTwo=+prompt("Введіть будьласка друге число");
    let calc=prompt("Введіть будьласка знак математичної операції");
    let result
    switch (calc) {
        case '+':
            result=numOne + numTwo;
            break;
        case '-':
            result=numOne - numTwo;
            break;
        case '*':
            result=numOne * numTwo;
            break;
        case '/':
            result=numOne / numTwo;
            break;            
            default: 
            result="Це не знак математичної операції!"; 
        }
  alert("Ваш результат: " +result);
         
    }
} else {


  alert("Ви нажали кнопку скасувати!" )

}

//Завдання №9
let a = 2;
let j = 1;
let res;
let k = 0;
while (k < 11) {
 
  for (a = 2; a < 10; a++) {  
    
    for (j = 1; j<=10; j++) {
      console.log(res);
    res=a*j;
  }  
 }  
    
       k++;
    
    }
     