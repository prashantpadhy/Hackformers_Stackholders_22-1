const router = require('express').Router()
const bcrypt = require('bcryptjs');
const User = require('../models/User')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')




router.post("/signup", async (req, res) => {
    let success = false;

    const user = await User.findOne({ email: req.body.email })
    if (user) {
        res.json({ success, message: "User already exist" })
    }
    else {
        try {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(req.body.password, salt)
            const newUser = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword
            }).then(data=>res.json({success : true , message : "User Created"}))
            window.open("http://localhost:3000/login" , "_self")

        }
        catch(err) {
            console.log(err)
            res.status(500).json({ success: false, message: "Internal server" })

        }
    }

})

router.post('/login' , async (req,res)=>{
    try{
        const user = await User.findOne({email : req.body.email})
        if(user){
            const comparison = await bcrypt.compare(req.body.password , user.password)
            if(comparison){
                // console.log(user)
                const token = jwt.sign({user} , "stackholderssecret" , {expiresIn :"1h"});
                console.log("Hackathon")
                // res.cookie("token" , token , {
                //     httpOnly : true,
                // })
                // localStorage.setItem("token" ,token)
                console.log(token)
                res.json({success : true , message : "Successfully Logged in"})
                console.log("Working")
                return

            }
            else{
                res.status(404).json({success : false , message  :"Wrong Credentials"})
                return
            }

        }
        else{
            res.status(404).json({success : false , message : "Wrong credentials"})
            return
        }
    }
    catch(err){
        res.status(500).json({success : false , "message":"Internal Server Error"})

    }
})


// router.post('/login' , async(req,res)=>{
//     try{
//         console.log("Hello")
//         const user = await User.findOne({email : req.body.email})
//         if(user){
//             const comparison = await bcrypt.compare(req.body.password , user.password)
//             if(comparison){
//                 console.log(user)
//                 // const token = jwt.sign(user , "stackholderssecret" , { expiresIn : "1h"});
//                 // res.cookie("token" , token , {
//                 //     httpOnly : true,
//                 // })
//                 // console.log(token)
//                 res.json({success : true , message : "Successfully Logged in"})
//                 return

//             }
//             else{
//                 res.status(404).json({success : false , message  :"Wrong Credentials"})
//                 return
//             }

//         }
//         else{
//             res.status(404).json({success : false , message : "Wrong credentials"})
//             return

//         }

//     }
//     catch(err){
//         res.status(500).json({success : false , "message":"Internal Server Error"})

//     }

// })





module.exports = router