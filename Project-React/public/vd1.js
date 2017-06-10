ReactDOM.render(
    <h1 className="yellow">Trịnh Công Trình</h1>
,document.getElementById("root"));
// function Person(name, age ) {
//     this.name = name;
//     this.age = age;
// }
// var per1 = new Person('Trinh', 26);
// console.log(per1);
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sayHello(){
        return 'Xin chào Tôi là' + this.name + 'Tôi:' + this.age;
    }
}
class Child extends Person{
    constructor(name, age, hobby){
        super(name, age);
        this.hobby = hobby;
    }
    sayHello(){
        return "Xin chào em là " + this.name + ", Em năm nay: "+this.age +" tuổi. Sở thích của em là "+this.hobby;
    }
}
var per2 = new Child("trinh", 10, "đánh nhau");
console.log(per2);
console.log(per2.sayHello());