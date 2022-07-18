import React from "react";
import { Card } from "./Card";

interface ProductsProps {}

export const Products: React.FC<ProductsProps> = () => {
  return (
    <div className="container">
      <div className="card">
        <h2>Mill</h2>
      </div>

      <div className="card">
        <h2>Goose Neck</h2>
      </div>

    </div>
  );
};
