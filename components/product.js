import React from 'react';

const Product = ({ title, description, inventory }) => {
  return (
    <div className="rounded-xl border-solid border-2 border-black flex flex-col w-full h-full justify-between p-1">
      <h4 className="text-lg font-bold">{title}</h4>
      <p className="text-sm">{description}</p>
      <p className="text-xs">Inventory: {inventory}</p>
    </div>
  );
};

export default Product;

