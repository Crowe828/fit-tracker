const router = require("express").Router();
const Workout = require("../models/workout");

module.exports = function (app) {
  router.post("/api/workouts", (req, res) => {
    Workout.create({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
};

// Add exercises to a previous workout plan.
// Add new exercises to a new workout plan.
// View the combined weight of multiple exercises on the `stats` page.
