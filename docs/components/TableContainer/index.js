import React from "react";


function Table(props) {
  return (
    <>
      <table className="table table-bordered table-dark">
        {props.children}
      </table>
    </>
  );
}

export default Table;