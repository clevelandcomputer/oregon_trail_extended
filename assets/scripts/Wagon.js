const main = document.querySelector('main')

class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []
        
        main.style.maxWidth = '900px'
        main.style.margin = 'auto'
        let wagonDom = document.createElement('div')
        wagonDom.append(`This wagon can hold ${this.capacity} passengers.`)
        wagonDom.style.textAlign = 'center'
        let wagonImg = document.createElement('img')
        wagonImg.src = './assets/images/wagon.jpg'
        wagonImg.style.textAlign = 'center'
        wagonImg.style.display = 'block'
        wagonImg.style.margin = 'auto'
        main.append(wagonDom, wagonImg)
        

    }
    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }
    join(traveler) {
        let box = document.createElement('div')
        box.className = 'people'
        let breaky = document.createElement('div')
        let breaky1 = document.createElement('br')
        let breaky2 = document.createElement('br')
        let breaky3 = document.createElement('br')
        breaky.className = 'break'
        main.append(box) 
        let boyImage = document.createElement('img')
        let girlImage = document.createElement('img')
        boyImage.src = './assets/images/boy.png'
        girlImage.src = './assets/images/girl.png'
        
        if(this.getAvailableSeatCount() > 0 && traveler.gender === 'boy') {
        box.append(boyImage)
        breaky.append( 'Name: ', traveler.name,breaky1, 'Food: ', traveler.food, breaky2, 'Health: ', traveler.isHealthy, breaky3, 'Gender: ', traveler.gender)
        box.append(breaky)
        return this.passengers.push(traveler)
        } 
        if(this.getAvailableSeatCount() > 0 && traveler.gender === 'girl') {
        box.append(girlImage)
        breaky.append( 'Name: ', traveler.name,breaky1, 'Food: ', traveler.food, breaky2, 'Health: ', traveler.isHealthy, breaky3, 'Gender: ', traveler.gender)
        box.append(breaky)
        return this.passengers.push(traveler)  }
        
        

        
        
    }
    shouldQuarantine() {
        const quarantine = this.passengers.some(quaran => quaran.isHealthy === false ) 
        
        return quarantine
    }
    totalFood() {
        
        const foodAdded = this.passengers.reduce((sum, cur) => sum + cur.food, 0 )
        
        return foodAdded                                       
    }

}