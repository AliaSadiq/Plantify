import React, { useState } from "react";
import ToggleSwitch from "../../../components/shop/dashboard/bulk-toggle";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  CheckCircleIcon,
  CloudArrowUpIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Modal from "react-modal";

Modal.setAppElement("#root");

const CreateProduct = () => {
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [specifications, setSpecifications] = useState("");
  const [images, setImages] = useState([]);
  
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [size, setSize] = useState("");
  const [errors, setErrors] = useState({});
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [error, setError] = useState("");
  const handleProductTypeChange = (event) => {
    const selectedType = event.target.value;
    setProductType(selectedType);

    const categories = {
      Plants: [
        "Indoor",
        "Outdoor",
        "Ceiling", 
        "Wall",
        "Vase",
        "Pot",
      ],
      Soils: ["Loamy", "Sandy", "Peaty", "Silty", "Chalky", "Clay"],
      Tools: [
        "Pruners",
        "Hand Fork",
        "Lawnmowers",
        "Hedge Cutters",
        "Leaf Blowers",
        "Pressure Washers",
      ],
    };

    setCategoryOptions(categories[selectedType] || []);
  };

  // Handle image selection
  const handleImageUpload = (e) => {
    const newImages = Array.from(e.target.files);

    // Validate image types (JPG, PNG, etc.)
    const isValidImage = newImages.every(file => file.type.startsWith('image/'));
    if (isValidImage && images.length + newImages.length <= 5) {
      setImages(prevImages => [...prevImages, ...newImages]);
    } else {
      alert("Please upload only images (JPG, PNG) and a maximum of 5 images.");
    }
  };
  
    // setImages((prevImages) => [...prevImages, ...validImages]);
  

  // Remove an image from the list
  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const validateFields = () => {
    const newErrors = {};
    if (!productName) newErrors.productName = "Product Name is required";
    if (!productType) newErrors.productType = "Product Type is required";
    if (!productCategory)
      newErrors.productCategory = "Product Category is required";
    if (!price  ) newErrors.price = "Enter valid Price value.";
    if (!quantity ) newErrors.quantity = "Enter valid Quantity value";
    if (!description) newErrors.description = "Description is required";
    if (!specifications)
      newErrors.specifications = "Specifications are required";
    if (images.length < 2) newErrors.images = "Please upload at least 2 images";
    if (!size) newErrors.size = "Size is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clearForm = () => {
    setProductName("");
    setProductType("");
    setProductCategory("");
    setPrice("");
    setQuantity("");
    setDescription("");
    setSpecifications("");
    setImages([]);
    setSize("");
    setErrors({});
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!validateFields()) return;
  
    const productData = {
      name: productName,
      type: productType,
      category: productCategory,
      price: price,
      quantity: quantity,
      description: description,
      specifications: specifications,

      size: size,
      images: images.map((file) => file.name),
    };
  
    try {
      const response = await axios.post("https://plantify-backend.vercel.app/api/products", productData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.status === 200) {
        setIsSuccessModalOpen(true);
        clearForm();
      } else {
        alert(`Failed to create product: ${response.data.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error creating product. Please try again.");
    }
  };
  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
    navigate("/seller/product-list");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="min-h-screen lg:ml-[245px] p-4">
        <div className="bg-neutral p-4 rounded-pl">
          <h2 className="text-lg font-bold mb-4">Add Product</h2>

          <div className="grid mt-10 grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3 border-2 p-4 rounded-pl">
              <div>
                <label className="block font-josefin-sans text-gray-700 font-semibold">
                  Product Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter product name"
                  maxLength="100"
                  className="w-full border ${errors.productName ? 'border-red-500' : 'border-gray-300'} border-gray-300 rounded-md p-2 mt-1 focus:ring focus:ring-navygreen-300"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
                {errors.productName && (
                  <p className="text-red-500 text-sm">{errors.productName}</p>
                )}
              </div>
              <div className="flex space-x-4">
                <div className="w-1/3">
                  <label className="block font-josefin-sans text-gray-700 font-semibold">
                    Product Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full border ${errors.productType ? 'border-red-500' : 'border-gray-300'} border-gray-300 rounded-md p-2 mt-1 focus:ring focus:ring-navygreen-300"
                    value={productType}
                    onChange={handleProductTypeChange}
                  >
                    <option value="">Select Type</option>
                    <option value="Plants">Plants</option>
                    <option value="Soils">Soils</option>
                    <option value="Tools">Tools</option>
                  </select>
                  {errors.productType && (
                    <p className="text-red-500 text-sm">{errors.productType}</p>
                  )}
                </div>

                <div className="w-1/3">
                  <label className="block text-gray-700 font-semibold">
                    Product Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full border ${errors.productCategory ? 'border-red-500' : 'border-gray-300'} border-gray-300 rounded-md p-2 mt-1 focus:ring focus:ring-navygreen-300"
                    value={productCategory}
                    onChange={(e) => setProductCategory(e.target.value)}
                  >
                    <option value="">Select Category</option>
                    {categoryOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.productCategory && (
                    <p className="text-red-500 text-sm">
                      {errors.productCategory}
                    </p>
                  )}
                </div>
                <div className="w-1/3">
                  <label className="block text-gray-700 font-semibold ">
                    Size<span className="text-red-500">*</span>
                  </label>
                  <select
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    required
                    className="w-full border ${errors.size ? 'border-red-500' : 'border-gray-300'} border-gray-300 rounded-md p-2 mt-1 focus:ring focus:ring-navygreen-300"
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

              <div>
                <label className="block text-gray-700 font-semibold">
                  Price <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  placeholder="Enter price"
                  className="w-full border ${errors.price ? 'border-red-500' : 'border-gray-300'} border-gray-300 rounded-md p-2 mt-1 focus:ring focus:ring-navygreen-300"
                  value={price}
                  onChange={(e) => {
                    const value = e.target.value;
                    // Only allow positive values or empty input
                    if (value === "" || Number(value) >= 0) {
                      setPrice(value);
                    }
                  }}
                  min="1" // Prevents negative values
                />
                {errors.price && (
                  <p className="text-red-500 text-sm">{errors.price}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-semibold">
                  Quantity <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  placeholder="Enter quantity"
                  className="w-full border  ${errors.quantity ? 'border-red-500' : 'border-gray-300'} border-gray-300 rounded-md p-2 mt-1 focus:ring focus:ring-navygreen-300"
                  value={quantity}
                  onChange={(e) => {
                    const value = e.target.value;
                    // Only allow positive values or empty input
                    if (value === "" || Number(value) >= 0) {
                      setQuantity(value);
                    }
                  }}
                  min="1" // Prevents negative values
                />
                {errors.quantity && (
                  <p className="text-red-500 text-sm">{errors.quantity}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-semibold">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  placeholder="Description"
                  className="w-full border ${errors.description ? 'border-red-500' : 'border-gray-300'} h-44 border-gray-300 rounded-md p-2 mt-1 focus:ring focus:ring-navygreen-300"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                {errors.description && (
                  <p className="text-red-500 text-sm">{errors.description}</p>
                )}
              </div>
            </div>
            <div className="space-y-4 border-2 p-4 font-josefin-sans rounded-pl">
              <label className="block text-gray-700 font-semibold mb-1">
                Upload Images
              </label>
              <div className="border h-72 border-dashed border-gray-300 rounded-md p-3 flex flex-col items-center justify-center text-center">
                <p className="font-josefin-sans -mt-5 text-gray-500">
                  You need to add at least 2 images.
                </p>

                <div className="image-upload">
                  {/* Clickable Cloud Icon */}
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
                    accept="image/jpeg, image/png"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden" // Hide the default file input
                  />

                  {/* Display uploaded images */}
                  <div className="flex flex-wrap mt-4 space-x-4">
                    {images.map((image, index) => (
                      <div key={index} className="relative w-20 h-20">
                        <img
                          src={URL.createObjectURL(image)}
                          alt={`Uploaded Preview ${index + 1}`}
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
                      {errors.images && (
                    <p className="text-red-500 mt-20 text-sm">{errors.images}</p>
                  )}{" "}
                  </div>

                  {/* Error message for invalid files */}
                  {error && <p className="text-red-500 text-sm">{error}</p>}
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
                  value={specifications}
                  onChange={(e) => setSpecifications(e.target.value)}
                  required
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
                  onClick={handleSubmit}
                  className="font-josefin-sans text-xs sm:text-sm font-semibold text-white bg-black p-3 sm:p-4 rounded hover:rounded-full border-2 border-black mr-2 sm:mr-4"
                >
                  Create Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      {/* Success Modal */}
      <Modal
        isOpen={isSuccessModalOpen}
        onRequestClose={closeSuccessModal}
        className="modal p-8 bg-white rounded-lg shadow-xl"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <div className="place-items-center mb-4 text-center">
          <CheckCircleIcon className="text-green-500" width={40} height={40} />
          <h2 className="text-sm font-semibold mt-2">
            Product Created Successfully!
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

export default CreateProduct;
