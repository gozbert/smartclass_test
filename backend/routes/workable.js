const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

router.get("/jobs", (req, res) => {
  let rawdata = fs.readFileSync(path.resolve(__dirname, "../json/jobs.json"));
  let student = JSON.parse(rawdata);
  res.send(student);
});


router.get("/jobs/view/:shortcode", (req, res) => {
  let rawdata = fs.readFileSync(path.resolve(__dirname, "../json/job.json"));
  let student = JSON.parse(rawdata);
  res.send(student);
});

router.get("/jobs/form/:shortcode", (req, res) => {
  let rawdata = fs.readFileSync(path.resolve(__dirname, "../json/job_form.json"));
  let student = JSON.parse(rawdata);
  res.send(student);
});

module.exports = router;
