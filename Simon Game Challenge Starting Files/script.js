
function playsound(soundFile) {
    let sound = new Audio(soundFile);
    sound.currentTime= 0 ;
    sound.play();
 }

 $("div").on("click" , function(){
    $("body").css("transition", "background-color 2s ease-in-out"); // Smooth transition
    $("body").css("background-color", "red");  })