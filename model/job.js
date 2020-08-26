var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jobSchema = new Schema({
    id :{
        type: String,
        unique : false,
        required : true
    },
    description : {
        type: String
    },
    company : {
        type: String
    },
    type : {
        type: String
    },
    url : {
        type: String
    },
    title : {
        type: String
    },
    company_logo : {
        type: String
    },
    location : {
        type: String
    },
}, {
    timestamps: true
});

module.exports = jobSchema;