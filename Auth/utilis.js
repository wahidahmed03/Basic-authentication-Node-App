const fs = require("fs")
const path = require("path")


// USER FOLDER PATH
const usersFile = path.join(__dirname,"../user/users.json")

// GET USER INFORMATION
const getUser = ()=>{
    if(!fs.existsSync(usersFile)){
        return []
    }
    const data = fs.readFileSync(usersFile)
    return JSON.parse(data)
}


// SAVE USER 
const saveUsers =(users)=>{
    fs.writeFileSync(usersFile, JSON.stringify(users,null, 2))
}


module.exports = {getUser,saveUsers}