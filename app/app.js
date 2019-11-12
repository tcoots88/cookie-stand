'use strict';
var time = ['6:00 am: ', '7:00 am: ', '8:00 am: ', '9:00 am: ', '10:00 am: ', '11:00 am: ', '12:00 pm: ', '1:00 pm: ', '2:00 pm: ', '3:00 pm: ', '4:00 pm: ', '5:00 pm: ', '6:00 pm: ', '7:00 pm: '];


var Seattle = {
  name: 'Seattle',
  //customer min/max
  min: 23,
  max: 65,
  //average cookies per customer
  cookiesPerCust: 6.3,
  sales:[],
  cookieGenie: function () {
    var rand = Math.random();
    var range = this.max - this.min;
    var custPerHour = this.min + Math.floor(rand * range);
    return custPerHour;
  }
};
var Tokyo = {
  name: 'Tokyo',
  //customer min/max
  min: 3,
  max: 24,
  //average cookies per customer
  cookiesPerCust: 1.2,
  sales:[],
  cookieGenie: function () {
    var rand = Math.random();
    var range = this.max - this.min;
    var custPerHour = this.min + Math.floor(rand * range);
    return custPerHour;
  }
};
var Dubai = {
  name: 'Dubai',
  //customer min/max
  min: 11,
  max: 38,
  //average cookies per customer
  cookiesPerCust: 3.7,
  sales:[],
  cookieGenie: function () {
    var rand = Math.random();
    var range = this.max - this.min;
    var custPerHour = this.min + Math.floor(rand * range);
    return custPerHour;
  }

};
var Paris = {
  name: 'Paris',
  //customer min/max
  min: 20,
  max: 38,
  //average cookies per customer
  cookiesPerCust: 2.3,
  sales:[],
  cookieGenie: function () {
    var rand = Math.random();
    var range = this.max - this.min;
    var custPerHour = this.min + Math.floor(rand * range);
    return custPerHour;
  }

};
var Lima = {
  name: 'Lima',
  //customer min/max
  min: 2,
  max: 16,
  //average cookies per customer
  cookiesPerCust: 4.6,
  sales:[],
  cookieGenie: function () {
    var rand = Math.random();
    var range = this.max - this.min;
    var custPerHour = this.min + Math.floor(rand * range);
    return custPerHour;
  }

};
function getSalesData(location) {
  for (var i = 0; i < time.length; i++) {
    var numCookies = Math.ceil(location.cookieGenie() * location.cookiesPerCust);
    location.sales[i] = time[i] + numCookies + ' cookies';
  }
}
function displayData(location) {
  var salesData = location.sales;
  var getDiv = document.getElementById('div1');
  var ul = document.createElement('ul');
  getDiv.appendChild(ul);
  ul.textContent = location.name;
  for (var i = 0; i < salesData.length; i++) {
    var li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = location.sales[i];
  }
}
getSalesData(Seattle);
getSalesData(Tokyo);
getSalesData(Dubai);
getSalesData(Paris);
getSalesData(Lima);

displayData(Seattle);
displayData(Tokyo);
displayData(Dubai);
displayData(Paris);
displayData(Lima);
