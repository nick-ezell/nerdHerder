const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nerdHerd");

const devSeed = [
  {
    devEmail: "test0@test.com",
    password: "godofwar",
  },
  {
    devEmail: "test1@test.com",
    password: "hyrule",
  },
  {
    devEmail: "test20@test.com",
    password: "ghostsquad",
  },
];

db.Dev.deleteMany({})
  .then(db.Dev.insertMany(devSeed))
  .then((data) => {
    console.log(data);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
