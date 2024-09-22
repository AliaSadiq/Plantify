// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const CreateCampaignForm = () => {
//   const navigate = useNavigate();
//   const [imageFileName, setImageFileName] = useState("");
//   const [faceImageFileName, setFaceImageFileName] = useState("");
//   const [user, setUser] = useState(null);
//   const [step, setStep] = useState(1);
//   const [volunteerToggle, setVolunteerToggle] = useState(false);
//   const [trees, setTrees] = useState([]);
//   const [showFields, setShowFields] = useState(false);
//   const [imageFile, setImageFile] = useState(null);
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       const parsedUser = JSON.parse(storedUser);
//       setUser(parsedUser);
//     }
//   }, []);

//   const [formDataStep1, setFormDataStep1] = useState({
//     user: "",
//     name: "",
//     description: "",
//     image: "",
//     start_date: "",
//     end_date: "",
//   });

//   useEffect(() => {
//     if (user) {
//       setFormDataStep1((prevState) => ({
//         ...prevState,
//         user: user._id,
//       }));
//     }
//   }, [user]);

//   const [formDataStep2, setFormDataStep2] = useState({
//     target_donation: "",
//     volunteers: 0,
//     location: "",
//     trees: [],
//   });

//   const handleFileInputChange = (
//     event,
//     setFileState,
//     setFormData,
//     fieldName
//   ) => {
//     const file = event.target.files[0];
//     if (file) {
//       setFileState(file.name);
//       setFormData((prevState) => ({
//         ...prevState,
//         [fieldName]: file.name,
//       }));
//     }
//   };

//   const handleInputChange = (e, setFormData) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleNumberInputChange = (e, setFormData) => {
//     const { name, value } = e.target;
//     const numberValue = parseInt(value, 10);
//     if (!isNaN(numberValue)) {
//       setFormData((prevState) => ({
//         ...prevState,
//         [name]: numberValue,
//       }));
//     }
//   };

//   const handleStep1Submit = (e) => {
//     e.preventDefault();
//     setStep(2);
//   };

//   const handleBackButton = (e) => {
//     e.preventDefault();
//     setStep(1);
//   };

//   const handleStep2Submit = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = {
//         ...formDataStep1,
//         ...formDataStep2,
//         trees: trees,
//       };

//       const response = await axios.post(
//         "http://localhost:5000/api/campaigns",
//         formData
//       );
//       console.log("Data submitted:", response.data);
//       alert("Data Submitted");

//       // Clear the form fields
//       setFormDataStep1({
//         user: user._id,
//         name: "",
//         description: "",
//         image: "",
//         start_date: "",
//         end_date: "",
//       });
//       setFormDataStep2({
//         target_donation: "",
//         volunteers: 0,
//         location: "",
//         trees: [],
//       });
//       setImageFileName("");
//       setVolunteerToggle(false);

//       // Navigate back to the first step
//       setStep(1);
//     } catch (error) {
//       console.error("Error submitting data:", error);
//     }
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImageFile(file);
//     }
//   };

//   const handleAddTree = (e) => {
//     e.preventDefault();
//     if (imageFile) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         const newTree = {
//           name,
//           price,
//           image: reader.result,
//         };
//         setTrees([...trees, newTree]);
//         resetForm();
//       };
//       reader.readAsDataURL(imageFile);
//     }
//   };

//   const resetForm = () => {
//     setShowFields(false);
//     setImageFile(null);
//     setName("");
//     setPrice("");
//   };

//   const handleRemoveTree = (index) => {
//     const newTrees = trees.filter((_, i) => i !== index);
//     setTrees(newTrees);
//   };

//   const handlePriceKeyPress = (e) => {
//     if (!/[0-9]/.test(e.key)) {
//       e.preventDefault();
//     }
//   };

