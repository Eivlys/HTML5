/**
 * Created by sylvie on 14/12/12.
 */

(function(){
    var n ="vam";
    function People(name){
        this._name = name;
    }
    People.prototype.say=function(){
        alert("salut"+this._name+n);
    }
    window.People = People;
}());

(function(){
    function Student(name){
        this._name = name;
    }
    Student.prototype = new People();
    var superSay = Student.prototype.say;
    Student.prototype.say = function () {
        superSay.call(this);
        alert("hello"+this._name);
    }
    window.Student = Student;
}());

var s= new Student("syl");
s.say();


(function(){
    var n = "vammm";
    function Person(name){
        var _this={}
        _this._name = name;
        _this.sayHey = function(){
            alert("hey" +this._name+n);
        }
        return _this;
    }
    window.Person=Person;
}());

function Teacher(name){
    var _this=Person(name);
    var superSay = _this.sayHey;
    _this.sayHey=function(){
        superSay.call(_this)
        alert("thehey"+this._name);
    }
    return _this;
}
var t =Teacher("sylll");
t.sayHey();

