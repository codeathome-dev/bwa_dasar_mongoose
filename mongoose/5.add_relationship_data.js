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

// 1. create new Schema Person
const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const People = mongoose.model("People", peopleSchema);

// 2. create new document Fruit
const fruitDuku = new Fruit({
  name: "Duku",
  rating: 6,
  review: "Rasanya manis asem."
});

fruitDuku.save(function(error){
  if (error) {
    console.log(error);    
  } else {
    console.log('Berhasil create buah duku kedalam fruitsDB');
  }
});

// 3. create a document Person
const people = new People({
  name: "Heru",
  age: 12,
  favouriteFruit: fruitDuku
});

people.save(function(error){
  if (error) {
    console.log(error);    
  } else {
    mongoose.connection.close();
    console.log('Berhasil create Heru dan relationship nya dengan duku');
  }
});
