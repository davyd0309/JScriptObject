/**
 * Created by kdawydiuk on 2016-11-23.
 */

function Animal(name, sound) {
    var name = name;
    var sound = sound;

    this.getName = function () {
        return name;
    }

    this.getSound = function () {
        return sound;
    }

}
Cat.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);





function Cat(name, sound, age) {

    Animal.call(this, name, sound)

    var age = age;

    this.getAge = function () {
        return age;
    }

}


function Dog(name, sound, age) {

    Animal.call(this, name, sound)
    var age = age;

    this.getAge = function () {
        return age;
    }
}




