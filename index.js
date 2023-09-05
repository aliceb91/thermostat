const Thermostat = require('./thermostat');

const thermostat = new Thermostat();

console.log("This should be 20:")
console.log(thermostat.getTemperature());

thermostat.up();
thermostat.up();
console.log("This should be 22:")
console.log(thermostat.getTemperature());

thermostat.down();
console.log("This should be 21:")
console.log(thermostat.getTemperature());

thermostat.powerSavingMode(true);

for (let i = 0 ; i < 10 ; i++) {
    thermostat.up();
}

console.log("This should be 25:")
console.log(thermostat.getTemperature());

thermostat.powerSavingMode(false);

thermostat.up();
console.log("This should be 26:")
console.log(thermostat.getTemperature());

thermostat.reset();
console.log("This should be 20:")
console.log(thermostat.getTemperature());