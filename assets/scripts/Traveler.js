class Traveler {
    constructor(name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }

    hunt() {
       return this.food = this.food + 2
    }
    eat() {
       return (this.food > 0) ? this.food = this.food - 1 : this.isHealthy = false
    }

} 