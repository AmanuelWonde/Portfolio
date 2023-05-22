import React from "react";
import "./Testimonial.css";
function TestimonialComponent() {
  return (
    <div className="TestimonialComponent">
      <div className="TestimonialComponent_textwrapper">
        <div className="TestimonialComponent_imageWrapper">
          <img src="" alt="" />
          <div className="TestimonialComponent_name">
            <h3>Dennis Jacques</h3>
            <h5> User From USA</h5>
          </div>
        </div>
        <div className="TestimonialComponent_paragraph">
          <p>
            "Only trying it out since a few days, But up to now Excellent. Seems
            to work Flawlessly.priced simply dummy text of the printing and
            typesetting industry."
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialComponent;
