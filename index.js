const PORT = 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.json("hi");
});

app.use(cors());

app.get("/getJobs", (req, res) => {
  const url = `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${process.env.ADZUNA_APP_ID}&app_key=${process.env.ADZUNA_APP_KEY}`;
  //console.log(url);

  const options = {
    method: "GET",
    url,
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.listen(8000, () => console.log(`Listening on port ${PORT}`));
