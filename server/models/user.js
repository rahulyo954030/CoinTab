import {model,Schema} from "mongoose"

const userSchema = new Schema({
    picture: String,
    first: String,
    last: String,
    gender: String,
    email: String,
    location: String,
    pin:String,
    nat: String
})

const USER = model("user", userSchema)

export default USER