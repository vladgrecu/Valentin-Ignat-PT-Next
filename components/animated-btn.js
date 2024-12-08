import React from 'react'

import PropTypes from 'prop-types'

const AnimatedBtn = (props) => {
  return (
    <>
      <div className="animated-btn-container">
        <div className="animated-btn-animated-btn">
          <span className="animated-btn-text">{props.ctaText}</span>
        </div>
      </div>
      <style jsx>
        {`
          .animated-btn-container {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .animated-btn-animated-btn {
            color: var(--dl-color-neutral-white);
            cursor: pointer;
            height: 60px;
            display: flex;
            z-index: 1;
            overflow: hidden;
            position: relative;
            transition: color 0.4s linear;
            align-items: center;
            line-height: 0;
            padding-top: 30px;
            border-color: var(--dl-color-default-primary);
            border-width: 1px;
            padding-left: 43px;
            padding-right: 43px;
            flex-direction: row;
            padding-bottom: 30px;
            background-color: var(--dl-color-default-primary);
          }
          .animated-btn-text {
            font-size: 18px;
            font-family: Teko;
            font-weight: 300;
            line-height: 1;
            letter-spacing: 1px;
            text-transform: uppercase;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

AnimatedBtn.defaultProps = {
  ctaText: 'become a member',
}

AnimatedBtn.propTypes = {
  ctaText: PropTypes.string,
}

export default AnimatedBtn
