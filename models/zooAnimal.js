var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// animal_id
// animal_type
// animal_description
var ZooAnimalSchema = new Schema(
    {
        animalId :Number,
        animalType :String,
        animalDescription :String,
    }
);


module.exports = mongoose.model("ZooAnimal", ZooAnimalSchema);