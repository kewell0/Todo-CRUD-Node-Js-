const mongoose = requir('mongoose');

async function connect(uri) {
    try {
        mongoose.connect(uri || 'mongodb://localhost/27107');
        console.log("connected to MongoDB");
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = connect