import useFetch from '../hooks/useFetch';
import React from 'react';
import ReportsTable from '../components/tables/reports-table';

export default function UsersPage () {
    const url = "http://localhost:5000/api/campaign-report/";
    const { data: reports, loading, error } = useFetch(url); // Destructure the returned values from the hook

    if (loading) {
        return <p>Loading users...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return(
        <div className='min-h-screen lg:ml-[245px] p-4'> 
            <div className='min-h-screen p-8 rounded-pl bg-neutral'>
                <div className='mb-6 flex items-center justify-between'>
                    <div className='text-lg font-bold '>Campaign Reports</div>
                </div>
                <ReportsTable reports={reports}/>
            </div>
        </div>
    );
}