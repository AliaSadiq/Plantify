import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";
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
  const { id } = useParams();
  const apiUrl = process.env.REACT_APP_API_BASE_URL;
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
  });

  useEffect(() => {
    if (user) {
      setFormDataStep1((prevState) => ({
        ...prevState,
        user: user._id,
      }));
    }
  }, [user]);

  const [formDataStep2, setFormDataStep2] = useState({
    target_donation: "",
    volunteers: 0,
    location: "",
    trees: [],
  });

  // const handleFileInputChange = (
  //   event,
  //   setFileState,
  //   setFormData,
  //   fieldName
  // ) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     setFileState(file.name);
  //     setFormData((prevState) => ({
  //       ...prevState,
  //       [fieldName]: file.name,
  //     }));
  //   }
  // };
//   const handleFileInputChange = (event, setFileState, setFormData, fieldName) => {
//     const file = event.target.files[0];
//     if (file && file.type.startsWith("image/")) {
//         setFileState(file.name);
//         setFormData(prevState => ({
//             ...prevState,
//             [fieldName]: file.name
//         }));
//     } else {
//         alert("Please select a valid image file.");
//         // Clear the file input field
//         event.target.value = ""; // Reset the input value
//     }
// };
const handleFileInputChange = (event, setFileState, setFormData, fieldName) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
        setFileState(file.name); // To display the file name in the UI, if needed
        setFormData(prevState => ({
            ...prevState,
            [fieldName]: file // Store the actual file object in the form data
        }));
    } else {
        alert("Please select a valid image file.");
        // Clear the file input field
        event.target.value = "";
    }
};

  const handleInputChange = (e, setFormData) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
        trees: trees,
      };
      console.log("Submitting data:", formData);

      const response = await axios.post(
        `${apiUrl}/api/campaigns `,
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
        volunteers: 0,
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
    if (imageFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newTree = {
          name,
          price,
          image: reader.result,
        };
        setTrees([...trees, newTree]);
        resetForm();
      };
      reader.readAsDataURL(imageFile);
    }
  };

  const resetForm = () => {
    setShowFields(false);
    setImageFile(null);
    setName("");
    setPrice("");
  };

  const handleRemoveTree = (index) => {
    const newTrees = trees.filter((_, i) => i !== index);
    setTrees(newTrees);
  };

  const handlePriceKeyPress = (e) => {
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
          Image
        </label>
        <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
          <input
            id="image"
            className="bg-inherit pl-2 w-full outline-none border-none"
            type="file"
            name="image"
            accept="image/*"
            required
            onChange={(e) =>
              handleFileInputChange(
                e,
                setImageFileName,
                setFormDataStep1,
                "image"
              )
            }
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
          htmlFor="volunteer"
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
              htmlFor="volunteers"
              className="block font-mini font-josefin-sans mb-1"
            >
              Volunteers Needed
            </label>
            <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
              <input
                id="volunteers"
                className="bg-inherit pl-2 w-full outline-none border-none"
                type="number"
                name="volunteers"
                placeholder="Enter the number of volunteers needed"
                value={formDataStep2.volunteers || ""}
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

        <button
          onClick={() => setShowFields(true)}
          className="flex items-center justify-center bg-neutral mb-4 w-full py-2 px-3 rounded-2xl"
        >
          +
        </button>

        {showFields && (
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
                  onChange={handleImageChange}
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
        )}

        <div className="mt-4 flex flex-row space-x-4">
          {trees.map((tree, index) => (
            <div key={index} className="relative">
              <img
                src={tree.image}
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
          {/* </div> */}
        </div>

        <div className="mb-4">
          <label
            htmlFor="location"
            className="block font-mini font-josefin-sans mb-1"
          >
            Location
          </label>
          <select
            id="location"
            name="location"
            className="bg-neutral font-josefin-sans block w-full text-mini shadow-sm sm:text-sm rounded-2xl py-4 px-4"
            value={formDataStep2.location || ""}
            onChange={(e) => handleInputChange(e, setFormDataStep2)}
          >
            <option value="" disabled>
              Select The City
            </option><option value="" disabled>Select The City</option>
                        <option value="Islamabad">Islamabad</option>
                        <option value="" disabled>Punjab Cities</option>
                        <option value="Ahmed Nager Chatha">Ahmed Nager Chatha</option>
                        <option value="Ahmadpur East">Ahmadpur East</option>
                        <option value="Ali Khan Abad">Ali Khan Abad</option>
                        <option value="Alipur">Alipur</option>
                        <option value="Arifwala">Arifwala</option>
                        <option value="Attock">Attock</option>
                        <option value="Bhera">Bhera</option>
                        <option value="Bhalwal">Bhalwal</option>
                        <option value="Bahawalnagar">Bahawalnagar</option>
                        <option value="Bahawalpur">Bahawalpur</option>
                        <option value="Bhakkar">Bhakkar</option>
                        <option value="Burewala">Burewala</option>
                        <option value="Chillianwala">Chillianwala</option>
                        <option value="Chakwal">Chakwal</option>
                        <option value="Chichawatni">Chichawatni</option>
                        <option value="Chiniot">Chiniot</option>
                        <option value="Chishtian">Chishtian</option>
                        <option value="Daska">Daska</option>
                        <option value="Darya Khan">Darya Khan</option>
                        <option value="Dera Ghazi Khan">Dera Ghazi Khan</option>
                        <option value="Dhaular">Dhaular</option>
                        <option value="Dina">Dina</option>
                        <option value="Dinga">Dinga</option>
                        <option value="Dipalpur">Dipalpur</option>
                        <option value="Faisalabad">Faisalabad</option>
                        <option value="Ferozewala">Ferozewala</option>
                        <option value="Fateh Jhang">Fateh Jang</option>
                        <option value="Ghakhar Mandi">Ghakhar Mandi</option>
                        <option value="Gojra">Gojra</option>
                        <option value="Gujranwala">Gujranwala</option>
                        <option value="Gujrat">Gujrat</option>
                        <option value="Gujar Khan">Gujar Khan</option>
                        <option value="Hafizabad">Hafizabad</option>
                        <option value="Haroonabad">Haroonabad</option>
                        <option value="Hasilpur">Hasilpur</option>
                        <option value="Haveli Lakha">Haveli Lakha</option>
                        <option value="Jatoi">Jatoi</option>
                        <option value="Jalalpur">Jalalpur</option>
                        <option value="Jattan">Jattan</option>
                        <option value="Jampur">Jampur</option>
                        <option value="Jaranwala">Jaranwala</option>
                        <option value="Jhang">Jhang</option>
                        <option value="Jhelum">Jhelum</option>
                        <option value="Kalabagh">Kalabagh</option>
                        <option value="Karor Lal Esan">Karor Lal Esan</option>
                        <option value="Kasur">Kasur</option>
                        <option value="Kamalia">Kamalia</option>
                        <option value="Kamoke">Kamoke</option>
                        <option value="Khanewal">Khanewal</option>
                        <option value="Khanpur">Khanpur</option>
                        <option value="Kharian">Kharian</option>
                        <option value="Khushab">Khushab</option>
                        <option value="Kot Addu">Kot Addu</option>
                        <option value="Jauharabad">Jauharabad</option>
                        <option value="Lahore">Lahore</option>
                        <option value="Lalamusa">Lalamusa</option>
                        <option value="Layyah">Layyah</option>
                        <option value="Liaquat Pur">Liaquat Pur</option>
                        <option value="Lodhran">Lodhran</option>
                        <option value="Malakwal">Malakwal</option>
                        <option value="Mamoori">Mamoori</option>
                        <option value="Mailsi">Mailsi</option>
                        <option value="Mandi Bahauddin">Mandi Bahauddin</option>
                        <option value="Mian Channu">Mian Channu</option>
                        <option value="Mianwali">Mianwali</option>
                        <option value="Multan">Multan</option>
                        <option value="Murree">Murree</option>
                        <option value="Muridke">Muridke</option>
                        <option value="Mianwali Bangla">Mianwali Bangla</option>
                        <option value="Muzaffargarh">Muzaffargarh</option>
                        <option value="Narowal">Narowal</option>
                        <option value="Nankana Sahib">Nankana Sahib</option>
                        <option value="Okara">Okara</option>
                        <option value="Renala Khurd">Renala Khurd</option>
                        <option value="Pakpattan">Pakpattan</option>
                        <option value="Pattoki">Pattoki</option>
                        <option value="Pir Mahal">Pir Mahal</option>
                        <option value="Qaimpur">Qaimpur</option>
                        <option value="Qila Didar Singh">Qila Didar Singh</option>
                        <option value="Rabwah">Rabwah</option>
                        <option value="Raiwind">Raiwind</option>
                        <option value="Rajanpur">Rajanpur</option>
                        <option value="Rahim Yar Khan">Rahim Yar Khan</option>
                        <option value="Rawalpindi">Rawalpindi</option>
                        <option value="Sadiqabad">Sadiqabad</option>
                        <option value="Safdarabad">Safdarabad</option>
                        <option value="Sahiwal">Sahiwal</option>
                        <option value="Sangla Hill">Sangla Hill</option>
                        <option value="Sarai Alamgir">Sarai Alamgir</option>
                        <option value="Sargodha">Sargodha</option>
                        <option value="Shakargarh">Shakargarh</option>
                        <option value="Sheikhupura">Sheikhupura</option>
                        <option value="Sialkot">Sialkot</option>
                        <option value="Sohawa">Sohawa</option>
                        <option value="Soianwala">Soianwala</option>
                        <option value="Siranwali">Siranwali</option>
                        <option value="Talagang">Talagang</option>
                        <option value="Taxila">Taxila</option>
                        <option value="Toba Tek Singh">Toba Tek Singh</option>
                        <option value="Vehari">Vehari</option>
                        <option value="Wah Cantonment">Wah Cantonment</option>
                        <option value="Wazirabad">Wazirabad</option>
                        <option value="" disabled>Sindh Cities</option>
                        <option value="Badin">Badin</option>
                        <option value="Bhirkan">Bhirkan</option>
                        <option value="Rajo Khanani">Rajo Khanani</option>
                        <option value="Chak">Chak</option>
                        <option value="Dadu">Dadu</option>
                        <option value="Digri">Digri</option>
                        <option value="Diplo">Diplo</option>
                        <option value="Dokri">Dokri</option>
                        <option value="Ghotki">Ghotki</option>
                        <option value="Haala">Haala</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Islamkot">Islamkot</option>
                        <option value="Jacobabad">Jacobabad</option>
                        <option value="Jamshoro">Jamshoro</option>
                        <option value="Jungshahi">Jungshahi</option>
                        <option value="Kandhkot">Kandhkot</option>
                        <option value="Kandiaro">Kandiaro</option>
                        <option value="Karachi">Karachi</option>
                        <option value="Kashmore">Kashmore</option>
                        <option value="Keti Bandar">Keti Bandar</option>
                        <option value="Khairpur">Khairpur</option>
                        <option value="Kotri">Kotri</option>
                        <option value="Larkana">Larkana</option>
                        <option value="Matiari">Matiari</option>
                        <option value="Mehar">Mehar</option>
                        <option value="Mirpur Khas">Mirpur Khas</option>
                        <option value="Mithani">Mithani</option>
                        <option value="Mithi">Mithi</option>
                        <option value="Mehrabpur">Mehrabpur</option>
                        <option value="Moro">Moro</option>
                        <option value="Nagarparkar">Nagarparkar</option>
                        <option value="Naudero">Naudero</option>
                        <option value="Naushahro Feroze">Naushahro Feroze</option>
                        <option value="Naushara">Naushara</option>
                        <option value="Nawabshah">Nawabshah</option>
                        <option value="Nazimabad">Nazimabad</option>
                        <option value="Qambar">Qambar</option>
                        <option value="Qasimabad">Qasimabad</option>
                        <option value="Ranipur">Ranipur</option>
                        <option value="Ratodero">Ratodero</option>
                        <option value="Rohri">Rohri</option>
                        <option value="Sakrand">Sakrand</option>
                        <option value="Sanghar">Sanghar</option>
                        <option value="Shahbandar">Shahbandar</option>
                        <option value="Shahdadkot">Shahdadkot</option>
                        <option value="Shahdadpur">Shahdadpur</option>
                        <option value="Shahpur Chakar">Shahpur Chakar</option>
                        <option value="Shikarpaur">Shikarpaur</option>
                        <option value="Sukkur">Sukkur</option>
                        <option value="Tangwani">Tangwani</option>
                        <option value="Tando Adam Khan">Tando Adam Khan</option>
                        <option value="Tando Allahyar">Tando Allahyar</option>
                        <option value="Tando Muhammad Khan">Tando Muhammad Khan</option>
                        <option value="Thatta">Thatta</option>
                        <option value="Umerkot">Umerkot</option>
                        <option value="Warah">Warah</option>
                        <option value="" disabled>Khyber Cities</option>
                        <option value="Abbottabad">Abbottabad</option>
                        <option value="Adezai">Adezai</option>
                        <option value="Alpuri">Alpuri</option>
                        <option value="Akora Khattak">Akora Khattak</option>
                        <option value="Ayubia">Ayubia</option>
                        <option value="Banda Daud Shah">Banda Daud Shah</option>
                        <option value="Bannu">Bannu</option>
                        <option value="Batkhela">Batkhela</option>
                        <option value="Battagram">Battagram</option>
                        <option value="Birote">Birote</option>
                        <option value="Chakdara">Chakdara</option>
                        <option value="Charsadda">Charsadda</option>
                        <option value="Chitral">Chitral</option>
                        <option value="Daggar">Daggar</option>
                        <option value="Dargai">Dargai</option>
                        <option value="Darya Khan">Darya Khan</option>
                        <option value="Dera Ismail Khan">Dera Ismail Khan</option>
                        <option value="Doaba">Doaba</option>
                        <option value="Dir">Dir</option>
                        <option value="Drosh">Drosh</option>
                        <option value="Hangu">Hangu</option>
                        <option value="Haripur">Haripur</option>
                        <option value="Karak">Karak</option>
                        <option value="Kohat">Kohat</option>
                        <option value="Kulachi">Kulachi</option>
                        <option value="Lakki Marwat">Lakki Marwat</option>
                        <option value="Latamber">Latamber</option>
                        <option value="Madyan">Madyan</option>
                        <option value="Mansehra">Mansehra</option>
                        <option value="Mardan">Mardan</option>
                        <option value="Mastuj">Mastuj</option>
                        <option value="Mingora">Mingora</option>
                        <option value="Nowshera">Nowshera</option>
                        <option value="Paharpur">Paharpur</option>
                        <option value="Pabbi">Pabbi</option>
                        <option value="Peshawar">Peshawar</option>
                        <option value="Saidu Sharif">Saidu Sharif</option>
                        <option value="Shorkot">Shorkot</option>
                        <option value="Shewa Adda">Shewa Adda</option>
                        <option value="Swabi">Swabi</option>
                        <option value="Swat">Swat</option>
                        <option value="Tangi">Tangi</option>
                        <option value="Tank">Tank</option>
                        <option value="Thall">Thall</option>
                        <option value="Timergara">Timergara</option>
                        <option value="Tordher">Tordher</option>
                        <option value="" disabled>Balochistan Cities</option>
                        <option value="Awaran">Awaran</option>
                        <option value="Barkhan">Barkhan</option>
                        <option value="Chagai">Chagai</option>
                        <option value="Dera Bugti">Dera Bugti</option>
                        <option value="Gwadar">Gwadar</option>
                        <option value="Harnai">Harnai</option>
                        <option value="Jafarabad">Jafarabad</option>
                        <option value="Jhal Magsi">Jhal Magsi</option>
                        <option value="Kacchi">Kacchi</option>
                        <option value="Kalat">Kalat</option>
                        <option value="Kech">Kech</option>
                        <option value="Kharan">Kharan</option>
                        <option value="Khuzdar">Khuzdar</option>
                        <option value="Killa Abdullah">Killa Abdullah</option>
                        <option value="Killa Saifullah">Killa Saifullah</option>
                        <option value="Kohlu">Kohlu</option>
                        <option value="Lasbela">Lasbela</option>
                        <option value="Lehri">Lehri</option>
                        <option value="Loralai">Loralai</option>
                        <option value="Mastung">Mastung</option>
                        <option value="Musakhel">Musakhel</option>
                        <option value="Nasirabad">Nasirabad</option>
                        <option value="Nushki">Nushki</option>
                        <option value="Panjgur">Panjgur</option>
                        <option value="Pishin Valley">Pishin Valley</option>
                        <option value="Quetta">Quetta</option>
                        <option value="Sherani">Sherani</option>
                        <option value="Sibi">Sibi</option>
                        <option value="Sohbatpur">Sohbatpur</option>
                        <option value="Washuk">Washuk</option>
                        <option value="Zhob">Zhob</option>
                        <option value="Ziarat">Ziarat</option>
                    </select>
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
    <div className="flex pt-1 pb-1 ml-[250px] items-center gap-[100px] justify-center ">
      {step === 1 ? (
        <>
          <div className=" border-2 m-4 border-gray-100 bg-white p-8 rounded-lg w-[550px]">
            {renderStep1Form()}
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Seeding-bro.png"`}
            alt="leaves illustration"
            className="w-[400px] mt-8"
          />
        </>
      ) : (
        <>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Reforestation-bro.png`}
            alt="leaves illustration"
            className="w-[400px] ml-12 mt-8"
          />
          <div className=" border-2 border-gray-100  m-4 bg-white p-8 rounded-lg w-[550px] ">
            {renderStep2Form()}
          </div>
        </>
      )}
    </div>
  );
};

export default CreateCampaignForm;
