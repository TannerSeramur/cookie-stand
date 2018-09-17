

// bussiness hours array
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// stores store locations
// var locations = [];

var shop1 = {
    name: "1st and Pike",
    minHourlyCustomers: 23,
    maxHourlyCustomers: 65,
    acpc: 6.3,
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
    render: function(){
        var element = document.getElementById('store-one');
        console.log(element);
        var storeTitle = document.createElement('h1');
        storeTitle.textContent = shop1.name; 
        element.appendChild(storeTitle); 

        for(i = 0; i < hours.length; i++){
            var element = document.getElementById('list-one');
            var listItem = document.createElement('li');
            listItem.textContent =hours[i] + ' ' + shop1.hourlySales[i];
            element.appendChild(listItem);
        }
    }
     
}
console.log(shop1);
console.log(shop1.randNum());
console.log(shop1.getHourlySales());
console.log(shop1.hourlySales);
shop1.render();




