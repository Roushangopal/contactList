const mongoose = require('mongoose');

const schema = mongoose.Schema;

const contactSchema = new schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    }
});

const contact = mongoose.model('contact', contactSchema);
module.exports = contact;