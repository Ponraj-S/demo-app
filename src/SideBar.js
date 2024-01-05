import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { Row, Col, Nav, Card, Tabs, Tab, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaHome,
  FaUser,
  FaCog,
  FaInfoCircle,
  FaRegAddressCard,
  FaSpider,
  FaChartLine,
  FaDownload,
} from "react-icons/fa";
import { SlCallIn } from "react-icons/sl";
import { BiMessageRounded } from "react-icons/bi";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="main-1" style={{ backgroundColor: "#D4D9E5" }}>
      <div className="main">
        <div className="sidebar">
          <Nav className="flex-column">
            <Nav.Item>
              <Nav.Link  className="mb-4">
                <TfiLayoutGrid3Alt size={26} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link  className="mb-4">
              <Link to={'/'}> <FaHome size={30} /></Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link  className="mb-4">
                <FaUser size={30} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link  className="mb-4">
                <FaCog size={30} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link  className="mb-4">
                <FaInfoCircle size={30} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link  className="mb-4">
                <SlCallIn size={30} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link  className="mb-4">
                <FaRegAddressCard size={30} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link  className="mb-4">
                <FaSpider size={30} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link  className="mb-4">
                <FaChartLine size={30} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link  className="mb-4">
                <BiMessageRounded size={30} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link  className="mb-4">
                <FaDownload size={30} />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

        <div className="content">
          <Row>
            <Col>
              <div className="headers">
                <h1>NM-Interview System </h1>
              </div>
            </Col>
          </Row>
          <div className="main2">
            <div className="d-flex justify-content-between">
              <h1>Leaves</h1>
              <section
                className="d-flex justify-content-center align-items-center"
                style={{ gap: "18px" }}
              >
                <button type="button" className="btn btn-warning">
                  <span>
                    <Icon icon="ci:filter" />
                  </span>
                  Add Filter
                </button>
                <Link to={"/leavereq"}>
                  <button type="button" className="btn btn-success">
                    <span>
                      <Icon icon="ph:plus-thin" />
                    </span>
                    New Leave Request
                  </button>
                </Link>
              </section>
            </div>

            <Row className="mb-4">
              <Col md={3}>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      <b>34.50</b> Leave(s)
                    </Card.Title>
                    <Card.Text
                      style={{
                        fontWeight: "500",
                        fontSize: "25px",
                        paddingTop: "25px",
                      }}
                    >
                      Leave Balance
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      <b>00.50</b> Leave(s)
                    </Card.Title>
                    <Card.Text
                      style={{
                        fontWeight: "500",
                        fontSize: "25px",
                        paddingTop: "25px",
                      }}
                    >
                      Current Month LOP
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      <b>00.50 </b>Day(s) Absent
                    </Card.Title>
                    <Card.Text
                      style={{
                        fontWeight: "500",
                        fontSize: "25px",
                        paddingTop: "25px",
                      }}
                    >
                      Current Month LOP
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <div className="tab_table">
              <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                <Tab eventKey="home" className="mt-4" title="My Request">
                  <h5>Leave Balance</h5>
                  <Table className="table">
                    <thead>
                      <tr>
                        <td>Request No</td>
                        <td>Type</td>
                        <td>From</td>
                        <td>To</td>
                        <td>Days</td>
                        <td>Reason</td>
                        <td>Approval</td>
                        <td>Status</td>
                        <td>Actions</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>LV23/00020691</td>
                        <td>CL - 5 days Working</td>
                        <td>27/11/2023 1st half</td>
                        <td>01/12/2023 2nd half</td>
                        <td>5.0</td>
                        <td>Sister's Marriage.</td>
                        <td>Approved on 02/12/2023</td>
                        <td>open</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </Table>
                </Tab>

                <Tab eventKey="profile" className="mt-4" title="Leave Balance">
                  <h5>Current Year Balance</h5>

                  <Table className="table">
                    <thead>
                      <tr>
                        <td>Leave Type</td>
                        <td>Opening</td>
                        <td>Credited</td>
                        <td>Availed</td>
                        <td>Requested</td>
                        <td>Adjusted</td>
                        <td>Encashed</td>
                        <td>Balance</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Restricted Holiday</td>
                        <td>0.00</td>
                        <td>1.00</td>
                        <td>1.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                      </tr>
                      <tr>
                        <td>Public Holiday</td>
                        <td>0.00</td>
                        <td>1.00</td>
                        <td>1.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                      </tr>
                      <tr>
                        <td>CL-5 days Working</td>
                        <td>9.00</td>
                        <td>11.00</td>
                        <td>7.50</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>12.50</td>
                      </tr>
                      <tr>
                        <td>Compassionate Leave</td>
                        <td>0.00</td>
                        <td>1.00</td>
                        <td>1.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                      </tr>
                      <tr>
                        <td>Unpaid Leave</td>
                        <td>0.00</td>
                        <td>22.00</td>
                        <td>1.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>22.00</td>
                      </tr>
                    </tbody>
                  </Table>
                  <h5>Current Year Balance</h5>
                  <Table className="table">
                    <thead>
                      <tr>
                        <td>Leave Type</td>
                        <td>Opening</td>
                        <td>Credited</td>
                        <td>Availed</td>
                        <td>Requested</td>
                        <td>Adjusted</td>
                        <td>Encashed</td>
                        <td>Balance</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Restricted Holiday</td>
                        <td>0.00</td>
                        <td>1.00</td>
                        <td>1.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                      </tr>
                      <tr>
                        <td>Public Holiday</td>
                        <td>0.00</td>
                        <td>1.00</td>
                        <td>1.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                      </tr>
                      <tr>
                        <td>CL-5 days Working</td>
                        <td>9.00</td>
                        <td>11.00</td>
                        <td>7.50</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>12.50</td>
                      </tr>
                      <tr>
                        <td>Compassionate Leave</td>
                        <td>0.00</td>
                        <td>1.00</td>
                        <td>1.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                      </tr>
                      <tr>
                        <td>Unpaid Leave</td>
                        <td>0.00</td>
                        <td>22.00</td>
                        <td>1.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>22.00</td>
                      </tr>
                    </tbody>
                  </Table>
                </Tab>
                <select></select>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
