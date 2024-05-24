import React from "react";
import { Card, Image, ListGroup, ListGroupItem } from "react-bootstrap";

const Carts = () => {
  return (
    <div className="d-flex flex-wrap justify-content-between">
      <Card style={{ width: "18rem" }}>
        <Image
          variant="top"
          src="https://cdn.tgdd.vn/Products/Images/2019/07/12/1141176/macbook-air-2018-mqd2ll-1-600x600.jpg"
          alt="MacBook Air 2018"
        />
        <Card.Body>
          <Card.Title>MacBook Air 2018</Card.Title>
          <Card.Text>
            The reason I am selling the machine is because it is too much power
            for what I need.
          </Card.Text>
          <ListGroup>
            <ListGroupItem>
              <span className="fw-bold">Giá:</span> 30.000.000 ₫
            </ListGroupItem>
            <ListGroupItem>
              <span className="fw-bold">Xem chi tiết</span>
            </ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Image
          variant="top"
          src="https://cdn.tgdd.vn/Products/Images/2019/07/12/1141177/macbook-pro-2019-1-600x600.jpg"
          alt="MacBook Pro 2019"
        />
        <Card.Body>
          <Card.Title>MacBook Pro 2019</Card.Title>
          <Card.Text>
            The reason I am selling the machine is because it is too much power
            for what I need.
          </Card.Text>
          <ListGroup>
            <ListGroupItem>
              <span className="fw-bold">Giá:</span> 30.000.000 ₫
            </ListGroupItem>
            <ListGroupItem>
              <span className="fw-bold">Xem chi tiết</span>
            </ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Carts;
