var mongoose = require('mongoose');
var jobSchema = require(rootdir + '/model/job');

jobSchema.statics = {
    create : function(data, cb) {
        var hero = new this(data);
        hero.save(cb);
    },

    insertAll : function(data, cb) {
        this.insertMany(data, cb)
    },

    get: function(query, cb) {
        this.find(query, cb);
    },

    getByName: function(query, cb) {
        this.find(query, cb);
    },

    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
    },

    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    },

    deleteAll: function(query, cb) {
        this.deleteMany(query, cb)
    }
}

var jobModel = mongoose.model('JOBS', jobSchema);
module.exports = jobModel;