// $(document).ready(function(){    
//     $("p").click(function(){
//         $(this).hide();
//     });
// });

// $(document).ready(function(){    
//     $("p").click(function(){
//         $(this).addClass("blue");
//     });
// });

// $(document).ready(function(){    
//     $("p").click(function(){
//         $(this).css("color", "orange");
//     });
// });

//This will change the css when a user hovers over an area with a class of 'p1'. Since we are using hover, we have to invoke both mouseenter and mouseleave by having two functions inside the hover() method. When the mouse enters the .p1 area, it will change to Times New Roman, and when it leaves, it will change back to what it was originally, which is Georgia.

// $(document).ready(function(){    
//     $(".p1").hover(function(){
//         $(this).css("font-family", "Times New Roman");
//     }, function(){
//         $(this).css("font-family", "Georgia");
//     });
// });

// hides pets

$(document).ready(function(){    
    $("button").click(function(){
        $(".pets").hide();
    });
});

$(document).ready(function(){    
    $("#rainbows").dblclick(function(){
        alert("You double clicked me!");
    });
});

$(document).ready(function(){    
    $("input").focus(function(){
       $(this).css("background-color", "lightblue");
    });
});

$(document).ready(function(){
    $("input").keyup(function(){
        $(this).css("color", "red");
    });
});
