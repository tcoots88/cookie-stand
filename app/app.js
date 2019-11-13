'use strict';
var time = ['6:00 am: ', '7:00 am: ', '8:00 am: ', '9:00 am: ', '10:00 am: ', '11:00 am: ', '12:00 pm: ', '1:00 pm: ', '2:00 pm: ', '3:00 pm: ', '4:00 pm: ', '5:00 pm: ', '6:00 pm: ', '7:00 pm: ', 'Total by Location'];
var place = [];
var container = document.getElementById('container');

function generateHeader() {
  var headerRow = addElement('tr', container);
  addElement('th', headerRow);
  for (var i = 0; i < time.length; i++) {
    addElement('th', headerRow, time[i]);
  }
}
function generateFooter() {
  addElement('td', container, 'Hourly Total');
  for (var j = 0; j < time.length - 1; j++) {
    addElement('td', container, getTotalsForFooter(j));
  }
  addElement('td', container, getGrandTotal());
}
function getTotalsForFooter(hour) {
  var hourlyTotal = 0;
  for (var k = 0; k < place.length; k++) {
    hourlyTotal = hourlyTotal + place[k].sales[hour];
  }
  return hourlyTotal;
}
function getGrandTotal() {
  var grandTotal = 0;
  for (var i = 0; i < place.length; i++) {
    grandTotal = grandTotal + place[i].totalSales;
  }
  return grandTotal;
}
function addElement(tag, container, text) {
  var element = document.createElement(tag);
  container.appendChild(element);
  element.textContent = text;
  return element;
}
function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Store(name, min, max, cookiesPerCust) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.cookiesPerCust = cookiesPerCust;
  this.sales = this.getSalesData();
  this.totalSales = this.getTotalSales();
  this.render = this.render();
}
Store.prototype.getSalesData = function () {
  var salesArr = [];
  for (var i = 0; i < time.length - 1; i++) {
    salesArr.push(Math.ceil(randomInRange(this.min, this.max) * this.cookiesPerCust));
  }
  return salesArr;
};
Store.prototype.render = function () {
  var newRow = addElement('tr', container);
  addElement('td', newRow, this.name);
  for (var i = 0; i < this.sales.length; i++) {
    addElement('td', newRow, this.sales[i]);
  }
  addElement('td', newRow, this.totalSales);
};
Store.prototype.getTotalSales = function () {
  var totalSales = 0;
  for (var i = 0; i < this.sales.length; i++) {
    totalSales = totalSales + this.sales[i];
  }
  return totalSales;
};


generateHeader();
place.push(new Store('Seattle', 23, 65, 6.3));
place.push(new Store('Tokyo', 3, 24, 1.2));
place.push(new Store('Dubai', 11, 38, 3.7));
place.push(new Store('Paris', 20, 38, 2.3));
place.push(new Store('Lima', 2, 16, 4.6));
generateFooter();
