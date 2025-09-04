"use client"

import {useState} from "react";
import {redirect} from "next/navigation";
import {FiSearch} from "react-icons/fi";

export default function SearchBar(){
    const [searchTerm, setSearchedTerm] = useState("");

    function handleSearch(e){

        e.preventDefault();
        redirect("/search?search=" + searchTerm);


    }


return(
<div className="navbar">
    <form onSubmit={onSubmit} className="search-form">

<input
name="search"
onChange={(e) => setSearchedTerm(e.target.value)}
value={searchTerm}
type="search"
className="search-input"
/>
<button type="submit" className="search-button">
    <FiSearch className="search-icon" />
</button>

 </form>
</div>

);
}