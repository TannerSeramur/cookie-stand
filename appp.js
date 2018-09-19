// bussiness hours array
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// Shop.shops = [];

var shopTable = document.getElementById('storeTable');
var shopForm = document.getElementById('storeForm');

var Shop = function(name, min, max, acpc){
    this.name = name;
    this.minHourlyCustomers = min;
    this.maxHourlyCustomers = max;
    this.acpc = acpc;
    this.hourlySales = [];
    Shop.totalSale = 0;
    Shop.shops.push(this);
    this.randNum = function(){
        return Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers;
    };
    this.getHourlySales = function(){
        Shop.totalSale = 0;
        for(i=0; i < hours.length; i++){
            var hourSale = Math.floor(this.randNum() * this.acpc);
            this.hourlySales.push(hourSale);
            Shop.totalSale += hourSale;
            Shop.total
            console.log(this.hourlySales);
        }
        Shop.totalSum.push(Shop.totalSale);

        };
    this.render = function(){
        var element = document.getElementById('tbody');
        var times = document.createElement('tr');
        element.appendChild(times);
        console.log(element);
        var storeTitle = document.createElement('th');
        storeTitle.textContent = this.name; 
        times.appendChild(storeTitle); 

        for(i = 0; i < hours.length; i++){
            var timesTD = document.createElement('td');
            timesTD.textContent = this.hourlySales[i];  
            times.appendChild(timesTD)
         }

        timesTD = document.getElementById('salesTable');
        var newText = document.createElement('td');
        newText.textContent = Shop.totalSale;
        times.appendChild(newText);
    };

}
Shop.shops = [];
Shop.totalSum = [];

var shop1 = new Shop('1st and Pike', 23, 65, 6.3);
var shop2 = new Shop('SeaTac Airport', 3, 34, 1.4);
var shop3 = new Shop('Seattle Center', 11, 38, 3.7);
var shop4 = new Shop('Capital Hill', 20, 38, 2.3);
var shop5 = new Shop('Alki', 2, 16, 4.6);

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

Shop.prototype.getHourTotals = function(){
    var companyTotal = 0;
    var element = document.getElementById('tbody');
    var times = document.createElement('tr');
    element.appendChild(times);
    var totalsTitle = document.createElement('th');
    totalsTitle.textContent = 'Totals: '; 
    times.appendChild(totalsTitle);

    for(i = 0; i < hours.length; i++){
        var hourSum = 0
        for(j = 0; j < Shop.shops.length; j++){
            hourSum += Shop.shops[j].hourlySales[i];    
        }
        var timesTD = document.createElement('td');
        timesTD.textContent = hourSum;  
        times.appendChild(timesTD);        
    }
    
    for(i = 0; i < Shop.shops.length; i++){
        companyTotal += Shop.totalSum[i];
    }
    var timesTD = document.createElement('td');
    timesTD.textContent = companyTotal;  
    times.appendChild(timesTD);
}


function renderStores() {
    for(i = 0; i < Shop.shops; i++) {
      i.render();
      console.log(Shop.shops[i]);
    }
  }

function addNewStore(event){
    event.preventDefault();
    console.log(event.target.name.value);

    var newName = event.target.name.value;
    var newMin = event.target.min.value;
    var newMax = event.target.max.value;
    var newACPC = event.target.acpc.value

    new Shop(newName, newMin, newMax, newACPC);

    storeTable.innerHTML = '';
    storeSalesInfo(Shop.shops);
    renderStores();



}
storeForm.addEventListener('submit', addNewStore);
// shop1.render();
storeSalesInfo();
renderStores();


// console.log(event.target.name.value);
shop1.getHourTotals(Shop.shops);




