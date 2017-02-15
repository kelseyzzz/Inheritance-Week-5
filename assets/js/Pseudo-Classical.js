


// Pseudoa Classical Inheritance 


var sportCar = function(options) {
	this.name = options ? options.name : "";
	this.getName = function() {
		return this.name;
	}
	this.wheelCount = options ? options.wheelCount : "";
	this.getWheelCount = function() {
		return this.wheelCount;
	}
	this.checkEngine = options ? options.checkEngine : "";
	this.checkForEngine = function() {
		return this.checkEngine;
	}
	this.displaysportCarInfo = function() {
		console.log('The sports cars name is ' + this.getName() + '.' + ' The sport car has an engine= ' + this.checkForEngine() + '.' + ' The sport car has ' + this.getWheelCount() + ' wheels.');
	}
};

	var lamborghini = new sportCar({
		name: "My Lambo",
		wheelCount: "4",
		checkEngine: true
	});

	lamborghini.displaysportCarInfo();








var twoWheels = function(options) {
	sportCar.call(this, options);
	this.doorCount = options.doorCount;
	this.getDoorCount = function() {
		return this.doorCount;
	}

	this.checkConvertible = options.checkConvertible;
	this.checkForConvertible = function() {
		return this.checkConvertible;
	}

	this.displaytwoWheelsInfo = function() {
		console.log('This two wheeler has ' + this.getDoorCount() + ' doors, and is ' + this.checkForConvertible() + ' a convertible.' );
	}
};

twoWheels.prototype = new sportCar();





	var motorcycle = new twoWheels({
		name: "Harley",
		doorCount: "0",
		checkConvertible: "no"
	});

	motorcycle.displaytwoWheelsInfo();



