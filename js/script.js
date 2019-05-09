'use strict';
function Phone(brand, price, color, displaySize) {
	this.brand = brand;
	this.price = price;
    this.color = color;
    this.displaySize = displaySize;
    // function getWarrantyCost() {
    //     var self = this; 
    //     return self.price * 0.1;
    // }
    // this.warrntyCost = getWarrantyCost();
    // console.log(warrntyCost);

    // this.warrntyCost = function() {
    //     return self.price * 0.1;
    // };
    // console.log(this.warrntyCost);
}

Phone.prototype.getWarrantyCost = function() {
    var self = this;
    return self.price * 0.1;
};

samsungGalaxyS6.getWarrantyCost();


Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + "." + 
    "It has " + this.displaySize + " inches display.");
}

var samsungGalaxyS6 = new Phone("Samsung", 1590, "black", 6.2);
var iPhone6S = new Phone("Apple", 4250, "white", 5.8);
var onePlusOne = new Phone("OnePlus", 2250, "silver", 7.1);

samsungGalaxyS6.printInfo();
iPhone6S.printInfo();
onePlusOne.printInfo();

// /////////////////////////////////////////////////////////////////////////

function Button(text) {
    this.text = text || "Hello";
}

Button.prototype = {
	create: function() {
        var self = this;
        this.element = document.createElement('button');
        this.element.innerText = this.text;
        this.element.addEventListener('click', function() {
            alert(self.text);
        });
        document.body.appendChild(this.element);
	}
};

var btn1 = new Button('Hello!');

btn1.create();