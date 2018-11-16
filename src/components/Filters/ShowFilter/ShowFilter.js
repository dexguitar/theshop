import React from "react";

import "./ShowFilter.css";

const showFilter = props => {
  return (
    <div className="showFilter">
      Показывать по &nbsp;
      <select onChange={event => props.showSubmit(event)}>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
    </div>
  );
};

export default showFilter;
