const Thermostat = require('./thermostat');

describe('Thermostat', () => {

    it('creates a thermostat object with a starting temperature of 20 degrees', () => {
        const thermostat = new Thermostat();
        expect(thermostat.temp).toBe(20);
    });

    it('creates a thermostat object with a starting powerSavingModeOn variable of True', () => {
        const thermostat = new Thermostat();
        expect(thermostat.powerSavingModeOn).toBe(true);
    });

    describe('getTemperature', () => {
        const thermostat = new Thermostat();
        expect(thermostat.getTemperature()).toBe(20);
    })

    describe('powerSavingMode', () => {

        it('toggles the powerSavingModeOn variable to true', () => {
            const thermostat = new Thermostat();
            thermostat.powerSavingMode(true);
            expect(thermostat.powerSavingModeOn).toBe(true);
        });

        it('toggles the powerSavingModeOn variable to false', () => {
            const thermostat = new Thermostat();
            thermostat.powerSavingMode(false);
            expect(thermostat.powerSavingModeOn).toBe(false);
        })
    });

    describe('up', () => {

        it('increases temp by 1 degree when called', () => {
            const thermostat = new Thermostat();
            thermostat.up();
            expect(thermostat.getTemperature()).toBe(21);
        });

        it('continues to increase temp by 1 on repeated calls', () => {
            const thermostat = new Thermostat();
            thermostat.up();
            thermostat.up();
            expect(thermostat.getTemperature()).toBe(22);
        });

        it('prevents the temperature exceeding 25 degrees if powerSavingModeOn is true', () => {
            const thermostat = new Thermostat();
            for (let i = 0 ; i < 8 ; i++) {
                thermostat.up();
            }
            expect(thermostat.getTemperature()).toBe(25);
        });

        it('prevents the temperature exceeding 32 degrees if powerSavingModeOn is false', () => {
            const thermostat = new Thermostat();
            thermostat.powerSavingMode(false);
            for (let i = 0 ; i < 14 ; i++) {
                thermostat.up();
            }
            expect(thermostat.getTemperature()).toBe(32);
        });
    });

    describe('down', () => {
       
        it('decreases temp by 1 degree when called', () => {
            const thermostat = new Thermostat();
            thermostat.down();
            expect(thermostat.getTemperature()).toBe(19);
        });

        it('continues to decrease temp by 1 on repeated calls', () => {
            const thermostat = new Thermostat();
            thermostat.down();
            thermostat.down();
            expect(thermostat.getTemperature()).toBe(18);
        });
        it('prevents the temperature being lowered below 10 degrees', () => {
            const thermostat = new Thermostat();
            for (let i = 0 ; i <= 11 ; i++) {
                thermostat.down();
            }
            expect(thermostat.getTemperature()).toBe(10);
        });
    });

    describe('reset', () => {
        
        it('resets the temperature to 0 when the reset method is called', () => {
            const thermostat = new Thermostat();
            thermostat.up();
            thermostat.up();
            thermostat.reset();
            expect(thermostat.getTemperature()).toBe(20);
        });
    });

    describe('currentEnergyUsage', () => {

        it('reports low energy usage when the temperature is below 18 degrees', () => {
            const thermostat = new Thermostat();
            thermostat.down();
            thermostat.down();
            thermostat.down();
            expect(thermostat.currentEnergyUsage()).toBe("Current energy usage: Low");
        });

        it('reports medium energy usage when the temperature is between 18 and 25 degrees', () => {
            const thermostat = new Thermostat();
            thermostat.up();
            thermostat.up();
            expect(thermostat.currentEnergyUsage()).toBe("Current energy usage: Medium");
        });

        it('reports high energy usage when the temperature is above 25 degrees', () => {
            const thermostat = new Thermostat();
            thermostat.powerSavingMode(false);
            for (let i = 0 ; i < 9 ; i++) {
                thermostat.up();
            }
            expect(thermostat.currentEnergyUsage()).toBe("Current energy usage: High");
        });
    });
});