const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
// Your mongodb uri
// Step 1 : 
const uri = "mongodb+srv://ahmedfahim2305:HnfOcarIz3ggzUDD@cluster0.3glchz1.mongodb.net/";
 // Setup your mongodb uri
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const app = express();
app.use(cors());
const port = 8080 || 8088 || 3000 || 3030;
// create application/json parser
const jsonParser = bodyParser.json();

async function run() {
  try {
    // Create references to the database and collection in order to run
    // operations on them.
    const client = new MongoClient(uri);

    // Connect the client to the server	(optional starting in v4.7)
    await client
      .connect()
      .catch((err) => console.error("Connection error : ", err));

    console.log("Database connection established 🧑‍💻...");
    // Step 2 : 
    const yourDBName = 'backend' // please give your database name here
    const db = await client.db(yourDBName)
    // Step 3 : 
    const userCollection = await db.collection("users") // Give your table / collection name
    const productCollection = await db.collection("products") // Give your table / collection name
    const orderCollection = await db.collection("orders") // Give your table / collection name
    
    // ... so on if there is more collection

    // user CRUD operations 
    app.get("/", (req, res) => {
      res.send("Your backend  start working 🧑‍💻...");
    });
    //  users crud operations [admin - client ]
    app.get("/users", async (req, res) => {
      // const users = await userCollection;
      const users = await userCollection.find().toArray();
      res.json({ users: users, status: 'ok', code: 200 });
    });
    // users registration
    app.post("/users", jsonParser, async (req, res) => {
      const userCollection = await db.collection("newuser")
      await userCollection.insertOne(req.body);
      res.json({ users: req.body, status: 'ok', code: 200 });
    });

    app.get("/users/:id", async (req, res) => {
      const id = req.params.id
      const userCollection = await db.collection("newuser")
      const users = await userCollection.findOne({ "_id": new ObjectId(id) });
      res.json({ users: users, status: 'ok', code: 200 });
    });
    app.post("/users/validation",jsonParser, async (req, res) => {
      const data = req.body
      console.log("💕data",data);
      const userCollection = await db.collection("users")
      const users = await userCollection.findOne({ "email": data.email , "password":data.password});
    console.log("users",users);
      if(users.email){
        res.json({ users: users, status: 'ok', code: 200 });
      }else{
        res.json({ users: [], status: 'failure', code:404 });
      }
    });

    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id
      const userCollection = await db.collection("newuser")
      const users = await userCollection.deleteOne({ "_id": new ObjectId(id) });
      res.json({ users: users, status: 'ok', code: 200 });
    });

    // Product CRUD operations
    app.get("/products", async (req, res) => {
      const products = await productCollection.find().toArray();
      res.json({ products: products, status: 'ok', code: 200 });
    });
    // users registration
    app.post("/products", jsonParser, async (req, res) => {
      await productCollection.insertOne(req.body);
      res.json({ products: req.body, status: 'ok', code: 200 });
    });

    app.get("/products/:id", async (req, res) => {
      const id = req.params.id
      const products = await productCollection.findOne({ "_id": new ObjectId(id) });
      res.json({ products: products, status: 'ok', code: 200 });
    });

    app.delete("/products/:id", async (req, res) => {
      const id = req.params.id
      // const productCollection = await db.collection("products")
      const products = await productCollection.deleteOne({ "_id": new ObjectId(id) });
      res.json({ products: products, status: 'ok', code: 200 });
    });
    // order CRUD operations
    app.get("/orders", async (req, res) => {
      const orders = await orderCollection.find().toArray();
      res.json({ orders: orders, status: 'ok', code: 200 });
    });
    // users registration
    app.post("/orders", jsonParser, async (req, res) => {
      const orderCollection = await db.collection("orders")
      await orderCollection.insertOne(req.body);
      res.json({ orders: req.body, status: 'ok', code: 200 });
    });

    app.get("/orders/:id", async (req, res) => {
      const id = req.params.id
      const orders = await orderCollection.findOne({ "_id": new ObjectId(id) });
      res.json({ orders: orders, status: 'ok', code: 200 });
    });

    app.delete("/orders/:id", async (req, res) => {
      const id = req.params.id
      const orders = await orderCollection.deleteOne({ "_id": new ObjectId(id) });
      res.json({ orders: orders, status: 'ok', code: 200 });
    });

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log('Ports are running on :', port);
});