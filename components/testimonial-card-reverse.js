import React from 'react'

import PropTypes from 'prop-types'

const TestimonialCardReverse = (props) => {
  return (
    <>
      <div
        className={`testimonial-card-reverse-testimonial-card-reverse ${props.rootClassName} `}
      >
        <div className="testimonial-card-reverse-image1">
          <img
            alt="slide-1"
            src={props.imageSrc}
            className="testimonial-card-reverse-image2"
          />
        </div>
        <div className="testimonial-card-reverse-text-container">
          <span className="testimonial-card-reverse-text Content-Bold content-bold-white">
            {props.text}
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .testimonial-card-reverse-testimonial-card-reverse {
            display: flex;
            flex-direction: row-reverse;
          }
          .testimonial-card-reverse-image1 {
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
          .testimonial-card-reverse-image2 {
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
          .testimonial-card-reverse-text-container {
            flex: 1;
            display: flex;
            align-self: center;
            align-items: flex-start;
            padding-top: var(--dl-space-space-eightunits);
            margin-right: var(--dl-space-space-eightunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-eightunits);
          }
          .testimonial-card-reverse-text {
            margin-top: var(--dl-space-space-fourunits);
            margin-bottom: var(--dl-space-space-fourunits);
          }
          @media (max-width: 767px) {
            .testimonial-card-reverse-testimonial-card-reverse {
              flex-direction: column;
            }
            .testimonial-card-reverse-image1 {
              width: 100%;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .testimonial-card-reverse-image2 {
              min-width: 300px;
            }
            .testimonial-card-reverse-text-container {
              align-items: flex-start;
              padding-top: 0;
              margin-right: 0px;
              padding-bottom: 0;
            }
            .testimonial-card-reverse-text {
              margin-top: 0px;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
          }
        `}
      </style>
    </>
  )
}

TestimonialCardReverse.defaultProps = {
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  rootClassName: '',
  text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lob- ortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolorad Lorem ipsum dolor sit amet',
}

TestimonialCardReverse.propTypes = {
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default TestimonialCardReverse
