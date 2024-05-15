// import React, { useState } from "react";
// // import group from '../assets/group.svg';
// // import verify from '../assets/verify.svg';
// import Button from "../components/button";
// import axios from "axios";

// const SocialSignUpPage = () => {
//     const [imageFileName, setImageFileName] = useState('');
//     const [bannerFileName, setBannerFileName] = useState('');
//     const [faceImageFileName, setFaceImageFileName] = useState('');

//     const [step, setStep] = useState(1);
//     const [formDataStep1, setFormDataStep1] = useState({
//         user: JSON.parse(localStorage.getItem("user")),
//         name: '',
//         initiative: '',
//         image: null,
//         banner: null,
//         location: ''
//     });
//     const [formDataStep2, setFormDataStep2] = useState({
//         cnic: '',
//         faceImage: null,
//         contact: '',
//         address: ''
//     });

//     const handleFileInputChange = (event, setFileState) => {
//         const file = event.target.files[0]; // Get the first file from the selected files
//         if (file) {
//             setFileState(file.name); // Set the file name in the state
//         }
//     };

//     const handleStep1Submit = (e) => {
//         e.preventDefault();
//         // Validate form data if needed
//         // Proceed to step 2
//         setFormDataStep1({
//             ...formDataStep1,
//             image: imageFileName,
//             banner: bannerFileName
//         });
//         setStep(2);
//     };

//     const handleBackButton = (e) => {
//         e.preventDefault();
//         setStep(1);
//     }

//     const handleStep2Submit = async (e) => {
//         e.preventDefault();
//         try {
//             // Combine form data from both steps
//             const formData = {
//                 ...formDataStep1,
//                 ...formDataStep2,
//                 faceImage: faceImageFileName
//             };

//             // Make API call with combined form data
//             const response = await axios.post("http://localhost:5000/api/socialgroup", formData);
            
//             console.log("Data submitted:", response.data);
//             // Redirect or show success message
//         } catch (error) {
//             console.error("Error submitting data:", error);
//             // Handle error
//         }
//     };

