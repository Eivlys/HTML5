/**
 * Created by sylvie on 14/12/10.
 */
var className = "tooltip-box";

var getDocID = function(id){
    return document.getElementById(id);
}

function showTooltip(obj,id,html,width,height){
    if(document.getElementById(id) == null ) {
        var tooltipBox;
        tooltipBox = document.createElement("div");
        tooltipBox.className = className;
        tooltipBox.id = id;
        tooltipBox.innerHTML = html;

        obj.appendChild(tooltipBox);

        tooltipBox.style.width = width ? width + "px" : "auto";
        tooltipBox.style.height = height ? height + "px" : "auto";

        tooltipBox.style.position = "absolute";
        tooltipBox.style.display = "block";

        var left = obj.offsetLeft;
        var top = obj.offsetTop + 20;

        tooltipBox.style.left = left + "px";
        tooltipBox.style.top = top + "px";


//        obj.onmouseout = function () {
  //          setTimeout(function () {
    //            getDocID.style.display = "none";
      //      }, 500);
        //}


        obj.addEventListener("mouseout",function(){
            setTimeout(function () {
                getDocID(id).style.display = "none";
            }, 100);
        });

    }else{
        getDocID(id).style.display ="block";
    }
}

var jq = getDocID("jquery");
var an = getDocID("angular");
var te = getDocID("test");
var us = getDocID("us");

jq.onmousemove = function(){
    showTooltip(this,"jq","this is jquery",150);
}

an.onmousemove = function(){
    showTooltip(this,"an","this is angular",150);
}

te.onmousemove = function(){
    var tips = "<iframe src='http://www.baidu.com' width='500' height='300'></iframe>"
    showTooltip(this,"te",tips,500);
}

us.onmousemove = function(){
    showTooltip(this,"us","<img src='img/img.jpg'>",200);
}
