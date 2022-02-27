/**
 * Here we are defining a constant attribute,
 * below commented out line signifies that an error is expected on our way if we try to modify it
 */
var hello = "world";
// hello = "foo"
/**
 * But now if an let attribute is declared, the modification of value is allowed
 * in contrary to javascript, the modified is bound to be a string only in our case
 * On trying to change ir to boolean, we will encounter an error
 */
var hi = "hi";
// hi = true
hi = "adios";
var numberExample = 123;
console.log("type of example for number returned: " + typeof numberExample);
/**
 * below function has defined not only type of param but return type as well
 * @param name is string
 * @param surname is string
 * @returns will also be an string
 * on contrary the javascript module will be like
 *
 *
 * const getFullName = (name, surname) => {
    return name + " " + surname;
    };
 */
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName("true", "surname"));
/**
 * basic example to apply type alias
 */
var era = null;
var year = 2019;
/**
 * here we see an object imitating behavior of an interface,
 *  unlike the usual class and interface relation in java
 */
var user = {
    name: "avi",
    age: 24,
    getMessage: function () {
        return "Hello " + this.name;
    }
};
var user2 = {
    name: "hope",
    // age: 23
    getMessage: function () {
        return "Hello " + this.name;
    }
};
/**
 * typescript has you covered in case you still want to still to another data type
 */
var pageNumber = "1";
/**
 * now let's explore some more data types
 * the free flowing javascript world of data types bringd us some new data types like
 * 1. never
 * 2. any
 * 3. unknown
 * 4. readonly
 *
 */
var doSomething = function () {
    // return ""
    console.log("I am lazy");
};
var neverDoSomething = function () {
    // return ""
    throw "never";
};
var vAny = 10;
var vUnknown = 10;
var s1 = vAny;
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
var s2 = vUnknown; // type conversion
var numPageNum = hi; // to show an intentional conversion
var errorMessage = null; // union (helps to omit use of any)
var user3 = null;
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
 * 3. protected
 */
var CUser = /** @class */ (function () {
    function CUser(firstName, lastName) {
        this.lastName = lastName;
        this.firtName = firstName;
    }
    CUser.prototype.getfullname = function () {
        return this.firtName + " " + this.lastName;
    };
    return CUser;
}());
var cuser = new CUser("monster", "worm");
console.log(cuser.getfullname());
