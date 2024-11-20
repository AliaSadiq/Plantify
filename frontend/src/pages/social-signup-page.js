import React, { useState, useEffect } from "react";
import Button from "../components/button";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const SocialSignUpPage = () => {
    const [imageFileName, setImageFileName] = useState('');
    const [bannerFileName, setBannerFileName] = useState('');
    const [faceImageFileName, setFaceImageFileName] = useState('');
    const [user, setUser] = useState(null);
    const [step, setStep] = useState(1);

    const navigate = useNavigate();

    useEffect(() => {
        // Retrieve user information from local storage
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
        }
    }, []);
    const [formDataStep1, setFormDataStep1] = useState({
        user: '',
        name: '',
        initiative: '',
        image: '',
        banner: '',
        location: ''
    });

    useEffect(() => {
        if (user) {
            // Update formDataStep1 with user._id when user state is set
            setFormDataStep1(prevState => ({
                ...prevState,
                user: user._id
            }));
        }
    }, [user]); 

    const [formDataStep2, setFormDataStep2] = useState({
        cnic: '',
        faceImage: '',
        contact: '',
        address: '',
        status: '',
    });

    const handleFileInputChange = (event, setFileState, setFormData, fieldName) => {
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

    const handleInputChange = (e, setFormData) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleStep1Submit = (e) => {
        e.preventDefault();
        setStep(2);
        console.log('user' + formDataStep1.user)
        console.log('image: ' + formDataStep1.image);
        console.log('banner: ' + formDataStep1.banner);
        console.log('name: ' + formDataStep1.name);
        console.log('initiative: ' + formDataStep1.initiative);
        console.log('location: ' + formDataStep1.location);
    };

    const handleBackButton = (e) => {
        e.preventDefault();
        setStep(1);
    };

    const handleStep2Submit = async (e) => {
        e.preventDefault();
        console.log('faceimage: ' + formDataStep2.faceImage);
        console.log('cnic: ' + formDataStep2.cnic);
        console.log('contact: ' + formDataStep2.contact);
        console.log('address: ' + formDataStep2.address);
        console.log('status: ' + formDataStep2.status);
        try {
            const formData = {
                ...formDataStep1,
                ...formDataStep2,
            };
            console.log('full: ' + formData.user);
            console.log('full: ' + user.isSocial);
            console.log('full: ' + formData.user);
            console.log('full: ' + formData.image);
            console.log('full: ' + formData.banner);
            console.log('full: ' + formData.contact);
            console.log('full: ' + formData.faceImage);

            const response = await axios.post("http://localhost:5000/api/socialgroup", formData);
            console.log("Data submitted:", response.data);
            // Redirect or show success message

            const userUpdateResponse = await axios.put(`http://localhost:5000/api/user/${user._id}`, { isSocial: true });
            console.log("User updated:", userUpdateResponse.data);

            // Update user in local storage
            const updatedUser = { ...user, isSocial: true };
            localStorage.setItem('user', JSON.stringify(updatedUser));
            setUser(updatedUser);

            navigate('/');
            alert('Please wait until your social group has been verified, It can take a few days.')
        } catch (error) {
            console.error("Error submitting data:", error);
            
            // Handle error
        }
    };

    const renderStep1Form = () => {
        return (
            <form onSubmit={handleStep1Submit}>
                <h1 className="font-josefin-sans text-2xl text-gray-100 font-bold mb-6">Social Group Details</h1>
                <label htmlFor="image" className="block font-mini font-josefin-sans mb-1">Logo</label>
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
                <label htmlFor="banner" className="block font-mini font-josefin-sans mb-1">Banner</label>
                <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                    <input 
                        id="banner" 
                        className="bg-inherit pl-2 w-full outline-none border-none" 
                        type="file" 
                        name="banner" 
                        accept="image/*"
                        required
                        onChange={(e) => handleFileInputChange(e, setBannerFileName, setFormDataStep1, 'banner')}
                    />
                </div>
                <label htmlFor="name" className="block font-mini font-josefin-sans mb-1">Name</label>
                <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                    <input 
                        id="name" 
                        className="bg-inherit pl-2 w-full outline-none border-none" 
                        type="text" 
                        name="name" 
                        placeholder="Enter your group's name" 
                        required
                        value={formDataStep1.name}
                        onChange={(e) => handleInputChange(e, setFormDataStep1)}
                    />
                </div>
                <label htmlFor="initiative" className="block font-mini font-josefin-sans mb-1">Initiative</label>
                <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                    <textarea 
                        id="initiative" 
                        className="bg-inherit pl-2 w-full outline-none border-none" 
                        name="initiative" 
                        placeholder="Enter detail about your social group" 
                        maxLength="400"
                        required
                        value={formDataStep1.initiative}
                        onChange={(e) => handleInputChange(e, setFormDataStep1)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="location" className="block font-mini font-josefin-sans mb-1">Location</label>
                    <select 
                        id="location" 
                        name="location" 
                        className="bg-neutral font-josefin-sans block w-full text-mini shadow-sm sm:text-sm rounded-2xl py-4 px-4"
                        value={formDataStep1.location}
                        onChange={(e) => handleInputChange(e, setFormDataStep1)}
                    >
                        <option value="" disabled selected>Select The City</option>
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
                <div className="mt-4">
                    <button type="submit" className="font-josefin-sans bg-gray-100 text-white text-sm font-semibold px-4 py-2 rounded hover:rounded-full border-2 border-gray-100">Next</button>
                </div>
            </form>
        );
    };

    const renderStep2Form = () => {
        return (
            <form onSubmit={handleStep2Submit}>
                <h1 className="font-josefin-sans text-2xl text-gray-100 font-bold mb-6">Get yourself Verified</h1>
                <label htmlFor="faceImage" className="block font-mini font-josefin-sans mb-1">Face Image</label>
                <div className="flex items-center mb-4 py-2 rounded-2xl">
                    <input 
                        id="faceImage" 
                        className="pl-2 w-full outline-none border-none" 
                        type="file" 
                        name="faceImage" 
                        accept="image/*"
                        required
                        onChange={(e) => handleFileInputChange(e, setFaceImageFileName, setFormDataStep2, 'faceImage')}
                    />
                </div>
                <label htmlFor="cnic" className="block font-mini font-josefin-sans mb-1">CNIC</label>
                <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                    <input 
                        id="cnic" 
                        className="bg-inherit font-josefin-sans pl-2 w-full outline-none border-none" 
                        type="text" 
                        name="cnic" 
                        placeholder="Enter your CNIC"
                        required
                        maxLength="15" // Set maximum length to 15 characters (including hyphens)
                        value={formDataStep2.cnic}
                        onChange={(e) => {
                            const inputValue = e.target.value;
                            const numericValue = inputValue.replace(/\D/g, '');
                            const formattedValue = numericValue.replace(/^(\d{5})(\d{7})(\d{1})?$/, '$1-$2-$3');
                            handleInputChange({
                                target: { name: 'cnic', value: formattedValue }
                            }, setFormDataStep2);
                        }}
                        onKeyPress={(e) => {
                            const keyCode = e.keyCode || e.which;
                            const keyValue = String.fromCharCode(keyCode);
                            const regex = /[0-9-]/;
                            if (!regex.test(keyValue)) {
                                e.preventDefault();
                            }
                        }}
                    />
                </div>
                <label htmlFor="contact" className="block font-mini font-josefin-sans mb-1">Contact number</label>
                <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                    <input 
                        id="contact" 
                        className="bg-inherit pl-2 font-josefin-sans w-full outline-none border-none" 
                        type="text" 
                        name="contact" 
                        placeholder="Enter your contact number" 
                        maxLength="11"
                        required
                        value={formDataStep2.contact}
                        onKeyPress={(e) => {
                            const keyCode = e.keyCode || e.which;
                            const keyValue = String.fromCharCode(keyCode);
                            const regex = /[0-9]/;
                            if (!regex.test(keyValue)) {
                                e.preventDefault();
                            }
                        }}
                        onInput={(e) => {
                            const inputValue = e.target.value;
                            if (inputValue.length >= 11) {
                                e.preventDefault();
                            }
                        }}
                        onChange={(e) => handleInputChange(e, setFormDataStep2)}
                    />
                </div>
                <label htmlFor="address" className="block font-mini font-josefin-sans mb-1">Address</label>
                <div className="flex bg-neutral items-center mb-4 py-2 px-3 rounded-2xl">
                    <textarea 
                        id="address" 
                        className="bg-inherit pl-2 font-josefin-sans w-full outline-none border-none" 
                        name="address" 
                        placeholder="Enter your full address" 
                        required
                        value={formDataStep2.address}
                        onChange={(e) => handleInputChange(e, setFormDataStep2)}
                    />
                </div>
                <div className="flex gap-4 mt-4">
                    <Button onClick={handleBackButton} text='Back'/>
                    <button type="submit">submit</button>
                </div>
            </form>
        );
    };

    return (
      <div className="pt-40 pb-20 flex flex-col justify-center items-center min-h-screen bg-neutral">
        <h1 className="mb-8 text-xl font-bold">Social Group Request Form</h1>
        <ol className="flex gap-4 items-center justify-center w-1/2  mb-4 sm:mb-5">
          <li className={`flex justify-center items-center ${step === 1 ? 'text-gray-100' : 'text-gray-100'}`}>
            <div
              className={`flex items-center justify-center w-10 h-10 ${step === 1 ? 'bg-navygreen-300' : 'bg-navygreen-200'} rounded-full lg:h-12 lg:w-12 shrink-0`}
            >
              1
            </div>
          </li>
          <li className={`flex justify-center items-center ${step === 2 ? 'text-gray-100' : 'text-gray-100'}`}>
            <div
              className={`flex items-center justify-center w-10 h-10 ${step === 2 ? 'bg-navygreen-300' : 'bg-navygreen-200'} rounded-full lg:h-12 lg:w-12 shrink-0`}
            >
              2
            </div>
          </li>
        </ol>
        <div className="p-8 rounded-pl bg-white shadow-md w-full max-w-2xl">
          {step === 1 && renderStep1Form()}
          {step === 2 && renderStep2Form()}
        </div>
      </div>
    );
}

export default SocialSignUpPage;


// import React, { useState } from "react";

// const MultiStepForm = () => {
//   const [step, setStep] = useState(1);

//   const handleNextStep = () => {
//     setStep((prevStep) => prevStep + 1);
//   };

//   const handlePreviousStep = () => {
//     setStep((prevStep) => prevStep - 1);
//   };

//   const renderStep1 = () => (
//     <form>
//       <h3 className="mb-6 text-lg font-semibold leading-none text-gray-900 dark:text-white">
//         Social Group Details
//       </h3>
//       <div className="grid gap-4 mb-4 sm:grid-cols-2">
//         <div>
//           <label
//             htmlFor="bannerImage"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Upload a banner image for your group
//           </label>
//           <input
//             type="file"
//             name="bannerImage"
//             id="bannerImage"
//             accept="image/*"
//             className="w-full p-2 text-sm border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
//             required
//           />
//         </div>
//         <div>
//           <label
//             htmlFor="logo"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Upload your group's logo
//           </label>
//           <input
//             type="file"
//             name="logo"
//             id="logo"
//             accept="image/*"
//             className="w-full p-2 text-sm border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
//             required
//           />
//         </div>
//         <div>
//           <label
//             htmlFor="groupname"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Group Name
//           </label>
//           <input
//             type="text"
//             name="groupname"
//             id="groupname"
//             className="w-full p-2 text-sm border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
//             placeholder="Enter your group's name"
//             required
//           />
//         </div>
//         <div>
//           <label
//             htmlFor="initiative"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Group Initiative
//           </label>
//           <input
//             type="text"
//             name="initiative"
//             id="initiative"
//             className="w-full p-2 text-sm border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
//             placeholder="Write about your group"
//             required
//           />
//         </div>
//         <div>
//           <label
//             htmlFor="initiative"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Your Location
//           </label>
//           <select 
//             id="location" 
//             name="location" 
//             className="w-full p-2 text-sm border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
//           >
//             <option value="" disabled>Select The City</option>
//             <option value="Islamabad">Islamabad</option>
//           </select>
//         </div>
//       </div>
//       <button
//         onClick={handleNextStep}
//         className="text-white shadow-lg bg-navygreen-200 hover:bg-navygreen-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//       >
//         Next Step: Payment Info
//       </button>
//     </form>
//   );

//   const renderStep2 = () => (
//     <form>
//       <h3 className="mb-6 text-lg font-medium leading-none text-gray-900 dark:text-white">
//         Verification Details
//       </h3>
//       <div className="grid gap-4 mb-4 sm:grid-cols-2">
//         <div>
//           <label
//             htmlFor="faceImage"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Upload face image 
//           </label>
//           <input
//             type="file"
//             name="faceImage"
//             id="faceImage"
//             accept="image/*"
//             className="w-full p-2 text-sm border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
//             required
//           />
//         </div>
//         <div>
//           <label
//             htmlFor="cnic"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             CNIC
//           </label>
//           <input
//             type="text"
//             name="cnic"
//             id="cnic"
//             className="w-full p-2 text-sm border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
//             placeholder="xxx-xxxx-xxxx-x"
//             required
//           />
//         </div>
//         <div>
//           <label
//             htmlFor="contact"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Contact Number
//           </label>
//           <input
//             type="text"
//             name="contact"
//             id="contact"
//             className="w-full p-2 text-sm border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
//             placeholder="xxxxxxxxxxx"
//             required
//           />
//         </div>
//         <div>
//           <label
//             htmlFor="address"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Address
//           </label>
//           <textarea
//             name="address"
//             id="address"
//             className="w-full p-2 text-sm border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
//             placeholder="Enter your address"
//             required
//           />
//         </div>
//       </div>
//       <button
//         onClick={handlePreviousStep}
//         className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-4"
//       >
//         Previous
//       </button>
//       <button
//         type="submit"
//         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
//       >
//         Submit
//       </button>
//     </form>
//   );

//   return (
//     <div className="pt-40 pb-20 flex flex-col justify-center items-center min-h-screen bg-navygreen-100">
//       <h1 className="mb-8 text-xl font-bold">Social Group Request Form</h1>
//       <ol className="flex gap-4 items-center justify-center w-1/2  mb-4 sm:mb-5">
//         <li className={`flex justify-center items-center ${step === 1 ? 'text-gray-100' : 'text-gray-100'}`}>
//           <div
//             className={`flex items-center justify-center w-10 h-10 ${step === 1 ? 'bg-navygreen-300' : 'bg-navygreen-200'} rounded-full lg:h-12 lg:w-12 shrink-0`}
//           >
//             1
//           </div>
//         </li>
//         <li className={`flex justify-center items-center ${step === 2 ? 'text-gray-100' : 'text-gray-100'}`}>
//           <div
//             className={`flex items-center justify-center w-10 h-10 ${step === 2 ? 'bg-navygreen-300' : 'bg-navygreen-200'} rounded-full lg:h-12 lg:w-12 shrink-0`}
//           >
//             2
//           </div>
//         </li>
//       </ol>
//       <div className="p-6 rounded-pl bg-white shadow-md w-full max-w-2xl">
//         {step === 1 && renderStep1()}
//         {step === 2 && renderStep2()}
//       </div>
//     </div>
//   );
// };

// export default MultiStepForm;

// import React, { useState } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import { useNavigate } from "react-router-dom"; // If you're using react-router
// import useFetchUserLocalStorage from "../hooks/useFetchUserLocalStorage";

// const MultiStepForm = () => {
//   const [step, setStep] = useState(1);
//   const user = useFetchUserLocalStorage(); // Fetch logged-in user data
//   const navigate = useNavigate();

//   const handleNextStep = () => setStep((prevStep) => prevStep + 1);
//   const handlePreviousStep = () => setStep((prevStep) => prevStep - 1);

//   const formik = useFormik({
//     initialValues: {
//       bannerImage: null,
//       logo: null,
//       groupname: "",
//       initiative: "",
//       location: "",
//       faceImage: null,
//       cnic: "",
//       contact: "",
//       address: "",
//     },
//     validationSchema: Yup.object({
//       bannerImage: Yup.mixed()
//         .required("Banner image is required")
//         .test(
//           "fileType",
//           "Only image files are allowed",
//           (value) => !value || (value && value.type.includes("image"))
//         ),
//       logo: Yup.mixed()
//         .required("Logo is required")
//         .test(
//           "fileType",
//           "Only image files are allowed",
//           (value) => !value || (value && value.type.includes("image"))
//         ),
//       groupname: Yup.string().required("Group name is required"),
//       initiative: Yup.string()
//         .max(300, "Initiative must be 300 characters or less")
//         .required("Group initiative is required"),
//       location: Yup.string().required("Location is required"),
//       faceImage: Yup.mixed()
//         .required("Face image is required")
//         .test(
//           "fileType",
//           "Only image files are allowed",
//           (value) => !value || (value && value.type.includes("image"))
//         ),
//       cnic: Yup.string()
//         .matches(/^\d{5}-\d{7}-\d{1}$/, "CNIC format is invalid")
//         .required("CNIC is required"),
//       contact: Yup.string()
//         .matches(/^\d{11}$/, "Contact number must be 11 digits")
//         .required("Contact number is required"),
//       address: Yup.string().required("Address is required"),
//     }),
//     onSubmit: async (values) => {
//       try {
//         const formData = new FormData();
//         formData.append("bannerImage", values.bannerImage);
//         formData.append("logo", values.logo);
//         formData.append("groupname", values.groupname);
//         formData.append("initiative", values.initiative);
//         formData.append("location", values.location);
//         formData.append("faceImage", values.faceImage);
//         formData.append("cnic", values.cnic);
//         formData.append("contact", values.contact);
//         formData.append("address", values.address);
//         formData.append("userId", user._id); // Include user ID

//         // Submit the form data to the social group API
//         const response = await axios.post("http://localhost:5000/api/socialgroup", formData, {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         });
//         console.log("Data submitted:", response.data);

//         // Update user's isSocial attribute
//         const userUpdateResponse = await axios.put(`http://localhost:5000/api/user/${user._id}`, { isSocial: true });
//         console.log("User updated:", userUpdateResponse.data);

//         // Update user in local storage
//         const updatedUser = { ...user, isSocial: true };
//         localStorage.setItem("user", JSON.stringify(updatedUser));

//         // Navigate or show success message
//         alert("Form submitted successfully!");
//       } catch (error) {
//         console.error("Error submitting form:", error);
//       }
//     },
//   });

//   const renderStep1 = () => (
//     <form onSubmit={formik.handleSubmit}>
//       <h3 className="mb-6 text-lg font-semibold leading-none text-gray-900 dark:text-white">
//         Social Group Details
//       </h3>
//       <div className="grid gap-4 mb-4 sm:grid-cols-2">
//         <div>
//           <label
//             htmlFor="bannerImage"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Upload a banner image for your group
//           </label>
//           <input
//             type="file"
//             name="bannerImage"
//             id="bannerImage"
//             onChange={(event) =>
//               formik.setFieldValue("bannerImage", event.currentTarget.files[0])
//             }
//             className="w-full p-2 text-sm border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
//           />
//           {formik.touched.bannerImage && formik.errors.bannerImage ? (
//             <div className="text-red-500 text-sm">
//               {formik.errors.bannerImage}
//             </div>
//           ) : null}
//         </div>
//         <div>
//           <label
//             htmlFor="logo"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Upload your group's logo
//           </label>
//           <input
//             type="file"
//             name="logo"
//             id="logo"
//             onChange={(event) =>
//               formik.setFieldValue("logo", event.currentTarget.files[0])
//             }
//             className="w-full p-2 text-sm border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
//           />
//           {formik.touched.logo && formik.errors.logo ? (
//             <div className="text-red-500 text-sm">{formik.errors.logo}</div>
//           ) : null}
//         </div>
//         <div>
//           <label
//             htmlFor="groupname"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Group Name
//           </label>
//           <input
//             type="text"
//             name="groupname"
//             id="groupname"
//             className="w-full p-2 text-sm border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.groupname}
//             placeholder="Enter your group's name"
//             required
//           />
//           {formik.touched.groupname && formik.errors.groupname ? (
//             <div className="text-red-500 text-sm">{formik.errors.groupname}</div>
//           ) : null}
//         </div>
//         <div>
//           <label
//             htmlFor="initiative"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Group Initiative
//           </label>
//           <input
//             type="text"
//             name="initiative"
//             id="initiative"
//             className="w-full p-2 text-sm border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.initiative}
//             placeholder="Write about your group"
//             required
//           />
//           {formik.touched.initiative && formik.errors.initiative ? (
//             <div className="text-red-500 text-sm">{formik.errors.initiative}</div>
//           ) : null}
//         </div>
//         <div>
//           <label
//             htmlFor="location"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Your Location
//           </label>
//           <select
//             id="location"
//             name="location"
//             className="w-full p-2 text-sm border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.location}
//             required
//           >
//             <option value="" disabled>
//               Select The City
//             </option>
//             <option value="Islamabad">Islamabad</option>
//             {/* Add more options as needed */}
//           </select>
//           {formik.touched.location && formik.errors.location ? (
//             <div className="text-red-500 text-sm">{formik.errors.location}</div>
//           ) : null}
//         </div>
//       </div>
//       <button
//         type="button"
//         onClick={handleNextStep}
//         className="text-white shadow-lg bg-navygreen-200 hover:bg-navygreen-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//       >
//         Next Step: Payment Info
//       </button>
//     </form>
//   );

//   const renderStep2 = () => (
//     <form onSubmit={formik.handleSubmit}>
//       <h3 className="mb-6 text-lg font-medium leading-none text-gray-900 dark:text-white">
//         Verification Details
//       </h3>
//       <div className="grid gap-4 mb-4 sm:grid-cols-2">
//         <div>
//           <label
//             htmlFor="faceImage"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Upload face image
//           </label>
//           <input
//             type="file"
//             name="faceImage"
//             id="faceImage"
//             onChange={(event) =>
//               formik.setFieldValue("faceImage", event.currentTarget.files[0])
//             }
//             className="w-full p-2 text-sm border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
//             required
//           />
//           {formik.touched.faceImage && formik.errors.faceImage ? (
//             <div className="text-red-500 text-sm">{formik.errors.faceImage}</div>
//           ) : null}
//         </div>
//         <div>
//           <label
//             htmlFor="cnic"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             CNIC
//           </label>
//           <input
//             type="text"
//             name="cnic"
//             id="cnic"
//             className="w-full p-2 text-sm border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.cnic}
//             placeholder="xxxxx-xxxxxxx-x"
//             required
//           />
//           {formik.touched.cnic && formik.errors.cnic ? (
//             <div className="text-red-500 text-sm">{formik.errors.cnic}</div>
//           ) : null}
//         </div>
//         <div>
//           <label
//             htmlFor="contact"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Contact Number
//           </label>
//           <input
//             type="text"
//             name="contact"
//             id="contact"
//             className="w-full p-2 text-sm border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.contact}
//             placeholder="xxxxxxxxxxx"
//             required
//           />
//           {formik.touched.contact && formik.errors.contact ? (
//             <div className="text-red-500 text-sm">{formik.errors.contact}</div>
//           ) : null}
//         </div>
//         <div>
//           <label
//             htmlFor="address"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Address
//           </label>
//           <textarea
//             name="address"
//             id="address"
//             className="w-full p-2 text-sm border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.address}
//             placeholder="Enter your address"
//             required
//           />
//           {formik.touched.address && formik.errors.address ? (
//             <div className="text-red-500 text-sm">{formik.errors.address}</div>
//           ) : null}
//         </div>
//       </div>
//       <button
//         type="button"
//         onClick={handlePreviousStep}
//         className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-4"
//       >
//         Previous
//       </button>
//       <button
//         type="submit"
//         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
//       >
//         Submit
//       </button>
//     </form>
//   );

//   return (
//     <div className="pt-40 pb-20 flex flex-col justify-center items-center min-h-screen bg-navygreen-100">
//       <h1 className="mb-8 text-xl font-bold">Social Group Request Form</h1>
//       <ol className="flex gap-4 items-center justify-center w-1/2 mb-4 sm:mb-5">
//         <li
//           className={`flex justify-center items-center ${
//             step === 1 ? "text-gray-100" : "text-gray-100"
//           }`}
//         >
//           <div
//             className={`flex items-center justify-center w-10 h-10 ${
//               step === 1 ? "bg-navygreen-300" : "bg-navygreen-200"
//             } rounded-full lg:h-12 lg:w-12 shrink-0`}
//           >
//             1
//           </div>
//         </li>
//         <li
//           className={`flex justify-center items-center ${
//             step === 2 ? "text-gray-100" : "text-gray-100"
//           }`}
//         >
//           <div
//             className={`flex items-center justify-center w-10 h-10 ${
//               step === 2 ? "bg-navygreen-300" : "bg-navygreen-200"
//             } rounded-full lg:h-12 lg:w-12 shrink-0`}
//           >
//             2
//           </div>
//         </li>
//       </ol>
//       <div className="p-6 rounded-pl bg-white shadow-md w-full max-w-2xl">
//         {step === 1 && renderStep1()}
//         {step === 2 && renderStep2()}
//       </div>
//     </div>
//   );
// };

// export default MultiStepForm;

