import React from "react";
import { Col, Form, InputGroup, Nav, Row } from "react-bootstrap";
import "./index.css";
import { BsLockFill } from "react-icons/bs";
import {FaChartLine,FaCog,FaDownload,FaHome,FaInfoCircle,FaRegAddressCard,FaSpider,FaUser} from "react-icons/fa";
import { SlCallIn } from "react-icons/sl";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { BiMessageRounded } from "react-icons/bi";
import { Link } from "react-router-dom";

const SubmitLeave = () => {
  const holidayList = [
    { day: "12.5", title: "CL-5 days Working" },
    { day: "1", title: "Restricted Holiday" },
    { day: "0", title: "Restricted Holiday" },
    { day: "0", title: "Compassionate Leave" },
    { day: "22", title: "Unpaid Leave" },
  ];

  return (
    <div className="main-1" style={{ backgroundColor: "#D4D9E5" }}>
      <div className="main">
        <div className="sidebar">
          <Nav className="flex-column">
            <Nav.Item>
              <Nav.Link className="mb-4">
                <TfiLayoutGrid3Alt size={26} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="mb-4">
                <Link to={"/"}>
                  <FaHome size={30} />
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="mb-4">
                <FaUser size={30} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="mb-4">
                <FaCog size={30} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="mb-4">
                <FaInfoCircle size={30} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="mb-4">
                <SlCallIn size={30} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="mb-4">
                <FaRegAddressCard size={30} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="mb-4">
                <FaSpider size={30} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="mb-4">
                <FaChartLine size={30} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="mb-4">
                <BiMessageRounded size={30} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="mb-4">
                <FaDownload size={30} />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

        <div className="content">
          <div className="headers">
            <h1>NM-Interview System </h1>
          </div>
          <div className="leave-body">
            <div className="icon-part">
              <Link to="/leavereq" style={{ color: "black" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="27"
                  fill="currentColor"
                  class="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                  />
                </svg>
              </Link>
              <h4 style={{ marginLeft: "12px" }}>
                <b> Leave Requisition</b>
              </h4>
              <div className="toaster">
                <span>Status : </span>
                <span style={{ color: "green", fontWeight: "700" }}>
                  &nbsp; Approved
                </span>
              </div>
            </div>
            <div className="h-list">
              {holidayList.map((item, i) => {
                return (
                  <div>
                    <h4>{item.day}</h4>
                    <p>{item.title}</p>
                  </div>
                );
              })}
            </div>
            <>
              <div className="dd-elements">
                <div>
                  <Form style={{ marginLeft: "80px" }}>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm="2">
                        Requisition No.
                      </Form.Label>

                      <Col sm="3">
                        <InputGroup>
                          <Form.Select disabled>
                            <option>LV23/00020691</option>
                          </Form.Select>
                          <InputGroup.Text>
                            <BsLockFill color="#CCCCCC" />
                          </InputGroup.Text>
                        </InputGroup>
                      </Col>

                      <Form.Label column sm="2" style={{ marginLeft: "70px" }}>
                        Requisition Date
                      </Form.Label>
                      <Col sm="3">
                        <InputGroup>
                          <Form.Select disabled>
                            <option>08-11-2023 15:44:38</option>
                          </Form.Select>
                          <InputGroup.Text>
                            <BsLockFill color="#CCCCCC" />
                          </InputGroup.Text>
                        </InputGroup>
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm="2">
                        Leave Type
                      </Form.Label>
                      <Col sm="3">
                        <InputGroup>
                          <Form.Select disabled>
                            <option>CL-5 days Working</option>
                          </Form.Select>
                          <InputGroup.Text>
                            <BsLockFill color="#CCCCCC" />
                          </InputGroup.Text>
                        </InputGroup>
                      </Col>
                    </Form.Group>

                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextPassword"
                    >
                      <Form.Label column sm="2">
                        From Date
                      </Form.Label>
                      <Col sm="3" className="gap-4">
                        <InputGroup>
                          <Form.Select disabled>
                            <option>27-11-2023</option>
                          </Form.Select>
                          <InputGroup.Text>
                            <BsLockFill color="#CCCCCC" />
                          </InputGroup.Text>
                        </InputGroup>
                      </Col>
                      <Col sm="3" style={{ marginLeft: "250px" }}>
                        <InputGroup>
                          <Form.Select disabled>
                            <option>Full Day</option>
                          </Form.Select>
                          <InputGroup.Text>
                            <BsLockFill color="#CCCCCC" />
                          </InputGroup.Text>
                        </InputGroup>
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm="2">
                        To Date
                      </Form.Label>
                      <Col sm="3">
                        <InputGroup>
                          <Form.Select disabled>
                            <option>28-11-2023</option>
                          </Form.Select>
                          <InputGroup.Text>
                            <BsLockFill color="#CCCCCC" />
                          </InputGroup.Text>
                        </InputGroup>
                      </Col>
                      <Col sm="3" style={{ marginLeft: "250px" }}>
                        <InputGroup>
                          <Form.Select disabled>
                            <option>Full Day</option>
                          </Form.Select>
                          <InputGroup.Text>
                            <BsLockFill color="#CCCCCC" />
                          </InputGroup.Text>
                        </InputGroup>
                      </Col>
                    </Form.Group>

                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextPassword"
                    >
                      <Form.Label column sm="2">
                        No of. Days
                      </Form.Label>
                      <Col sm="3">
                        <InputGroup>
                          <Form.Select disabled>
                            <option>1</option>
                          </Form.Select>
                          <InputGroup.Text>
                            <BsLockFill color="#CCCCCC" />
                          </InputGroup.Text>
                        </InputGroup>
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                      <Row>
                        <Form.Label column sm="2">
                          Contact Details during Leave
                        </Form.Label>
                        <Col sm="4">
                          <InputGroup>
                            <Form.Control disabled as="textarea">
                              99999999999999
                            </Form.Control>
                            <InputGroup.Text>
                              <BsLockFill color="#CCCCCC" />
                            </InputGroup.Text>
                          </InputGroup>
                        </Col>
                        <Form.Label
                          column
                          sm="1"
                          style={{ marginLeft: "52px" }}
                        >
                          Remarks
                        </Form.Label>
                        <Col sm="4">
                          <InputGroup>
                            <Form.Control disabled as="textarea">
                              Personal Work
                            </Form.Control>
                            <InputGroup.Text>
                              <BsLockFill color="#CCCCCC" />
                            </InputGroup.Text>
                          </InputGroup>
                        </Col>
                      </Row>
                    </Form.Group>
                  </Form>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitLeave;