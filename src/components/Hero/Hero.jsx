import React, { useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "" });
  const [editProductId, setEditProductId] = useState(null);
  const [editProduct, setEditProduct] = useState({ name: "", price: "" });

  const handleCreate = () => {
    if (newProduct.name.trim() && newProduct.price.trim()) {
      setProducts([
        ...products,
        { id: Date.now(), name: newProduct.name, price: parseFloat(newProduct.price) },
      ]);
      setNewProduct({ name: "", price: "" });
    }
  };

  const handleEdit = (product) => {
    setEditProductId(product.id);
    setEditProduct({ name: product.name, price: product.price });
  };

  const handleSave = () => {
    setProducts(
      products.map((product) =>
        product.id === editProductId
          ? { ...product, name: editProduct.name, price: editProduct.price }
          : product
      )
    );
    setEditProductId(null);
    setEditProduct({ name: "", price: "" });
  };

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="container">
      <h1>Product Manager</h1>

      <div className="input-group">
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Product Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <button className="button button-create" onClick={handleCreate}>
          Create Product
        </button>
      </div>

      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            {editProductId === product.id ? (
              <>
                <input
                  type="text"
                  value={editProduct.name}
                  onChange={(e) =>
                    setEditProduct({ ...editProduct, name: e.target.value })
                  }
                />
                <input
                  type="number"
                  value={editProduct.price}
                  onChange={(e) =>
                    setEditProduct({ ...editProduct, price: parseFloat(e.target.value) })
                  }
                />
                <button className="button button-save" onClick={handleSave}>
                  Save
                </button>
              </>
            ) : (
              <>
                <span>
                  {product.name} - ${product.price}
                </span>
                <div>
                  <button
                    className="button button-edit"
                    onClick={() => handleEdit(product)}
                  >
                    Edit
                  </button>
                  <button
                    className="button button-delete"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
