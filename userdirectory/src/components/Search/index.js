import React from "react";
import "./style.css";


function Search(props) {
    return (
        <nav className="navbar navbar-light bg-dark">
            <h1> User Directory</h1>
            <form className="form-inline">
                <input value={props.searchTerm} onChange={props.editSearchTerm} className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"></input>
                    
            </form>
        </nav>

    );
}

export default Search;