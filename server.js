const express = require('express')
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()


const app = express()

let db,
  dbConnectionString = process.env.DB_STRING,
   dbName = 'Template',
   collection 

   MongoClient.connect(dbConnectionString)
     .then(client =>{
        console.log('connected to Database')
        db = client.db(dbName)
        collection = db.collection('template')
     })