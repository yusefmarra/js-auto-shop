var Car = function() {
  this.make;
  this.model;
  this.year;
  this.state = 'off';
  this.color;
  this.previous_owners = [];
  this.current_owner = 'manufacturer';
};

Car.prototype.sale = function(newOwner) {
  this.previous_owners.push(this.current_owner);
  this.current_owner = newOwner;
};

Car.prototype.paint = function(color) {
  this.color = color;
};

Car.prototype.start = function() {
  this.state = 'on';
};

Car.prototype.off = function() {
  this.state = 'off';
};

Car.prototype.driveTo = function(dest) {
  if (this.state === 'on') {
    console.log("Driving to " + dest + ".");
  } else {
    console.log("Sorry, the car is off.");
  }
};

Car.prototype.park = function() {
  if (this.state === 'off') {
    console.log('Parked!');
  } else {
    console.log("Sorry, the cat in still on.");
  }
};

Car.prototype.pickUp = function(name) {
  if (this.state === 'on') {
    console.log("Driving to pick up " + name + '.');
    this.passengers.push(name);
  } else {
    console.log("Turn the car on, stupid.");
  }
};

Car.prototype.dropOff = function(name) {
  if (this.state === 'on') {
    this.passengers.splice(this.passengers.indexOf(name),1);
  } else {
    console.log("Turn the car on, stupid.");
  }
};
