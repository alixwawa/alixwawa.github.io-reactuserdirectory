import React from "react";


function Body(props) {
    return (
        <tbody>
            <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.occupation}</td>
                <td>{props.yearsExperience}</td>
            </tr>
        </tbody>
    );
}

export default Body;

