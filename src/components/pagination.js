"use client";
import React, { useEffect, useState } from "react";

function PaginationComponent() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const TOTAL_NO_OF_PRODUCT_PER_PAGE = 5 * page;

  const getProductData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    if (data?.products) {
      setProducts(data.products);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  const setPagination = (selectedPage) => {
    setPage(selectedPage);
  };

  return !!products?.length ? (
    <>
      <div>
        <h1>Product page</h1>
        <div className="products__wrapper">
          {products
            .slice(page * 5 - 5, TOTAL_NO_OF_PRODUCT_PER_PAGE)
            .map((product) => {
              return (
                <div className="product__wrapper" key={product.id}>
                  <img src={product.thumbnail} />
                  <h5>{product.title}</h5>
                </div>
              );
            })}
        </div>
      </div>
      <div className="pagination">
        <span className={page === 1 && "disable"} onClick={() => setPagination(page - 1)}>⏮️</span>
        {[...Array(products.length / 5)].map((_, index) => (
          <span
            key={index}
            className={page === index + 1 && "active"}
            onClick={() => setPagination(index + 1)}
          >
            {index + 1}
          </span>
        ))}
        <span className={page === products.length / 5 && "disable"} onClick={() => setPagination(page + 1)}>⏭️</span>
      </div>
    </>
  ) : (
    "loading..."
  );
}

export default PaginationComponent;
