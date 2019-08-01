import React from "react";
import { connect } from "react-redux";

import Collections from "../components/Collections";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../redux/shop/shop.selectors";

function ShopPage({ collections }) {
  return (
    <div className="shop-page">
      <h1 className="title">SHOP PAGE</h1>
      {collections.map(collection => (
        <Collections key={collection.id} {...collection} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export default connect(mapStateToProps)(ShopPage);
