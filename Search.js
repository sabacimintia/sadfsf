import React, { useState } from 'react';
import { useLocation, useHistory, useSearchParams } from 'react-router-dom';

function Search() {
  const location = useLocation();
  const history = useHistory();
  const [searchParams, setSearchParams] = useSearchParams(new URLSearchParams(location.search));
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({ q: searchTerm });
    history.push(${location.pathname}?${searchParams.toString()});
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;