console.log("Hello World from main.js!");

//Functional Inheritance 


var motorVehicle = function(options) {
	var public = options || {};
	public.getName = function() {
		return public.name;
	};

	public.getWheelCount = function() {
		return public.wheelCount; 
	};

	public.checkForEngine = function() {
		return public.checkEngine;
	};

	public.displaymotorVehicleInfo = function() {
		console.log('The motor vehicle name is ' + public.getName() + '.' + ' The motor vehicle has an engine= ' + public.checkForEngine() + '.' + ' The motor vehicle has ' + public.getWheelCount() + ' wheels.' );
	};

	return public;
}

var sportCar = function(options) {
	
	var public = motorVehicle(options);
	public.getDoorCount = function() {
		return public.doorCount;
	}

	public.checkForConvertible = function() {
		return public.checkConvertible;
	}

	public.displaysportCarInfo = function() {
		console.log('The sport cars name is ' + public.getName() + '.' + ' The ' + public.getName() + ' has an engine: ' + public.checkForEngine() + '.' + ' The ' + public.getName() + ' has ' + public.getWheelCount() + ' wheels.' + ' The ' + public.getName() + ' has ' + public.getDoorCount() + ' doors, and is ' + public.checkForConvertible() + ' a convertible.' );
	}

	return public;
} 







		var lambo = sportCar({
			name: "Lamborghini",
			checkEngine: true,
			doorCount: "2",
			wheelCount: "4",
			checkConvertible: "no"
		});

		lambo.displaysportCarInfo();


		var bugatti = sportCar({
			name: "Bugatti",
			checkEngine: true,
			doorCount: "2",
			wheelCount: "4",
			checkConvertible: "no"
		});

		bugatti.displaysportCarInfo();


		var mustang = sportCar({
			name: "Mustang",
			checkEngine: true,
			doorCount: "4",
			wheelCount: "4",
			checkConvertible: "yes"
		});

		mustang.displaysportCarInfo();


		var nissan = sportCar({
			name: "Nissan GT-R",
			checkEngine: true,
			doorCount: "2",
			wheelCount: "4",
			checkConvertible: "no",
			
		});

		nissan.displaysportCarInfo();


		var astonMartin = sportCar({
			name: "Aston Martin DB8",
			checkEngine: true,
			doorCount: "2",
			wheelCount: "4",
			checkConvertible: "no",
		});

		astonMartin.displaysportCarInfo();






