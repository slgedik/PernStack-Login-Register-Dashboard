const router = require('express').Router();
const authorization = require('../middleware/authorization');
const pool = require('../db');
const fs = require('fs');
router.get('/', async (req, res) => {
  try {
    fs.readFile('data.json', 'utf8', (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }

      let dataArray = JSON.parse(data);
      console.log(dataArray.vetname);
      //res.json('slm');
      res.json(dataArray.vetname);
    });

    //const dataArray = JSON.parse(data);
    //console.log(dataArray);
    //res.json(req.user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.get('/cli', async (req, res) => {
  try {
    fs.readFile('clientData.json', 'utf8', (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }

      let dataArray = JSON.parse(data);
      console.log(dataArray.cname);
      //res.json('slm');
      res.json(dataArray.cname);
    });

    //const dataArray = JSON.parse(data);
    //console.log(dataArray);
    //res.json(req.user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.get('/cli-vet', async (req, res) => {
  try {
    fs.readFile('clientsVet.json', 'utf8', (error, data2) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data2);
      }

      let dataArray2 = JSON.parse(data2);
      console.log(dataArray2.vetname);
      //res.json('slm');
      res.json(dataArray2);
    });
    //const dataArray = JSON.parse(data);
    //console.log(dataArray);
    //res.json(req.user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
