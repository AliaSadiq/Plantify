import React, { useState, useEffect } from "react";
import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";
import {
  ExclamationCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

Modal.setAppElement("#root"); // Set the root element for accessibility

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const navigate = useNavigate();

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("BACKEND_URL/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    (product.name?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
    (product.price?.toString() || "").includes(searchTerm) ||
    (product.quantity?.toString() || "").includes(searchTerm) ||
    (product.sales?.toString() || "").includes(searchTerm) ||
    (product.stock?.toString() || "").includes(searchTerm)
  );
  
  
  // Open delete confirmation modal
  const confirmDelete = (id) => {
    setProductToDelete(id);
    setIsDeleteModalOpen(true);
  };

  // Handle delete product
  const handleDelete = async () => {
    try {
      await axios.delete(
        `BACKEND_URL/api/products/${productToDelete}`
      );
      setProducts(
        products.filter((product) => product._id !== productToDelete)
      );
      setIsDeleteModalOpen(false);
      setIsSuccessModalOpen(true);
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Error deleting product. Please try again.");
    }
  };

  // Close success modal
  const closeSuccessModal = () => setIsSuccessModalOpen(false);

  return (
    <div className="min-h-screen lg:ml-[245px] p-4">
      <div className="bg-neutral p-4 rounded-pl">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold text-gray-800">Product List</h1>
          <input
            type="text"
            placeholder="Search here..."
            className="border border-gray-300 rounded-md p-2 w-1/3"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="min-w-full bg-white">
            <thead className="border-b bg-navygreen-300">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                  S.No
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                  Quantity
                </th>
                {/* <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                  Sale
                </th> */}
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                  Stock
                </th>
                <th className="pl-8 pr-2 py-3 text-left text-sm font-semibold text-white">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product, index) => (
                <tr
                  key={product._id}
                  className="border-b hover:bg-navygreen-100"
                 
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-3  flex items-center space-x-3">
                    <img
                 
                    src={`/assets/${product.images[0]}`} // Use a fallback if image is not found
                    alt="Product"
                    className="w-12 h-12 rounded-md"
                    // onError={(e) => e.target.src = '/assets'} // Fallback if image fails to load
                    />
                    <span>{product.name}</span>
                  </td>
                  <td className="px-8 py-4">Rs.{product.price}</td>
                  <td className="px-8 py-4">{product.quantity}</td>
                  {/* <td className="px-8 py-4">{product.sales}</td> */}
                  <td className="pl-6 py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs  ${
                        product.quantity === 0
                          ? "bg-red-100 text-red-500"
                          : "bg-green-100 text-green-500"
                      }`}
                    >
                      {product.quantity === 0 ? "Out of stock" : "In stock"}
                    </span>
                  </td>
                  <td className="pr-8 py-4  flex space-x-4 ">
                    <div className="w-5 h-5 text-black cursor-pointer"></div>
                   {/* <EyeIcon className="w-5 h-5 text-black cursor-pointer"
                    onClick={() => navigate(`/view-product/${product._id}`)}
                    /> */}
                    <PencilSquareIcon
                      className="w-5 h-5 text-green-500 cursor-pointer"
                      onClick={() => navigate(`/seller/edit-product/${product._id}`)}
                    />
                    <TrashIcon
                      className="w-5 h-5 text-red-500 cursor-pointer"
                      onClick={() => confirmDelete(product._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modals */}
      <Modal
        isOpen={isDeleteModalOpen}
        onRequestClose={() => setIsDeleteModalOpen(false)}
        className="modal p-8 bg-white rounded-lg shadow-xl"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <div className="place-items-center mb-4">
          <ExclamationCircleIcon
            className="text-red-500"
            width={40}
            height={40}
          />
          <h2 className="text-sm font-semibold">
            Are you sure you want to delete this product?
          </h2>
        </div>
        <div className="flex space-x-4 ml-16 items-center mt-4">
          <button
            className="font-josefin-sans text-xs sm:text-sm font-semibold text-white bg-navygreen-300 p-2 sm:p-4 rounded hover:rounded-full border-2 border-navygreen-300 mr-2 sm:mr-4"
            onClick={handleDelete}
          >
            Yes
          </button>
          <button
            className="font-josefin-sans text-xs sm:text-sm font-semibold text-black bg-white p-2 sm:p-4 rounded hover:rounded-full border-2 border-navygreen-300 mr-2 sm:mr-4"
            onClick={() => setIsDeleteModalOpen(false)}
          >
            No
          </button>
        </div>
      </Modal>

      <Modal
        isOpen={isSuccessModalOpen}
        onRequestClose={closeSuccessModal}
        className="modal p-8 bg-white rounded-lg shadow-xl"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <div className="place-items-center mb-4">
          <CheckCircleIcon className="text-green-500" width={40} height={40} />
          <h2 className="text-sm font-semibold">
            Product deleted successfully!
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

export default ProductList;
