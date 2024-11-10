import useFetchUsers from '../hooks/fetch-users';
import React from 'react';
import UserTable from '../components/tables/user-table';

export default function UsersPage () {
    const { users, error, loading } = useFetchUsers(); // Destructure the returned values from the hook

    if (loading) {
        return <p>Loading users...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return(
        <div className='min-h-screen lg:ml-[245px] p-4'> 
            <div className='min-h-screen p-8 rounded-pl bg-neutral'>
                <div className='mb-6 flex flex-col lg:flex-row items-center lg:justify-between'>
                    <div className='text-lg font-bold '>Users on Plantify</div>
                    {/* <button 
                        className='flex gap-2 dark:bg-forest-200 dark:text-gray-400 bg-navygreen-100 dark:hover:bg-forest-100 text-gray-100 p-4 rounded-pl'
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="size-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                        </svg>
                        add user
                    </button> */}
                </div>
                <UserTable users={users}/>
            </div>
        </div>
    );
}