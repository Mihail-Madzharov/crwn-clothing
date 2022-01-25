import React from "react";
import { useParams } from "react-router-dom";
import { selectItems } from "../../redux/cart/cart.selectors";
import { CollectionItem } from "../../components/collection-item/collection-item.component";
import { createStructuredSelector } from "reselect";
import "./collection.style.scss";
import { connect } from "react-redux";

const mapStateToSelectors = createStructuredSelector({
  items: selectItems,
});
export const Collection = connect(mapStateToSelectors)((props) => {
  const params = useParams();
  console.log("match", props);
  console.log(11111);
  return (
    <div>
      <div className="collection-header">
        <span>{params.categoryId}</span>
      </div>
      <div>
        {params.items.map((item) => (
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
});
