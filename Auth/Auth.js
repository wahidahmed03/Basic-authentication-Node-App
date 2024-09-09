const bcrypt = require("bcryptjs")
const cookieParser = require('cookie-parser');




const {saveUsers,getUser} = require('./utilis')


const RegisterUser = async (req, res) => {

    const {email,username, password } = req.body
    const users = getUser()
    const userExists = users.find(user =>  user.email === email)
    if(userExists){
        return res.status(400).json({massage:"User alredy extits"})
    }

    const handlepassword = await bcrypt.hash(password, 10)
    users.push({email, username, password:handlepassword});
    saveUsers(users)

    res.status(201).json({massage:"User Register Successfull", userExists})

}




const LogingHandeler = async (req,res)=>{
    const {email, password} = req.body
    const users = getUser()
    const user = users.find(user =>user.email === email)
    if(!user || !(await bcrypt.compare(password, user.password))){
        return res.status(401).json({massage:"Invalid credentials"})
    }

    res.cookie('auth_token', user.username, { httpOnly: true });
    res.json({ message: 'Login successful' });

}




const LogOutHandeler =  (req, res)=>{
    res.clearCookie("Auth_token")
    res.json({massage:"Logged Out Success"})
}


const ProfileHandel= (req,res) =>{
    const token = req.cookies.auth_token;
    if(!token){
        return res.status(401).json({massage:"Unauthoized"})
    }

    res.json({massage: `Welcome ${token}`})
}

module.exports ={ RegisterUser, LogingHandeler,LogOutHandeler,ProfileHandel }
