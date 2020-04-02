// tsc index.ts - компиляция ts-файла
// Поля
var str = "String var";
var an = "any var";
var num = 5;
var isActive = false;
var arr = ['H', 'e', 'l'];
var numArray = [1, 2, 3];
// Функции
function logInfo(name, age) {
    console.log("Info: " + name + ", " + age + " ");
    return 1;
}
var result = logInfo("Alex", "23");
// Классы
var Server = /** @class */ (function () {
    function Server(name, age) {
        this.name = name;
        this.num = age;
    }
    Server.prototype.getName = function () {
        return this.name;
    };
    Server.prototype.getStatus = function () {
        return 1;
    };
    Server.VERION = '1.0';
    return Server;
}());
var server = new Server("ser_01", 1);
var user = {
    name: "Alex",
    age: 23,
    logInfo: function () {
        console.log(this);
    }
};
var UserNew = /** @class */ (function () {
    function UserNew() {
    }
    UserNew.prototype.sayHello = function () {
        console.log("Hello");
    };
    ;
    return UserNew;
}());
