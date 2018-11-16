import React from "react";

import "./TitleFilter.css";

const titleFilter = props => {
  return (
    <div className="titleFilter">
      <label htmlFor="title">Фильтр по названию</label>
      <input
        type="text"
        id="title"
        onChange={event => props.updateTitleSearch(event)}
        placeholder="Введите название"
      />
    </div>
  );
};

export default titleFilter;
