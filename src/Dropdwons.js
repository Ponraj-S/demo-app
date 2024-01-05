import React from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import "./index.css";
import { Link } from "react-router-dom";
import { BsFillCaretDownFill } from "react-icons/bs";
const DropdownArrayExample = () => {
  const holidayList = [
    { day: "12.5", title: "CL-5 days Working" },
    { day: "1", title: "Restricted Holiday" },
    { day: "0", title: "Restricted Holiday" },
    { day: "0", title: "Compassionate Leave" },
    { day: "22", title: "Unpaid Leave" },
  ];

  return (
    <div className="leave-body">
      <div className="icon-part">
        <Link to={"/"} style={{ color: "black" }}>
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
                  Leave Type
                </Form.Label>
                <Col sm="3">
                  <InputGroup>
                    <Form.Select className="leave-select">
                      <option>Leave Type</option>
                    </Form.Select>
                    <InputGroup.Text>
                      <BsFillCaretDownFill />
                    </InputGroup.Text>
                  </InputGroup>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                  From Date
                </Form.Label>
                <Col sm="3" className="gap-4">
                  <Form.Control type="date" />
                </Col>
                <Col sm="3" style={{ marginLeft: "250px" }}>
                  <InputGroup>
                    <Form.Select className="leave-select">
                      <option>Full Day</option>
                      <option>Half Day</option>
                    </Form.Select>
                    <InputGroup.Text>
                      <BsFillCaretDownFill />
                    </InputGroup.Text>
                  </InputGroup>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                  To Date
                </Form.Label>
                <Col sm="3">
                  <Form.Control type="date" />
                </Col>
                <Col sm="3" style={{ marginLeft: "250px" }}>
                  <InputGroup>
                    <Form.Select className="leave-select">
                      <option>Full Day</option>
                      <option>Half Day</option>
                    </Form.Select>
                    <InputGroup.Text>
                      <BsFillCaretDownFill />
                    </InputGroup.Text>
                  </InputGroup>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                  No of. Days
                </Form.Label>
                <Col sm="3">
                  <Form.Control type="number" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Row>
                  <Form.Label column sm="2">
                    Contact Details during Leave
                  </Form.Label>
                  <Col sm="4">
                    <Form.Control as="textarea"></Form.Control>
                  </Col>
                  <Form.Label column sm="1" style={{ marginLeft: "52px" }}>
                    Remarks
                  </Form.Label>
                  <Col sm="4">
                    <Form.Control as="textarea"></Form.Control>
                  </Col>
                </Row>
              </Form.Group>
            </Form>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center gap-3 pt-2 ">
          <Link to={"/"}>
            <Button className="c-button btn-secondary p-0">Cancel</Button>
          </Link>
          <Link to={"/submitLeave"}>
            <Button className="r-button p-0">Request Leave</Button>
          </Link>
        </div>
      </>
    </div>
  );
};

export default DropdownArrayExample;
