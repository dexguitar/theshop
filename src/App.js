import React, { Component } from "react";
import ItemTable from "./components/ItemTable/ItemTable";
import Filters from "./components/Filters/Filters";

import shop from "./data/shop.json";

import "./App.css";

class App extends Component {
  state = {
    data: shop,
    direction: {
      price: "asc",
      title: "asc"
    },
    searchTitle: "",
    searchPrice: {
      min: null,
      max: null
    },
    show: 3
  };

  handleShowSubmit = event => {
    this.setState({
      show: event.target.value
    });
  };

  // PRICE SORT
  priceSort = key => {
    const items = this.state.data.slice(0, this.state.show); // show in portions
    this.setState({
      data: items.sort(
        this.state.direction[key] === "asc"
          ? (a, b) => parseFloat(a.data[key]) - parseFloat(b.data[key])
          : (a, b) => parseFloat(b.data[key]) - parseFloat(a.data[key])
      ),
      direction: {
        [key]: this.state.direction[key] === "asc" ? "desc" : "asc"
      }
    });
  };

  // OLD PRICE SORT
  oldPriceSort = key => {
    const items = this.state.data.slice(0, this.state.show);
    this.setState({
      data: items.sort(
        this.state.direction[key] === "asc"
          ? (a, b) => parseFloat(a.data[key]) - parseFloat(b.data[key])
          : (a, b) => parseFloat(b.data[key]) - parseFloat(a.data[key])
      ),
      direction: {
        [key]: this.state.direction[key] === "asc" ? "desc" : "asc"
      }
    });
  };

  // TITLE SORT
  titleSort = key => {
    const items = this.state.data.slice(0, this.state.show);
    this.setState({
      data: items.sort(
        this.state.direction[key] === "asc"
          ? (a, b) => a.data[key].localeCompare(b.data[key])
          : (a, b) => b.data[key].localeCompare(a.data[key])
      ),
      direction: {
        [key]: this.state.direction[key] === "asc" ? "desc" : "asc"
      }
    });
  };

  // TITLE FILTER
  updateTitleSearch = event => {
    this.setState({
      searchTitle: event.target.value
    });
    this.titleSearch();
  };

  titleSearch = () => {
    if (this.state.searchTitle) {
      this.setState({
        data: shop
          .filter(item => {
            return (
              item.data.title
                .toLowerCase()
                .indexOf(this.state.searchTitle.toLowerCase()) !== -1
            );
          })
          .sort(
            this.state.direction.title === "asc"
              ? (a, b) => a.data.title.localeCompare(b.data.title)
              : (a, b) => b.data.title.localeCompare(a.data.title)
          )
      });
    }
  };

  // PRICE FILTER
  updateMinSearchPrice = event => {
    this.setState({
      searchPrice: { ...this.state.searchPrice, min: event.target.value }
    });
  };

  updateMaxSearchPrice = event => {
    this.setState({
      searchPrice: { ...this.state.searchPrice, max: event.target.value }
    });
  };

  priceSearch = () => {
    if (this.state.searchPrice.min || this.state.searchPrice.max) {
      this.setState({
        data: shop
          .filter(item => {
            return (
              parseFloat(item.data.price) >= this.state.searchPrice.min &&
              parseFloat(item.data.price) <= this.state.searchPrice.max
            );
          })
          .sort(
            this.state.direction.price === "asc"
              ? (a, b) => parseFloat(a.data.price) - parseFloat(b.data.price)
              : (a, b) => parseFloat(b.data.price) - parseFloat(a.data.price)
          )
      });
    }

    if (!this.state.searchPrice.max) {
      this.setState({
        data: shop.filter(item => {
          return parseFloat(item.data.price) >= this.state.searchPrice.min;
        })
      });
    }
  };

  render() {
    return (
      <div className="page-container">
        <h1>Welcome to ShopMeNow!</h1>
        <Filters
          updateTitleSearch={this.updateTitleSearch}
          titleSearch={this.titleSearch}
          updateMinSearchPrice={this.updateMinSearchPrice}
          updateMaxSearchPrice={this.updateMaxSearchPrice}
          priceSearch={this.priceSearch}
          showSubmit={this.handleShowSubmit}
        />
        <ItemTable
          data={this.state.data}
          priceSort={this.priceSort}
          oldPriceSort={this.oldPriceSort}
          titleSort={this.titleSort}
        />
      </div>
    );
  }
}

export default App;
