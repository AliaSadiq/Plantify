import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SeedingBro from "../../images/Seeding-bro.png";
import Reforestation from "../../images/Reforestation-bro.png";
import { useParams } from "react-router-dom";
// import CampaignMap from "../../components/location-picker";
// import SeedingBro from 'path/to/your/Seeding-bro.png';
const CreateCampaignForm = () => {
  const navigate = useNavigate();
  const [imageFileName, setImageFileName] = useState("");
  const [faceImageFileName, setFaceImageFileName] = useState("");
  const [user, setUser] = useState(null);
  const [step, setStep] = useState(1);
  const [volunteerToggle, setVolunteerToggle] = useState(false);
  const [trees, setTrees] = useState([]);
  const [showFields, setShowFields] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState(""); 
  const { id } = useParams();
  const [fileState, setFileState] = useState(null);
 const [formData, setFormData] = useState({});

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);

  const [formDataStep1, setFormDataStep1] = useState({
    socialGroup: id,
    user: "",
    name: "",
    description: "",
    image: "",
    start_date: "",
    end_date: "",
    
  })
  ;

  useEffect(() => {
    if (user) {
      setFormDataStep1((prevState) => {
        console.log("Updated formDataStep1:", { ...prevState, user: user._id });
        return { ...prevState, user: user._id };
      });
    }
  }, [user]);
  

  const [formDataStep2, setFormDataStep2] = useState({
    target_donation: "",
    total_volunteers_count: 0,
    location: "",
    trees: [],
  });


  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file.name); // Store only the file name
    } else {
      alert("Please select a valid image file.");
    }
  };
  

