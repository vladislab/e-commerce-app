import React from "react";
import "./collection-item.styles.scss";

export default function CollectionItem({ name, imageUrl, price }) {
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span>{name}</span>
        <span>{price}</span>
      </div>
    </div>
  );
}