//     const renderStep1Form = () => {
//         return (
//             <form onSubmit={handleStep1Submit}>
//                 <h1 className="font-josefin-sans text-2xl text-gray-100 font-bold mb-6">Become a Social Group</h1>
//                 <label for="image" class="block font-mini font-josefin-sans mb-1">Logo</label>
//                 <div class="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
//                     <input 
//                         id="image" 
//                         class="bg-inherit pl-2 w-full outline-none border-none" 
//                         type="file" 
//                         name="image" 
//                         accept="image/*"
//                         required
//                         value={formDataStep1.image}
//                         onChange={(e) => handleFileInputChange(e, setImageFileName)}
//                     />
//                 </div>
//                 <label for="banner" class="block font-mini font-josefin-sans mb-1">Banner</label>
//                 <div class="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
//                     <input 
//                         id="banner" 
//                         class="bg-inherit pl-2 w-full outline-none border-none" 
//                         type="file" 
//                         name="banner" 
//                         accept="image/*"
//                         required
//                         value={formDataStep1.banner}
//                         onChange={(e) => handleFileInputChange(e, setBannerFileName)}
//                     />
//                 </div>
//                 <label for="name" class="block font-mini font-josefin-sans mb-1">Name</label>
//                 <div class="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
//                     <input 
//                         id="name" 
//                         class="bg-inherit pl-2 w-full outline-none border-none" 
//                         type="text" 
//                         name="name" 
//                         placeholder="Enter your group's name" 
//                         required
//                         value={formDataStep1.name}
//                     />
//                 </div>
//                 <label for="initiative" class="block font-mini font-josefin-sans mb-1">Initiative</label>
//                 <div class="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
//                     <textarea 
//                         id="initiative" 
//                         class="bg-inherit pl-2 w-full outline-none border-none" 
//                         name="initiative" 
//                         placeholder="Enter detail about your social group" 
//                         maxLength="250"
//                         required
//                         value={formDataStep1.initiative}
//                     />
//                 </div>
//                 <div class="mb-4">
//                     <label for="location" class="block font-mini font-josefin-sans mb-1">Location</label>
//                     <select id="location" name="location" class="bg-neutral font-josefin-sans block w-full text-mini shadow-sm sm:text-sm rounded-2xl py-4 px-4">
//                         <option value="" disabled selected>Select The City</option>
//                         <option value="Islamabad">Islamabad</option>
//                         <option value="" disabled>Punjab Cities</option>
//                         <option value="Ahmed Nager Chatha">Ahmed Nager Chatha</option>
//                         <option value="Ahmadpur East">Ahmadpur East</option>
//                         <option value="Ali Khan Abad">Ali Khan Abad</option>
//                         <option value="Alipur">Alipur</option>
//                         <option value="Arifwala">Arifwala</option>
//                         <option value="Attock">Attock</option>
//                         <option value="Bhera">Bhera</option>
//                         <option value="Bhalwal">Bhalwal</option>
//                         <option value="Bahawalnagar">Bahawalnagar</option>
//                         <option value="Bahawalpur">Bahawalpur</option>
//                         <option value="Bhakkar">Bhakkar</option>
//                         <option value="Burewala">Burewala</option>
//                         <option value="Chillianwala">Chillianwala</option>
//                         <option value="Chakwal">Chakwal</option>
//                         <option value="Chichawatni">Chichawatni</option>
//                         <option value="Chiniot">Chiniot</option>
//                         <option value="Chishtian">Chishtian</option>
//                         <option value="Daska">Daska</option>
//                         <option value="Darya Khan">Darya Khan</option>
//                         <option value="Dera Ghazi Khan">Dera Ghazi Khan</option>
//                         <option value="Dhaular">Dhaular</option>
//                         <option value="Dina">Dina</option>
//                         <option value="Dinga">Dinga</option>
//                         <option value="Dipalpur">Dipalpur</option>
//                         <option value="Faisalabad">Faisalabad</option>
//                         <option value="Ferozewala">Ferozewala</option>
//                         <option value="Fateh Jhang">Fateh Jang</option>
//                         <option value="Ghakhar Mandi">Ghakhar Mandi</option>
//                         <option value="Gojra">Gojra</option>
//                         <option value="Gujranwala">Gujranwala</option>
//                         <option value="Gujrat">Gujrat</option>
//                         <option value="Gujar Khan">Gujar Khan</option>
//                         <option value="Hafizabad">Hafizabad</option>
//                         <option value="Haroonabad">Haroonabad</option>
//                         <option value="Hasilpur">Hasilpur</option>
//                         <option value="Haveli Lakha">Haveli Lakha</option>
//                         <option value="Jatoi">Jatoi</option>
//                         <option value="Jalalpur">Jalalpur</option>
//                         <option value="Jattan">Jattan</option>
//                         <option value="Jampur">Jampur</option>
//                         <option value="Jaranwala">Jaranwala</option>
//                         <option value="Jhang">Jhang</option>
//                         <option value="Jhelum">Jhelum</option>
//                         <option value="Kalabagh">Kalabagh</option>
//                         <option value="Karor Lal Esan">Karor Lal Esan</option>
//                         <option value="Kasur">Kasur</option>
//                         <option value="Kamalia">Kamalia</option>
//                         <option value="Kamoke">Kamoke</option>
//                         <option value="Khanewal">Khanewal</option>
//                         <option value="Khanpur">Khanpur</option>
//                         <option value="Kharian">Kharian</option>
//                         <option value="Khushab">Khushab</option>
//                         <option value="Kot Addu">Kot Addu</option>
//                         <option value="Jauharabad">Jauharabad</option>
//                         <option value="Lahore">Lahore</option>
//                         <option value="Lalamusa">Lalamusa</option>
//                         <option value="Layyah">Layyah</option>
//                         <option value="Liaquat Pur">Liaquat Pur</option>
//                         <option value="Lodhran">Lodhran</option>
//                         <option value="Malakwal">Malakwal</option>
//                         <option value="Mamoori">Mamoori</option>
//                         <option value="Mailsi">Mailsi</option>
//                         <option value="Mandi Bahauddin">Mandi Bahauddin</option>
//                         <option value="Mian Channu">Mian Channu</option>
//                         <option value="Mianwali">Mianwali</option>
//                         <option value="Multan">Multan</option>
//                         <option value="Murree">Murree</option>
//                         <option value="Muridke">Muridke</option>
//                         <option value="Mianwali Bangla">Mianwali Bangla</option>
//                         <option value="Muzaffargarh">Muzaffargarh</option>
//                         <option value="Narowal">Narowal</option>
//                         <option value="Nankana Sahib">Nankana Sahib</option>
//                         <option value="Okara">Okara</option>
//                         <option value="Renala Khurd">Renala Khurd</option>
//                         <option value="Pakpattan">Pakpattan</option>
//                         <option value="Pattoki">Pattoki</option>
//                         <option value="Pir Mahal">Pir Mahal</option>
//                         <option value="Qaimpur">Qaimpur</option>
//                         <option value="Qila Didar Singh">Qila Didar Singh</option>
//                         <option value="Rabwah">Rabwah</option>
//                         <option value="Raiwind">Raiwind</option>
//                         <option value="Rajanpur">Rajanpur</option>
//                         <option value="Rahim Yar Khan">Rahim Yar Khan</option>
//                         <option value="Rawalpindi">Rawalpindi</option>
//                         <option value="Sadiqabad">Sadiqabad</option>
//                         <option value="Safdarabad">Safdarabad</option>
//                         <option value="Sahiwal">Sahiwal</option>
//                         <option value="Sangla Hill">Sangla Hill</option>
//                         <option value="Sarai Alamgir">Sarai Alamgir</option>
//                         <option value="Sargodha">Sargodha</option>
//                         <option value="Shakargarh">Shakargarh</option>
//                         <option value="Sheikhupura">Sheikhupura</option>
//                         <option value="Sialkot">Sialkot</option>
//                         <option value="Sohawa">Sohawa</option>
//                         <option value="Soianwala">Soianwala</option>
//                         <option value="Siranwali">Siranwali</option>
//                         <option value="Talagang">Talagang</option>
//                         <option value="Taxila">Taxila</option>
//                         <option value="Toba Tek Singh">Toba Tek Singh</option>
//                         <option value="Vehari">Vehari</option>
//                         <option value="Wah Cantonment">Wah Cantonment</option>
//                         <option value="Wazirabad">Wazirabad</option>
//                         <option value="" disabled>Sindh Cities</option>
//                         <option value="Badin">Badin</option>
//                         <option value="Bhirkan">Bhirkan</option>
//                         <option value="Rajo Khanani">Rajo Khanani</option>
//                         <option value="Chak">Chak</option>
//                         <option value="Dadu">Dadu</option>
//                         <option value="Digri">Digri</option>
//                         <option value="Diplo">Diplo</option>
//                         <option value="Dokri">Dokri</option>
//                         <option value="Ghotki">Ghotki</option>
//                         <option value="Haala">Haala</option>
//                         <option value="Hyderabad">Hyderabad</option>
//                         <option value="Islamkot">Islamkot</option>
//                         <option value="Jacobabad">Jacobabad</option>
//                         <option value="Jamshoro">Jamshoro</option>
//                         <option value="Jungshahi">Jungshahi</option>
//                         <option value="Kandhkot">Kandhkot</option>
//                         <option value="Kandiaro">Kandiaro</option>
//                         <option value="Karachi">Karachi</option>
//                         <option value="Kashmore">Kashmore</option>
//                         <option value="Keti Bandar">Keti Bandar</option>
//                         <option value="Khairpur">Khairpur</option>
//                         <option value="Kotri">Kotri</option>
//                         <option value="Larkana">Larkana</option>
//                         <option value="Matiari">Matiari</option>
//                         <option value="Mehar">Mehar</option>
//                         <option value="Mirpur Khas">Mirpur Khas</option>
//                         <option value="Mithani">Mithani</option>
//                         <option value="Mithi">Mithi</option>
//                         <option value="Mehrabpur">Mehrabpur</option>
//                         <option value="Moro">Moro</option>
//                         <option value="Nagarparkar">Nagarparkar</option>
//                         <option value="Naudero">Naudero</option>
//                         <option value="Naushahro Feroze">Naushahro Feroze</option>
//                         <option value="Naushara">Naushara</option>
//                         <option value="Nawabshah">Nawabshah</option>
//                         <option value="Nazimabad">Nazimabad</option>
//                         <option value="Qambar">Qambar</option>
//                         <option value="Qasimabad">Qasimabad</option>
//                         <option value="Ranipur">Ranipur</option>
//                         <option value="Ratodero">Ratodero</option>
//                         <option value="Rohri">Rohri</option>
//                         <option value="Sakrand">Sakrand</option>
//                         <option value="Sanghar">Sanghar</option>
//                         <option value="Shahbandar">Shahbandar</option>
//                         <option value="Shahdadkot">Shahdadkot</option>
//                         <option value="Shahdadpur">Shahdadpur</option>
//                         <option value="Shahpur Chakar">Shahpur Chakar</option>
//                         <option value="Shikarpaur">Shikarpaur</option>
//                         <option value="Sukkur">Sukkur</option>
//                         <option value="Tangwani">Tangwani</option>
//                         <option value="Tando Adam Khan">Tando Adam Khan</option>
//                         <option value="Tando Allahyar">Tando Allahyar</option>
//                         <option value="Tando Muhammad Khan">Tando Muhammad Khan</option>
//                         <option value="Thatta">Thatta</option>
//                         <option value="Umerkot">Umerkot</option>
//                         <option value="Warah">Warah</option>
//                         <option value="" disabled>Khyber Cities</option>
//                         <option value="Abbottabad">Abbottabad</option>
//                         <option value="Adezai">Adezai</option>
//                         <option value="Alpuri">Alpuri</option>
//                         <option value="Akora Khattak">Akora Khattak</option>
//                         <option value="Ayubia">Ayubia</option>
//                         <option value="Banda Daud Shah">Banda Daud Shah</option>
//                         <option value="Bannu">Bannu</option>
//                         <option value="Batkhela">Batkhela</option>
//                         <option value="Battagram">Battagram</option>
//                         <option value="Birote">Birote</option>
//                         <option value="Chakdara">Chakdara</option>
//                         <option value="Charsadda">Charsadda</option>
//                         <option value="Chitral">Chitral</option>
//                         <option value="Daggar">Daggar</option>
//                         <option value="Dargai">Dargai</option>
//                         <option value="Darya Khan">Darya Khan</option>
//                         <option value="Dera Ismail Khan">Dera Ismail Khan</option>
//                         <option value="Doaba">Doaba</option>
//                         <option value="Dir">Dir</option>
//                         <option value="Drosh">Drosh</option>
//                         <option value="Hangu">Hangu</option>
//                         <option value="Haripur">Haripur</option>
//                         <option value="Karak">Karak</option>
//                         <option value="Kohat">Kohat</option>
//                         <option value="Kulachi">Kulachi</option>
//                         <option value="Lakki Marwat">Lakki Marwat</option>
//                         <option value="Latamber">Latamber</option>
//                         <option value="Madyan">Madyan</option>
//                         <option value="Mansehra">Mansehra</option>
//                         <option value="Mardan">Mardan</option>
//                         <option value="Mastuj">Mastuj</option>
//                         <option value="Mingora">Mingora</option>
//                         <option value="Nowshera">Nowshera</option>
//                         <option value="Paharpur">Paharpur</option>
//                         <option value="Pabbi">Pabbi</option>
//                         <option value="Peshawar">Peshawar</option>
//                         <option value="Saidu Sharif">Saidu Sharif</option>
//                         <option value="Shorkot">Shorkot</option>
//                         <option value="Shewa Adda">Shewa Adda</option>
//                         <option value="Swabi">Swabi</option>
//                         <option value="Swat">Swat</option>
//                         <option value="Tangi">Tangi</option>
//                         <option value="Tank">Tank</option>
//                         <option value="Thall">Thall</option>
//                         <option value="Timergara">Timergara</option>
//                         <option value="Tordher">Tordher</option>
//                         <option value="" disabled>Balochistan Cities</option>
//                         <option value="Awaran">Awaran</option>
//                         <option value="Barkhan">Barkhan</option>
//                         <option value="Chagai">Chagai</option>
//                         <option value="Dera Bugti">Dera Bugti</option>
//                         <option value="Gwadar">Gwadar</option>
//                         <option value="Harnai">Harnai</option>
//                         <option value="Jafarabad">Jafarabad</option>
//                         <option value="Jhal Magsi">Jhal Magsi</option>
//                         <option value="Kacchi">Kacchi</option>
//                         <option value="Kalat">Kalat</option>
//                         <option value="Kech">Kech</option>
//                         <option value="Kharan">Kharan</option>
//                         <option value="Khuzdar">Khuzdar</option>
//                         <option value="Killa Abdullah">Killa Abdullah</option>
//                         <option value="Killa Saifullah">Killa Saifullah</option>
//                         <option value="Kohlu">Kohlu</option>
//                         <option value="Lasbela">Lasbela</option>
//                         <option value="Lehri">Lehri</option>
//                         <option value="Loralai">Loralai</option>
//                         <option value="Mastung">Mastung</option>
//                         <option value="Musakhel">Musakhel</option>
//                         <option value="Nasirabad">Nasirabad</option>
//                         <option value="Nushki">Nushki</option>
//                         <option value="Panjgur">Panjgur</option>
//                         <option value="Pishin Valley">Pishin Valley</option>
//                         <option value="Quetta">Quetta</option>
//                         <option value="Sherani">Sherani</option>
//                         <option value="Sibi">Sibi</option>
//                         <option value="Sohbatpur">Sohbatpur</option>
//                         <option value="Washuk">Washuk</option>
//                         <option value="Zhob">Zhob</option>
//                         <option value="Ziarat">Ziarat</option>
//                     </select>
//                 </div>
//                 <div class="mt-4">
//                     <button type="submit" class="font-josefin-sans bg-gray-100 text-white text-sm font-semibold px-4 py-2 rounded hover:rounded-full border-2 border-gray-100">Next</button>
//                 </div>
//             </form>
//         );
//     };

