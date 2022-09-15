import { useState } from "react";
import "./SearchBar.css";

function SearchBar(props) {

    const [search, setSearch] = useState("");

    function handleSearchChange(e) {
        const value = e.target.value;

        setSearch(value);
        props.search(value);
    }

    return ( 
        <div className="mx-2">
        <input className="form-control me-2 rounded" value={search} 
            onChange={handleSearchChange} 
            type="search" placeholder="Search"/>
        </div>
     );
}

export default SearchBar;