//   const renderStep1Form = () => {
//     return (
//       <form onSubmit={handleStep1Submit}>
//         <h1 className="font-josefin-sans text-xl text-center text-black font-bold mb-6">
//           Create Campaign
//         </h1>
//         <label
//           htmlFor="image"
//           className="block font-mini font-josefin-sans mb-1"
//         >
//           Image
//         </label>
//         <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
//           <input
//             id="image"
//             className="bg-inherit pl-2 w-full outline-none border-none"
//             type="file"
//             name="image"
//             accept="image/*"
//             required
//             onChange={(e) =>
//               handleFileInputChange(
//                 e,
//                 setImageFileName,
//                 setFormDataStep1,
//                 "image"
//               )
//             }
//           />
//         </div>
//         <label
//           htmlFor="name"
//           className="block font-mini font-josefin-sans mb-1"
//         >
//           Title
//         </label>
//         <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
//           <input
//             id="name"
//             className="bg-inherit pl-2 w-full outline-none border-none"
//             type="text"
//             name="name"
//             placeholder="Enter your campaigns's title"
//             required
//             value={formDataStep1.name || ""}
//             onChange={(e) => handleInputChange(e, setFormDataStep1)}
//           />
//         </div>
//         <label
//           htmlFor="description"
//           className="block font-mini font-josefin-sans mb-1"
//         >
//           Description
//         </label>
//         <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
//           <textarea
//             id="description"
//             className="bg-inherit pl-2 w-full outline-none border-none"
//             name="description"
//             placeholder="Enter detail about your campaign"
//             maxLength="250"
//             required
//             value={formDataStep1.description || ""}
//             onChange={(e) => handleInputChange(e, setFormDataStep1)}
//           />
//         </div>
//         <label
//           htmlFor="start_date"
//           className="block font-mini font-josefin-sans mb-1"
//         >
//           Start Date
//         </label>
//         <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
//           <input
//             id="start_date"
//             className="bg-inherit pl-2 w-full outline-none border-none"
//             type="date"
//             name="start_date"
//             required
//             value={formDataStep1.start_date || ""}
//             onChange={(e) => handleInputChange(e, setFormDataStep1)}
//           />
//         </div>
//         <label
//           htmlFor="end_date"
//           className="block font-mini font-josefin-sans mb-1"
//         >
//           End Date
//         </label>
//         <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
//           <input
//             id="end_date"
//             className="bg-inherit pl-2 w-full outline-none border-none"
//             type="date"
//             name="end_date"
//             required
//             value={formDataStep1.end_date || ""}
//             onChange={(e) => {
//               const start_date = new Date(formDataStep1.start_date);
//               const end_date = new Date(e.target.value);
//               if (end_date <= start_date) {
//                 alert("End Date cannot be before or the same as Start Date");
//               } else {
//                 handleInputChange(e, setFormDataStep1);
//               }
//             }}
//           />
//         </div>
//         <div className="mt-4">
//           <button
//             type="submit"
//             className="font-josefin-sans bg-dashboard text-white text-sm font-semibold px-4 py-2 rounded hover:rounded-full border-2 border-gray-100"
//           >
//             Next
//           </button>
//         </div>
//       </form>
//     );
//   };

//   const renderStep2Form = () => {
//     return (
//       <form onSubmit={handleStep2Submit}>
//         <h1 className="font-josefin-sans text-xl text-center text-black font-bold mb-6">
//           Create Campaign
//         </h1>
//         <label
//           htmlFor="target_donation"
//           className="block font-mini font-josefin-sans mb-1"
//         >
//           Target Donation
//         </label>
//         <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
//           <input
//             id="target_donation"
//             className="bg-inherit pl-2 w-full outline-none border-none"
//             type="number"
//             name="target_donation"
//             placeholder="Enter your target donation amount"
//             required
//             value={formDataStep2.target_donation || ""}
//             onChange={(e) => handleNumberInputChange(e, setFormDataStep2)}
//           />
//         </div>
//         <label
//           htmlFor="volunteer"
//           className="block font-mini font-josefin-sans mb-1"
//         >
//           Volunteers
//         </label>
//         <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
//           <input
//             id="volunteerToggle"
//             type="checkbox"
//             className="mr-2"
//             checked={volunteerToggle}
//             onChange={(e) => setVolunteerToggle(e.target.checked)}
//           />
//           <label
//             htmlFor="volunteerToggle"
//             className="font-mini font-josefin-sans"
//           >
//             Need Volunteers?
//           </label>
//         </div>

//         {volunteerToggle && (
//           <div>
//             <label
//               htmlFor="volunteers"
//               className="block font-mini font-josefin-sans mb-1"
//             >
//               Volunteers Needed
//             </label>
//             <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
//               <input
//                 id="volunteers"
//                 className="bg-inherit pl-2 w-full outline-none border-none"
//                 type="number"
//                 name="volunteers"
//                 placeholder="Enter the number of volunteers needed"
//                 value={formDataStep2.volunteers || ""}
//                 onChange={(e) => handleNumberInputChange(e, setFormDataStep2)}
//               />
//             </div>
//           </div>
//         )}

