import React from "react";
import { CollectionItem } from "../collection-item/collection-item.component";
import "./collection-preview.component.scss";

export const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items.slice(0, 3).map((item) => (
        <CollectionItem
          key={item.id}
          name={item.name}
          id={item.id}
          price={item.price}
          imageUrl={item.imageUrl}
        >
          {item.name}
        </CollectionItem>
      ))}
    </div>
  </div>
);
