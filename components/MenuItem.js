import React from "react";

export default function MenuItem(props) {
  const { title, id, url, size, linkUrl } = props;
  return (
    <div>
      <h2>Menu Item</h2>
      <h3>{title}</h3>
    </div>
  );
}
