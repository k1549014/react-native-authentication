// config/datastores.js

module.exports.datastores = {
    default: {
        adapter: require('sails-mongo'),
        url: 'mongodb://localhost:27017/sailsdb123',
    }
}