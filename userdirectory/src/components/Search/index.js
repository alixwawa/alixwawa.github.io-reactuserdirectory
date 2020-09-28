import React from "react";
import "./style.css";


function Search(props) {
    return (
        <nav className="navbar navbar-light bg-dark">
            <h1> User Directory</h1>
            <form className="form-inline">
                <input onChange={(e)=>props.searchSpace(e)} className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"></input>
                    <button onClick={props.handleInputChange} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search Occupation</button>
            </form>
        </nav>

    );
}

export default Search;