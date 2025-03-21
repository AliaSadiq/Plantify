import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ToggleSwitch from "../../../components/shop/dashboard/bulk-toggle";
import {
  CheckCircleIcon,
  CloudArrowUpIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Modal from "react-modal";

Modal.setAppElement("#root");

const EditProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    type: "",
    category: "",
    price: "",
    quantity: "",
    description: "",
    specifications: "",
    images: [],
    size: "",
   
  });
  const [newImages, setNewImages] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [errors, setErrors] = useState({});
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  useEffect(() => {
    if (productId) {
      axios
        .get(`BACKEND_URL/api/products/${productId}`)
        .then((response) => {
          const fetchedProduct = response.data;
          setProduct({
            name: fetchedProduct.name || "",
            description: fetchedProduct.description || "",
            price: fetchedProduct.price || "",
            quantity: fetchedProduct.quantity || "",
            images: fetchedProduct.images || [],
            type: fetchedProduct.type || "",
            specifications: fetchedProduct.specifications || "",
            size: fetchedProduct.size || "",
            category: fetchedProduct.category || "",
          });
        })
        .catch((error) => {
          console.error("Error fetching product data:", error);
        });
    }
  }, [productId]);

  const handleProductTypeChange = (event) => {
    const selectedType = event.target.value;
    setProduct((prev) => ({ ...prev, type: selectedType }));
    setCategoryOptions(
      selectedType === "Plants"
        ? ["Home Plant", "Potter Plant", "Small Plant", "Big Plant", "Wall Plant"]
        : selectedType === "Soils"
        ? ["Loamy", "Sandy", "Peaty", "Silty", "Chalky", "Clay"]
        : selectedType === "Tools"
        ? ["Pruners", "Hand Fork", "Lawnmowers", "Hedge Cutters", "Leaf Blowers", "Pressure Washers"]
        : []
    );
  };

  const validateFields = () => {
    const newErrors = {};
    if (!product.name) newErrors.name = "Product Name is required";
    if (!product.type) newErrors.type = "Product Type is required";
    if (!product.category) newErrors.category = "Product Category is required";
    if (!product.price || isNaN(product.price)) newErrors.price = "Valid Price is required";
    if (!product.quantity || isNaN(product.quantity)) newErrors.quantity = "Valid Quantity is required";
    if (!product.description) newErrors.description = "Description is required";
    if (!product.specifications) newErrors.specifications = "Specifications are required";
    if (product.images.length < 2) newErrors.images = "Please upload at least 2 images";
    if (!product.size) newErrors.size = "Size is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRemoveImage = (index) => {
    setProduct((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const newImages = Array.from(e.target.files);
    if (
      newImages.every((file) => file.type.startsWith("image/")) &&
      product.images.length + newImages.length <= 5
    ) {
      setProduct((prev) => ({ ...prev, images: [...prev.images, ...newImages] }));
    } else {
      alert("Please upload only images (JPG, PNG) and a maximum of 5 images.");
    }
  };
  

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateFields()) return;

    // const productData = {
    //   ...product,
    //   images: product.images.map((file) => file.name),
    //   // images: product.images.map((image) =>
    //   //   typeof image === "string" ? image : URL.createObjectURL(image)
    //   // ),
    // };
    const productData = {
      name: product.name,
      type: product.type,
      category: product.category,
      price: product.price,
      quantity: product.quantity,
      description: product.description,
      specifications: product.specifications,
      size: product.size,
   
      images: product.images.map((image) =>
        typeof image === "string" ? image : image.name // Send image name if it's a file
      ),
    };
  
    try {
      let response;
      if (productId) {
        response = await axios.put(`BACKEND_URL/api/products/${productId}`, productData);
        console.log("Product updated:", response.data);
      } else {
        response = await axios.post("BACKEND_URL/api/products", productData);
        console.log("Product created:", response.data);
      }
      setIsSuccessModalOpen(true);
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Failed to save product");
    }
  };

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
    navigate("/seller/product-list");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="min-h-screen lg:ml-[245px] p-4">
        <div className="bg-neutral p-4 rounded-lg">
          <h2 className="text-lg font-bold mb-4">Edit Product</h2>

          <div className="grid mt-10 grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3 border-2 p-4 rounded-pl">
              {/* Product Name Field */}
              <div>
                <label className="block font-josefin-sans text-gray-700 font-semibold">
                  Product Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={product.name}
                  placeholder="Enter product name"
                  maxLength="100"
                  className={`w-full border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } border-gray-300 rounded-md p-2 mt-1 focus:ring focus:ring-navygreen-300`}
                  onChange={handleInputChange}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              {/* Product Type Field */}
              <div className="flex space-x-4">
                <div className="w-1/3">
                  <label className="block font-josefin-sans text-gray-700 font-semibold">
                    Product Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    className={`w-full border ${
                      errors.type ? "border-red-500" : "border-gray-300"
                    } border-gray-300 rounded-md p-2 mt-1 focus:ring focus:ring-navygreen-300`}
                    name="type"
                    value={product.type}
                    onChange={handleProductTypeChange}
                  >
                    <option value="">Select Type</option>
                    <option value="Plants">Plants</option>
                    <option value="Soils">Soils</option>
                    <option value="Tools">Tools</option>
                  </select>
                  {errors.type && (
                    <p className="text-red-500 text-sm">{errors.type}</p>
                  )}
                </div>

                {/* Product Category Field */}
                <div className="w-1/3">
                  <label className="block text-gray-700 font-semibold">
                    Product Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    className={`w-full border ${
                      errors.category ? "border-red-500" : "border-gray-300"
                    } border-gray-300 rounded-md p-2 mt-1 focus:ring focus:ring-navygreen-300`}
                    name="category"
                    value={product.category}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Category</option>
                    {categoryOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="text-red-500 text-sm">{errors.category}</p>
                  )}
                </div>

                {/* Size Field */}
                <div className="w-1/3">
                  <label className="block text-gray-700 font-semibold ">
                    Size<span className="text-red-500">*</span>
                  </label>
                  <select
                    name="size"
                    value={product.size}
                    className={`w-full border ${
                      errors.size ? "border-red-500" : "border-gray-300"
                    } border-gray-300 rounded-md p-2 mt-1 focus:ring focus:ring-navygreen-300`}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>
                      Select Size
                    </option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                  {errors.size && (
                    <p className="text-red-500 text-sm">{errors.size}</p>
                  )}
                </div>
              </div>
              {/* Price Field */}
              <div>
                <label className="block text-gray-700 font-semibold">
                  Price <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="price"
                  value={product.price}
                  placeholder="Enter price"
                  className={`w-full border ${
                    errors.price ? "border-red-500" : "border-gray-300"
                  } border-gray-300 rounded-md p-2 mt-1 focus:ring focus:ring-navygreen-300`}
                  onChange={(e) => {
                    const value = e.target.value;
                    // Only allow positive values or empty input
                    if (value === "" || Number(value) >= 0) {handleInputChange (e)}
                  }}
                  min="0" // Prevents negative values
                />
                {errors.price && (
                  <p className="text-red-500 text-sm">{errors.price}</p>
                )}{" "}
              </div>

              {/* Quantity Field */}
              <div>
                <label className="block text-gray-700 font-semibold">
                  Quantity <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="quantity"
                  value={product.quantity}
                  placeholder="Enter quantity"
                  className={`w-full border ${
                    errors.quantity ? "border-red-500" : "border-gray-300"
                  } border-gray-300 rounded-md p-2 mt-1 focus:ring focus:ring-navygreen-300`}
                  onChange={(e) => {
                    const value = e.target.value;
                    // Only allow positive values or empty input
                    if (value === "" || Number(value) >= 0) {
                      handleInputChange(e)
                    }
                  }}
                  min="0" // Prevents negative values
                />
                {errors.quantity && (
                  <p className="text-red-500 text-sm">{errors.quantity}</p>
                )}
              </div>

              {/* Description Field */}
              <div>
                <label className="block font-semibold text-gray-700">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  value={product.description}
                  placeholder="Enter description"
                  className="w-full border ${errors.description ? 'border-red-500' : 'border-gray-300'} h-44 border-gray-300 rounded-md p-2 mt-1 focus:ring focus:ring-navygreen-300"
                  onChange={handleInputChange}
                />
                {errors.description && (
                  <p className="text-red-500 text-sm">{errors.description}</p>
                )}
              </div>
            </div>

          
 {/* Upload Images */}
 <div className="space-y-4 border-2 p-4 font-josefin-sans rounded-pl">
              <label className="block text-gray-700 font-semibold mb-1">
                Upload Images
              </label>
              <div className="border h-72 border-dashed border-gray-300 rounded-md p-3 flex flex-col items-center justify-center text-center">
                <p className="font-josefin-sans -mt-5 text-gray-500">
                  You need to add at least 2 images.
                </p>

                <div className="image-upload">
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer flex flex-col items-center text-gray-500"
                  >
                    <CloudArrowUpIcon className="h-10 w-10 text-blue-500" />
                    <p className="text-sm font-josefin-sans text-gray-500 mb-4">
                      Upload your image here!
                    </p>
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    accept="image/png, image/jpeg"
                    multiple
                    className={`${
                      errors.images ? "border-red-500" : "border-gray-300"
                    }`}
                    onChange={handleImageUpload}
                    style={{ display: "none" }}
                  />
                  <div className="flex flex-wrap mt-4 space-x-4">
                    {product.images.map((image, index) => (
                      <div key={index} className="relative w-20 h-20">
                        <img
                          src={`/assets/${image}`}
                         
                          alt={`Product ${index + 1}`}
                          className="w-full h-full object-cover rounded"
                        />
                        <button
                          onClick={() => handleRemoveImage(index)}
                          className="absolute top-0 right-0 bg-red-600 text-white rounded-full p-1 focus:outline-none"
                        >
                          <XMarkIcon className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                  {errors.images && (
                    <p className="text-red-500 text-sm">{errors.images}</p>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-gray-700 font-semibold">
                  Specification <span className="text-red-500">*</span>
                </label>
                <textarea
                  placeholder="Specifications (Enter each specification on a new line)"
                  className={`w-full border ${
                    errors.specifications ? "border-red-500" : "border-gray-300"
                  } h-40 rounded-md p-2 mt-1 focus:ring focus:ring-navygreen-300`}
                  value={product.specifications}
                  onChange={handleInputChange}
                />
                {errors.specifications && (
                  <p className="text-red-500 text-sm">
                    {errors.specifications}
                  </p>
                )}
              </div>
             

              <div className="flex justify-end mt-3 md:mt-10">
                <button
                  type="submit"
                  // onClick={handleSaveChanges}
                  className="font-josefin-sans text-xs sm:text-sm font-semibold text-white bg-black p-3 sm:p-4 rounded hover:rounded-full border-2 border-black mr-2 sm:mr-4"
                >
                  Update Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <Modal
        isOpen={isSuccessModalOpen}
        onRequestClose={closeSuccessModal}
        className="modal p-8 bg-white rounded-lg shadow-xl"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <div className="place-items-center mb-4 text-center">
          <CheckCircleIcon className="text-green-500" width={40} height={40} />
          <h2 className="text-sm font-semibold mt-2">
            Product Updated Successfully!
          </h2>
        </div>
        <button
          className="font-josefin-sans text-xs sm:text-sm font-semibold text-white bg-navygreen-300 p-3 sm:p-4 rounded hover:rounded-full border-2 border-navygreen-300 mr-2 sm:mr-4"
          onClick={closeSuccessModal}
        >
          OK
        </button>
      </Modal>
    </div>
  );
};

export default EditProduct;
