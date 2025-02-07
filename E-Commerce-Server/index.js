const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000 


const app = express();

// middleware 
app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hztjf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const ProductsCollections = client.db('EcommerceDB').collection('products');
    const productCartCollection = client.db('EcommerceDB').collection('myCarts'); 

    // products related api 
    app.get("/products", async (req, res) => {
       const products = await ProductsCollections.find().toArray();
       res.send(products);
    })

    app.get("/products/:id", async (req, res) => {
        const query = {_id: new ObjectId(req.params.id)};
        const product = await ProductsCollections.findOne(query);
        res.send(product);
    })

    // myCarts Related api 
    app.get("/carts", async (req, res) => {
      const myCarts = await productCartCollection.find().toArray();
      res.send(myCarts);
    })

    app.get("/carts/:email", async (req, res) => {
        const query = {email: (req.params.email)};
        const myCart = await productCartCollection.find(query).toArray();
        res.send(myCart);
    })

    app.post("/carts", async (req, res) => {
      const newCarts = req.body;
      const result = await productCartCollection.insertOne(newCarts);
      res.send(result);
    })

    app.delete("/carts/:id", async (req, res) => {
      const qury = {_id: new ObjectId(req.params.id)};
      const result = await productCartCollection.deleteOne(qury);
      res.send(result);
    })

    // // * 
    //     app.post("/carts", async (req, res) => {
    //         const data = req.body;
    //         let message;

    //         const alreadyInCart = await productCartCollection.findOne({
    //             email: data.email,
    //             prodId: data.prodId,
    //         });

    //         if (alreadyInCart !== null && alreadyInCart.photo) {
    //             //? Already Added. Cannot be added more
    //             message = {
    //                 status: 403,
    //                 message: "Already In Cart",
    //                 data: { exists: true },
    //             };
    //             return res.json(message);
    //         } else {
    //             //? Need to add the product
    //             const cartData = await productCartCollection.insertOne(data);
    //             if (cartData.acknowledged) {
    //                 message = {
    //                     status: 200,
    //                     message: "Added to cart successfully",
    //                     data: { exists: false },
    //                 };
    //                 return res.json(message);
    //             } else {
    //                 message = {
    //                     status: 500,
    //                     message: "internal server error",
    //                     data: { exists: false },
    //                 };
    //                 return res.json(message);
    //             }
    //         }
    //     });

   // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get("/", (req , res) => {
    res.send("Ecommerce Website server is Running!");
})


app.listen(port, () => {
  console.log(`Ecommerce server Running on port ${port}`)
})