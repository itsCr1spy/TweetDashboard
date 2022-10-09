import React from "react";
import { Container, Row, Col, Card, Dropdown, Button } from "react-bootstrap";
import "./CardContainer.css";
import {
  MdMoreHoriz,
  MdOutlineSaveAlt,
  MdArrowRightAlt,
  MdBlock,
  MdPersonSearch,
  MdOutlineExitToApp,
} from "react-icons/md";

function CardContainer(props) {
  //console.log(props.data)

  const saveData = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8080/addData", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(props.data),
    });

    const dat = await res.json();

    if (res.status === 422 || !dat) {
      alert("error");
    } else {
      alert("Saved");
    }
  };

  const blockTweet = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8080/Block", {
      method: "DELETE",
      mode: "cors",
      body: JSON.stringify(props.data),
    });

    const dat = await res.json();

    if (res.status === 422 || !dat) {
      alert("error");
    } else {
      alert("Blocked");
    }
  };

  return (
    <Container className="tweetContainer">
      <Row style={{ margin: "0px" }}>
        <Col className="col-sm-auto gy-1 ">
          <img
            style={{ height: "3rem", borderRadius: "0.7rem" }}
            src={props.data.img}
            alt="PfP"
          />
        </Col>
        <Col className="col float-left ">
          <Row>
            <b>{props.data.name}</b>
          </Row>
          <Row>{props.data.title}</Row>
        </Col>
        <Col className="col-sm-auto">
          <Dropdown>
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
              <MdMoreHoriz />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={saveData}>
                <MdOutlineSaveAlt /> Save
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <MdArrowRightAlt /> Follow
              </Dropdown.Item>
              <Dropdown.Item onClick={blockTweet}>
                <MdBlock /> Block
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                <MdPersonSearch /> Report
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row
        className="row-md-auto"
        style={{ padding: "2px 1rem 2px 1rem", margin: "0px" }}
      >
        <Card style={{ backgroundColor: "#F2F2F2" }}>
          <Card.Body>{props.data.question}</Card.Body>
        </Card>
      </Row>
      <Row style={{ padding: "2px 1rem 2px 1rem", margin: "0px" }}>
        <div>{props.data.answer}</div>
      </Row>
      <Row style={{ padding: "2px 1rem 2px 1rem", margin: "0px" }}>
        <div style={{ justifyContent: "space-between" }}>
          <span>
            <Button className="me-2" variant="outline-secondary">
              likes {props.data.likes}
            </Button>
            <Button className="me-2" variant="outline-secondary">
              views {props.data.views}
            </Button>
          </span>
          <span style={{ float: "right" }}>
            <Button variant="outline-secondary">
              <MdOutlineExitToApp />
            </Button>
          </span>
        </div>
      </Row>
    </Container>
  );
}

export default CardContainer;
