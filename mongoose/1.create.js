const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// 1. create a document is insert a document
const fruitApple = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Rasanya manis seger."
});

fruitApple.save(function(error){
  if (error) {
    console.log(error);    
  } else {
    console.log('Berhasil create buah apel kedalam fruitsDB');
  }
});

// 2. create many documents is insert many documents
const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "Buah yang terbaik!"
});

const jeruk = new Fruit({
  name: "Jeruk",
  rating: 5,
  review: "Asem rasanya!"
});

const pisang = new Fruit({
  name: "Pisang",
  rating: 6,
  review: "Manis dan menyegarkan"
});

Fruit.insertMany([kiwi, jeruk, pisang], function(error){
  if (error) {
    console.log(error);    
  } else {
    // untuk memutuskan koneksi saat selesai melakukan proses di mongodb
    mongoose.connection.close();

    console.log('Berhasil create buah kiwi, jeruk dan pisang kedalam fruitsDB');
  }
});