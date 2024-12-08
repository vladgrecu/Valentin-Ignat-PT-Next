import React from 'react'

import PropTypes from 'prop-types'

const AboutGallery = (props) => {
  return (
    <>
      <div className={`about-gallery-container-fluid ${props.rootClassName} `}>
        <div className="about-gallery-left-side">
          <img
            alt="image"
            src="/img_9937-1500w.jpg"
            className="about-gallery-image"
          />
          <div className="about-gallery-left-overlay">
            <span className="about-gallery-text1 H2">disciplinat</span>
          </div>
        </div>
        <div className="about-gallery-right-side">
          <div className="about-gallery-tl">
            <div className="about-gallery-tl-overlay">
              <span className="about-gallery-text2 H2">energic</span>
            </div>
          </div>
          <div className="about-gallery-tr">
            <div className="about-gallery-tr-overlay">
              <span className="about-gallery-text3 H2">determinat</span>
            </div>
          </div>
          <div className="about-gallery-bl">
            <div className="about-gallery-bl-overlay">
              <span className="about-gallery-text4 H2">fericit</span>
            </div>
          </div>
          <div className="about-gallery-br">
            <div className="about-gallery-br-overlay">
              <span className="about-gallery-text5 H2">puternic</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .about-gallery-container-fluid {
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 0px;
            overflow: hidden;
            align-items: stretch;
            margin-left: auto;
            margin-right: auto;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-gallery-left-side {
            flex: 0 0 auto;
            width: var(--dl-size-size-half);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            position: relative;
            transition: 0.3s;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
          }

          .about-gallery-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .about-gallery-left-overlay {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            overflow: hidden;
            position: absolute;
            transform: translateX(-100%);
            transition: all 0.3s ease-in-out;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-default-overlaydark);
          }
          .about-gallery-text1 {
            color: var(--dl-color-default-primary);
          }
          .about-gallery-right-side {
            width: var(--dl-size-size-half);
            display: flex;
            flex-wrap: wrap;
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-gallery-tl {
            width: calc(50% - 16px);
            height: calc(50% - 16px);
            display: flex;
            overflow: hidden;
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            background-size: cover;
            background-image: url('/img_4100-200w.jpg');
            background-position: center;
          }
          .about-gallery-tl-overlay {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            overflow: hidden;
            position: absolute;
            transform: translateY(-100%);
            transition: all 0.3s ease-in-out;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-default-overlaydark);
          }
          .about-gallery-text2 {
            color: var(--dl-color-default-primary);
            font-size: 36px;
          }
          .about-gallery-tr {
            width: calc(50% - 16px);
            height: calc(50% - 16px);
            display: flex;
            overflow: hidden;
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            background-size: cover;
            background-image: url('/img_2868-200h.jpg');
            background-position: right;
          }
          .about-gallery-tr-overlay {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            overflow: hidden;
            position: absolute;
            transform: translateX(100%);
            transition: all 0.3s ease-in-out;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-default-overlaydark);
          }
          .about-gallery-text3 {
            color: var(--dl-color-default-primary);
            font-size: 36px;
          }
          .about-gallery-bl {
            width: calc(50% - 16px);
            height: calc(50% - 16px);
            display: flex;
            overflow: hidden;
            position: relative;
            align-self: flex-end;
            transition: 0.3s;
            background-size: cover;
            background-image: url('/img_3005-200h.jpg');
            background-position: center;
          }
          .about-gallery-bl-overlay {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            overflow: hidden;
            position: absolute;
            transform: translateX(-100%);
            transition: all 0.3s ease-in-out;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-default-overlaydark);
          }
          .about-gallery-text4 {
            color: var(--dl-color-default-primary);
            font-size: 36px;
          }
          .about-gallery-br {
            width: calc(50% - 16px);
            height: calc(50% - 16px);
            display: flex;
            overflow: hidden;
            position: relative;
            align-self: flex-end;
            transition: 0.3s;
            background-size: cover;
            background-image: url('/img_3703-edit-200h.jpg');
            background-position: center;
          }
          .about-gallery-br-overlay {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            overflow: hidden;
            position: absolute;
            transform: translateY(100%);
            transition: all 0.3s ease-in-out;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-default-overlaydark);
          }
          .about-gallery-text5 {
            color: var(--dl-color-default-primary);
            font-size: 36px;
          }

          @media (max-width: 767px) {
            .about-gallery-container-fluid {
              height: auto;
              overflow: auto;
              flex-direction: column;
            }
            .about-gallery-left-side {
              width: 100%;
              height: auto;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .about-gallery-right-side {
              width: 100%;
              height: 1000px;
            }
            .about-gallery-tl {
              width: calc(50% - 12px);
              height: calc(50% -12px);
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .about-gallery-tr {
              width: calc(50% - 12px);
              height: calc(50% - 12px);
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .about-gallery-bl {
              width: calc(50% - 12px);
              height: calc(50% -12px);
              margin-bottom: var(--dl-space-space-tripleunit);
              background-size: cover;
            }
            .about-gallery-br {
              width: calc(50% - 12px);
              height: calc(50% - 12px);
              margin-bottom: var(--dl-space-space-tripleunit);
              background-size: cover;
            }
          }
          @media (max-width: 479px) {
            .about-gallery-left-side {
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .about-gallery-text1 {
              font-size: 40px;
            }
            .about-gallery-right-side {
              height: 600px;
            }
            .about-gallery-tl {
              width: calc(50% - 8px);
              height: calc(50% - 8px);
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .about-gallery-text2 {
              font-size: 32px;
            }
            .about-gallery-tr {
              width: calc(50% - 8px);
              height: calc(50% - 8px);
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .about-gallery-text3 {
              font-size: 32px;
            }
            .about-gallery-bl {
              width: calc(50% - 8px);
              height: calc(50% - 8px);
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .about-gallery-text4 {
              font-size: 32px;
            }
            .about-gallery-br {
              width: calc(50% - 8px);
              height: calc(50% - 8px);
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .about-gallery-text5 {
              font-size: 32px;
            }
          }
        `}
      </style>
    </>
  )
}

AboutGallery.defaultProps = {
  rootClassName: '',
}

AboutGallery.propTypes = {
  rootClassName: PropTypes.string,
}

export default AboutGallery
