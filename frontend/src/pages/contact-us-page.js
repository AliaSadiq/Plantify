import useFetchContactUs from '../hooks/fetch-contact-us';
import React from 'react';
import ContactUsTable from '../components/tables/contact-us-table';

export default function ContactUsPage () {
    const { messages, error, loading } = useFetchContactUs(); // Destructure the returned values from the hook

    if (loading) {
        return <p>Loading users...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return(
        <div className='min-h-screen ml-[245px] p-4'> 
            <div className='min-h-screen p-8 rounded-pl bg-neutral'>
                <h1 className='mb-6 text-lg font-semibold'>Users on Plantify</h1>
                <ContactUsTable messages={messages}/>
            </div>
        </div>
    );
}