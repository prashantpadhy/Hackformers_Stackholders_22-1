const mongoose = require('mongoose')

const dataBaseConnection = () => {
    mongoose.connect(`mongodb://localhost:27017/terna`)
    console.log('database connected')
}

module.exports = dataBaseConnection