//     const renderStep2Form = () => {
//         return (
//             <form onSubmit={handleStep2Submit}>
//                 <h1 className="font-josefin-sans text-2xl text-gray-100 font-bold mb-6">Get yourself Verified</h1>
//                 <label for="image" class="block font-mini font-josefin-sans mb-1">Face Image</label>
//                 <div class="flex items-center mb-4 py-2 rounded-2xl">
//                     <input 
//                         id="image" 
//                         class="pl-2 w-full outline-none border-none" 
//                         type="file" 
//                         name="image" 
//                         accept="image/*"
//                         required
//                         value={formDataStep2.faceImage}
//                         onChange={(e) => handleFileInputChange(e, setFaceImageFileName)}
//                     />
//                 </div>
//                 <label for="cnic" class="block font-mini font-josefin-sans mb-1">CNIC</label>
//                 <div class="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
//                     <input 
//                         id="cnic" 
//                         class="bg-inherit font-josefin-sans pl-2 w-full outline-none border-none" 
//                         type="text" 
//                         name="cnic" 
//                         placeholder="Enter your CNIC"
//                         required
//                         maxLength="15" // Set maximum length to 15 characters (including hyphens)
//                         value={formDataStep2.cnic}
//                         onChange={(e) => {
//                             const inputValue = e.target.value;
//                             // Remove non-numeric characters
//                             const numericValue = inputValue.replace(/\D/g, '');
//                             // Format CNIC with hyphens
//                             const formattedValue = numericValue.replace(/^(\d{5})(\d{7})(\d{1})?$/, '$1-$2-$3');
//                             // Update state with formatted CNIC
//                             setFormDataStep2(prevState => ({
//                                 ...prevState,
//                                 cnic: formattedValue
//                             }));
//                         }}
//                         onKeyPress={(e) => {
//                             // Allow only numbers and hyphens
//                             const keyCode = e.keyCode || e.which;
//                             const keyValue = String.fromCharCode(keyCode);
//                             const regex = /[0-9-]/; // Only allow numbers and hyphens
//                             if (!regex.test(keyValue)) {
//                                 e.preventDefault();
//                             }
//                         }}
//                     />
//                 </div>
//                 <label for="contact" class="block font-mini font-josefin-sans mb-1">Contact number</label>
//                 <div class="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
//                     <input 
//                         id="contact" 
//                         class="bg-inherit pl-2 font-josefin-sans w-full outline-none border-none" 
//                         type="text" 
//                         name="contact" 
//                         placeholder="Enter your contact number" 
//                         maxLength='11'
//                         required
//                         value={formDataStep2.contact}
//                         onKeyPress={(e) => {
//                             // Allow only numbers
//                             const keyCode = e.keyCode || e.which;
//                             const keyValue = String.fromCharCode(keyCode);
//                             const regex = /[0-9]/; // Only allow numbers
//                             if (!regex.test(keyValue)) {
//                                 e.preventDefault();
//                             }
//                         }}
//                         onInput={(e) => {
//                             // Disable input after 11 digits
//                             const inputValue = e.target.value;
//                             if (inputValue.length >= 11) {
//                                 e.preventDefault();
//                             }
//                         }}
//                     />
//                 </div>
//                 <label for="address" class="block font-mini font-josefin-sans mb-1">Address</label>
//                 <div class="flex bg-neutral items-center mb-4 py-2 px-3 rounded-2xl">
//                     <textarea 
//                         id="address" 
//                         class="bg-inherit pl-2 font-josefin-sans w-full outline-none border-none" 
//                         name="address" 
//                         placeholder="Enter your full address" 
//                         required
//                         value={formDataStep2.address}
//                     />
//                 </div>
//                 <div class="flex gap-4 mt-4">
//                     <Button onClick={handleBackButton} text='Back'/>
//                     <Button text='Submit' color='fill'/>
//                 </div>
//             </form>
//         );
//     };

