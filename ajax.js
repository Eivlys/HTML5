/**
 * Created by sylvie on 15/1/5.
 */

$(document).ready(function(){
   $("#btn").on("click",function(){
       $.post("url",$("#formid").serialize(), function () {
           $("#result").text("success");
       });
   });
});