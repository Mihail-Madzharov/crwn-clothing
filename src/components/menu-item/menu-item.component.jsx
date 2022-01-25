import React from "react";

import "./menu-item.style.scss";

const MenuItem = ({ title, id, imageUrl, size, onCLickHandler }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content" onClick={() => onCLickHandler(id)}>
      <h1 className="title">{title}</h1>
      <span className="subtitle">Shop now</span>
    </div>
  </div>
);

export default MenuItem;
