const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter a type of exercise!"
      },
      name: {
        type: String,
        trim: true,
        required: "Enter a name for the exercise!"
      },
      duration: {
        type: Number,
        required: "Enter your time in number of minutes!"
      },
      sets: {
        type: Number
      },
      reps: {
        type: Number
      },
      weight: {
        type: Number
      },
      distance: {
        type: Number
      }
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
