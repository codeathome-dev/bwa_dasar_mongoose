const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Data name tidak ada, please diisi ya!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// 1. create a document with validation
const fruitApple = new Fruit({
  name: "Apple",
  rating: 10,
  review: "Rasanya manis seger."
});

fruitApple.save(function(error){
  if (error) {
    mongoose.connection.close();
    console.log(error);
  } else {
    mongoose.connection.close();
    console.log('Berhasil create buah apel kedalam fruitsDB');
  }
});