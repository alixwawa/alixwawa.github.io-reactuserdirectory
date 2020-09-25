import React from "react";


function Table(props) {
  return (
    <>
      <table class="table table-bordered table-dark">
        {props.children}
      </table>
    </>
  );
}

export default Table;