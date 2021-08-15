// set integer for treasure 
var treasureLocation = Math.floor(Math.random() * 16)
// set  2 integers for trap taht are not overlapping with treasure or each other

var trap1Location = Math.floor(Math.random() * 16);



if (trap1Location === treasureLocation){
    trap1Location = Math.floor(Math.random() * 16);
}

// }
 const treasure = (location) => {
     if (treasureLocation === location){
         document.getElementById(location).innerHTML = "👑";
         
         document.getElementById("arg").innerHTML = "YOU WIN! YOU FOUND THE TREASURE"
     }
     else if (location === trap1Location) {
       document.getElementById(location).innerHTML = "☠️";
       document.getElementById("arg").innerHTML = "You fell in a trap!  Try Again?";
     }
     else {
       document.getElementById(location).innerHTML = "✘";
     }
 }
 