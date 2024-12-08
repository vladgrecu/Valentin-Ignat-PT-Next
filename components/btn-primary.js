import React from 'react'

import PropTypes from 'prop-types'

const BtnPrimary = (props) => {
  return (
    <>
      <div className={`btn-primary-container ${props.rootClassName} `}>
        <button className="Button-Text animated-btn">{props.ctaText}</button>
      </div>
      <style jsx>
        {`
          .btn-primary-container {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }

          .btn-primaryroot-class-name15 {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .btn-primaryroot-class-name16 {
            margin-bottom: var(--dl-space-space-fourunits);
          }
        `}
      </style>
    </>
  )
}

BtnPrimary.defaultProps = {
  rootClassName: '',
  ctaText: 'Primary',
}

BtnPrimary.propTypes = {
  rootClassName: PropTypes.string,
  ctaText: PropTypes.string,
}

export default BtnPrimary
