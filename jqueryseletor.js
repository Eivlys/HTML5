/**
 * Created by sylvie on 14/12/12.
 */
//$(document).ready(function(){
//    $("button").click(function(){
//        $("#pid").text("changed");
//    })
//})

//$(document).ready(function() {
//    //$("button").dblclick(function(){
//    //$("button").click(function(){
//    //$("button").mouseenter(function(){
//    //$("button").mouseleave(function(){
//    //$("#clickMeBtn").click(function(){
//    //    alert("hello")
//    //});
////        $(this).hide();
////    });
////});
//    $("#clickMeBtn").bind("click",clickHandler1);
//    $("#clickMeBtn").bind("click",clickHandler2);
//    $("#clickMeBtn").unbind("click");
//});
//
//function clickHandler1(e){
//    console.log("clickHandler1")
//}
//function clickHandler2(e){
//    console.log("clickHandler2")
//}


$(document).ready(function(){
    $("body").bind("click",bodyHandler);
    $("div").bind("click",divHandler);
});
function bodyHandler(event){
    console.log(event);
}
function divHandler(event){
    console.log(event);
    //event.stopPropagation();
   event.stopImmediatePropagation();
}

var Clickme = $("#Clickme");

$(document).ready(function(){
    Clickme.click(function(){
        var e = jQuert.Event("MyEvent");
        Clickme.trigger(e);
    });
    Clickme.bind("MyEvent",function(event){
        console.log(event);
    })
})