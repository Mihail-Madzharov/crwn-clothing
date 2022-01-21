import React from "react";
import { CollectionPreview } from "../../components/preview-collection/collection-preview.component";
import { SHOP_DATA } from "../../services/data";
export class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: SHOP_DATA,
    };
  }

  render() {
    return this.state.data.map((item) => (
      <CollectionPreview
        key={item.id}
        items={item.items}
        title={item.title}
      ></CollectionPreview>
    ));
  }
}
