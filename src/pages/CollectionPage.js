import React from "react";
import CollectionItem from "../components/CollectionItem";

import { connect } from "react-redux";
import { selectCollection } from "../redux/shop/shop.selectors";

import "./collection.styles.scss";
import { createStructuredSelector } from "reselect";

function CollectionPage({ collection }) {
  console.log(collection);
  return (
    <div className="collection-page">
      <div className="title">{collection.title}</div>
      <div className="items">
        {collection.items.map(item => (
          <CollectionItem {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

// const mapStateToProps = (state, ownProps) => ({
//   collection: selectCollection(ownProps.match.params.collectionId)(state)
// });

const mapStateToProps = (state, ownProps) =>
  createStructuredSelector({
    collection: selectCollection(ownProps.match.params.collectionId)
  });

export default connect(mapStateToProps)(CollectionPage);
