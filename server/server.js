const app = require('express')()
const dataBaseConnection = require('./database/database.js')
require('dotenv').config();
const cors = require('cors')
// const passport = require('passport')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser');

app.use(
    cookieSession({
        name:'eseva',
        keys : ['stackholders'],
        maxAge : 24*60*60*100,
    })
)
app.use(bodyParser.json());
app.use(function(request, response, next) {
    if (request.session && !request.session.regenerate) {
        request.session.regenerate = (cb) => {
            cb()
        }
    }
    if (request.session && !request.session.save) {
        request.session.save = (cb) => {
            cb()
        }
    }
    next()
})


app.use(
    cors({
        origin : "http://localhost:3000",
        methods : "GET,POST,PUT,DELETE",
        credentials : true,
    })
)



dataBaseConnection()





app.get('/' , (req,res)=>{
    res.send('Server is working')
})

app.listen(8080 , ()=>{console.log('server started')})