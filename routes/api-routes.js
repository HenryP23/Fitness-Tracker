const Workout = require("../models/workoutModel");
const app = require("express").Router();

app.get("/api/workouts", (req, res) => {
  Workout.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    {
      $push: {
        exercises: body
      }
    },
    {
      new: true
    }
  )
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .limit(10)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = app;
