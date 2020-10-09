const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//name, type, weight, sets, reps, and duration of exercise
const WorkoutSchema = new Schema({
  name: {
    type: String,
    trim: true
  },

  type: {
    type: String,
    trim: true
  },

  weight: {
    type: String,
    trim: true
  },

  sets: {
    type: Number,
    trim: true
  },

  reps: {
    type: Number,
    trim: true
  },

  duration: {
    type: Number,
    trim: true
  }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
