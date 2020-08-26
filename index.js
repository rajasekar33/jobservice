global.rootdir = __dirname
global.config = require('config')
var db = require(rootdir + '/database/mongodb')

var routes = require(rootdir + '/routes/jobRoutes')
var express = require("express")
var bodyParser = require("body-parser")
var methodOverride = require("method-override")
var app = express()

db()

app.use(bodyParser.json({limit: "20mb"}))
app.use(bodyParser.urlencoded({limit: "20mb", extended: true}))
app.use(methodOverride("X-HTTP-Method-Override"))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type')

    next()
})

var router = app.use('/', routes)

app.set('json spaces', 2)

if(!module.parent){
    app.listen(config.app.port, () => {
        console.log("Application started on port : ", config.app.port)
    })
}


router.get('/', (req, res) => {
    res.json({message: "job service is working fine"})
})