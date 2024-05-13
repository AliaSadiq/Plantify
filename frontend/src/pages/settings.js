import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Profile from '../components/profile';

export default function SettingsPage() {
    // const [user, setUser] = useState(null);

    // const storedUser = localStorage.getItem('user');
    // if (storedUser) {
    //     const parsedUser = JSON.parse(storedUser);
    //     setUser(parsedUser);
    // }

    return (
        <div className='my-40 flex flex-row gap-40 items-center justify-center'>
            <div className='flex flex-col bg-navygreen-100 rounded-xl'>
                <ul className='flex flex-col gap-4 font-josefin-sans text-gray-100 text-sm m-4'>
                    <Link to=''><li className='bg-transparent hover:bg-white px-4 py-2 rounded-lg'>Change Password</li></Link>
                    <Link to=''><li className='bg-transparent hover:bg-white px-4 py-2 rounded-lg'>Theme</li></Link>
                    <Link to=''><li className='bg-transparent hover:bg-white px-4 py-2 rounded-lg'>Terms and Policy</li></Link>
                    <Link to=''><li className='bg-transparent hover:bg-white px-4 py-2 rounded-lg'>Feedback</li></Link>
                    <Link to=''><li className='bg-transparent hover:bg-white px-4 py-2 rounded-lg'>FAQs</li></Link>
                </ul>
            </div>
            <div className='border border-2 p-8'>
                <form>
                    <h1 className="font-josefin-sans text-lg text-gray-100 font-bold mb-6">Personal Information</h1>
                    <label for="username" class="block font-mini font-josefin-sans mb-1">Username</label>
                    <div class="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                        <input 
                            id="username" 
                            class="bg-inherit font-josefin-sans pl-2 w-full outline-none border-none" 
                            type="text" 
                            name="username" 
                            defaultValue='ad'
                        />
                    </div>
                    <label for="email" class="block font-mini font-josefin-sans mb-1">Email ID</label>
                    <div class="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                        <input 
                            id="email" 
                            class="bg-inherit pl-2 font-josefin-sans w-full outline-none border-none" 
                            type="email" 
                            name="email" 
                            defaultValue='ad'
                        />
                    </div>
                    <label for="password" class="block font-mini font-josefin-sans mb-1">Password</label>
                    <div class="flex bg-neutral items-center mb-4 py-2 px-3 rounded-2xl">
                        <input 
                            id="password" 
                            class="bg-inherit pl-2 font-josefin-sans w-full outline-none border-none" 
                            name="password" 
                            type='password'
                            defaultValue="Enter your full address" 
                        />
                    </div>
                    <div class="mt-4 flex gap-8">
                        <button type="submit" class="font-josefin-sans bg-gray-100 text-white text-sm font-semibold px-4 py-2 rounded hover:rounded-full border-2 border-gray-100">Save</button>
                        <button type="submit" class="font-josefin-sans bg-transparent text-gray-100 text-sm font-semibold px-4 py-2 rounded hover:rounded-full border-2 border-gray-100">Cancel</button>
                    </div>
                </form>
            </div>
            <div className='self-center'>
                <Profile/>
            </div>
        </div>
    );
}