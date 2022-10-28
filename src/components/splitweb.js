import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CloseButton from "react-bootstrap/CloseButton";
import "./splitweb.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileVid from "../assets/profilebg.mp4";
import ProfileImg from "../assets/profile.png";
import Split from "react-split";
import "animate.css";

const Translator = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [next, setNext] = useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        fullscreen={true}
        className="modal-div"
      >
        <Modal.Header>
          <CloseButton onClick={() => setModalShow(false)} variant="white" />
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid style={{ height: "100%" }}>
            {next ? (
              <iframe
              src="https://docs.google.com/presentation/d/e/2PACX-1vREAWhxXgHFMoWZNPYNYoLtmWX1uIz_7qngEyvJs4UznqswU7YJkg2YmXbM5YprxAa5Fguz1hBV_wSM/embed?start=false&loop=false&delayms=3000&slide=id.g1509d630c3e_0_927https://docs.google.com/presentation/d/e/2PACX-1vREAWhxXgHFMoWZNPYNYoLtmWX1uIz_7qngEyvJs4UznqswU7YJkg2YmXbM5YprxAa5Fguz1hBV_wSM/embed?start=false&loop=false&delayms=3000&slide=id.g15759d458aa_0_31"
              frameborder="0"
              width="100%"
              height="572"
              allowfullscreen="true"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              ></iframe>
              ) : (
                <iframe
                src="https://docs.google.com/presentation/d/e/2PACX-1vRoE1Bmy-ERt2bOKC6PkTg3fZyJB3zkSJ45KOcYg2q5OTWZUfzOtYFay_iQhFv2ksODHFE9xCD1_cJy/embed?start=false&loop=false&delayms=3000&slide=id.g1509d630c3e_0_927"
                frameborder="0"
                width="100%"
                height="572"
                allowfullscreen="true"
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
              ></iframe>
            )}
          </Container>
        </Modal.Body>
        <Modal.Footer>
          {next ? (
            <Button utton variant="success" onClick={() => setNext(false)}>
              Previous
            </Button>
          ) : (
            <Button utton variant="success" onClick={() => setNext(true)}>
              Next
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <Container fluid>
      <Row className="justify-content-between main-row">
        <Col className="first-box" md={7}>
          <Container fluid className="profile-data">
            <div className="overlay"></div>
            <video src={ProfileVid} autoPlay muted loop />
            <Container className="content">
              <h3 className="profile-header animate__animated animate__bounceIn">
                Hi! I am <span>Gabriel Teniente</span>,<br /> a UX Designer
                based in Texas.
              </h3>
              <p className="profile-para animate__animated animate__bounceIn animate__delay-1s">
                I help bridge your business and innovation strategies by
                validating digital design products through a human-centered
                experience.
              </p>
            </Container>
          </Container>

          <Container fluid className="profile-data ">
            <h3 className="form-header">Fill The Form</h3>
            <Container className=" form-data">
              <Form>
                <Row className="justify-content-around">
                  <Col md={12}>
                    <Row className="justify-content-around">
                      <Col md={6} className="p-1">
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="p-1">
                        <Form.Group
                          className="mb-4"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={12}>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                      <Form.Label>Company</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                      <Form.Label>Company Name</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                      <Form.Label>Company Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group className="mb-4" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button className="submit-btn" variant="success">
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Container>
          </Container>

          <Container fluid className="profile-data">
            <Container className="slider-content">
              <h3 className="form-header">Google Slides</h3>
              <Split
                className="split-container"
                minSize={[0, 0]}
                sizes={[50, 50]}
                expandToMin={false}
                gutterSize={10}
                gutterAlign="center"
                snapOffset={30}
                dragInterval={1}
                direction="horizontal"
                cursor="col-resize"
              >
                <div className="split-img">
            <div className="overlay-split"></div>

                </div>
                <div className="split-img-1">
                  
                </div>
              </Split>

              <Container className="more-projects-div">
                <p>
                  {" "}
                  loremSunt esse ipsum ea cupidatat duis aliqua Lorem. Esse
                  laboris aliqua minim velit officia pariatur Lorem irure
                  laboris commodo laborum quis sit. Do consectetur aliqua cillum
                  qui non cillum occaecat fugiat. Est nulla Lorem amet officia
                  excepteur laborum qui fugiat{" "}
                </p>

                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />

                <Button
                  onClick={() => setModalShow(true)}
                  className="more-projects-btn"
                  variant="success"
                >
                  More Projects
                </Button>
              </Container>
            </Container>
          </Container>
          <Container fluid className="project-content">
            <h3 className="form-header">Projects</h3>

            <Row>
              <Col xs={6}>
                <div className="project-card">
                  <h4>Project 1</h4>
                  <p>This is my project.</p>
                </div>
              </Col>
              <Col xs={6}>
                <div className="project-card">
                  <h4>Project 2</h4>
                  <p>This is my project.</p>
                </div>
              </Col>
              <Col xs={6}>
                <div className="project-card">
                  <h4>Project 3</h4>
                  <p>This is my project.</p>
                </div>
              </Col>
              <Col xs={6}>
                <div className="project-card">
                  <h4>Project 4</h4>
                  <p>This is my project.</p>
                </div>
              </Col>
              <Col xs={6}>
                <div className="project-card">
                  <h4>Project 5</h4>
                  <p>This is my project.</p>
                </div>
              </Col>
              <Col xs={6}>
                <div className="project-card">
                  <h4>Project 6</h4>
                  <p>This is my project.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col className="second-box" md={5}>
          <img style={{ width: "100%", height: "100vh" }} src={ProfileImg} />
        </Col>
      </Row>
    </Container>
  );
};

export default Translator;
