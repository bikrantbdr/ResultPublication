const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    symbolnumber: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
        // required:false
    },
    DOB: {
        type: String,
        required: true
    },
    // schoolname: {
    //     type: String,
    //     required: true
    // },
    // district: {
    //     type: String,
    //     required: true
    // },
    // state: {
    //     type: String,
    //     required: true
    // },
    // subjects:[{
    //     subjectname: {
    //         type: String,
    //         required: true
    //     },
    //     credithours: {  
    //         type: Number,
    //         required: true
    //     },
    //     theory: {
    //         type: String,
    //         required: true
    //     },
    //     practical: {
    //         type: String,
    //         required: true
    //     },
    //     total: {
    //         type: String,
    //         required: true
    //     },
    //     grade: {
    //         type: Number,
    //         required: true
    //     },
    // }],
    // GPA : {
    //     type: Number,
    //     required: true
    // }
});

resultSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
})

module.exports = mongoose.model('Result', resultSchema);