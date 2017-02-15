
// Prototypal Inheritance 



var Vehicle = {
	name: "Bus", 
	getName: function() {
		return this.name;
	},
	getWheelCount: function() {
		return this.wheelCount;
	},
	checkForEngine: function() {
		return this.checkEngine;
	},
	displayVehicleInfo: function() {
		console.log('The vehicle name is ' + this.getName() + '.' + ' The vehicle has an engine: ' + this.checkForEngine() + '.' + ' The vehicle has ' + this.getWheelCount() + ' wheels.' );
	}
};








		var Bus = Object.create(Vehicle);
			Bus.name = "Bus";
			Bus.wheelCount = "4";
			Bus.checkEngine = true;
			Bus.doorCount = "3";
			Bus.checkConvertible = "not";
		Bus.displayVehicleInfo();


			Bus.getDoorCount = function() {
				return this.doorCount;
			}

			Bus.checkForConvertible = function() {
				return this.checkConvertible;
			}

			Bus.displayBusInfo = function() {
				console.log('This bus has ' + this.getDoorCount() + ' doors, and is ' + this.checkForConvertible() + ' a convertible.' );
			}

			Bus.displayCarInfo();




