//Task 1
const hero = {
    name: "Super Məmməd",
    power: "Uçmaq",
    level: 5,
    getHeroInfo:function(){
        return `Qəhrəman: ${this.name}, Gücü: ${this.power}, Səviyyə: ${this.level}`;
    }
}
console.log(hero.getHeroInfo());

//Task 2
const pet = {
    petName: "Məstan",
    type: "Pişik",
    age: 3,
    getPetDetails:function(){
        return `Ev heyvanı: ${this.type} ${this.petName}, Yaşı: ${this.age}`;
    }
}
console.log(pet.getPetDetails());

//Task 3
const gameScore = {
    level1Score: 40,
    level2Score: 60,
    calcTotalScore:function(){
        return this.level1Score + this.level2Score;
    }
}
console.log(`Cəmi: ${gameScore.calcTotalScore()}`);

//Task 4
const pizza = {
    slicePrice: 3,
    sliceCount: 6,
    calcPizzaPrice:function(){
        return this.slicePrice*this.sliceCount;
    }
}
console.log(`Ümumi qiymət: ${pizza.calcPizzaPrice()} AZN`);

//Task 5
const cinemaTicket = {
    movieName: "Avatar 2",
    ticketPrice: 10,
    isWeekend: true,
    calcTicketPrice:function(){
        let finalPrice=this.ticketPrice;
        if (this.isWeekend===true) {
            finalPrice+=2;
        }
        return `${this.movieName} filmi üçün bilet qiyməti: ${finalPrice} AZN`;
    }
}
console.log(cinemaTicket.calcTicketPrice());

//Task 6
const robot = {
    robotName: "Robo-X",
    battery: 15,
    checkBattery:function(){
        if (this.battery<20) {
            return `${this.robotName}: Xəbərdarlıq! Zaryadka azdır, zaryadkaya qoşun!`;
        } else{
            return `${this.robotName}: Zaryadka kifayətdir, işə davam etmək olar!`;
        }
    }
}
console.log(robot.checkBattery());