"use client";
import { useState } from "react";
import Product from "../../components/product";
const Admin = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [products, setProducts] = useState([]);
  const [newProductTitle, setNewProductTitle] = useState("");
  const [newProductDesc, setNewProductDesc] = useState("");
  const [newProductInv, setNewProductInv] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (newProductTitle.length == 0) {
      setErrorMessage("Title cannot be blank.");
      setError(true);
      return;
    }
    
    if (newProductDesc.length == 0) {
      setErrorMessage("Description cannot be blank.");
      setError(true);
      return;
    }
    
    if (newProductInv.length == 0) {
      setErrorMessage("Amount cannot be blank.");
      setError(true);
      return;
    }
    
    if (isNaN(parseInt(newProductInv))) {
      setErrorMessage("Amount must be an integer.");
      setError(true);
      return;
    }
    
    setProducts([
      ...products,
      {
        title: newProductTitle,
        description: newProductDesc,
        inventory: newProductInv,
      },
    ]);
    
    setErrorMessage("");
    setError(false);
  };
  
  const deleteProduct = (title) => {
    const updatedProducts = products.filter((product) => product.title != title);
    setProducts(updatedProducts);
  };
  
  return (
    <main className="flex flex-col w-full h-full justify-between my-16 p-32">
      <h1 className="my-4 text-6xl font-bold">Welcome to the Admin page.</h1>
      <form onSubmit={handleSubmit}>
        {error && <p className="my-4 p-4 bg-red-100 rounded-md">{errorMessage}</p>}
        <input
          className="w-24 my-4 mx-2 p-2 bg-gray-600 text-white rounded-md"
          type="text"
          placeholder="Title"
          value={newProductTitle}
          onChange={(e) => setNewProductTitle(e.target.value)}
          />
        <input
          className="w-44 my-4 mx-2 p-2 bg-gray-600 text-white rounded-md"
          type="text"
          placeholder="Description"
          value={newProductDesc}
          onChange={(e) => setNewProductDesc(e.target.value)}
          />
        <input
          className="w-24 my-4 mx-2 p-2 bg-gray-600 text-white rounded-md"
          type="text"
          placeholder="Amount"
          value={newProductInv} onChange={(e) => setNewProductInv(e.target.value)}
          />
        <button className="mx-4 w-32 my-4 p-2 bg-blue-400 rounded-md">Add Product</button>
      </form>
      {(!Array.isArray(products) || products.length == 0) && <p className="w-full text-center text-xl font-bold p-8">There are no items to show.</p>}
      <div className="grid grid-cols-3 w-full p-2">
        {Array.isArray(products) ? products.map((product, index) => {
          return (
            <div className="h-32 w-46 m-1">
              <button className="fixed bg-red-100 rounded-xl p-1 ml-[120px] mt-1" onClick={() => deleteProduct(product.title)}>Delete</button>
              <Product key={index} {...product}/>
            </div>
          );
        }) : null}
      </div>
    </main>
  );
};

export default Admin;

