const app = require("express").Router();
const Workout = require("../models/workoutModel");

//get everything from the database
app.get("/api/workouts", (req, res) => {
    Workout.find()
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err)
        });
});

// creae a new workout
app.post("/api/workouts", ({body}, res) => {
    Workout.create(body)
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.json(err)
    });
});

//update workout
app.put("/api/workouts:id", ({body, params}, res) => {
    Workout.findByIdAndUpdate( params.id, 
        { $push: {exercises: body}},
        { new : true})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err)
        });
});

app.get("/api/workouts/range", (res, req) => {
    Workout.find({})
        .limit(10)
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err)
        });
})
module.exports = app;