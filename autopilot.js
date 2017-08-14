function getNewCar () {
  var newCar = {
    'city': 'Toronto',
    'passengers': 0,
    'gas': 100
  };
  return newCar;
}

function addCar(cars, newCar) {
  cars.push(newCar);
  var carLength = cars.length;
  return("Adding new car to fleet. Fleet size is now " + carLength + " .");
}

function pickUpPassenger(car) {
  car['passengers'] += 1;
  car['gas'] -= 10;
  return ("Picked up passenger. Car now has " + car['passengers'] + " passengers.");
}

function getDestination(car) {
  if (car['city'] === 'Toronto') {
    return 'Mississauga';
  } else if (car['city'] === 'Mississauga') {
    return 'London';
  } else if (car['city'] === 'London') {
    return 'Toronto';
  };
}

function fillUpGas(car) {
  var oldGas = car['gas'];
  car['gas'] = 100;
  return ("Filled up to " + getGasDisplay(car['gas']) + " on gas from " + getGasDisplay(oldGas) + ".");
}

function getGasDisplay(gasAmount) {
  return (gasAmount + " %");
}

function drive(car, cityDistance) {
  if (car['gas'] < cityDistance) {
  return fillUpGas;
  }
    car['city'] = getDestination(car);
    car['gas'] -= cityDistance;
    return ("Drove to" + car['city'] + ". Remaining gas: " + getGasDisplay(car['gas']) + ".");
}

function dropOffPassengers(car) {
  var previousPassengers = car['passengers'];
  car['passengers'] = 0;
  return ("Dropped off " + previousPassengers + " passengers.");
}

function act(car) {
  var distanceBetweenCities = 50;
  if (car['gas'] < 20) {
    return fillUpGas(car);
  } else if (car['passengers'] < 3) {
    return pickUpPassenger(car);
  } else {
    if (car['gas'] < distanceBetweenCities) {
      return fillUpGas(car);
  };
    var droveTo = drive(car, distanceBetweenCities);
    var passengersDropped = dropOffPassengers(car);
    return (droveTo  + passengersDropped);
  };
}

function commandFleet(cars) {
  for (var i = 0; i < cars.length; i ++) {
    var action = act(cars[i]);
    console.log("Car" + (i + 1) + ": " + action);
  };
  console.log("---")
}

function addOneCarPerDay(cars, numDays) {
  for (var i = 0; i <= numDays; i ++) {
    var newCar = getNewCar();
    addCar(cars, newCar);
    commandFleet(cars);
  };
}

var cars = [];
addOneCarPerDay(cars, 10);
