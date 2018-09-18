

// bussiness hours array
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// stores store locations
// var locations = [];


// shop1
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
        var element = document.getElementById('store-title1');
        console.log(element);
        var storeTitle = document.createElement('h3');
        storeTitle.textContent = shop1.name; 
        element.appendChild(storeTitle); 

        for(i = 0; i < hours.length; i++){
            var element = document.getElementById('list-1');
            var listItem = document.createElement('li');
            listItem.textContent =hours[i] + ': ' + shop1.hourlySales[i];
            element.appendChild(listItem);
        }
    }
     
}

// shop2
var shop2 = {
    name: "SeaTac Airport",
    minHourlyCustomers: 3,
    maxHourlyCustomers: 24,
    acpc: 1.2,
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
        var element = document.getElementById('store-title2');
        console.log(element);
        var storeTitle = document.createElement('h3');
        storeTitle.textContent = shop2.name; 
        element.appendChild(storeTitle); 

        for(i = 0; i < hours.length; i++){
            var element = document.getElementById('list-2');
            var listItem = document.createElement('li');
            listItem.textContent =hours[i] + ': ' + shop2.hourlySales[i];
            element.appendChild(listItem);
        }
    }
     
}

// shop3
var shop3 = {
    name: "Seattle Center",
    minHourlyCustomers: 11,
    maxHourlyCustomers: 38,
    acpc: 3.7,
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
        var element = document.getElementById('store-title3');
        console.log(element);
        var storeTitle = document.createElement('h3');
        storeTitle.textContent = shop3.name; 
        element.appendChild(storeTitle); 

        for(i = 0; i < hours.length; i++){
            var element = document.getElementById('list-3');
            var listItem = document.createElement('li');
            listItem.textContent =hours[i] + ': ' + shop3.hourlySales[i];
            element.appendChild(listItem);
        }
    }
     
}

// shop4
var shop4 = {
    name: "Capital Hill",
    minHourlyCustomers: 20,
    maxHourlyCustomers: 38,
    acpc: 2.3,
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
        var element = document.getElementById('store-title4');
        console.log(element);
        var storeTitle = document.createElement('h3');
        storeTitle.textContent = shop4.name; 
        element.appendChild(storeTitle); 

        for(i = 0; i < hours.length; i++){
            var element = document.getElementById('list-4');
            var listItem = document.createElement('li');
            listItem.textContent =hours[i] + ': ' + shop4.hourlySales[i];
            element.appendChild(listItem);
        }
    }
     
}

// shop5
var shop5 = {
    name: "Alki",
    minHourlyCustomers: 2,
    maxHourlyCustomers: 16,
    acpc: 4.6,
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
        var element = document.getElementById('store-title5');
        console.log(element);
        var storeTitle = document.createElement('h3');
        storeTitle.textContent = shop5.name; 
        element.appendChild(storeTitle); 

        for(i = 0; i < hours.length; i++){
            var element = document.getElementById('list-5');
            var listItem = document.createElement('li');
            listItem.textContent =hours[i] + ': ' + shop5.hourlySales[i];
            element.appendChild(listItem);
        }
    }
     
}
// function for calling store render info
function storeSalesInfo(theShop){
    theShop.randNum();
    theShop.getHourlySales();
    theShop.render();
}


storeSalesInfo(shop1);
storeSalesInfo(shop2);
storeSalesInfo(shop3);
storeSalesInfo(shop4);
storeSalesInfo(shop5);





