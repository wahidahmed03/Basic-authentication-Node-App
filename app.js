const express = require("express")
const cookieParser =  require("cookie-parser")




// AUTH
const { RegisterUser, LogingHandeler ,LogOutHandeler,ProfileHandel} = require("./Auth/Auth")


const app = express()
const PORT = 5000



app.use(express.json())
app.use(cookieParser())



// GET USE


// REGISTER
app.post("/register", RegisterUser)
app.post("/login", LogingHandeler)
app.post("/logout",LogOutHandeler )
app.get("/profile", ProfileHandel)





app.listen(PORT,()=>{
    console.log("App is Runnig on Port 5000")
})