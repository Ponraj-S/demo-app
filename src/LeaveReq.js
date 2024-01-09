import React from "react";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { Nav } from "react-bootstrap";
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
import DropdownArrayExample from "./Dropdwons";
import { Link } from "react-router-dom";

function LeaveReq() {
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
                <Link to={"/home"}>
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
          <DropdownArrayExample />
        </div>
      </div>
    </div>
  );
}

export default LeaveReq;
