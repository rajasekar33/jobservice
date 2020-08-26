var express = require("express")
var router = express.Router()
var jobController = require(rootdir + "/controller/jobController")

router.use((req, res, next) => {
    console.log("request method :", req.method, "request url :", req.url)
    next()
})

router.get('/jobs', (req, res, next) => {
    jobController.getJobs(req, res, next)
})

router.post('/jobs/sync', (req, res, next) => {
    jobController.syncJobs(req, res, next)
})

module.exports= router