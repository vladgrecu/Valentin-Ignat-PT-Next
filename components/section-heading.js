import React from 'react'

import PropTypes from 'prop-types'

import BtnPrimary from './btn-primary'

const SectionHeading = (props) => {
  return (
    <>
      <div className={`section-heading-container ${props.rootClassName} `}>
        <div className="section-heading-title-container">
          <div className="section-heading-container">
            <div className="section-heading-horizontal-line"></div>
            <span className="section-heading-text1">{props.description}</span>
          </div>
          <h1 className="heading-1">{props.newProp}</h1>
        </div>
        <a href={props.linkComponent}>
          <BtnPrimary
            ctaText="Afla mai mult"
            rootClassName="btn-primaryroot-class-name5"
            className="section-heading-component"
          ></BtnPrimary>
        </a>
      </div>
      <style jsx>
        {`
          .section-heading-title-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .section-heading-container {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .section-heading-horizontal-line {
            flex: 0 0 auto;
            width: 50px;
            height: 2px;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            background-color: var(--dl-color-neutral-white);
          }
          .section-heading-text1 {
            color: var(--dl-color-neutral-white);
            font-size: 24px;
            font-family: Teko;
            font-weight: 300;
            line-height: 1.5;
            text-transform: uppercase;
            text-decoration: none;
          }
          .section-heading-component {
            text-decoration: none;
          }
          @media (max-width: 767px) {
            .section-heading-title-container {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
          }
        `}
      </style>
    </>
  )
}

SectionHeading.defaultProps = {
  linkComponent: '',
  description: 'feedback',
  rootClassName: '',
  newProp: 'Povesti de succes',
}

SectionHeading.propTypes = {
  linkComponent: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  newProp: PropTypes.string,
}

export default SectionHeading
