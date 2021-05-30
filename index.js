// SETUP EXPRESS
const express = require('express');
const cors = require('cors');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const dotenv = require('dotenv');
dotenv.config();

let app = express();
app.use(express.json());
app.use(cors());

// connect to the Mongo DB
async function connect() {
    const mongo_url = process.env.MONGO_URL;
    let client = await MongoClient.connect(mongo_url, {
        "useUnifiedTopology": true
    })
    let db = client.db("animal_shelter");
    console.log("database connected");
    return db;
}

async function main() {
    let db = await connect();

    app.get('/animals', async (req,res)=>{
        let animals = await db.collection('animal_shelter').find().toArray();
        res.json(animals)
    })

}

main();



// ROUTES




// START SERVER
app.listen(3000, ()=>{
    console.log("server has started")
})