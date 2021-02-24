let trip;
const myCar = {
   Model : "Renault",
   Type  : "Kangoo",
   Year    : 2012,
   Color  : "Yellow",
   Fuel  : "Electro",
   Speed  : 50
 };
 alert(Object.keys(myCar))
 alert(Object.values(myCar))
 function car() {
for (let key in myCar)  
  alert(myCar[key])
}
 car();

 let timeTrip=prompt("Введіть будьласка час поїздки")
   function travelTime()  {
      trip=(myCar.Speed*timeTrip)-((myCar.Speed*timeTrip)/5)
      alert(trip)
   }
   travelTime()

  

