const moongose = require('mongoose')

const connectDB = async() => {
    try {
        const conn = await moongose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

module.exports = connectDB