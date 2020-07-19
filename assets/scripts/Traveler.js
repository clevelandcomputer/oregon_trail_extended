class Traveler {
    constructor(name, gender = 'boy') {
        this.name = name
        this.food = 1
        this.isHealthy = true
        this.gender = gender
    }

    hunt() {
       return this.food = this.food + 2
    }
    eat() {
        
        if(this.food >= 1) {
            this.food = this.food - 1
            return
        } else {
            this.isHealthy = false
            return
        }
        // if(this.food > 1) {
        //     this.food = this.food -1
        //     return
        // }

        // if(this.food === 1) {
        //     this.food = this.food - 1
        //     return
        // }
        // if(this.food === 0) {
        //     this.isHealthy = false
        //     return
        // }
    }

} 

class Doctor extends Traveler {
        constructor (name, gender) {
            super(name, gender)
            
        }
        heal(traveler) {
           return traveler.isHealthy = true
        }

}

class Hunter extends Traveler {
    constructor (name, gender) {
        super(name, gender)
        this.food = 2
        this.isHealthy = true
        
    }
    hunt() {
        return this.food = this.food + 5
    }
    eat() {
        if(this.food >= 2) {
            this.food = this.food - 2
            return
        } else {
            this.food = 0
            this.isHealthy = false
        }
        // if(this.food > 2) {
        //     this.food = this.food - 2
        //     return
        // }
    
        // if(this.food === 2) {
        //     this.food = this.food - 2
        //     return
        // }

        // if(this.food === 1 || 0) {
        //     this.food = 0
        //     this.isHealthy = false
        //     return
        // }
    }
    giveFood(traveler, numOfFoodUnits) {
        if(this.food > numOfFoodUnits) {
            traveler.food += numOfFoodUnits
            this.food -= numOfFoodUnits
        }
        
    }

}