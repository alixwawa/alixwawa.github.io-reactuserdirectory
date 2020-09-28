import React from "react";


function Head (props) {
    return (
        <thead>
            <tr>
                <th scope="col">id</th>
                <th scope="col">name</th>
                <th scope="col">occupation</th>
                <th scope="col" onClick={() => props.sortBy()} className="sortBy">Years Experience</th>
            </tr>
        </thead>
    );
}

export default Head;

