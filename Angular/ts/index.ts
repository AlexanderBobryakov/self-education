// tsc index.ts - компиляция ts-файла

// Поля
let str: string = "String var";
let an: any = "any var";
let num: number = 5;
let isActive: boolean = false;

let arr: string[] = ['H', 'e', 'l'];
let numArray: number[] = [1, 2, 3];

// Функции
function logInfo(name: string, age: number | string): number {
    console.log(`Info: ${name}, ${age} `);
    return 1;
}
let result = logInfo("Alex", "23");

// Классы
class Server {
    static VERION = '1.0';

    private name: string;
    public num: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.num = age;
    }

    public getName(): string {
        return this.name;
    }

    public getStatus(): number {
        return 1;
    }
}
let server = new Server("ser_01", 1);

// Интерфейсы и объекты
interface UserInterface {
    name: string;
    age: number;
    logInfo?: () => void;
    id?: any;
}
const user: UserInterface = {
  name: "Alex",
  age: 23,
  logInfo() {
      console.log(this);
  }
};

// Интерфейсы и классы
interface SayHello {
    sayHello: () => void;

}

class UserNew implements SayHello {
    sayHello() {
        console.log("Hello");
    };
}

// Generics
const arrNum: Array<number> = [1, 2 ,3];
const users: Array<UserInterface> = [
    {id: 1, name: 'B', age: 20},
    {id: 2, name: 'A', age: 21}
];


