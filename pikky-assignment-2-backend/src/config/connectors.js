const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://bedmuthaapoorv:apoorv@cluster0.kelbc2p.mongodb.net/?retryWrites=true&w=majority";

const mongoClient = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const redis=require('redis')
const redisClient=redis.createClient({
  url: 'redis://redis:6379'
});

exports.mongoClient=mongoClient;
exports.redisClient=redisClient;