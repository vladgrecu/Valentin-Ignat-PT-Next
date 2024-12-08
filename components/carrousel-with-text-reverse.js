import React from 'react'

import PropTypes from 'prop-types'

const CarrouselWithTextReverse = (props) => {
  return (
    <>
      <div
        data-role="carrousel"
        className={`carrousel-with-text-reverse-carrousel ${props.rootClassName} `}
      >
        <div className="carrousel-with-text-reverse-slider">
          <div className="slides-container">
            <img
              alt="slide-1"
              src={props.slideOneSrc}
              data-slide-index="0"
              className="carrousel-slide slide-active animation-fade-in"
            />
            <img
              alt="slide-1"
              src={props.slideTwoSrc}
              data-slide-index="1"
              className="carrousel-with-text-reverse-image2 carrousel-slide animation-fade-in"
            />
            <img
              alt="slide-1"
              src={props.slideThreeSrc}
              data-slide-index="2"
              className="carrousel-with-text-reverse-image3 carrousel-slide animation-fade-in"
            />
          </div>
          <div className="carrousel-controls-container">
            <div data-slide-index="0" className="carrousel-control-btn">
              <div className="carrousel-with-text-reverse-bullet-content1 tl-bullet-active tl-bullet">
                <div className="tl-inner-active inner-white"></div>
              </div>
              <div className="tl-bullet-inner"></div>
            </div>
            <div className="carrousel-with-text-reverse-line1 tl-line"></div>
            <div data-slide-index="1" className="carrousel-control-btn">
              <div className="carrousel-with-text-reverse-bullet-content2 tl-bullet">
                <div className="inner-white"></div>
              </div>
              <div className="tl-bullet-inner"></div>
            </div>
            <div className="carrousel-with-text-reverse-line2 tl-line"></div>
            <div data-slide-index="2" className="carrousel-control-btn">
              <div className="carrousel-with-text-reverse-bullet-content3 tl-bullet">
                <div className="inner-white"></div>
              </div>
              <div className="tl-bullet-inner"></div>
            </div>
          </div>
        </div>
        <div className="carrousel-with-text-reverse-text-container">
          <span className="carrousel-with-text-reverse-text Content-Bold content-bold-white">
            {props.text}
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .carrousel-with-text-reverse-carrousel {
            display: flex;
            flex-direction: row-reverse;
          }
          .carrousel-with-text-reverse-slider {
            flex: 0 0 auto;
            width: var(--dl-size-size-half);
            display: flex;
            align-self: stretch;
            align-items: center;
            margin-left: var(--dl-space-space-eightunits);
            flex-direction: column;
            justify-content: flex-end;
          }
          .carrousel-with-text-reverse-image2 {
            flex: 1;
            width: 100%;
            height: 100%;
            transform: scale(1);
            object-fit: contain;
            transition: transform 0.5s;
            flex-shrink: 0;
            object-position: bottom;
            transform-origin: center center;
            scroll-snap-align: start;
          }
          .carrousel-with-text-reverse-image3 {
            flex: 1;
            width: 100%;
            height: 100%;
            transform: scale(1);
            object-fit: contain;
            transition: transform 0.5s;
            flex-shrink: 0;
            object-position: bottom;
            transform-origin: center center;
            scroll-snap-align: start;
          }
          .carrousel-with-text-reverse-bullet-content1 {
            z-index: 1;
          }
          .carrousel-with-text-reverse-line1 {
            border-bottom-width: 0px;
          }
          .carrousel-with-text-reverse-bullet-content2 {
            z-index: 1;
          }
          .carrousel-with-text-reverse-line2 {
            border-bottom-width: 0px;
          }
          .carrousel-with-text-reverse-bullet-content3 {
            z-index: 1;
          }
          .carrousel-with-text-reverse-text-container {
            flex: 1;
            display: flex;
            align-self: center;
            align-items: flex-end;
            padding-top: var(--dl-space-space-eightunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-eightunits);
          }
          .carrousel-with-text-reverse-text {
            margin-bottom: 0px;
          }

          @media (max-width: 767px) {
            .carrousel-with-text-reverse-carrousel {
              flex-direction: column;
            }
            .carrousel-with-text-reverse-slider {
              width: 100%;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: 0px;
            }
            .carrousel-with-text-reverse-text-container {
              align-items: flex-start;
              padding-top: var(--dl-space-space-tripleunit);
              padding-bottom: var(--dl-space-space-tripleunit);
            }
          }
          @media (max-width: 479px) {
            .carrousel-with-text-reverse-slider {
              margin-bottom: 0px;
            }
            .carrousel-with-text-reverse-text-container {
              padding-top: var(--dl-space-space-doubleunit);
              padding-bottom: var(--dl-space-space-doubleunit);
            }
          }
        `}
      </style>
    </>
  )
}

CarrouselWithTextReverse.defaultProps = {
  rootClassName: '',
  slideThreeSrc: '/1-200h.jpg',
  slideTwoSrc: '/2-200h.jpg',
  slideOneSrc: '/0-200h.jpg',
  text: 'Praesent nec lobortis dolor. Vestibulum scelerisque purus nisi, eu sollicitudin tellus fringilla at. In eget enim et lectus sollicitudin mattis. In vestibulum massa sit amet egestas facilisis. Integer porta augue sit amet diam dignissim suscipit. Ut sit amet pellentesque sapien. Praesent a molestie elit.',
}

CarrouselWithTextReverse.propTypes = {
  rootClassName: PropTypes.string,
  slideThreeSrc: PropTypes.string,
  slideTwoSrc: PropTypes.string,
  slideOneSrc: PropTypes.string,
  text: PropTypes.string,
}

export default CarrouselWithTextReverse
