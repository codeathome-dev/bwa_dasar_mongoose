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

// Update data
Fruit.updateOne({_id: "5ea0eae9a3be734a2c41b642"}, {name: "Mangga"}, function(error){
  if (error) {
    mongoose.connection.close();
    console.log(error);
  } else {
    mongoose.connection.close();
    console.log('Berhasil update data nama Apel menjadi Mangga di fruitsDB');
  }
});

// 2. read all documents data
Fruit.find(function(error, fruits){
  if (error) {
    console.log(error);    
  } else {
    mongoose.connection.close();

    console.log('Nama - nama Buah sekarang: ');
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});

// delete data
Fruit.deleteOne({_id: "5ea0986c29eb3d3ec09f5ee4"}, function(error){
  if (error) {
    mongoose.connection.close();
    console.log(error);
  } else {
    mongoose.connection.close();
    console.log('Berhasil delete sebuah data di fruitsDB');
  }
});

// 4. read all documents setelah delete sebuah data
Fruit.find(function(error, fruits){
  if (error) {
    console.log(error);    
  } else {
    mongoose.connection.close();

    console.log('Nama - nama Buah sekarang setelah mendelete sebuah data: ');
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});