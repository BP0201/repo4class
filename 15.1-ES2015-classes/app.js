class Vehicle {
    constructor(year, make, model) {
        this.year = year
        this.make = make
        this.model = model
    }
    honk() {
        return "Beep."
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
}

class Car extends Vehicle {
    constructor(year, make, model) {
        super(year,make,model)
    }
    numWheels() {
        return 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(year, make, model) {
        super(year,make,model)
    }
    numWheels() {
        return 2;
    }
    revEngine() {
        return "VROOM!!!"
    }
}

class Garage {
    constructor(val){
        this.capacity = val
        this.vehicles = []
    }
    add(newVehicle) {
        if(!(newVehicle instanceof Vehicle)){
            return "Only vehicles are allowed in here."
        }
        if(this.vehicles.length >= this.capacity){
            return "Sorry, we're full."
        }
        this.vehicles.push(newVehicle)
        return "Vehicle added!"
    }
}