const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// use of sub-ducuments
var commentSchema = new Schema({
    rating:  {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment:  {
        type: String,
        required: true
    },
    author:  {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    comments:[commentSchema]
}, {
    timestamps: true
});
//
// const dishSchema = new Schema({
//     name: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     description: {
//         type: String,
//         required: true
//     }
// },{
//     timestamps: true
//     // o, this will automatically add the created at and updated at,
//     // two timestamps into each document that is stored in our application and
//     // it'll automatically update these values. Whenever we update the document
//     // and the created at will be automatically initialized
//     // when the document is first creator of this time
// });

var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;
