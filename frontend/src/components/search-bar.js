import React from 'react';

const SearchBar = ({ onSearch, placeholder }) => {
    const handleInputChange = (event) => {
        const query = event.target.value;
        onSearch(query); // Call the onSearch function with the query
    };

    return (
        <div className="w-full max-w-lg mx-auto flex items-center border-2 border-navygreen-200 bg-navygreen-25 rounded-full h-10 px-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input
                type="text"
                placeholder={placeholder}
                className="w-full bg-navygreen-25 text-sm focus:outline-none"
                onChange={handleInputChange}
            />
        </div>
    );
}

export default SearchBar;