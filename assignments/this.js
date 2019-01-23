/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global object/window Binding. This will have access to the global scope, most of the time.
* 2. Implicit Binding. This happens when dot notation is used to invoke a function. Whatever is left of the dot becomes the context for `this` in the function. For example, within console.log(), `this` refers to `console`
* 3. New binding. When calling a constructor with a 'new' keyword in front of it, `this` automatically refers to the newly created object.
* 4. Explicit binding. This occurs when .call(), .apply(), or .bind() are used on a function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
sayHi = function (who) {
    console.log(this);
    return (`${who} says hi!`)
}
sayHi('Barry');

// Principle 2

// code example for Implicit Binding
let Wizard = function () {
    this.name = 'Harry';
    this.last = 'Potter';
}

Wizard.prototype.spell = function(whichSpell) {
    console.log(`${this.name} bellows out "${whichSpell}!"`)
}
const Harry = new Wizard();
Harry.spell('expeliarmus');

// Principle 3

// code example for New Binding
function Myconstructor (name) {
    this.name = name;
}

Myconstructor.prototype.speak = function() {
    console.log(this.name);
}

const Timmy = new Myconstructor('Timtim');
Timmy.speak();

// Principle 4

// code example for Explicit Binding
const timmmySpeak = Timmy.speak.bind(Timmy);
timmmySpeak();

// THIS IS STILL REALLY VAGUE FOR ME. I'M NOT ENTIRELY SURE WHAT METHOD OUGHT TO BE USED WHERE
// I KNOW IT'S USE IN REACT, ESPECIALLY FOR SETTING STATE.
// HOWEVER, OUTSIDE OF THAT, I FAIL TO SEE WHY IT'S SO USEFUL