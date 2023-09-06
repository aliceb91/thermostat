const express = require('express');
const app = express();
const port = 3000;
const Thermostat = require('./thermostat');

const thermostat = new Thermostat();

app.get('/temperature', (req, res) => {
    const currentTemp = thermostat.getTemperature()
    res.json({temperature: currentTemp});
});

app.post('/up', (req, res) => {
    thermostat.up();
    res.sendStatus(200);
})

app.post('/down', (req, res) => {
    thermostat.down();
    res.sendStatus(200);
})

app.delete('/temperature', (req, res) => {
    thermostat.reset();
    res.sendStatus(200);
})

console.log(`Server listening on localhost:${port}`);
app.listen(port);