import React from "react";
import { connect } from "react-redux";
import { selectCollectionsPreview } from "../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";

import CollectionsPreview from "./CollectionsPreview";
import "./collections-overview.styles.scss";

function CollectionsOverview({ collections, ...otherProps }) {
  return (
    <div className="collections-overview">
      {collections.map(collection => (
        <CollectionsPreview
          key={collection.id}
          {...collection}
          {...otherProps}
        />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsPreview
});
export default connect(mapStateToProps)(CollectionsOverview);
