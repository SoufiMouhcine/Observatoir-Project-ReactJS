import React, { Component } from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdbreact";

export class PubSlider extends Component {
  
  render () {
    return (
        <MDBCarousel
          activeItem={3}
          length={3}
          slide={true}
          showControls={true}
          showIndicators={true}
          multiItem
        >
                <MDBContainer>
          <MDBCarouselInner>
            <MDBRow>
              <MDBCarouselItem class="col" itemId="1">
                <div class="row">
                  <div class="col-md-4">
                    <MDBCardImage
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
                    />
                    <MDBCardBody>
                      <MDBCardTitle>MDBCard title</MDBCardTitle>
                      <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </MDBCardText>
                      <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                    </div>
                    <div class="col-md-4">
                    <MDBCardImage
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                    />
                    <MDBCardBody>
                      <MDBCardTitle>MDBCard title</MDBCardTitle>
                      <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </MDBCardText>
                      <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                    </div>
                    <div class="col-md-4">

                    <MDBCardImage
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                    />
                    <MDBCardBody>
                      <MDBCardTitle>MDBCard title</MDBCardTitle>
                      <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </MDBCardText>
                      <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                    </div>

                    </div>
              </MDBCarouselItem>
              <MDBCarouselItem class="col" itemId="2">
              <div class="row">
                  <div class="col-md-4">
                    <MDBCardImage
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(60).jpg"
                    />
                    <MDBCardBody>
                      <MDBCardTitle>MDBCard title</MDBCardTitle>
                      <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </MDBCardText>
                      <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                    </div>

                    <div class="col-md-4">
                    <MDBCardImage
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg"
                    />
                    <MDBCardBody>
                      <MDBCardTitle>MDBCard title</MDBCardTitle>
                      <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </MDBCardText>
                      <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                    </div>

                    <div class="col-md-4">
                    <MDBCardImage
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg"
                    />
                    <MDBCardBody>
                      <MDBCardTitle>MDBCard title</MDBCardTitle>
                      <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </MDBCardText>
                      <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                    </div>
                    </div>
              </MDBCarouselItem>

              <MDBCarouselItem class="col" itemId="3">
              <div class="row">
                  <div class="col-md-4">
                    <MDBCardImage
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg"
                    />
                    <MDBCardBody>
                      <MDBCardTitle>MDBCard title</MDBCardTitle>
                      <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </MDBCardText>
                      <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                    </div>
                    <div class="col-md-4">
                    <MDBCardImage
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg"
                    />
                    <MDBCardBody>
                      <MDBCardTitle>MDBCard title</MDBCardTitle>
                      <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </MDBCardText>
                      <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                    </div>

                    <div class="col-md-4">
                    <MDBCardImage
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg"
                    />
                    <MDBCardBody>
                      <MDBCardTitle>MDBCard title</MDBCardTitle>
                      <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </MDBCardText>
                      <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                    </div>
                  </div>

              </MDBCarouselItem>
            </MDBRow>
          </MDBCarouselInner>
          </MDBContainer>

        </MDBCarousel>
    );
    }
}
