const app = require('express')()
const dataBaseConnection = require('./database/database.js')
require('dotenv').config();
const cors = require('cors')
const bcrypt = require('bcryptjs')
// const passport = require('passport')
const auth = require('./routes/auth')
const jwt = require('jsonwebtoken')
// const cookieSession = require('cookie-session')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')


app.use(cookieParser())
app.use(bodyParser.json());
app.use(cors())
app.use('/api/auth' , auth)
// app.use('/api/login' , loginroute)



// app.use(
//     cors({
//         origin : "http://localhost:3000",
//         methods : "GET,POST,PUT,DELETE",
//         credentials : true,
//     })
// )



dataBaseConnection()





app.get('/' , (req,res)=>{
    res.send('Server is working')
})

app.listen(8080 , ()=>{console.log('server started')})