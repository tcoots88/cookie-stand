'use strict';
var time = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];


var Seattle = {
  name: 'Seattle'
   //customer min/max 
   min: 23,
  max: 65,
  //average cookies per customer
  cookiesPerCust: 6.3,
  CookieGenie: function () {
    this.min = Math.ceil(this.min);
    this.max = Math.floor(this.max);
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }
}
var Tokyo = {
  name: 'Tokyo'
    //customer min/max 
    min: 3,
  max: 24,
  //average cookies per customer
  cookiesPerCust: 1.2,
  CookieGenie: function () {
    this.min = Math.ceil(this.min);
    this.max = Math.floor(this.max);
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }
}
var Dubai = {
  name: 'Dubai'
    //customer min/max
    min: 11,
  max: 38,
  //average cookies per customer
  cookiesPerCust: 3.7,
  CookieGenie: function () {
    this.min = Math.ceil(this.min);
    this.max = Math.floor(this.max);
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }

}
var Paris = {
  name: 'Paris'
    //customer min/max
    min: 20,
  max: 38,
  //average cookies per customer
  cookiesPerCust: 2.3,
  CookieGenie: function () {
    this.min = Math.ceil(this.min);
    this.max = Math.floor(this.max);
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }

}
var Lima = {
  name: 'Lima'
    //customer min/max
    min: 2,
  max: 16,
  //average cookies per customer
  cookiesPerCust: 4.6,
  CookieGenie: function () {
    this.min = Math.ceil(this.min);
    this.max = Math.floor(this.max);
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }

}
