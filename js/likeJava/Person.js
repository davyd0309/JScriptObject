/**
 * Created by kdawydiuk on 2016-11-23.
 */

function Person(name, race) {

    this.constructor.population++;

//zmienne prywatne
    var alive = true;
    var age=0;
    var name = name;
    var weight = 5;
    var race = race;
    var clothing = "nic";
    var legs = 2;
    var eat;
//zmienne prywatne


    this.getAge = function () {
        return age;
    }

    this.getName = function () {
        return name;
    }

    this.getWeight = function () {
        return weight;
    }

    this.getRace = function () {
        return race;
    }

    this.getClothing = function () {
        return clothing;
    }

    this.setClothing = function (newClothing) {
        clothing = newClothing;
    }

    this.setAge = function (newAge) {
        age = newAge;
    }





    //metody kt�re mo�na u�ywa� publicznie lub prywatnie
    this.toString = function () {
        return "Imie: " + name + "," +
            "rasa :" + race + ", " +
            " wiek:" + age+ ", " +
            " clothing:" + clothing + ", " +
            " weight:" + weight;

    }

    this.makeOlder = function(){
        age = age+10;
    }

    this.eating = function() {
        if (weight < 10) {
            weight = weight + 5;
        } else {
            console.log("Nie mo�esz je�� Twoja waga jest za wysoka")
        }
    }

    this.exercise = function () {
        if (weight > 50) {
            return weight - 5
        } else {
            console.log("Jeste� szczup�y i nie musisz �wiczy�")
        }

    }
    //metody kt�re mo�na u�ywa� publicznie lub prywatnie

}



//sta�a dla wszystkich Person
Person.population = 0;



//metoda publiczna wsp�lna mo�e by� wywolywana z ka�dego Persona
Person.prototype.beeCool = function () {
    if (this.getRace() == "Arab") {
        this.setClothing("Arabskie spodnie");
    }
    if (this.getRace() == "Czarny") {
        this.setClothing("Czarna koszulka");
    }
}


