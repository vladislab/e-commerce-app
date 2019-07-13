import React, { Component } from "react";
import SHOP_DATA from "../shop.data";
import Collections from "../components/Collections";

export default class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = { collections: SHOP_DATA };
  }
  render() {
    return (
      <div className="shop-page">
        <h1 className="title">SHOP PAGE</h1>
        {this.state.collections.map(collection => (
          <Collections key={collection.id} {...collection} />
        ))}
      </div>
    );
  }
}
