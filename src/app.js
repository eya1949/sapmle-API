const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/router.js");
const app = express();
const dotenv = require ("dotenv");
dotenv.config();
const PORT = process.env.PORT;

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api/products", productRoute);




app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});


mongoose
  .connect("mongodb+srv://admin:123@cluster0.49dxqmb.mongodb.net/Node_API?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
