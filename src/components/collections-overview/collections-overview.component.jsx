import { connect } from "react-redux";
import { CollectionPreview } from "../preview-collection/collection-preview.component";
import { collectionSelector } from "../../redux/shop/shop.selectors";

import { createStructuredSelector } from "reselect";

const mapStateToProps = createStructuredSelector({
  collections: collectionSelector,
});

export const CollectionsOverview = connect(mapStateToProps)(
  ({ collections }) => {
    return collections.map((item) => (
      <CollectionPreview
        key={item.id}
        items={item.items}
        title={item.title}
      ></CollectionPreview>
    ));
  }
);
