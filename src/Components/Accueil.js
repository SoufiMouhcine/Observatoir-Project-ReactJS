import React, {Component} from "react";
import img2 from "./slider2.jpg";
import {Image} from 'react-bootstrap';
import Slideshow from "../Slider";



export class Accueil extends Component {
  render() {
    return (
      <div className="container">
        <Slideshow />

        <div class="container">
          <h1>Articles</h1>
          <div class="row">
            <div class="col-md-4">
              <div class="imgAbt">
                <Image src={img2} thumbnail />
              </div>
            </div>
            <div class="col-md-8">
              <p>
                Lots of text here...With the four tiers of grids available
                you're bound to run into issues where, at certain breakpoints,
                your columns don't clear quite right as one is taller than the
                other. To fix that, use a combination of a .clearfix and o..
              </p>
              <div className="text-right">
                <a href="">Read more</a>
              </div>
            </div>
          </div>
          <br />

          <div class="row">
            <div class="col-md-4">
              <div class="imgAbt1">
                <Image src={img2} thumbnail />
              </div>
            </div>
            <div class="col-md-8">
              <p>
                Lots of text here...With the four tiers of grids available
                you're bound to run into issues where, at certain breakpoints,
                your columns don't clear quite right as one is taller than the
                other. To fix that, use a combination of a .clearfix and o...
              </p>
              <div className="text-right">
                <a href="">Read more</a>
              </div>
            </div>
          </div>
          <br />

          <div class="row">
            <div class="col-md-4">
              <div class="imgAbt2">
                <Image src={img2} thumbnail />
              </div>
            </div>
            <div class="col-md-8">
              <p>
                Lots of text here...With the four tiers of grids available
                you're bound to run into issues where, at certain breakpoints,
                your columns don't clear quite right as one is taller than the
                other. To fix that, use a combination of a .clearfix and o ...
              </p>
              <div className="text-right">
                <button id="myBtn">Read more</button>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    );
  }
}