//         <label
//           htmlFor="Trees Details"
//           className="block font-mini font-josefin-sans mb-1"
//         >
//           Trees Details
//         </label>

//         <button
//           onClick={() => setShowFields(true)}
//           className="flex items-center justify-center bg-neutral mb-4 w-full py-2 px-3 rounded-2xl"
//         >
//           +
//         </button>

//         {showFields && (
//           <form onSubmit={handleAddTree} className="space-y-4">
//             <div>
//               <label
//                 htmlFor="Trees Name"
//                 className="block font-mini font-josefin-sans mb-1"
//               >
//                 Trees Name
//               </label>
//               <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
//                 <input
//                   type="text"
//                   id="name"
//                   placeholder="Enter the tree name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   className="bg-inherit pl-2 w-full outline-none border-none"
//                   required
//                 />
//               </div>
//             </div>

//             <div>
//               <label
//                 htmlFor="Upload Image"
//                 className="block font-mini font-josefin-sans mb-1"
//               >
//                 Upload Image
//               </label>
//               <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
//                 <input
//                   type="file"
//                   id="image"
//                   onChange={handleImageChange}
//                   className="bg-inherit pl-2 w-60 outline-none border-none"
//                   accept="image/*"
//                   required
//                 />
//               </div>
//             </div>

//             <div>
//               <label
//                 htmlFor="Price"
//                 className="block font-mini font-josefin-sans mb-1"
//               >
//                 Price
//               </label>
//               <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
//                 <input
//                   type="number"
//                   id="price"
//                   placeholder="Enter the tree price"
//                   max={99999}
//                   min={10}
//                   value={price}
//                   onChange={(e) => setPrice(e.target.value)}
//                   onKeyPress={handlePriceKeyPress}
//                   className="bg-inherit pl-2 w-full outline-none border-none"
//                   required
//                 />
//               </div>
//             </div>
//             <div className="flex justify-end">
//               <button
//                 type="submit"
//                 className="mt-1 px-6 py-1 text-white rounded hover:rounded-full border-2 border-gray-100 bg-dashboard"
//               >
//                 Add
//               </button>
//             </div>
//           </form>
//         )}

//         <div className="mt-4 flex flex-row space-x-4">
//           {trees.map((tree, index) => (
//             <div key={index} className="relative">
//               <img
//                 src={tree.image}
//                 alt={`Tree ${index + 1}`}
//                 className="w-14 h-14 items-center justify-center rounded-full object-cover border-2 border-gray-300"
//               />
//               <div className="mt-2 text-sm text-center">
//                 <p>{tree.name}</p>
//                 <p>({tree.price} PKR)</p>
//               </div>
//               <button
//                 onClick={() => handleRemoveTree(index)}
//                 className="absolute top-0 left-0 w-4 h-4 pb-1 bg-green-600 bg-opacity-40 text-black rounded-full flex items-center justify-center text-sm"
//               >
//                 x
//               </button>
//             </div>
//           ))}
//           {/* </div> */}
//         </div>
//         <label
//           htmlFor="location"
//           className="block -mt-3 font-mini font-josefin-sans mb-1"
//         >
//           Location
//         </label>
//         <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
//           <input
//             id="location"
//             className="bg-inherit pl-2 w-full outline-none border-none"
//             type="text"
//             name="location"
//             placeholder="Enter your location"
//             required
//             value={formDataStep2.location || ""}
//             onChange={(e) => handleInputChange(e, setFormDataStep2)}
//           />
//         </div>
//         <div className="flex justify-between mt-4 -mb-3">
//           <button
//             type="button"
//             onClick={handleBackButton}
//             className="font-josefin-sans bg-dashboard text-white text-sm font-semibold px-4 py-2 rounded hover:rounded-full border-2 border-gray-100"
//           >
//             Back
//           </button>
//           <button
//             type="submit"
//             className="font-josefin-sans bg-dashboard text-white text-sm font-semibold px-4 py-2 rounded hover:rounded-full border-2 border-gray-100"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     );
//   };

