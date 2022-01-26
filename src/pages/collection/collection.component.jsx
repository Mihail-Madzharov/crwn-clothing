import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { collectionSelector } from "../../redux/shop/shop.selectors";
import { collectionSelector as activeCollection } from "../../redux/collection/collection.selectors";
import { updateActiveCollection } from "../../redux/collection/collection.actions";
import { createStructuredSelector } from "reselect";
import { CollectionItem } from "../../components/collection-item/collection-item.component";
import "./collection.style.scss";
import { connect } from "react-redux";

const mapStateToSelectors = createStructuredSelector({
  items: collectionSelector,
  activeCollection: activeCollection,
});

const mapDispatchToState = (dispatch) => ({
  updateItems: (payload) => dispatch(updateActiveCollection(payload)),
});

export const Collection = connect(
  mapStateToSelectors,
  mapDispatchToState
)(({ items, updateItems, activeCollection }) => {
  const params = useParams();
  useEffect(() => {
    updateItems(
      items.find((item) => item.routeName === params.categoryId).items
    );
  });

  return (
    <div>
      <div className="collection-header">
        <span>{params.categoryId}</span>
      </div>
      <div className="collection-wrapper">
        {activeCollection.map((item) => (
          <CollectionItem
            className="collection-item"
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
});
