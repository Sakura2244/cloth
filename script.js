// JavaScript File
 $("button").click(function(){
     var word = "shirt";
       var input = $("#item").val();
       if(input === word){
            $("#result").append(price_check());
            $("#result").css("color","blue");
       }
});
function price_check(){
    return 65;
}
      