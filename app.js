
// var minCustomers = prompt('enter min customers');
// var maxCustomers = prompt('enter min customers');
// var avgCookieSale = prompt('enter avg cookie sales');

// bussiness hours array
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// stores store locations
var locations = [];

// random number genorator
//  function randNumCust(min, max){
//      console.log(min);
//      console.log(max);
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    
// }

// pushing random numbers into array holding sales for each hour
// function pushSales(){
//     var hourlySaleArr = []; 
//     for(i=0; i < hours.length; i++){
//         var num = randNum(this.minHourlyCustomers,this.maxHourlyCustomers);
//         var avgCookie = this.acpc;
//         hourlySale = avgCookie * num;
//         hourlySaleArr.push(hourlySale)
//     }
// }


var shop1 = {
    name: "shop1",
    minHourlyCustomers: 1,
    maxHourlyCustomers: 100,
    acpc: 2,
    hourlySales: [],
    totalSale: 0,

    randNum: function(){
        return Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers;
    },

    
    getHourlySales: function(){
        for(i=0; i < hours.length; i++){
            var hourSale = Math.floor(this.randNum() * this.acpc);
            this.hourlySales.push(hourSale);
            this.totalSale += hourSale;

        }
    },
     
}
console.log(shop1);
console.log(shop1.randNum());
console.log(shop1.getHourlySales());
console.log(shop1.hourlySales);


// console.log(randNumCust(shop1.minHourlyCustomers , shop1.maxHourlyCustomers));



// console.log(shop1.randNum);

// shop1.minHourlyCustomers = minCustomers;
// shop1.maxHourlyCustomers = maxCustomers;
// shop1.acpc = avgCookieSale;




