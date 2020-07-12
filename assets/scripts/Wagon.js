class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []

    }
    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }
    join(traveler) {
        if(this.getAvailableSeatCount() > 0) return this.passengers.push(traveler)
    }
    shouldQuarantine() {
        const quarantine = this.passengers.some(quaran => quaran.isHealthy === false ) 
        
        return quarantine
    }
    totalFood() {
        const foodAdded = this.passengers.reduce((a) => a.food)
        return foodAdded
    }

}