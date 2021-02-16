  let elem = document.getElementById('elem');

  function myFunction () {
     let x = document.getElementById("myText").value;

     document.getElementById('elem').innerHTML = x 
  }
  form = document.getElementById('form').style.display = 'none';
  document.onkeydown = function(e) {
   
       e = e || window.event;
   
       if (e.ctrlKey && e.keyCode == 69) 
        event.preventDefault()
        form = document.getElementById('form').style.display = 'block';

       if (e.ctrlKey && e.keyCode == 107) {
        myFunction ();
        event.preventDefault()
        form = document.getElementById('form').style.display = 'none';
       }
       }
       
     
   
  