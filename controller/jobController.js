
var http = require('https')

var Jobs = require(rootdir + '/dao/jobs_dao')


module.exports = {

    getJobs: (req, res, next) => {
        if( req.query.location){
            req.query.location = req.query.location.split(',')
        }
        console.log(req.query)

       Jobs.get(req.query, (err, response) => {
            if(err){
                return res.status(500).json({error: err})
            }

            res.status(200).json(response)
       })
    },

    syncJobs: (req, res, next) => {

        var data = ""

        Jobs.deleteAll({}, function(err, hero) {
            if(err) {
                return res.json({
                    error : err
                })
            }
           http.get("https://jobs.github.com/positions.json", (response) => {

            response.on('data', function(chunk) {
                data += chunk
              })

              response.on('end', () => {
                let json = JSON.parse(data);
        
                Jobs.insertAll(json, (err, result) => {
                    if(err){
                        return res.status(500).json({error: err})
                    }
                   res.status(200).json({message: "data inserted successfully"})
                })
               
              })

             
           })
        })
        
    }
}