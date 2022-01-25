import React from "react";
import { connect } from "react-redux";
import { CollectionPreview } from "../../components/preview-collection/collection-preview.component";
import { collectionSelector } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";

const mapStateToProps = createStructuredSelector({
  sections: collectionSelector,
});

export const ShopPage = connect(mapStateToProps)(({ sections }) => {
  return sections.map((item) => (
    <CollectionPreview
      key={item.id}
      items={item.items}
      title={item.title}
    ></CollectionPreview>
  ));
});
