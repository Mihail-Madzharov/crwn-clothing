import React from "react";
import { Routes, Route } from "react-router-dom";
import { CollectionsOverview } from "../../components/collections-overview/collections-overview.component";

export const ShopPage = () => {
  return (
    <div className="shop-page">
      <Routes>
        <Route path="/" element={<CollectionsOverview/>}> </Route>
      </Routes>
    </div>
  );
};
