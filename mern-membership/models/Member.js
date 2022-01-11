const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema 

const MemberSchema = new Schema ({ 
    name:{
        type: String, 
        required: true,
    },
    dept:{
        type: String,
        required: true,
    },
    dob:{
        type: Date,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = Member = mongoose.model('memebr', MemberSchema);