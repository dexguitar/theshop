import React from "react";

import "./PriceFilter.css";

const priceFilter = props => {
  return (
    <div className="priceFilter">
      <label htmlFor="price-min">Фильтр по цене </label>
      <input
        type="number"
        id="price-min"
        onChange={event => props.updateMinSearchPrice(event)}
        placeholder="min"
      />
      <input
        type="number"
        id="price-max"
        onChange={event => props.updateMaxSearchPrice(event)}
        placeholder="max"
      />
      <input type="submit" onClick={props.priceSearch} value="Применить" />
    </div>
  );
};

export default priceFilter;
