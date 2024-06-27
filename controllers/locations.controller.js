const express = require("express");
const locations = express.Router();
const locationsArray = require("../models/location.model");

locations.get("/", (request, response) => {
  response.json(locationsArray);
});

module.exports = locations;
