/**
 * Created by kdawydiuk on 2016-11-23.
 */


function RunGavinsLife(){

    var person1 = new Person("Abdul","Arab")
    var person2 = new Person("Katrina","Czarny")

    console.log("Na œwiecie mamy teraz "+Person.population+" ludzi")

    console.log(person1.toString());
    console.log(person2.toString());

    person1.beeCool();
    person2.beeCool();

    person1.makeOlder();
    person2.setAge(15);


    console.log(person1.toString());
    console.log(person2.toString());


}
