const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
},{
    timestamps: true
    // o, this will automatically add the created at and updated at,
    // two timestamps into each document that is stored in our application and
    // it'll automatically update these values. Whenever we update the document
    // and the created at will be automatically initialized
    // when the document is first creator of this time
});

var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;
