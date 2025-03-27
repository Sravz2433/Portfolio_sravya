import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaBookOpen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function BlogCards(props) {
  const navigate = useNavigate();

  return (
    <Card className="blog-card-view">
      {props.imgPath && <Card.Img variant="top" src={props.imgPath} alt="card-img" />}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button
          variant="primary"
          onClick={() => navigate(props.readLink)}
          style={{ display: "flex", alignItems: "center" }}
        >
          <FaBookOpen style={{ marginRight: "5px" }} /> Read
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BlogCards;
