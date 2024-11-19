// // controllers/productController.js
// const Product = require("../models/product.model");

// const createProduct = async (req, res) => {
//   try {
//     const {
//       name,
//       type,
//       category,
//       price,
//       quantity,
//       description,
//       specifications,
//       images,
//       isActive,
//       size,
//     } = req.body;

//     const newProduct = new Product({
//       name,
//       type,
//       category,
//       price,
//       quantity,
//       description,
//       specifications,
//       images: images || [],
//       isActive,
//       size,
//     });

//     const savedProduct = await newProduct.save();

//     res.status(200).json({
//       message: "Product created successfully",
//       product: savedProduct,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       message: "Error creating product. Please try again.",
//       error: error.message,
//     });
//   }
// };

// const getProducts = async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to retrieve products", error });
//   }
// };

// // Get a single product by ID
// const getProductById = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) return res.status(404).json({ message: "Product not found" });
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to retrieve product", error });
//   }
// };



// const updateProduct = async (req, res) => {
//   try {
//     console.log('Request body:', req.body); // Log to check incoming data

//     const updatedProduct = await Product.findByIdAndUpdate(
//       req.params.id,           // Product ID from the URL
//       { $set: req.body },       // Data to update
//       { new: true, runValidators: true }  // Options for Mongoose
//     );

//     if (!updatedProduct) {
//       return res.status(404).json({ message: 'Product not found' });
//     }

//     res.json(updatedProduct);
//   } catch (error) {
//     console.error('Error updating product:', error.message);
//     res.status(500).json({ message: error.message });
//   }
// };


// // Delete a product by ID
// const deleteProductById = async (req, res) => {
//     try {
//       const deletedProduct = await Product.findByIdAndDelete(req.params.id);
//       if (!deletedProduct) return res.status(404).json({ message: "Product not found" });
//       res.status(200).json({ message: "Product deleted successfully" });
//     } catch (error) {
//       res.status(500).json({ message: "Failed to delete product", error });
//     }
//   };
  
//   // Delete all products
//   const deleteAllProducts = async (req, res) => {
//     try {
//       const result = await Product.deleteMany({});
//       if (result.deletedCount === 0) {
//         return res.status(404).json({ message: "No products found to delete" });
//       }
//       res.status(200).json({ message: `${result.deletedCount} products deleted successfully` });
//     } catch (error) {
//       res.status(500).json({ message: "Failed to delete products", error });
//     }
//   };
  
//   module.exports =  {
//     createProduct,
//     deleteAllProducts,
//     deleteProductById,
//     updateProduct,
//     getProducts,
//     getProductById,

// }

// controllers/productController.js
const Product = require("../models/product.model");

const createProduct = async (req, res) => {
  try {
    const {
      name,
      type,
      category,
      price,
      quantity,
      description,
      specifications,
      images,
    
      size,
    } = req.body;

    // Validate required fields
    if (!name || !price || !quantity) {
      return res.status(400).json({
        message: "Missing required fields: name, price, or quantity",
      });
    }

    const newProduct = new Product({
      name,
      type,
      category,
      price,
      quantity,
      description,
      specifications,
      images: images || [],
   
      size,
    });

    const savedProduct = await newProduct.save();

    res.status(200).json({
      message: "Product created successfully",
      product: savedProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error creating product. Please try again.",
      error: error.message,
    });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve products",
      error: error.message,
    });
  }
};

// Get a single product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve product",
      error: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,           // Product ID from the URL
      { $set: req.body },       // Data to update
      { new: true, runValidators: true }  // Options for Mongoose
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    console.error('Error updating product:', error.message);
    res.status(500).json({
      message: "Error updating product",
      error: error.message,
    });
  }
};

// Delete a product by ID
const deleteProductById = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete product",
      error: error.message,
    });
  }
};

// Delete all products
const deleteAllProducts = async (req, res) => {
  try {
    const result = await Product.deleteMany({});
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "No products found to delete" });
    }
    res.status(200).json({ message: `${result.deletedCount} products deleted successfully` });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete products",
      error: error.message,
    });
  }
};

module.exports = {
  createProduct,
  deleteAllProducts,
  deleteProductById,
  updateProduct,
  getProducts,
  getProductById,
};
