const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const app = express();
var path = require("path");

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(require("./routes/api-routes.js"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });



app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
});

app.get('/exercise', (req,res) => {
  res.sendFile(path.join(__dirname, './public/exercise.html'))
});

app.get('/stats', (req,res) => {
  res.sendFile(path.join(__dirname, './public/stats.html'))
});  

app.listen(PORT, () => {
    console.log(`App running on port  http://localhost:${PORT}`);
  });

