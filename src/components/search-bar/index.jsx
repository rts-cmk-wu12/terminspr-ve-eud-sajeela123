"use client"

import {useState} from "react";
import {redirect} from "next/navigation";
import {FiSearch} from "react-icons/fi";
import "./search-bar.scss";

export default function SearchBar(){
    const [searchTerm, setSearchedTerm] = useState("");

    function handleSearch(e){

        e.preventDefault();
        redirect("/search?search=" + searchTerm);


    }


return(
<div className="page-search">
    <form onSubmit={handleSearch} className="search-form">

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