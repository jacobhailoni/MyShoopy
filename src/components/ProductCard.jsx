import React from "react";
import {Card} from 'react-bootstrap'
import { Link } from "react-router-dom";

function ProductCard({product}) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title><Link to={`/product-details/${product.name}`} style={{color:"#ff6c18",textDecoration:"none",fontWeight:"bold"}}>{product.name}</Link></Card.Title>
          <Card.Text>{product.description.slice(0,50)}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
