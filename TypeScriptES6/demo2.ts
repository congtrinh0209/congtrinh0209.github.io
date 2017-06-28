//Boolean
let isDone: boolean = false;
console.log(isDone);
//Number
let decimal = 12;
console.log(decimal);
//String
let color: string = "blue";
console.log(color);
let fullname: string = "Trịnh Công Trình";
let age: number = 27;
let greeting = `Hello, I'm ${fullname}, I'm ${age+2} years old `;
console.log(greeting)
let a  = typeof(greeting);
console.log(a);
//Array
let arr: number[] = [1, 2, 3];
let arr1: Array<string> = ["Trịnh", "Công", "Trình"];
console.log(arr);
console.log(arr1);
//Tuple
let Tuple: [string, number] = ["567.123", 27];
console.log(parseInt(Tuple[0]));
console.log(parseFloat(Tuple[0]));
console.log(typeof(parseFloat(Tuple[0])));
let age2 = Tuple[1].toString();
console.log(typeof(age2));
//enum
enum color_2 {Red =1, Blue, Yellow};
let enum_color: color_2 = color_2.Blue;
console.log(enum_color);
console.log(typeof(color_2.Blue));
enum Color {Red = 1, Green, Blue};
let colorName: string = color_2[3];
console.log(colorName);

//Kiểu dữ liệu hàm
let add = function(x: number, y: number):number {
    return x + y;
};
let myAdd: (age:number, name:string) => any = function(x,y){
    return x+y;
};
console.log(add(3,2));
console.log(typeof(add(3,2)));
console.log(myAdd(3,"trinh"));
console.log(typeof(myAdd(3,"trinh")));//return string
//function option parameter
let add2 = function(x:number, y?:string):any {
    if(y){
        return x+y;
    }
    else {
        return x;
    }
}
console.log(add2(2," Tuổi"));
console.log(add2(5));
let add3 = (x:number,y:number[]) => x+y[1];
console.log(add3(5,[1,2,3]));
//Rest Parameter
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName[1];
}
let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName)
//Spread operator
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults,food: "meat" };
console.log(search);
//This
let employee = {
    id: 5,
    greet: function() {
        setTimeout(() => console.log(this.id),3000);
    }
}
employee.greet();
