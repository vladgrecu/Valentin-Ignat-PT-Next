import React from 'react'

import PropTypes from 'prop-types'

const BtnSecondary = (props) => {
  return (
    <>
      <div className={`btn-secondary-container ${props.rootClassName} `}>
        <button className="btn-secondary-cta-btn Button-Text animated-btn btn-secondary">
          {props.ctaText}
        </button>
      </div>
      <style jsx>
        {`
          .btn-secondary-container {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .btn-secondary-cta-btn {
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
          }

          @media (max-width: 767px) {
            .btn-secondaryroot-class-name5 {
              align-self: flex-end;
            }
            .btn-secondaryroot-class-name6 {
              align-self: flex-end;
            }
            .btn-secondaryroot-class-name7 {
              align-self: flex-end;
            }
            .btn-secondaryroot-class-name8 {
              align-self: flex-end;
            }
            .btn-secondaryroot-class-name9 {
              align-self: flex-end;
            }
            .btn-secondaryroot-class-name12 {
              align-self: flex-end;
            }
            .btn-secondaryroot-class-name13 {
              align-self: flex-end;
            }
            .btn-secondaryroot-class-name16 {
              align-self: flex-end;
            }
            .btn-secondaryroot-class-name17 {
              align-self: flex-end;
            }
            .btn-secondaryroot-class-name20 {
              align-self: flex-end;
            }
            .btn-secondaryroot-class-name21 {
              align-self: flex-end;
            }
            .btn-secondaryroot-class-name22 {
              align-self: flex-end;
            }
            .btn-secondaryroot-class-name23 {
              align-self: flex-end;
            }
            .btn-secondaryroot-class-name25 {
              align-self: flex-end;
            }
            .btn-secondaryroot-class-name27 {
              align-self: flex-end;
            }
          }
        `}
      </style>
    </>
  )
}

BtnSecondary.defaultProps = {
  rootClassName: '',
  ctaText: 'Secondary',
}

BtnSecondary.propTypes = {
  rootClassName: PropTypes.string,
  ctaText: PropTypes.string,
}

export default BtnSecondary
