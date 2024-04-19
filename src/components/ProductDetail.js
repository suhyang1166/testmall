import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Dropdown, Button } from "react-bootstrap";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoding] = useState(false);
  const { id } = useParams();
  const getProductDetail = async () => {
    setLoding(true);
    const url = `https://my-json-server.typicode.com/suhyang1166/testmall/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setLoding(false);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);
  if (loading || product == null) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <Container>
        <Row>
          <Col className="product-detail-img">
            <img src={product?.img} alt="" />
          </Col>
          <Col>
            <div className="product-info">{product?.title}</div>
            <div className="product-info">{product?.price}</div>
            <div className="choice">
              {product?.choice ? "Concious Point" : ""}
            </div>
            <Dropdown className="drop-down">
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                SIZE SELECT
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">S</Dropdown.Item>
                <Dropdown.Item href="#/action-2">M</Dropdown.Item>
                <Dropdown.Item href="#/action-3">L</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="dark" className="add-button">
              상품구매하기
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default ProductDetail;
