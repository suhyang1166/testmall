import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Container, Row, Col } from "react-bootstrap";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  console.log(query, setQuery);
  const searchQuery = query.get("q") || "";
  console.log(searchQuery);
  const getProducts = async () => {
    const url = `https://my-json-server.typicode.com/suhyang1166/testmall/products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <div>
      <Container>
        <Row>
          {productList.map((item, idx) => (
            <Col lg={3} key={idx}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
