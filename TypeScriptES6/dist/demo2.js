"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
//Boolean
var isDone = false;
console.log(isDone);
//Number
var decimal = 12;
console.log(decimal);
//String
var color = "blue";
console.log(color);
var fullname = "Trịnh Công Trình";
var age = 27;
var greeting = "Hello, I'm " + fullname + ", I'm " + (age + 2) + " years old ";
console.log(greeting);
var a = typeof (greeting);
console.log(a);
//Array
var arr = [1, 2, 3];
var arr1 = ["Trịnh", "Công", "Trình"];
console.log(arr);
console.log(arr1);
//Tuple
var Tuple = ["567.123", 27];
console.log(parseInt(Tuple[0]));
console.log(parseFloat(Tuple[0]));
console.log(typeof (parseFloat(Tuple[0])));
var age2 = Tuple[1].toString();
console.log(typeof (age2));
//enum
var color_2;
(function (color_2) {
    color_2[color_2["Red"] = 1] = "Red";
    color_2[color_2["Blue"] = 2] = "Blue";
    color_2[color_2["Yellow"] = 3] = "Yellow";
})(color_2 || (color_2 = {}));
;
var enum_color = color_2.Blue;
console.log(enum_color);
console.log(typeof (color_2.Blue));
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var colorName = color_2[3];
console.log(colorName);
//Kiểu dữ liệu hàm
var add = function (x, y) {
    return x + y;
};
var myAdd = function (x, y) {
    return x + y;
};
console.log(add(3, 2));
console.log(typeof (add(3, 2)));
console.log(myAdd(3, "trinh"));
console.log(typeof (myAdd(3, "trinh"))); //return string
//function option parameter
var add2 = function (x, y) {
    if (y) {
        return x + y;
    }
    else {
        return x;
    }
};
console.log(add2(2, " Tuổi"));
console.log(add2(5));
var add3 = function (x, y) { return x + y[1]; };
console.log(add3(5, [1, 2, 3]));
//Rest Parameter
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName[1];
}
var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);
//Spread operator
var defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
var search = __assign({}, defaults, { food: "meat" });
console.log(search);
//This
var employee = {
    id: 5,
    greet: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.id); }, 3000);
    }
};
employee.greet();
//# sourceMappingURL=demo2.js.map