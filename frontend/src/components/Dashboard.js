import React, { useEffect, useState } from "react";
import { Col, Row, Container, ButtonGroup, Button } from "react-bootstrap";
import CardContainer from "./CardContainer";
import {
  MdOutlineSwitchCamera,
  MdOutlinePhoneMissed,
  MdOutlineStickyNote2,
  MdNotificationsActive,
} from "react-icons/md";
import "./Dashboard.css";

function Dashboard() {
  const [tweets, setTweet] = useState([]);

  const getdata = async () => {
    const res = await fetch("http://localhost:8080/getData", {
      method: "GET",
    });

    const data = await res.json();
    if (res.status === 422 || !data) {
    } else {
      setTweet(data);
    }
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col className="col-1">
            <div className="sidebar">
              <ButtonGroup className="me-2" aria-label="First group" vertical>
                <Button variant="outline-secondary">
                  <MdOutlineSwitchCamera />
                </Button>
                <Button variant="outline-secondary">
                  <MdOutlinePhoneMissed />
                </Button>
                <Button variant="outline-secondary">
                  <MdOutlineStickyNote2 />
                </Button>
                <Button variant="outline-secondary">
                  <MdNotificationsActive />
                </Button>
              </ButtonGroup>
            </div>
          </Col>
          <Col className="col-11">
            <Container className="dashBoardMain">
              <Row>
                <Col className="col-12 col-md-8">
                  <ButtonGroup className="me-2" aria-label="First group">
                    <Button variant="outline-success">Write-Ups</Button>
                    <Button variant="outline-success">Forums</Button>
                  </ButtonGroup>
                  <Button className="but" variant="outline-success">
                    New
                  </Button>
                </Col>
                <Col className="col-6 col-md-4">
                  <label style={{ float: "right" }}>
                    Check Out For More Writeups!!
                  </label>
                </Col>
              </Row>
              <Row md={1} lg={3} className="cards">
                {tweets.map((tweets) => (
                  <Col key={tweets.id}>
                    <CardContainer data={tweets} />
                  </Col>
                ))}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
