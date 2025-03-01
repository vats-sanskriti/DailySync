var numberofDrumButtons  = document.querySelectorAll(".drum").length;

// for(var i = 0 ; i<numberofDrumButtons ; i++)
// {
//   document.querySelectorAll(".drum")[i].addEventListener("click" ,function () { alert("i got clicked !") ; 

//     });
// }



function playSound(soundFile) {
   let sound = new Audio(soundFile);
   sound.currentTime= 0 ;
   sound.play();
}


document.addEventListener("keypress", function(event)
{
   alert("key was pressed");

});