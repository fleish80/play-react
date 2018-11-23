const mongoose = require('mongoose');
const Schema = mongose.schema;

const accountSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
});

const Account = mongoose.model('account', accountSchema);