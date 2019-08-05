import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsOverview from "../components/CollectionsOverview";
import CollectionPage from "./CollectionPage";
import WithSpinner from "../components/withSpinner/WithSpinner";

import { updateCollections } from "../redux/shop/shop.actions";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../firebase/firebase.utils";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = { loading: true };

  unsubscribeFromSnapshop = null;

  componentDidMount() {
    const collectionRef = firestore.collection("collections");
    const { updateCollections } = this.props;

    collectionRef.onSnapshot(async snapshot => {
      const collectionsObject = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsObject);
      this.setState({ loading: false });
    });
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner
              isLoading={this.state.loading}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionsPageWithSpinner
              isLoading={this.state.loading}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
