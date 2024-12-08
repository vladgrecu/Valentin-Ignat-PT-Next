import React from 'react'

import PropTypes from 'prop-types'

const TestimonialCard = (props) => {
  return (
    <>
      <div
        className={`testimonial-card-testimonial-card-reverse ${props.rootClassName} `}
      >
        <div className="testimonial-card-text-container">
          <span className="testimonial-card-text Content-Bold content-bold-white">
            {props.text}
          </span>
        </div>
        <div className="testimonial-card-image1">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="testimonial-card-image2"
          />
        </div>
      </div>
      <style jsx>
        {`
          .testimonial-card-testimonial-card-reverse {
            display: flex;
            flex-direction: row-reverse;
          }
          .testimonial-card-text-container {
            flex: 1;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-left: var(--dl-space-space-eightunits);
            padding-top: var(--dl-space-space-eightunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-eightunits);
          }
          .testimonial-card-text {
            margin-top: var(--dl-space-space-fourunits);
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .testimonial-card-image1 {
            flex: 0 0 auto;
            width: var(--dl-size-size-half);
            display: flex;
            overflow: hidden;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial-card-image2 {
            width: 100%;
            min-width: 550px;
            transform: scale(1);
            object-fit: contain;
            transition: transform 0.5s;
            flex-shrink: 0;
            object-position: bottom;
            transform-origin: center center;
            scroll-snap-align: start;
          }
          @media (max-width: 767px) {
            .testimonial-card-testimonial-card-reverse {
              flex-direction: column-reverse;
            }
            .testimonial-card-text-container {
              align-items: flex-start;
              margin-left: 0px;
              padding-top: 0;
              margin-right: 0px;
              padding-bottom: 0;
            }
            .testimonial-card-text {
              margin-top: 0px;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .testimonial-card-image1 {
              width: 100%;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .testimonial-card-image2 {
              min-width: 300px;
            }
          }
        `}
      </style>
    </>
  )
}

TestimonialCard.defaultProps = {
  rootClassName: '',
  text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lob- ortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolorad Lorem ipsum dolor sit amet',
  imageAlt: 'slide-1',
  imageSrc: '/1-600w.jpg',
}

TestimonialCard.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default TestimonialCard
