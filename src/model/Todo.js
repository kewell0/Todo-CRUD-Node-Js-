const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
    },
    description: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
    },

},
{timestamps: true }
);

const userModel = model('todos', userSchema);

module.exports = userModel;