import React from "react";
import CollectionItem from "./CollectionItem";
import "./collection-preview.styles.scss";

export default function Collections(props) {
  const { title, items, routeName, history, match } = props;
  return (
    <div className="collection-preview">
      <h1
        className="title"
        onClick={() => history.push(`${match.url}${routeName}`)}
      >
        {title.toUpperCase()}
      </h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} {...item} />
          ))}
      </div>
    </div>
  );
}
