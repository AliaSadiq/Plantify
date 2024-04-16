import React from 'react';

const SearchBar = ({ onSearch }) => {
    const handleInputChange = (event) => {
        const query = event.target.value;
        onSearch(query);
    };

    return (
        <div className="w-full max-w-lg mx-auto p-4">
            <input
                type="text"
                placeholder="Search Campaigns"
                className="w-full border-2 border-navygreen-200 bg-navygreen-25 h-10 px-5 pr-16 rounded-full text-sm focus:outline-none"
                onChange={handleInputChange}
            />
        </div>
    );
}

export default SearchBar;