//     return (
//         <div className="flex items-center gap-[100px] justify-center pt-40 pb-20">
//             {step === 1 ? (
//                 <>
//                     <div className="border border-2 border-gray-100 bg-white px-14 py-8 rounded-lg ml-[100px] w-[450px]">
//                         {renderStep1Form()}
//                     </div>
//                     <img src={`${process.env.PUBLIC_URL}/assets/group.svg`} alt='leaves illustration' className="w-[600px] mt-8"/>
//                 </>
//             ) : (
//                 <>
//                     <img src={`${process.env.PUBLIC_URL}/assets/verify.svg`} alt='leaves illustration' className="self-center w-[450px]"/>
//                     <div className="bg-white p-8 rounded-lg ml-[100px] w-[450px] mt-8">
//                         {renderStep2Form()}
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// }

// export default SocialSignUpPage;

import React, { useState, useEffect } from "react";
import Button from "../components/button";
import axios from "axios";

const SocialSignUpPage = () => {
    const [imageFileName, setImageFileName] = useState('');
    const [bannerFileName, setBannerFileName] = useState('');
    const [faceImageFileName, setFaceImageFileName] = useState('');
    const [user, setUser] = useState(null);
    const [step, setStep] = useState(1);
    useEffect(() => {
        // Retrieve user information from local storage
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
        }
    }, []);
    const [formDataStep1, setFormDataStep1] = useState({
        userId: '662e4c35587519f2d1d88856',
        name: '',
        initiative: '',
        image: '',
        banner: '',
        location: ''
    });
    const [formDataStep2, setFormDataStep2] = useState({
        cnic: '',
        faceImage: '',
        contact: '',
        address: ''
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

    const handleStep1Submit = (e) => {
        e.preventDefault();
        setStep(2);
        console.log('user' + formDataStep1.userId)
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
        try {
            const formData = {
                ...formDataStep1,
                ...formDataStep2,
            };

            console.log('full: ' + formData.image);
            console.log('full: ' + formData.banner);
            console.log('full: ' + formData.contact);
            console.log('full: ' + formData.faceImage);

            const response = await axios.post("http://localhost:5000/api/socialgroup", formData);
            console.log("Data submitted:", response.data);
            // Redirect or show success message
        } catch (error) {
            console.error("Error submitting data:", error);
            
            // Handle error
        }
    };

    const renderStep1Form = () => {
        return (
            <form onSubmit={handleStep1Submit}>
                <h1 className="font-josefin-sans text-2xl text-gray-100 font-bold mb-6">Become a Social Group</h1>
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
                        maxLength="250"
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
                        <option value="" disabled>Select The City</option>
                        <option value="Islamabad">Islamabad</option>
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
        <div className="flex items-center gap-[100px] justify-center pt-40 pb-20">
            {step === 1 ? (
                <>
                    <div className="border border-2 border-gray-100 bg-white px-14 py-8 rounded-lg ml-[100px] w-[450px]">
                        {renderStep1Form()}
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/assets/group.svg`} alt='leaves illustration' className="w-[600px] mt-8"/>
                </>
            ) : (
                <>
                    <img src={`${process.env.PUBLIC_URL}/assets/verify.svg`} alt='leaves illustration' className="self-center w-[450px]"/>
                    <div className="bg-white p-8 rounded-lg ml-[100px] w-[450px] mt-8">
                        {renderStep2Form()}
                    </div>
                </>
            )}
        </div>
    );
}

export default SocialSignUpPage;
