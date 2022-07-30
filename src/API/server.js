const express = require("express");
const productController = require("./Controller/products.controller");
const app = express();

app.use(express.json());
app.use("/products", productController);

app.listen(8080, () => {
  console.log(`Server listening on port 8080`);
});
