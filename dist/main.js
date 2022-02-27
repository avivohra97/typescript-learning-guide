"use strict";
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
let hi = "hi";
// hi = true
hi = "adios";
let numberExample = 123;
console.log("type of example for number returned: " + typeof numberExample);
let booleanExample = true;
let numberArray = [1, 2, 3];
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
const getFullName = (name, surname) => {
    return name + " " + surname;
};
console.log(getFullName("true", "surname"));
/**
 * basic example to apply type alias
 */
let era = null;
let year = 2019;
/**
 * here we see an object imitating behavior of an interface,
 *  unlike the usual class and interface relation in java
 */
const user = {
    name: "avi",
    age: 24,
    getMessage() {
        return "Hello " + this.name;
    }
};
const user2 = {
    name: "hope",
    // age: 23
    getMessage() {
        return "Hello " + this.name;
    }
};
/**
 * typescript has you covered in case you still want to still to another data type
 */
let pageNumber = "1";
/**
 * now let's explore some more data types
 * the free flowing javascript world of data types bringd us some new data types like
 * 1. never
 * 2. any
 * 3. unknown
 * 4. readonly
 *
 */
const doSomething = () => {
    // return ""
    console.log("I am lazy");
};
const neverDoSomething = () => {
    // return ""
    throw "never";
};
let vAny = 10;
let vUnknown = 10;
let s1 = vAny;
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
let s2 = vUnknown; // type conversion
let numPageNum = hi; // to show an intentional conversion
let errorMessage = null; // union (helps to omit use of any)
let user3 = null;
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
class CUser {
    constructor(firstName, lastName) {
        this.lastName = lastName;
        this.firtName = firstName;
    }
    getfullname() {
        return this.firtName + " " + this.lastName;
    }
}
const cuser = new CUser("monster", "worm");
console.log(cuser.getfullname());
