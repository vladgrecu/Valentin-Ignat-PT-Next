import React from 'react'

import PropTypes from 'prop-types'

import BtnPrimary from './btn-primary'

const FadeInLeftHeroSection = (props) => {
  return (
    <>
      <div
        className={`fade-in-left-hero-section-container1 animation-fade-in-left ${props.rootClassName} `}
      >
        <div className="fade-in-left-hero-section-horizontal-line"></div>
        <div className="fade-in-left-hero-section-container2">
          <div className="fade-in-left-hero-section-container3">
            <span className="fade-in-left-hero-section-text heading-1">
              {props.textContent}
            </span>
            <div
              data-action="showContactFormModal"
              className="fade-in-left-hero-section-contact-btn"
            >
              <BtnPrimary
                ctaText="Contacteaza-ma"
                rootClassName="btn-primaryroot-class-name1"
              ></BtnPrimary>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .fade-in-left-hero-section-container1 {
            display: flex;
            position: relative;
          }
          .fade-in-left-hero-section-horizontal-line {
            width: 4px;
            display: flex;
            align-self: stretch;
            margin-right: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-default-primary);
          }
          .fade-in-left-hero-section-container2 {
            flex: 1;
            width: 100%;
            padding-top: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .fade-in-left-hero-section-container3 {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .fade-in-left-hero-section-text {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .fade-in-left-hero-section-contact-btn {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .fade-in-left-hero-sectionroot-class-name {
            width: 100%;
            align-self: flex-start;
          }

          @media (max-width: 991px) {
            .fade-in-left-hero-sectionroot-class-name {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .fade-in-left-hero-section-horizontal-line {
              margin-right: var(--dl-space-space-unit);
            }
            .fade-in-left-hero-section-text {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
          }
        `}
      </style>
    </>
  )
}

FadeInLeftHeroSection.defaultProps = {
  textContent: 'Some awesome title that would be fit as a h1 here.',
  rootClassName: '',
}

FadeInLeftHeroSection.propTypes = {
  textContent: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FadeInLeftHeroSection
