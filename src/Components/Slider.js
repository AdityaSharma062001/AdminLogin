import { Component } from "react";

export default function Slider() {
  return <>
    <section className="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
      <div className="container">
        <div className="row">

          <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
            <div className="about-text">
              <small className="small-text">Welcome to <span className="mobile-block">IT_Stack Solutions</span></small>
              <h1 className="animated animated-text">
                <span className="mr-2">Hey folks, I'm</span>
                <div className="animated-info">
                  <span className="animated-item">Marvel Sann</span>
                  <span className="animated-item">Web Designer</span>
                  <span className="animated-item">UI Specialist</span>
                </div>
              </h1>

              <p>Building a successful product is a challenge. I am highly energetic in user experience design, interfaces and web development.</p>

              <div className="custom-btn-group mt-4">
                <a href="#" className="btn mr-lg-2 custom-btn"><i className='uil uil-file-alt'></i> Download Resume</a>
                <a href="#contact" className="btn custom-btn custom-btn-bg custom-btn-link">Get a free quote</a>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 col-12">
            <div className="about-image svg">
              <img src="images/undraw/undraw_software_engineer_lvl5.svg" className="img-fluid" alt="svg image" />
            <img src="images/project/services-right-dec.png" className="img-fluid" alt="svg image" />
            </div>
          </div>

        </div>
      </div>
    </section>
    <section className="project py-5" id="project">
      <div className="container">

        <div className="row">
          <div className="col-lg-11 text-center mx-auto col-12">

            <div className="col-lg-8 mx-auto">
              <h2>Things I have designed for digital media agencies</h2>
            </div>
<div>

</div>
          </div>
        </div>
      </div>
    </section>

  </>
}