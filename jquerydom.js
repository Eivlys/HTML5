/**
 * Created by sylvie on 14/12/27.
 */
//$(document).ready(function(){
//   //$("#btn1").click(function(){
//   //   alert("test:"+$("#test").text());
//    $("#btn1").click(function() {
//        alert("test:" + $("#it").val());
//    });
//
//    $("#btn2").click(function(){
//        alert("test:"+$("#aid").attr("id"));
//   });
//});

$(document).ready(function (){
   $("#btn1").click(function(){
     $("#p1").text("after");
   });
   $("#btn2").click(function () {
       $("#p2").html("<a href='http://www.baidu.com'></a>")
   });
   $("#btn3").click(function (){
       $("#i3").val("after");
   });
   $("#btn4").click(function (){
       $("#aid2").attr({
           "href":"http://cn.bing.com",
           "title":"change"
       });
   });
   $("#btn5").click(function(){
      $("#p5").text(function(i,ot){
         return "old:"+ot+" after:"+(i);
      });
   });
   $("#btn6").click(function(){
      $("#p6").prepend("after click");
   });
   $("#btn7").click(function () {
     $("#p7").after("before")  ;
   });
});

function appendText(){
    var text1 = "<p>p1</p>";
    var text2 = $("<p></p>").text("text");
    var text3 = document.getElementById("p7");
    text3.innerHTML = ("text3");
    $("body").append(text1,text2,text3)

}






















