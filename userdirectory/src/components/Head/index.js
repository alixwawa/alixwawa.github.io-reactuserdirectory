import React from "react";


function Head (props) {
    return (
        <thead>
            <tr>
                <th scope="col"><a href="none">id</a></th>
                <th scope="col"><a href="none">name</a></th>
                <th scope="col"><a href="none">occupation</a></th>
                <th scope="col" onClick={() => props.sortBy()} className="sortBy">Years Experience</th>
            </tr>
        </thead>
    );
}

export default Head;

