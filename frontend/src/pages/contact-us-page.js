// import React from "react";
// import vector from '../assets/gardening.png';
// import contact from '../assets/contact.jpeg';

// const ContactUsPage = () => {
//     return(
//         <div className="my-40 mx-40 flex gap-40 items-center justify-center">
//             <div className="self-center">
//                 <img src={contact} />
//             </div>
//             <div className="flex justify-center py-10 items-center bg-white mr-20">
//                 <form className="bg-white">
//                     <h1 className="text-gray-800 font-bold text-2xl mb-1">Connect with us!</h1>
//                     <p className="text-sm font-normal text-gray-600 mb-7">We're eager to hear from you, whether it's questions, feedback, or just a friendly chat. Let's start a conversation!</p>
//                     <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
//                         <input className="pl-2 outline-none border-none" type="text" name="username" id="username" placeholder="Username"/>
//                     </div> 
//                     <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
//                         <input className="pl-2 outline-none border-none" type="email" name="email" id="email" placeholder="Email Address"/>
//                     </div>
//                     <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
//                         <textarea className="pl-2 outline-none border-none" name="password" id="password" placeholder="Message"/>
//                     </div>
//                     <button type="submit" className="block w-full bg-navygreen-200 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Send</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default ContactUsPage;

import React from 'react';
import backgroundImage from '../assets/contact-us.jpeg';
import Button from '../components/button';

const ContactUsPage = () => {
  return (
    <div className="bg-cover bg-center h-screen pt-10" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="absolute inset-0 backdrop-blur-lg backdrop-filter bg-ivory bg-opacity-50"></div>
        <div className="absolute container mx-auto flex justify-center items-center h-full">
            <div className="w-1/2">
                <div className="ml-40 mr-20 text-gray-100">
                    <h1 className="text-2xl font-bold mb-4">Connect with Us!</h1>
                    <p className="text-mini mb-8">
                        We're eager to hear from you, whether it's questions, feedback, or just a friendly chat. Let's start a conversation!
                    </p>
                </div>
            </div>
            <div className="w-1/2">
                <div className="bg-navygreen-200 mr-40 backdrop-blur-sm backdrop-filter bg-opacity-60 p-8 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="mb-2 block text-sm font-medium">
                            Name
                            </label>
                            <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full border rounded-md p-2"
                            placeholder="Your name"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="mb-2 block text-sm font-medium">
                            Email
                            </label>
                            <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full border rounded-md p-2"
                            placeholder="Your email"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                            htmlFor="message"
                            className="mb-2 block text-sm font-medium"
                            >
                            Message
                            </label>
                            <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="w-full border rounded-md p-2"
                            placeholder="Your message"
                            ></textarea>
                        </div>
                        <Button text="Send Message" color="fill"/>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ContactUsPage;
