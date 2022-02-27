/**
 * Here we are defining a constant attribute,
 * below commented out line signifies that an error is expected on our way if we try to modify it
 */
const hello = "world";
// hello = "foo"


/**
 * But now if an let attribute is declared, the modification of value is allowed
 * in contrary to javascript, the modified is bound to be a string only in our case
 * On trying to change ir to boolean, we will encounter an error
 */

/**
 * below syntax :string is called type annotation
 */
let hi:string = "hi"
// hi = true
hi = "adios"

let numberExample = 123;
console.log("type of example for number returned: "+ typeof numberExample);

let booleanExample = true;
let numberArray: number[] = [1,2,3];

/**
 * below function has defined not only type of param but return type as well
 * @param name is string
 * @param surname is string
 * @returns will also be an string, : string below is return type annotation
 * on contrary the javascript module will be like
 * 
 * 
 * const getFullName = (name, surname) => {
    return name + " " + surname;
    };
 */
const getFullName = (name: string, surname: string): string =>{
    return name+" "+surname;
};

console.log(getFullName("true","surname"))

/**
 *  type alias
 * 
 * when we want to set an entity bounded to a specific data type
 * 
 * alternative can be null or undefined, because why not
 */
type ageType = number; 
type tags = ageType | null;

/**
 * basic example to apply type alias
 */
let era: tags = null;
let year: tags = 2019;


/**
 * Now we come to creation of interface
 * why interface
 * 1. code reuseablity
 * 2. modularity
 * 3. kickstart OOP
 * 
 * best practice to add suffix I<interfaceName>
 * 
 * unlike java strict abstraction here you can add ? to make an attribute of interface not mandatory
 */
interface IUser {
    name : string,
    age?: ageType  
    getMessage(): string
}

/**
 * here we see an object imitating behavior of an interface,
 *  unlike the usual class and interface relation in java
 */

const user :IUser= {
    name: "avi",
    age : 24,
    getMessage(){
        return "Hello "+ this.name;
    }
}

const user2:IUser = {
    name: "hope",
    // age: 23
    getMessage(){
        return "Hello "+ this.name;
    }
}

/**
 * typescript has you covered in case you still want to still to another data type
 */
let pageNumber : string | number = "1";


/**
 * now let's explore some more data types
 * the free flowing javascript world of data types bringd us some new data types like
 * 1. never
 * 2. any
 * 3. unknown
 * 4. readonly
 * 
 */
const doSomething = ():void =>{
    // return ""
    console.log("I am lazy");
}

const neverDoSomething = ():never =>{
    // return ""
    throw "never";
}

let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny;
/**
 * with s1 we get no error as vAny can be anything
 * 
 * try not to use any as that defeats teh purpose of using type script,
 *  no matter how tempting it becomes to handle null or undefined.
 * 
 * for that union comes in picture.
 * 
 * but below s2 gives error, as an unknown cannot be a string.
 */
// let s2: string = vUnknown;


/**
 * in case of unknown we have to let typescript know that we intentionally want some change
 * for this we use keyword `as`
 * below are example of type conversions
 */
let s2: string = vUnknown as string; // type conversion
let numPageNum: number = hi as unknown as number;// to show an intentional conversion

let errorMessage: string | null = null; // union (helps to omit use of any)

let user3: IUser| null = null;

/**
 * if working with dom
 */
// const someElement = document.querySelector(".foo") as HTMLInputElement;
// console.log("someelement ", someElement.value);


/**
 * now coming to classes 
 * there are three access modifiers
 * 1. public (default)
 * 2. private
 * 3. protected | protected members are only visible to subclasses of the class they’re declared in.
 */
class CUser{
    private firtName: string;
    protected lastName: string

    constructor(firstName: string, lastName: string){
        this.lastName = lastName;
        this.firtName = firstName;
     
    }

    getfullname(): string {
        return this.firtName+" "+this.lastName
    }
}

const cuser = new CUser("monster","worm");
console.log(cuser.getfullname());