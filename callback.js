/**
 * Created by sylvie on 14/12/27.
 */

$(document).ready(function(){
   $("button").click(function(){
      //$("p").hide(1000, function (){
      //   alert("end!")
      //});
       $("p").css("color","blue").slideUp(1000).slideDown(1000);
   });
});
