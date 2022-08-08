/**
 * Applicatio Router
 */

// Dependencies
const express = require('express');
const Router = express.Router();
const path = require('path');

const mainAppPath = path.resolve(__dirname, '../main-client', 'build');
const doctorAppPath = path.resolve(__dirname, '../doctor-client', 'build');
const patientAppPath = path.resolve(__dirname, '../patient-client', 'build');

Router.use('/home', express.static(mainAppPath));
Router.use('/doctor', express.static(doctorAppPath));
Router.use('/patient', express.static(patientAppPath));

Router.get('/home/*', (req, res) => {
    res.sendFile(path.resolve(mainAppPath, 'index.html'));
    res.end();
});

Router.get('/doctor/*', (req, res) => {
    res.sendFile(path.resolve(doctorAppPath, 'index.html'));
    res.end();
});

Router.get('/patient/*', (req, res) => {
    res.sendFile(path.resolve(patientAppPath, 'index.html'));
    res.end();
});

// Export Router
module.exports = Router;