import React, { useState } from 'react';
import Button from '../components/button';
import useCreateSeller from '../hooks/useCreateSeller';


const SellerSignup = () => {
    const [step, setStep] = useState(1);
    const { createSeller, loading, error_r } = useCreateSeller();
    const [businessCertificate, setBusinessCertificateFileName] = useState('');

    const [formDataStep1, setFormDataStep1] = useState({
        storeName: '',
        businessEmail: '',
        businessContact: '',
        storeDescription: '',
        // location: ''
    });

    const [formDataStep2, setFormDataStep2] = useState({
        sellerName: '',
        email: '',
        contact: '',
        password: '',
    });

    const [formDataStep3, setFormDataStep3] = useState({
        businessCertificate: '',
        cnic: '',
        taxID: '',
    });

    //handling image file inputs
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

    //handling text inputs
    const handleInputChange = (e, setFormData) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleStep1Submit = (e) => {
        e.preventDefault();
        setStep(step + 1);
        console.log('storeName' + formDataStep1.storeName);
    };
    const handleStep2Submit = (e) => {
        e.preventDefault();
        setStep(step + 1);
        console.log('sellerName' + formDataStep2.sellerName);
    };
    const handleStep3Submit = (e) => {
        e.preventDefault();
        try {
            console.log('cnic' + formDataStep3.cnic);
            const formData  = {
                ...formDataStep1,
                ...formDataStep2,
                ...formDataStep3,
            }
            createSeller(formData);
        } catch (error) {
            console.log("error submiting seller data: " + error_r);
        }
    };

    const handleBack = (e) => {
        e.preventDefault();
        setStep(step - 1);
    };

    const Step1 = () => {
        return (
            <form>
                {/* Step 1 Form Content */}
                <div className='mb-4'>
                    <label htmlFor="storeName" className="block text-sm font-medium font-semibold">Store Name</label>
                    <input
                        type="text"
                        name="storeName"
                        className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                        placeholder="Enter your store name"
                        value={formDataStep1.storeName}
                        onChange={(e) => handleInputChange(e, setFormDataStep1)}
                        required
                    />
                </div>
                <div className="flex gap-3 mb-4 w-full">
                    <div className='w-full'>
                        <label htmlFor="businessEmail" className="block text-sm font-medium font-semibold">Business Email</label>
                        <input
                            type="email"
                            name="businessEmail"
                            className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                            placeholder="Enter your business email"
                            value={formDataStep1.businessEmail}
                            onChange={(e) => handleInputChange(e, setFormDataStep1)}
                            required
                        />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="businessContact" className="block text-sm font-medium font-semibold">Business Contact</label>
                        <input
                            type="text"
                            name="businessContact"
                            className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                            placeholder="Enter your store contact"
                            value={formDataStep1.businessContact}
                            onChange={(e) => handleInputChange(e, setFormDataStep1)}
                            required
                        />
                    </div>
                </div>
                <div className='mb-4'>
                    <label htmlFor="storeDescription" className="block text-sm font-medium font-semibold">Store Description</label>
                    <textarea
                        name="storeDescription"
                        className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                        placeholder="Tell us about your store"
                        resize="none"
                        value={formDataStep1.storeDescription}
                        onChange={(e) => handleInputChange(e, setFormDataStep1)}
                        required
                    />
                </div>
                
                <Button 
                    text="Next" 
                    type="button" 
                    className="w-full mt-2 py-2 bg-gray-100 text-white shadow-md" 
                    onClick={handleStep1Submit}
                />
            </form>
        );
    };

    const Step2 = () => {
        return (
            <form>
                {/* Step 2 Form Content */}
                <div className="mb-4">
                    <label htmlFor="sellerName" className="block text-sm font-medium font-semibold">Full Name</label>
                    <input
                        type="text"
                        name="sellerName"
                        className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                        placeholder="Enter your full name"
                        value={formDataStep2.sellerName}
                        onChange={(e) => handleInputChange(e, setFormDataStep2)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium font-semibold">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                        placeholder="Enter your email"
                        value={formDataStep2.email}
                        onChange={(e) => handleInputChange(e, setFormDataStep2)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="contact" className="block text-sm font-medium font-semibold">Contact</label>
                    <input
                        type="text"
                        name="contact"
                        className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                        placeholder="Enter your contact"
                        value={formDataStep2.contact}
                        onChange={(e) => handleInputChange(e, setFormDataStep2)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium font-semibold">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                        placeholder="Enter a new password for your store"
                        value={formDataStep2.password}
                        onChange={(e) => handleInputChange(e, setFormDataStep2)}
                        required
                    />
                </div>
                <div className="flex gap-4 justify-between">
                    <Button 
                        text="Back" 
                        type="button" 
                        className="w-full mt-2 bg-transparent py-2 shadow-md" 
                        onClick={handleBack}
                    />
                    <Button 
                        text="Next" 
                        type="button" 
                        className="w-full mt-2 bg-gray-100 py-2 text-white shadow-md"
                        onClick={handleStep2Submit}
                    />
                </div>
            </form>
        );
    };

    const Step3 = () => {
        return (
            <form>
                {/* Step 3 Form Content */}
                <div className="mb-4">
                    <label htmlFor="businessCertificate" className="block text-sm font-medium font-semibold">Business Certificate</label>
                    <input
                        type="file"
                        name="businessCertificate"
                        className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                        accept="image/*"
                        onChange={(e) => handleFileInputChange(e, setBusinessCertificateFileName, setFormDataStep3, 'businessCertificate')}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="cnic" className="block text-sm font-medium font-semibold">CNIC</label>
                    <input
                        type="text"
                        name="cnic"
                        className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                        placeholder="Enter your CNIC"
                        value={formDataStep3.cnic}
                        onChange={(e) => handleInputChange(e, setFormDataStep3)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="taxID" className="block text-sm font-medium font-semibold">Tax ID</label>
                    <input
                        type="text"
                        name="taxID"
                        className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                        placeholder="Enter your Tax ID"
                        required
                        value={formDataStep3.taxID}
                        onChange={(e) => handleInputChange(e, setFormDataStep3)}  
                    />
                </div>
                <div className="flex gap-4 justify-between">
                    <Button 
                        text="Back" 
                        type="button" 
                        className="w-full mt-2 bg-transparent shadow-md" 
                        onClick={handleBack}
                    />
                    <Button 
                        text="Submit" 
                        type="submit" 
                        className="w-full mt-2 py-2 bg-gray-100 text-white shadow-md"
                        onClick={handleStep3Submit}
                    />
                </div>
            </form>
        );
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral">
            <div className="flex bg-white rounded-pl p-2 shadow-xl overflow-hidden min-h-[650px] min-w-[1200px] mx-auto">
                {/* Left Section */}
                <div className="hidden rounded-pl md:flex md:w-1/2 flex-col justify-between bg-cover bg-center p-8" style={{ backgroundImage: `url('/assets/products/plant-1.jpeg')` }}>
                    <div className="text-white">
                        <button className="bg-transparent border border-white px-3 py-1 rounded-md mb-6 hover:bg-white hover:text-[#1a1523] transition duration-300">
                        Back to website →
                        </button>
                    </div>
                    <div className="text-white text-md font-semibold mb-4">
                        Capturing Moments, Creating Memories
                    </div>
                </div> 

                {/* Right Section */}
                <div className="w-full md:w-1/2 p-8 bg-inherit font-josefin-sans rounded-[20px]">
                    <div className="flex flex-col justify-center h-full">
                        <ol className="flex self-center gap-4 w-full items-center justify-center w-1/2 mb-4 sm:mb-5">
                            <li className={`flex justify-center items-center ${step === 1 ? 'text-gray-100' : 'text-gray-100'}`}>
                                <div
                                    className={`flex items-center border-2 border-gray-100 justify-center w-10 h-10 ${step === 1 ? 'bg-gray-100 text-white' : 'bg-transparent text-gray-100'} rounded-full lg:h-12 lg:w-12 shrink-0`}
                                >
                                    1
                                </div>
                            </li>
                            <li className={`flex justify-center items-center ${step === 2 ? 'text-gray-100' : 'text-gray-100'}`}>
                                <div
                                    className={`flex items-center border-2 border-gray-100 justify-center w-10 h-10 ${step === 2 ? 'bg-gray-100 text-white' : 'bg-transparent text-gray-100'} rounded-full lg:h-12 lg:w-12 shrink-0`}
                                >
                                    2
                                </div>
                            </li>
                            <li className={`flex justify-center items-center ${step === 3 ? 'text-gray-100' : 'text-gray-100'}`}>
                                <div
                                    className={`flex items-center border-2 border-gray-100 justify-center w-10 h-10 ${step === 3 ? 'bg-gray-100 text-white' : 'bg-transparent text-gray-100'} rounded-full lg:h-12 lg:w-12 shrink-0`}
                                >
                                    3
                                </div>
                            </li>
                        </ol>

                        {/* Heading */}
                        <h2 className="text-lg font-bold mb-8">Create your store on Plantify</h2>

                        {/* Form Steps */}
                        <div>
                            {step === 1 && Step1()}
                            {step === 2 && Step2()}
                            {step === 3 && Step3()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerSignup;

// import React, { useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import Button from '../components/button';
// import useCreateSeller from '../hooks/useCreateSeller';

// // Yup validation schemas for each step
// const step1Schema = Yup.object({
//     storeName: Yup.string()
//         .required('Store name is required'),
//     businessEmail: Yup.string()
//         .email('Invalid email format')
//         .required('Business email is required'),
//     businessContact: Yup.string()
//         .matches(/^\d+$/, 'Contact must be digits only')
//         .required('Business contact is required'),
//     storeDescription: Yup.string()
//         .required('Store description is required'),
// });

// const step2Schema = Yup.object({
//     sellerName: Yup.string()
//         .required('Full name is required'),
//     email: Yup.string()
//         .email('Invalid email format')
//         .required('Email is required'),
//     contact: Yup.string()
//         .matches(/^\d+$/, 'Contact must be digits only')
//         .required('Contact is required'),
//     password: Yup.string()
//         .min(8, 'Password must be at least 8 characters long')
//         .required('Password is required'),
// });

// const step3Schema = Yup.object({
//     businessCertificate: Yup.string()
//         .required('Business certificate is required'),
//     cnic: Yup.string()
//         .matches(/^\d{5}-\d{7}-\d{1}$/, 'Invalid CNIC format')
//         .required('CNIC is required'),
//     taxID: Yup.string().nullable(), // Can be null or string
// });

// const SellerSignup = () => {
//     const [step, setStep] = useState(1);
//     const { createSeller, loading, error_r } = useCreateSeller();

//     const initialValuesStep1 = {
//         storeName: '',
//         businessEmail: '',
//         businessContact: '',
//         storeDescription: '',
//     };

//     const initialValuesStep2 = {
//         sellerName: '',
//         email: '',
//         contact: '',
//         password: '',
//     };

//     const initialValuesStep3 = {
//         businessCertificate: '',
//         cnic: '',
//         taxID: '',
//     };

//     const handleStepSubmit = (values, actions) => {
//         if (step === 1) {
//             setStep(2);
//         } else if (step === 2) {
//             setStep(3);
//         } else if (step === 3) {
//             // Final submit
//             try {
//                 const formData = { ...initialValuesStep1, ...initialValuesStep2, ...values };
//                 createSeller(formData);
//             } catch (error) {
//                 console.log("Error submitting seller data: " + error_r);
//             }
//         }
//         actions.setSubmitting(false);
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-neutral">
//             <div className="flex bg-white rounded-pl p-2 shadow-xl overflow-hidden min-h-[650px] min-w-[1200px] mx-auto">
//                 <div className="hidden md:flex md:w-1/2 flex-col justify-between bg-cover bg-center p-8"
//                     style={{ backgroundImage: `url('/assets/products/plant-1.jpeg')` }}>
//                     {/* Left Section */}
//                     <div className="text-white">
//                         <button className="bg-transparent border border-white px-3 py-1 rounded-md mb-6 hover:bg-white hover:text-[#1a1523] transition duration-300">
//                             Back to website →
//                         </button>
//                     </div>
//                 </div>

//                 {/* Right Section */}
//                 <div className="w-full md:w-1/2 p-8 bg-inherit font-josefin-sans rounded-[20px]">
//                     <div className="flex flex-col justify-center h-full">
//                         <ol className="flex self-center gap-4 w-full items-center justify-center w-1/2 mb-4 sm:mb-5">
//                             <li className={`flex justify-center items-center ${step === 1 ? 'text-gray-100' : 'text-gray-100'}`}>
//                                 <div className={`flex items-center border-2 border-gray-100 justify-center w-10 h-10 ${step === 1 ? 'bg-gray-100 text-white' : 'bg-transparent text-gray-100'} rounded-full lg:h-12 lg:w-12 shrink-0`}>1</div>
//                             </li>
//                             <li className={`flex justify-center items-center ${step === 2 ? 'text-gray-100' : 'text-gray-100'}`}>
//                                 <div className={`flex items-center border-2 border-gray-100 justify-center w-10 h-10 ${step === 2 ? 'bg-gray-100 text-white' : 'bg-transparent text-gray-100'} rounded-full lg:h-12 lg:w-12 shrink-0`}>2</div>
//                             </li>
//                             <li className={`flex justify-center items-center ${step === 3 ? 'text-gray-100' : 'text-gray-100'}`}>
//                                 <div className={`flex items-center border-2 border-gray-100 justify-center w-10 h-10 ${step === 3 ? 'bg-gray-100 text-white' : 'bg-transparent text-gray-100'} rounded-full lg:h-12 lg:w-12 shrink-0`}>3</div>
//                             </li>
//                         </ol>

//                         {/* Heading */}
//                         <h2 className="text-lg font-bold mb-8">Create your store on Plantify</h2>

//                         {/* Form Steps */}
//                         <div>
//                             {step === 1 && (
//                                 <Formik
//                                     initialValues={initialValuesStep1}
//                                     validationSchema={step1Schema}
//                                     onSubmit={handleStepSubmit}
//                                 >
//                                     {({ isSubmitting }) => (
//                                         <Form>
//                                             <div className="mb-4">
//                                                 <label htmlFor="storeName" className="block text-sm font-medium font-semibold">Store Name</label>
//                                                 <Field type="text" name="storeName" className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300" placeholder="Enter your store name" />
//                                                 <ErrorMessage name="storeName" component="div" className="text-red-500 text-sm" />
//                                             </div>
//                                             <div className="flex gap-3 mb-4 w-full">
//                                                 <div className="w-full">
//                                                     <label htmlFor="businessEmail" className="block text-sm font-medium font-semibold">Business Email</label>
//                                                     <Field type="email" name="businessEmail" className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300" placeholder="Enter your business email" />
//                                                     <ErrorMessage name="businessEmail" component="div" className="text-red-500 text-sm" />
//                                                 </div>
//                                                 <div className="w-full">
//                                                     <label htmlFor="businessContact" className="block text-sm font-medium font-semibold">Business Contact</label>
//                                                     <Field type="text" name="businessContact" className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300" placeholder="Enter your business contact" />
//                                                     <ErrorMessage name="businessContact" component="div" className="text-red-500 text-sm" />
//                                                 </div>
//                                             </div>
//                                             <div className="mb-4">
//                                                 <label htmlFor="storeDescription" className="block text-sm font-medium font-semibold">Store Description</label>
//                                                 <Field as="textarea" name="storeDescription" className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300" placeholder="Tell us about your store" />
//                                                 <ErrorMessage name="storeDescription" component="div" className="text-red-500 text-sm" />
//                                             </div>
//                                             <Button type="submit" text="Next" className="w-full mt-2 py-2 bg-gray-100 text-white shadow-md" disabled={isSubmitting} />
//                                         </Form>
//                                     )}
//                                 </Formik>
//                             )}

//                             {step === 2 && (
//                                 <Formik
//                                     initialValues={initialValuesStep2}
//                                     validationSchema={step2Schema}
//                                     onSubmit={handleStepSubmit}
//                                 >
//                                     {({ isSubmitting }) => (
//                                         <Form>
//                                             <div className="mb-4">
//                                                 <label htmlFor="sellerName" className="block text-sm font-medium font-semibold">Full Name</label>
//                                                 <Field type="text" name="sellerName" className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300" placeholder="Enter your full name" />
//                                                 <ErrorMessage name="sellerName" component="div" className="text-red-500 text-sm" />
//                                             </div>
//                                             <div className="mb-4">
//                                                 <label htmlFor="email" className="block text-sm font-medium font-semibold">Email</label>
//                                                 <Field type="email" name="email" className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300" placeholder="Enter your email" />
//                                                 <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
//                                             </div>
//                                             <div className="mb-4">
//                                                 <label htmlFor="contact" className="block text-sm font-medium font-semibold">Contact</label>
//                                                 <Field type="text" name="contact" className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300" placeholder="Enter your contact number" />
//                                                 <ErrorMessage name="contact" component="div" className="text-red-500 text-sm" />
//                                             </div>
//                                             <div className="mb-4">
//                                                 <label htmlFor="password" className="block text-sm font-medium font-semibold">Password</label>
//                                                 <Field type="password" name="password" className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300" placeholder="Enter your password" />
//                                                 <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
//                                             </div>
//                                             <Button type="submit" text="Next" className="w-full mt-2 py-2 bg-gray-100 text-white shadow-md" disabled={isSubmitting} />
//                                         </Form>
//                                     )}
//                                 </Formik>
//                             )}

//                             {step === 3 && (
//                                 <Formik
//                                     initialValues={initialValuesStep3}
//                                     validationSchema={step3Schema}
//                                     onSubmit={handleStepSubmit}
//                                 >
//                                     {({ isSubmitting }) => (
//                                         <Form>
//                                             <div className="mb-4">
//                                                 <label htmlFor="businessCertificate" className="block text-sm font-medium font-semibold">Business Certificate</label>
//                                                 <Field name="businessCertificate">
//                                                     {({ field, form }) => (
//                                                         <input
//                                                             type="file"
//                                                             accept="image/*"
//                                                             className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
//                                                             onChange={(event) => {
//                                                                 form.setFieldValue("businessCertificate", event.currentTarget.files[0]);
//                                                             }}
//                                                         />
//                                                     )}
//                                                 </Field>
//                                                 <ErrorMessage name="businessCertificate" component="div" className="text-red-500 text-sm" />
//                                             </div>
//                                             <div className="mb-4">
//                                                 <label htmlFor="cnic" className="block text-sm font-medium font-semibold">CNIC</label>
//                                                 <Field type="text" name="cnic" className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300" placeholder="xxxxx-xxxxxxx-x" />
//                                                 <ErrorMessage name="cnic" component="div" className="text-red-500 text-sm" />
//                                             </div>
//                                             <div className="mb-4">
//                                                 <label htmlFor="taxID" className="block text-sm font-medium font-semibold">Tax ID (Optional)</label>
//                                                 <Field type="text" name="taxID" className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300" placeholder="Enter your tax ID" />
//                                                 <ErrorMessage name="taxID" component="div" className="text-red-500 text-sm" />
//                                             </div>
//                                             <Button type="submit" text="Submit" className="w-full mt-2 py-2 bg-gray-100 text-white shadow-md" disabled={isSubmitting} />
//                                         </Form>
//                                     )}
//                                 </Formik>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SellerSignup;


// import React, { useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import Button from '../components/button';
// import useCreateSeller from '../hooks/useCreateSeller';

// // Yup validation schemas for each step
// const step1Schema = Yup.object({
//     storeName: Yup.string().required('Store name is required'),
//     businessEmail: Yup.string().email('Invalid email format').required('Business email is required'),
//     businessContact: Yup.string().matches(/^\d+$/, 'Contact must be digits only').required('Business contact is required'),
//     storeDescription: Yup.string().required('Store description is required'),
// });

// const step2Schema = Yup.object({
//     sellerName: Yup.string().required('Full name is required'),
//     email: Yup.string().email('Invalid email format').required('Email is required'),
//     contact: Yup.string().matches(/^\d+$/, 'Contact must be digits only').required('Contact is required'),
//     password: Yup.string().min(8, 'Password must be at least 8 characters long').required('Password is required'),
// });

// const step3Schema = Yup.object({
//     businessCertificate: Yup.mixed().required('Business certificate is required'),
//     cnic: Yup.string().matches(/^\d{5}-\d{7}-\d{1}$/, 'Invalid CNIC format').required('CNIC is required'),
//     taxID: Yup.string().nullable(),
// });

// const SellerSignup = () => {
//     const [step, setStep] = useState(1);
//     const [formValues, setFormValues] = useState({
//         storeName: '',
//         businessEmail: '',
//         businessContact: '',
//         storeDescription: '',
//         sellerName: '',
//         email: '',
//         contact: '',
//         password: '',
//         businessCertificate: null,
//         cnic: '',
//         taxID: '',
//     });

//     const { createSeller, loading, error_r } = useCreateSeller();

//     const handleStepSubmit = (values, actions) => {
//         setFormValues((prevValues) => ({
//             ...prevValues,
//             ...values,
//         }));

//         if (step < 3) {
//             setStep(step + 1);
//         } else {
//             // Final form submission
//             const formData = new FormData();
//             Object.keys(formValues).forEach((key) => {
//                 formData.append(key, formValues[key]);
//             });
//             formData.append("businessCertificate", values.businessCertificate);
//             console.log("check: " + formData.sellerName);

//             createSeller(formData);
//         }

//         actions.setSubmitting(false);
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-neutral">
//             <div className="flex bg-white rounded-pl p-2 shadow-xl overflow-hidden min-h-[650px] min-w-[1200px] mx-auto">
//                 <div className="hidden md:flex md:w-1/2 flex-col justify-between bg-cover bg-center p-8"
//                     style={{ backgroundImage: `url('/assets/products/plant-1.jpeg')` }}>
//                     <div className="text-white">
//                         <button className="bg-transparent border border-white px-3 py-1 rounded-md mb-6 hover:bg-white hover:text-[#1a1523] transition duration-300">
//                             Back to website →
//                         </button>
//                     </div>
//                 </div>

//                 <div className="w-full md:w-1/2 p-8 bg-inherit font-josefin-sans rounded-[20px]">
//                     <div className="flex flex-col justify-center h-full">
//                         <ol className="flex self-center gap-4 w-full items-center justify-center mb-4 sm:mb-5">
//                             {[1, 2, 3].map((num) => (
//                                 <li key={num} className={`flex justify-center items-center ${step === num ? 'text-gray-100' : 'text-gray-100'}`}>
//                                     <div className={`flex items-center border-2 border-gray-100 justify-center w-10 h-10 ${step === num ? 'bg-gray-100 text-white' : 'bg-transparent text-gray-100'} rounded-full lg:h-12 lg:w-12 shrink-0`}>{num}</div>
//                                 </li>
//                             ))}
//                         </ol>

//                         <h2 className="text-lg font-bold mb-8">Create your store on Plantify</h2>

//                         {step === 1 && (
//                             <Formik
//                                 initialValues={formValues}
//                                 validationSchema={step1Schema}
//                                 onSubmit={handleStepSubmit}
//                             >
//                                 {({ isSubmitting }) => (
//                                     <Form>
//                                         <div className="mb-4">
//                                             <label htmlFor="storeName" className="block text-sm font-medium font-semibold">Store Name</label>
//                                             <Field type="text" name="storeName" className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300" placeholder="Enter your store name" />
//                                             <ErrorMessage name="storeName" component="div" className="text-red-500 text-sm" />
//                                         </div>
//                                         <div className="flex gap-3 mb-4 w-full">
//                                             <div className="w-full">
//                                                 <label htmlFor="businessEmail" className="block text-sm font-medium font-semibold">Business Email</label>
//                                                 <Field type="email" name="businessEmail" className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300" placeholder="Enter your business email" />
//                                                 <ErrorMessage name="businessEmail" component="div" className="text-red-500 text-sm" />
//                                             </div>
//                                             <div className="w-full">
//                                                 <label htmlFor="businessContact" className="block text-sm font-medium font-semibold">Business Contact</label>
//                                                 <Field type="text" name="businessContact" className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300" placeholder="Enter your business contact" />
//                                                 <ErrorMessage name="businessContact" component="div" className="text-red-500 text-sm" />
//                                             </div>
//                                         </div>
//                                         <div className="mb-4">
//                                             <label htmlFor="storeDescription" className="block text-sm font-medium font-semibold">Store Description</label>
//                                             <Field as="textarea" name="storeDescription" className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300" placeholder="Tell us about your store" />
//                                             <ErrorMessage name="storeDescription" component="div" className="text-red-500 text-sm" />
//                                         </div>
//                                         <Button type="submit" text="Next" className="w-full mt-2 py-2 bg-gray-100 text-white shadow-md" disabled={isSubmitting} />
//                                     </Form>
//                                 )}
//                             </Formik>
//                         )}

//                         {step === 2 && (
//                             <Formik
//                                 initialValues={formValues}
//                                 validationSchema={step2Schema}
//                                 onSubmit={handleStepSubmit}
//                             >
//                                 {({ isSubmitting }) => (
//                                     <Form>
//                                         <div className="mb-4">
//                                             <label htmlFor="sellerName" className="block text-sm font-medium font-semibold">Full Name</label>
//                                             <Field type="text" name="sellerName" className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300" placeholder="Enter your full name" />
//                                             <ErrorMessage name="sellerName" component="div" className="text-red-500 text-sm" />
//                                         </div>
//                                         <div className="mb-4">
//                                             <label htmlFor="email" className="block text-sm font-medium font-semibold">Email</label>
//                                             <Field type="email" name="email" className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300" placeholder="Enter your email" />
//                                             <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
//                                         </div>
//                                         <div className="mb-4">
//                                             <label htmlFor="contact" className="block text-sm font-medium font-semibold">Contact</label>
//                                             <Field type="text" name="contact" className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300" placeholder="Enter your contact number" />
//                                             <ErrorMessage name="contact" component="div" className="text-red-500 text-sm" />
//                                         </div>
//                                         <div className="mb-4">
//                                             <label htmlFor="password" className="block text-sm font-medium font-semibold">Password</label>
//                                             <Field type="password" name="password" className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300" placeholder="Enter your password" />
//                                             <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
//                                         </div>
//                                         <Button type="submit" text="Next" className="w-full mt-2 py-2 bg-gray-100 text-white shadow-md" disabled={isSubmitting} />
//                                     </Form>
//                                 )}
//                             </Formik>
//                         )}

//                         {step === 3 && (
//                             <Formik
//                                 initialValues={formValues}
//                                 validationSchema={step3Schema}
//                                 onSubmit={handleStepSubmit}
//                             >
//                                 {({ setFieldValue, isSubmitting }) => (
//                                     <Form>
//                                         <div className="mb-4">
//                                             <label htmlFor="businessCertificate" className="block text-sm font-medium font-semibold">Business Certificate</label>
//                                             <input
//                                                 type="file"
//                                                 accept="image/*"
//                                                 className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
//                                                 onChange={(event) => {
//                                                     setFieldValue("businessCertificate", event.currentTarget.files[0]);
//                                                 }}
//                                             />
//                                             <ErrorMessage name="businessCertificate" component="div" className="text-red-500 text-sm" />
//                                         </div>
//                                         <div className="mb-4">
//                                             <label htmlFor="cnic" className="block text-sm font-medium font-semibold">CNIC</label>
//                                             <Field type="text" name="cnic" className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300" placeholder="xxxxx-xxxxxxx-x" />
//                                             <ErrorMessage name="cnic" component="div" className="text-red-500 text-sm" />
//                                         </div>
//                                         <div className="mb-4">
//                                             <label htmlFor="taxID" className="block text-sm font-medium font-semibold">Tax ID (Optional)</label>
//                                             <Field type="text" name="taxID" className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300" placeholder="Enter your tax ID" />
//                                             <ErrorMessage name="taxID" component="div" className="text-red-500 text-sm" />
//                                         </div>
//                                         <Button type="submit" text="Submit" className="w-full mt-2 py-2 bg-gray-100 text-white shadow-md" disabled={isSubmitting} />
//                                     </Form>
//                                 )}
//                             </Formik>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SellerSignup;