//   return (
//     <div className="flex items-center gap-[100px] justify-center min-h-screen">
//       {step === 1 ? (
//         <>
//           <div className="border border-2 border-gray-100 bg-white p-8 rounded-lg w-[600px]">
//             {renderStep1Form()}
//           </div>
//           <img
//             src={`${process.env.PUBLIC_URL}/assest/Seeding-bro.png`}
//             alt="leaves illustration"
//             className="w-[500px] mt-8"
//           />
//         </>
//       ) : (
//         <>
//           <img
//             src={`${process.env.PUBLIC_URL}/assest/Reforestation-bro.png`}
//             alt="leaves illustration"
//             className="self-center w-[450px]"
//           />
//           <div className="border border-2 border-gray-100  m-4 bg-white p-8 rounded-lg w-[550px] ">
//             {renderStep2Form()}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default CreateCampaignForm;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CreateCampaignForm = () => {
    // const navigate = useNavigate();
    const [imageFileName, setImageFileName] = useState('');
    const [step, setStep] = useState(1);
    const [volunteerToggle, setVolunteerToggle] = useState(false);
    const { id } = useParams();

    const [formDataStep1, setFormDataStep1] = useState({
        socialGroup: id,
        name: '',
        description: '',
        image: '',
        start_date: '',
        end_date: '',
    });

    const [formDataStep2, setFormDataStep2] = useState({
        target_donation: '',
        volunteers: 0,
        location: ''
    });

    const handleFileInputChange = (event, setFileState, setFormData, fieldName) => {
        const file = event.target.files[0];
        if (file) {
            setFileState(file.name);
            setFormData(prevState => ({
                ...prevState,
                [fieldName]: file.name
            }));
        }
    };

    const handleInputChange = (e, setFormData) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleNumberInputChange = (e, setFormData) => {
        const { name, value } = e.target;
        const numberValue = parseInt(value, 10);
        if (!isNaN(numberValue)) {
            setFormData(prevState => ({
                ...prevState,
                [name]: numberValue
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
            };

            const response = await axios.post("http://localhost:5000/api/campaigns", formData);
            console.log("Data submitted:", response.data);
            alert("Data Submitted");

            // Clear the form fields
            setFormDataStep1({
                name: '',
                description: '',
                image: '',
                start_date: '',
                end_date: '',
            });
            setFormDataStep2({
                target_donation: '0',
                volunteers: 0,
                location: ''
            });
            setImageFileName('');
            // setFaceImageFileName('');
            setVolunteerToggle(false);

            // Navigate back to the first step
            setStep(1);
            // Optionally, navigate to a different route if needed
            // navigate('/previous-page'); // Uncomment and update the path if required

        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };

    const renderStep1Form = () => {
        return (
            <form onSubmit={handleStep1Submit}>
                <h1 className="font-josefin-sans text-2xl text-black font-bold mb-6">Create Campaign</h1>
                <label htmlFor="image" className="block font-mini font-josefin-sans mb-1">Image</label>
                <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                    <input
                        id="image"
                        className="bg-inherit pl-2 w-full outline-none border-none"
                        type="file"
                        name="image"
                        accept="image/*"
                        required
                        onChange={(e) => handleFileInputChange(e, setImageFileName, setFormDataStep1, 'image')}
                    />
                </div>
                <label htmlFor="name" className="block font-mini font-josefin-sans mb-1">Title</label>
                <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                    <input
                        id="name"
                        className="bg-inherit pl-2 w-full outline-none border-none"
                        type="text"
                        name="name"
                        placeholder="Enter your campaigns's title"
                        required
                        value={formDataStep1.name || ''}
                        onChange={(e) => handleInputChange(e, setFormDataStep1)}
                    />
                </div>
                <label htmlFor="description" className="block font-mini font-josefin-sans mb-1">Description</label>
                <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                    <textarea
                        id="description"
                        className="bg-inherit pl-2 w-full outline-none border-none"
                        name="description"
                        placeholder="Enter detail about your campaign"
                        maxLength="250"
                        required
                        value={formDataStep1.description || ''}
                        onChange={(e) => handleInputChange(e, setFormDataStep1)}
                    />
                </div>
                <label htmlFor="start_date" className="block font-mini font-josefin-sans mb-1">Start Date</label>
                <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                    <input
                        id="start_date"
                        className="bg-inherit pl-2 w-full outline-none border-none"
                        type="date"
                        name="start_date"
                        required
                        value={formDataStep1.start_date || ''}
                        onChange={(e) => handleInputChange(e, setFormDataStep1)}
                    />
                </div>
                <label htmlFor="end_date" className="block font-mini font-josefin-sans mb-1">End Date</label>
                <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                    <input
                        id="end_date"
                        className="bg-inherit pl-2 w-full outline-none border-none"
                        type="date"
                        name="end_date"
                        required
                        value={formDataStep1.end_date || ''}
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
                    <button type="submit" className="font-josefin-sans bg-dashboard text-white text-sm font-semibold px-4 py-2 rounded hover:rounded-full border-2 border-gray-100">Next</button>
                </div>
            </form>
        );
    };

    const renderStep2Form = () => {
        return (
            <form onSubmit={handleStep2Submit}>
                <h1 className="font-josefin-sans text-2xl text-black font-bold mb-6">Create Campaign</h1>
                <label htmlFor="target_donation" className="block font-mini font-josefin-sans mb-1">Target Donation</label>
                <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                    <input
                        id="target_donation"
                        className="bg-inherit pl-2 w-full outline-none border-none"
                        type="number"
                        name="target_donation"
                        placeholder="Enter your target donation amount"
                        required
                        max={99999}
                        min={10}
                        value={formDataStep2.target_donation || ''}
                        onChange={(e) => handleNumberInputChange(e, setFormDataStep2)}
                    />
                </div>
                <label htmlFor="volunteer" className="block font-mini font-josefin-sans mb-1">Volunteers</label>
                <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                    <input
                        id="volunteerToggle"
                        type="checkbox"
                        className="mr-2"
                        checked={volunteerToggle}
                        onChange={(e) => setVolunteerToggle(e.target.checked)}
                    />
                     <label htmlFor="volunteerToggle" className="font-mini font-josefin-sans">Need Volunteers?</label>
                </div>
                
                {volunteerToggle && (
                    <div>
                        <label htmlFor="volunteers" className="block font-mini font-josefin-sans mb-1">Volunteers Needed</label>
                        <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                            <input
                                id="volunteers"
                                className="bg-inherit pl-2 w-full outline-none border-none"
                                type="number"
                                name="volunteers"
                                placeholder="Enter the number of volunteers needed"
                                value={formDataStep2.volunteers || ''}
                                onChange={(e) => handleNumberInputChange(e, setFormDataStep2)}
                            />
                        </div>
                    </div>
                )}
                <div className="mb-4">
                    <label htmlFor="location" className="block font-mini font-josefin-sans mb-1">Location</label>
                    <select
                        id="location"
                        name="location"
                        className="bg-neutral font-josefin-sans block w-full text-mini shadow-sm sm:text-sm rounded-2xl py-4 px-4"
                        value={formDataStep2.location || ''}
                        onChange={(e) => handleInputChange(e, setFormDataStep2)}
                    >
                        <option value="" disabled>Select The City</option>
                        <option value="Islamabad">Islamabad</option>
                        <option value="Rawalpindi">Rawalpindi</option>
                        <option value="Lahore">Lahore</option>
                        <option value="Balochistan">Balochistan</option>
                    </select>
                </div>
                <div className="flex gap-4 mt-4">
                    <button onClick={handleBackButton} className="font-josefin-sans bg-dashboard text-white text-sm font-semibold px-4 py-2 rounded hover:rounded-full border-2 border-gray-100">Back</button>
                    <button type="submit" className="font-josefin-sans bg-dashboard text-white text-sm font-semibold px-4 py-2 rounded hover:rounded-full border-2 border-gray-100">Submit</button>
                </div>
            </form>
        );
    };

    return (
        <div className="flex ml-64 items-center gap-[100px] justify-center min-h-screen">
            {step === 1 ? (
                <>
                    <div className="border border-2 border-gray-100 bg-white p-8 rounded-lg w-[600px]">
                        {renderStep1Form()}
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/assest/Seeding-bro.png`} alt='leaves illustration' className="w-[500px] mt-8"/>
                </>
            ) : (
                <>
                    <img src={`${process.env.PUBLIC_URL}/assest/Reforestation-bro.png`} alt='leaves illustration' className="self-center w-[450px]"/>
                    <div className="bg-white p-8 rounded-lg w-[400px] mt-8">
                        {renderStep2Form()}
                    </div> 
                </>
            )}
        </div>
    );
};

export default CreateCampaignForm;
