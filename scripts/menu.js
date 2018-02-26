$(document).ready(function(){

    $(".burger-nav img").on("click",function(){
        $("header nav ul").toggleClass("open");
    });

    $(".header-right").on("click",function(){
        $("header nav ul").toggleClass("open");
    });

});
