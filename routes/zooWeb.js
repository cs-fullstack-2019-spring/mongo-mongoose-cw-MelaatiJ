const express = require("express");
const router = express.Router();
// the Name is pick to connect to the models //
const ZooAnimal = require("../models/zooAnimal");

// using this url, passing the id, type and dexcription to create a new zoo animal
router.get("/animal/add/:id/:type/:description", (request, response) => {
    newZooAnimal = {
        //animal id = request id what user input
        animalId : request.params.id,
        // animal type = request type what user put in
        animalType: request.params.type,
        animalDescription: request.params.description,

    };
    // model. create makes a new zoo animal //
    ZooAnimal.create(newZooAnimal, (error, results) => {
        if(error){
            return console.log (error);
        }
        else{
            return console.log(results);
        }
    });
    response.send("passing in")
});

// route to get animal by id and end it to the page .
router.get("/animal/get/:id", (request, response) => {
    // model. find but animalId which is a model field, request it from the url. //
    ZooAnimal.find({animalId:request.params.id}, (error, results) => {
        //if there are any error send them to the page
        if (error) {
            response.send(error);
        }
        //else console log the results
        else{
            console.log(results);
            //print the results on the html page
            response.send(results);
        }
    });
});

// route to delete animal by id //
router.get("/animal/delete/:id", (request, response) => {
    ZooAnimal.deleteOne({animalId:request.params.id},(error) => {
        if (error) {
            return console.log(error)
        }
        response.send("delete by id")
    });
});

//route to update animal by id type and description//
router.get("/animal/update/:id/:type/:description", (request, response) => {
    // model name and function to update //
    //camelCase updateMany//
    ZooAnimal.updateMany(
        {
            // the first dictionary is the conditional //
            animalId: request.params.id
        },
        {
            // second dictionary are the instances you are changing//
            animalType:request.params.type,
            animalDescription:request.params.description
        }, (error, results)=>{
        if (error){
            response.send(error)
        }
        else {
            response.send(results)
        }
    });


});

//export module
module.exports = router;

