const jwt = require('jsonwebtoken');
require('dotenv').config();
const express = require('express');

//this middleware will on continue on if the token is inside the local storage

module.exports = async (req, res, next) => {
  try {
    // Get token from header
    const jwtToken = req.header('token');

    // Check if not token
    if (!jwtToken) {
      return res.status(403).json('not authorize');
    }

    // Verify token

    const verify = jwt.verify(jwtToken, process.env.jwtSecret);
    console.log(verify);
    req.user = verify.user;

    console.log(req.user);

    next();
  } catch (err) {
    console.error(err.message);
    res.status(403).json('not authorize');
  }
};