const handleInputChange = (e, setFormData) => {
  const { name, value } = e.target;
  if (name === "end_date") {
    const start_date = new Date(formDataStep1.start_date);
    const end_date = new Date(value);
    if (end_date <= start_date) {
      alert("End Date cannot be before Start Date");
      return;
    }
  }
  setFormData((prevState) => ({
    ...prevState,
    [name]: value,
  }));
};

  const handleFileChange = (event, setFileState, setFormData, fieldName) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
        setFileState(file.name);
        setFormData(prevState => ({
            ...prevState,
            [fieldName]: file.name
        }));
    } else {
        alert("Please select a valid image file.");
        // Clear the file input field
        event.target.value = ""; // Reset the input value
    }
};
  const handleNumberInputChange = (e, setFormData) => {
    const { name, value } = e.target;
    const numberValue = parseInt(value, 10);
    if (!isNaN(numberValue)) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: numberValue,
      }));
    }
  };

  const handleStep1Submit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleBackButton = (e) => {
    e.preventDefault();
    setStep(1);
  };

  const handleStep2Submit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        ...formDataStep1,
        ...formDataStep2,
        trees, // Include trees with file names only
      };
      console.log("Submitting data:", formData);
      console.log("Form data before submission:", formDataStep1);


      const response = await axios.post(
        "http://localhost:5000/api/campaigns",
        formData
      );
      console.log("Data submitted:", response.data);
      alert("Data Submitted");

      // Clear the form fields
      setFormDataStep1({
        user: user._id,
        name: "",
        description: "",
        image: "",
        start_date: "",
        end_date: "",
      });
      setFormDataStep2({
        target_donation: "",
        total_volunteers_count: 0,
        location: "",
        trees: [],
      });
      setImageFileName("");
      setVolunteerToggle(false);

      // Navigate back to the first step
      setStep(1);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  const handleAddTree = (e) => {
    e.preventDefault();
  
    const newTree = {
      name,       // Tree name
      price,      // Tree price
      image,      // File name of the image
      quantity,   // Quantity
    };
  
    setTrees([...trees, newTree]); // Add to trees array
    resetForm(); // Clear input fields
  };
  
      // reader.readAsDataURL(imageFile);
    // }
  // };

  const resetForm = () => {
    // setShowFields(false);
    setImage(null);
    setName("");
    setPrice("");
    setQuantity("");
  };

  const handleRemoveTree = (index) => {
    const newTrees = trees.filter((_, i) => i !== index);
    setTrees(newTrees);
  };
  const handleRemoveplant = () => {
    setImageFile=(null);
  };

  const handlePriceKeyPress = (e) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };
  const handlequantityKeyPress = (e) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };
  const renderStep1Form = () => {
    return (
      <form onSubmit={handleStep1Submit}>
        <h1 className="font-josefin-sans text-xl text-center text-black font-bold mb-2">
          Create Campaign
        </h1>
        <label
                htmlFor="image"
                className="block font-mini font-josefin-sans mb-1"
              >
                Upload Image
              </label>
             < div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                    <input 
                        id="image" 
                        className="bg-inherit pl-2 w-full outline-none border-none" 
                        type="file" 
                        name="image" 
                        accept="image/*"
                        required
                        onChange={(e) => handleFileChange(e, setImageFileName, setFormDataStep1, 'image')}
                    />
                </div>
             
        <label
          htmlFor="name"
          className="block font-mini font-josefin-sans mb-1"
        >
          Title
        </label>
        <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
          <input
            id="name"
            className="bg-inherit pl-2 w-full outline-none border-none"
            type="text"
            name="name"
            placeholder="Enter your campaigns's title"
            required
            value={formDataStep1.name || ""}
            onChange={(e) => handleInputChange(e, setFormDataStep1)}
          />
        </div>
        <label
          htmlFor="description"
          className="block font-mini font-josefin-sans mb-1"
        >
          Description
        </label>
        <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
          <textarea
            id="description"
            className="bg-inherit pl-2 w-full outline-none border-none"
            name="description"
            placeholder="Enter detail about your campaign"
            maxLength="250"
            required
            value={formDataStep1.description || ""}
            onChange={(e) => handleInputChange(e, setFormDataStep1)}
          />
        </div>
        <label
          htmlFor="start_date"
          className="block font-mini font-josefin-sans mb-1"
        >
          Start Date
        </label>
        <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
          <input
            id="start_date"
            className="bg-inherit pl-2 w-full outline-none border-none"
            type="date"
            name="start_date"
            required
            value={formDataStep1.start_date || ""}
            onChange={(e) => handleInputChange(e, setFormDataStep1)}
          />
        </div>
        <label
          htmlFor="end_date"
          className="block font-mini font-josefin-sans mb-1"
        >
          End Date
        </label>
        <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
          <input
            id="end_date"
            className="bg-inherit pl-2 w-full outline-none border-none"
            type="date"
            name="end_date"
            required
            value={formDataStep1.end_date || ""}
            onChange={(e) => {
              const start_date = new Date(formDataStep1.start_date);
              const end_date = new Date(e.target.value);
              if (end_date <= start_date) {
                alert("End Date cannot be before or the same as Start Date");
              } else {
                handleInputChange(e, setFormDataStep1);
              }
            }}
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="font-josefin-sans bg-dashboard text-white text-sm font-semibold px-4 py-2 rounded hover:rounded-full border-2 border-gray-100"
          >
            Next
          </button>
        </div>
      </form>
    );
  };

  const renderStep2Form = () => {
    return (
      <form onSubmit={handleStep2Submit}>
        <h1 className="font-josefin-sans text-xl text-center text-black font-bold mb-6">
          Create Campaign
        </h1>
        <label
          htmlFor="target_donation"
          className="block font-mini font-josefin-sans mb-1"
        >
          Target Donation
        </label>
        <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
          <input
            id="target_donation"
            className="bg-inherit pl-2 w-full outline-none border-none"
            type="number"
            name="target_donation"
            placeholder="Enter your target donation amount"
            required
            value={formDataStep2.target_donation || ""}
            onChange={(e) => handleNumberInputChange(e, setFormDataStep2)}
          />
        </div>
        <label
          htmlFor="total_volunteers_count"
          className="block font-mini font-josefin-sans mb-1"
        >
          Volunteers
        </label>
        <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
          <input
            id="volunteerToggle"
            type="checkbox"
            className="mr-2"
            checked={volunteerToggle}
            onChange={(e) => setVolunteerToggle(e.target.checked)}
          />
          <label
            htmlFor="volunteerToggle"
            className="font-mini font-josefin-sans"
          >
            Need Volunteers?
          </label>
        </div>

        {volunteerToggle && (
          <div>
            <label
              htmlFor="total_volunteers_count"
              className="block font-mini font-josefin-sans mb-1"
            >
              Volunteers Needed
            </label>
            <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
              <input
                id="total_volunteers_count"
                className="bg-inherit pl-2 w-full outline-none border-none"
                type="number"
                name="total_volunteers_count"
                placeholder="Enter the number of volunteers needed"
                value={formDataStep2.total_volunteers_count || ""}
                onChange={(e) => handleNumberInputChange(e, setFormDataStep2)}
              />
            </div>
          </div>
        )}

        <label
          htmlFor="Trees Details"
          className="block font-mini font-josefin-sans mb-1"
        >
          Trees Details
        </label>

        {/* <button
          onClick={() => setShowFields(true)}
          className="flex items-center justify-center bg-neutral mb-4 w-full py-2 px-3 rounded-2xl"
        >
          +
        </button> */}

        {/* {showFields && ( */}
          <form onSubmit={handleAddTree} className="space-y-4">
            <div>
              <label
                htmlFor="Trees Name"
                className="block font-mini font-josefin-sans mb-1"
              >
                Trees Name
              </label>
              <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                <input
                  type="text"
                  id="name"
                  placeholder="Enter the tree name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-inherit pl-2 w-full outline-none border-none"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="Upload Image"
                className="block font-mini font-josefin-sans mb-1"
              >
                Upload Image
              </label>
              <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                <input
                  type="file"
                  id="image"
                  onChange={(event) => handleFileInputChange(event, setFileState, setFormData, 

                  // onChange={(e) =>
                  //   handleFileInputChange(
                  //     e,
                  //     setImageFileName,
                  //     "image"
                    )}
                  className="bg-inherit pl-2 w-60 outline-none border-none"
                  accept="image/*"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="Price"
                className="block font-mini font-josefin-sans mb-1"
              >
                Price
              </label>
              <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                <input
                  type="number"
                  id="price"
                  placeholder="Enter the tree price"
                  max={99999}
                  min={10}
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  onKeyPress={handlePriceKeyPress}
                  className="bg-inherit pl-2 w-full outline-none border-none"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="Price"
                className="block font-mini font-josefin-sans mb-1"
              >
                Quantity
              </label>
              <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                <input
                  type="number"
                  id="quantity"
                  placeholder="Enter the tree quantity"
                  max={99999}
                  min={10}
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  onKeyPress={handlequantityKeyPress}
                  className="bg-inherit pl-2 w-full outline-none border-none"
                  required
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleAddTree}
                type="submit"
                className="mt-1 px-6 py-1 text-white rounded hover:rounded-full border-2 border-gray-100 bg-dashboard"
              >
                Add
              </button>
            </div>
          </form>
        {/* )} */}

        <div className="mt-4 flex flex-row space-x-4">
          {trees.map((tree, index) => (
            <div key={index} className="relative">
              <img
                src={`/assets/${tree.image}`}
                alt={`Tree ${index + 1}`}
                className="w-14 h-14 items-center justify-center rounded-full object-cover border-2 border-gray-300"
              />
              <div className="mt-2 text-sm text-center">
                <p>{tree.name}</p>
                <p>({tree.price} PKR)</p>
              </div>
              <button
                onClick={() => handleRemoveTree(index)}
                className="absolute top-0 left-0 w-4 h-4 pb-1 bg-green-600 bg-opacity-40 text-black rounded-full flex items-center justify-center text-sm"
              >
                x
              </button>
            </div>
          ))}
         
        </div>

        <div className="mb-4">
          <label
            htmlFor="location"
            className="block font-mini font-josefin-sans mb-1"
          >
            Location
          </label>
       
          <div>
          <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
          <textarea
            id="location"
            className="bg-inherit pl-2 w-full outline-none border-none"
            name="location"
            placeholder="Enter full address for the campaign location"
            maxLength="250"
            required
            value={formDataStep2.location || ""}
            onChange={(e) => handleInputChange(e, setFormDataStep2)}
          />
        </div>
          </div>
        </div>
        <div className="flex justify-between mt-4 -mb-3">
          <button
            type="button"
            onClick={handleBackButton}
            className="font-josefin-sans bg-dashboard text-white text-sm font-semibold px-4 py-2 rounded hover:rounded-full border-2 border-gray-100"
          >
            Back
          </button>
          <button
            onClick={handleStep2Submit}
            type="submit"
            className="font-josefin-sans bg-dashboard text-white text-sm font-semibold px-4 py-2 rounded hover:rounded-full border-2 border-gray-100"
          >
            Submit
          </button>
        </div>
      </form>
    );
  };

  return (
   <div className="flex pt-1 pb-1 ml-[250px] lg items-center gap-[100px] justify-center">
  {step === 1 ? (
    <>
      <div className="border-2 m-4 border-gray-100 bg-white p-8 rounded-lg w-[550px]">
        {renderStep1Form()}
      </div>
      <img
        src={SeedingBro}
        alt="leaves illustration"
        className="hidden md:block w-[400px] mt-8"
      />
    </>
  ) : (
    <>
      <img
        src={Reforestation}
        alt="leaves illustration"
        className="hidden md:block w-[400px] ml-12 mt-8"
      />
      <div className="border-2 border-gray-100 m-4 bg-white p-8 rounded-lg w-[550px]">
        {renderStep2Form()}
      </div>
    </>
  )}
</div>

  );
};

export default CreateCampaignForm;
