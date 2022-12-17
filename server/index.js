
import express from "express"
import cors  from "cors"
import  Connection  from "./database/db.js"
import userRouter from "./routes/users.js"

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/user", userRouter)


app.use(cors({
    origin:"*"
  }))

app.get("/",(req,res)=>{
    res.send("Welcome to Home Page")
})

app.listen(8080, async()=>{
    await Connection
    console.log("server started at http://localhost:8080");
})

// async function getPost(){
//     const myPosts = await fetch("https://randomuser.me/api?results=50")
//     const response = await myPosts.json()
//     console.log("users",response);
// }

// getPost()