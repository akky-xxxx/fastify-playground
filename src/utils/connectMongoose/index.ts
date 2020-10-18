// import node_modules
import mongoose from "mongoose"

// main
type ConnectMongoose = () => Promise<void>
export const connectMongoose: ConnectMongoose = async () => {
  await mongoose.connect("mongodb://0.0.0.0:27018", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "verifications",
    user: "root",
    pass: "example",
  })
}
