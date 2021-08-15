// set integer for treasure 
var treasureLocation = Math.floor(Math.random() * 16)
// set  2 integers for trap taht are not overlapping with treasure or each other

var trap1Location = Math.floor(Math.random() * 16);

var counter = 5

if (trap1Location === treasureLocation){
    trap1Location = Math.floor(Math.random() * 16);
}

const restart = () =>{
  location.reload()
}

// }
 const treasure = (location) => {
     if (treasureLocation === location){
         document.getElementById(location).innerHTML = "🏆";
         
         document.getElementById("result").innerHTML = "YOU WIN! YOU FOUND THE TREASURE"
     }
     else if (location === trap1Location) {
       document.getElementById(location).innerHTML = "☠️";
       document.getElementById("result").innerHTML = "You fell in a trap!  Try Again?";
     }
     else if(counter == 0){
       document.getElementById('table').innerHTML = "You didnt find the treasure in time. Try again!"
     }
     else {
       counter --
       document.getElementById(location).innerHTML = "✘";
     }
 }
 