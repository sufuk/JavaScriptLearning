var chevy = {
    make: "Chevy",
    model: "Bel Air",
    color: "red",
    passengers: 2
}
console.log(chevy.make)
console.log(chevy)

var kia = {
    make: "KIA",
    model: "Ceed",
    color: "black",
    passengers: 4,
    "is Sedan": false
}
console.log(kia.make)
console.log(kia)
console.log(kia["is Sedan"])


var toyota = {
    make: "Toyota",
    model: "Corolla",
    color: "red",
    passengers: 4,
    milage: 4000,
    isGasCapOpen: false,
    useGasCap: function () {
        this.isGasCapOpen = !this.isGasCapOpen
    },
    fuel: 200,
    literPerKM: 0.8,
    isEngineStarted: false,
    useEngineButton: function () {
        this.isEngineStarted = !this.isEngineStarted;
    },
    drive: function (km) {
        if (this.isEngineStarted) {
            if (km * this.literPerKM >= this.fuel) {
                this.milage += this.fuel * this.literPerKM;
                this.fuel = 0;
                this.useEngineButton;
            } else {
                this.milage += km;
                this.fuel -= km * this.literPerKM;
            }

        } else {
            console.log("Please start the engine first");
        }
    }
}

var gasStation = {
    fuel: 400,
    fillGasToCar: function (car, liter) {
        if (!car.isGasCapOpen) {
            car.useGasCap();
        }
        if (liter >= this.fuel){
            liter = this.fuel;
        }
        car.fuel += liter;
    }
}

gasStation.fillGasToCar(toyota, 250);

console.log(toyota);

for (var prop in toyota) {
    console.log(prop + ": " + chevy[prop]);
}
