import 'dotenv/config'
import mongoose from 'mongoose'

export const connectDB = () => {
  const url = process.env.DB_URL

  try {
    mongoose.connect(url)
  } catch (e) {
    console.error(e.message)
    process.exit(1)
  }

  const dbConnection = mongoose.connection
  dbConnection.once('open', (_) => console.log(`DB connected successfully`))
  dbConnection.on('error', (e) => console.log(`DB connection error: ${e}`))

  return
}
