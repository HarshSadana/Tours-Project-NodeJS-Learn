const fs = require('fs');
const Tour = require('../models/tourModels');

// const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))

// exports.checkId = ((req, res, next, val) => {
//     console.log(`The value of id is ${val}`);
//     if(req.params.id >= tours.length){
//         return res.status(404)
//         .json({
//             status: "failed",
//             message: "invalid id"
//         })
//     }
//     next();
// })

// exports.checkBody = ((req,res,next) => {
//     if(!req.body.name || !req.body.price){
//         return res.status(400).json({
//             status: 'fail',
//             message: 'Missing anem or price!'
//         })
//     }

//     next();
// })

exports.getAllTours = async (req, res) => {
    // Now we will send back all the tours.
    // sending the reponse in the better format.
    console.log("..............");

    try {
        const tours = await Tour.find()  // It will return an array of all the documents.
        res.status(200).json({
            status: 'success',
            results: tours.length,
            data: {
                tours
            }
        })
        
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        });
    }


    console.log("After sending the response also the code will run.");
}

exports.createTour = async (req, res) => {

    //Previous Logic without database.

    // console.log(req.body);
    // const newId = tours[tours.length - 1].id + 1;
    // const newTour = Object.assign({id: newId}, req.body);

    // tours.push(newTour);
    // fs.writeFile(
    //     `${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
    //         res.status(201)
    //         .json({
    //             status: 'success',
    //             data: {
    //                 tour: newTour
    //             }
    //         })
    //     }
    // )

    // New Logic 

    // It is important to put the content inside the async function in the try-catch block, because we deal with the asynchronous tasks inside the try-catch block.
    try {
        // If there will be an error inside this block, then it will sent to the catch.
        const newTour = await Tour.create(req.body);
        res.status(201)
                .json({
                    status: 'success',
                    data: {
                        tour: newTour
                    }
                });
        
    } catch (error) {
        res.status(400).json({
            status:'failed',
            message: error
        })
    }

    // const newTour = new Tour({});
    // await newTour.save();

    // Another Way
    
}

exports.getATour = (req, res) => {
    console.log(req.params); // all the variables in the URL are available here.

    const id = req.params.id*1; // for converting the string to the number.

    const tour = tours.find((e) => e.id == id);

    if(!tour){
        return res.status(404).json({
            "status": "failed",
            "message": "invalid id"
        })
    }
    res.status(200).json({
        status: 'success',
        data: {
            tour
        }
    })

}

exports.updateTour = (req, res) => {
    console.log(req.params);

    res.status(200)
    .json({
        status: 'success',
        data: {
            tour: '<Updated tour here>'
        }
    })
}

exports.deleteTour = (req, res) => {
    console.log(req.params);

    res.status(284)  // status code for sending the empty data.
    .json({
        status: 'success',
        data: null
    })
}
