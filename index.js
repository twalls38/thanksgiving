const thanksgivingMeal = {
    starter : { 
        fruit: "honeydew melon",
        wine: "moscato",
        calories: 180
    },
    entree : {
        meat: "Turkey",
        alt: "Stuffed green peppers",
        vegetables : {
            potatoes: "Creamed mashed potatoes",
            greens: "French beans",
            salad: "Radacchio"
            },
        sides : {
            bread: "garlic bread rolls",
            pasta: "Macaroni and Cheese"
            },
        calories: 450
        },
    dessert : {
        ice_cream: "pumpkin-vanilla",
        cake: "frosted pumpkin pie",
        calories: 300
    },
    total_cost : 25.0,
    senior_discount: .10,
    prettyPrint : function(){
       let menuStr = ` Start your meal with ${this.starter.fruit} , a glass of ${this.starter.wine}. Help yourself to ${this.entree.meat} or ${this.entree.alt}, with ${this.entree.vegetables.salad}, ${this.entree.vegetables.greens} and ${this.entree.vegetables.potatoes}
       Have a seat! Plenty of ${this.entree.sides.bread}, and ${this.entree.sides.pasta}. Finish your meal with ${this.dessert.ice_cream}, ${this.dessert.cake}`

       return menuStr
    },
    // display the content of the starter, the entree and the dessert
    totalPrice(isSenior) {
        // display the total price, given indicator isSenior - true or false
        if (isSenior) {
            return `Senior: $${this.senior_discount * this.total_cost}`
        } else {
            return `Adults: $${this.total_cost}`
        }
    },
    totalCalories : function() {
        return (this.starter.calories + this.entree.calories + this.dessert.calories)    },
    caloriesFrom: function(indicator) {
        // get the total calories for the indicator
        // 1 - starter, 2 - entree, 3 - dessert
        if (indicator == 1){
            return this.starter.calories
        } else if (indicator == 2) { 

            return this.entree.calories
        }else if (indicator == 3) {
            return this.dessert.calories
        } 
    } 
};

let fullMealDisplay = document.querySelector(".fullMeal")
let priceInfoDisplay = document.querySelector(".priceInfo")
let caloriesInfoDisplay = document.querySelector(".calorieInfo")


fullMealDisplay.textContent = thanksgivingMeal.prettyPrint()

priceInfoDisplay.textContent = "Seniors get a 10% discount, the total cost for your Thanksgiving meal? " + thanksgivingMeal.totalPrice(true)

caloriesInfoDisplay.textContent = `Worried about calories? Total damage is ${thanksgivingMeal.totalCalories()} (starter: ${thanksgivingMeal.caloriesFrom(1)}, entree: ${thanksgivingMeal.caloriesFrom(2)}, dessert: ${thanksgivingMeal.caloriesFrom(3)})`
