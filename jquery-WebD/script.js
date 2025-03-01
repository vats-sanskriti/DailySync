$("h1").css("color", "yellow");

$("button").html("<em>hey</em>");
$("h1").on("mouseover" , function(){
    $("h1").css("color", "purple");
})

$("h1").prepend("<button class='prepend-button'>prepend-new</button>");

$("h1").append("<button>new</button>");
$("h1").before("<button>new</button>");
$("h1").after("<button>new</button>");

$(".prepend-button").on("click" , function(){
    $("h1").css("color", "black");
} )


$("button").on("click" , function(){
    $("h1").animate();
})