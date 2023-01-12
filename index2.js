const vehicle = {
    brandName: 'Mazda',
    model: "CX-5"
}

// changing variables
vehicle.model = 'CX-9';
console.log(vehicle)

//Delete from Object
delete vehicle.model;
console.log(vehicle);