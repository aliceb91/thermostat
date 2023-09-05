class Thermostat {
    constructor() {
        this.temp = 20;
        this.powerSavingModeOn = true;
    }

    getTemperature() {
        return this.temp;
    }

    up() {
        let maxTemp = 32;
        if (this.powerSavingModeOn) {
            maxTemp = 25;
        }
        if (this.temp < maxTemp) {
            this.temp += 1;
        }
        return;
    }

    down() {
        if (this.temp > 10) {
            this.temp -=1;
        }
        return;
    }

    powerSavingMode(bool) {
        this.powerSavingModeOn = bool;
        return;
    }

    reset() {
        this.temp = 20;
        return;
    }

    currentEnergyUsage() {
        if (this.temp < 18) {
            return "Current energy usage: Low";
        } else if (this.temp > 25) {
            return "Current energy usage: High";
        } else {
            return "Current energy usage: Medium";
        }
    }
}

module.exports = Thermostat;