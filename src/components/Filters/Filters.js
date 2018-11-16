import React from "react";

import TitleFilter from "./TitleFilter/TitleFilter";
import PriceFilter from "./PriceFilter/PriceFilter";

import "./Filters.css";

const filters = props => (
  <div className="filters">
    <TitleFilter
      updateTitleSearch={props.updateTitleSearch}
      titleSearch={props.titleSearch}
    />
    <PriceFilter
      updateMinSearchPrice={props.updateMinSearchPrice}
      updateMaxSearchPrice={props.updateMaxSearchPrice}
      priceSearch={props.priceSearch}
    />
  </div>
);

export default filters;
