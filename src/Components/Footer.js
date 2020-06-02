import React, { Component } from "react";
import {Row, Col} from "react-bootstrap";

export class Footer extends Component {
  render() {
    return (
      <footer className="footer  bg-dark text-white text-center">
        <div className="container">
          <Row xs={2} md={4}>

            {/* column 1 */}
            <Col >
               <h4>Loreum ipsom</h4>
               <ul className="list-unstyled">
                <li>Lorem, ipsum</li>
                <li>Lorem, ipsum</li>
                <li>Lorem, ipsum</li>
                <li>Lorem, ipsum</li>
               </ul>
            </Col>
            {/* column 2 */}
            <Col>
              <h4>Loreum ipsom</h4>
              <ul className="list-unstyled">
                <li>Lorem, ipsum</li>
                <li>Lorem, ipsum</li>
                <li>Lorem, ipsum</li>
                <li>Lorem, ipsum</li>
              </ul>
            </Col>
            {/* column 3 */}
            <Col>
              <h4>Loreum ipsom</h4>
              <ul className="list-unstyled">
                <li>Lorem, ipsum</li>
                <li>Lorem, ipsum</li>
                <li>Lorem, ipsum</li>
                <li>Lorem, ipsum</li>
              </ul>
            </Col>
            {/* column 4 */}
            <Col >
              <h4>Loreum ipsom</h4>
              <ul className="list-unstyled">
                <li>Lorem, ipsum</li>
                <li>Lorem, ipsum</li>
                <li>Lorem, ipsum</li>
                <li>Lorem, ipsum</li>
              </ul>
            </Col>
          
             
          </Row>
          <p className=" footer-text text-center" >
            &copy; Copyright 2020 By ASEDS INPT <br></br> All right reserved
            </p>
        </div>
      </footer>
    );
  }
}
