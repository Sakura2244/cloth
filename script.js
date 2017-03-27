// JavaScript File

 $("#button1").click(function(){
       var input = $("#item").val();
       if(input === "shirt"){
            $("#result").html(("$65USD"));
            $("#result").css("color","blue");
       } else if(input ==="pant"){
            $("#result").html(("$103USD"));
            $("#result").css("color","blue");
       } else if(input==="scarf"){
           $("#result").html(("$31USD"));
            $("#result").css("color","blue");
       }
 });
 function convert(x){
         return(x*1.09);
     }
 $("#button2").click(function(){
     $("#result").html(convert($("#item").val()));
 });