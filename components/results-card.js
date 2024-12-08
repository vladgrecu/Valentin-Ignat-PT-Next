import React from 'react'

import PropTypes from 'prop-types'

const ResultsCard = (props) => {
  return (
    <>
      <div className={`results-card-results-card ${props.rootClassName} `}>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="results-card-image"
        />
        <div className="results-card-container">
          <span className="results-card-text1 Content-Bold">{props.name}</span>
          <svg viewBox="0 0 1024 1024" className="results-card-icon1">
            <path d="M298 426h428l-214 214z"></path>
          </svg>
          <span className="results-card-text2 Content-Regular">
            {props.text}
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .results-card-results-card {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 400px;
            box-shadow: 10px 10px 0px 0px #d4d4d4;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-neutral-white);
          }
          .results-card-image {
            width: 250px;
            height: 250px;
            z-index: 1;
            margin-top: -128px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .results-card-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: -32px;
            align-items: center;
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
          }
          .results-card-text1 {
            color: var(--dl-color-default-primary);
          }
          .results-card-icon1 {
            fill: var(--dl-color-default-primary);
            width: 48px;
            height: 48px;
            margin-top: -16px;
          }
          .results-card-text2 {
            text-align: justify;
          }
          .results-cardroot-class-name {
            margin-bottom: var(--dl-space-space-sixteenunits);
          }
          .results-cardroot-class-name1 {
            margin-bottom: var(--dl-space-space-sixteenunits);
          }
          .results-cardroot-class-name2 {
            margin-bottom: var(--dl-space-space-sixteenunits);
          }
          .results-cardroot-class-name3 {
            margin-bottom: var(--dl-space-space-sixteenunits);
          }

          .results-cardroot-class-name6 {
            margin-bottom: var(--dl-space-space-sixteenunits);
          }
          .results-cardroot-class-name7 {
            margin-bottom: var(--dl-space-space-sixteenunits);
          }

          .results-cardroot-class-name9 {
            margin-bottom: var(--dl-space-space-sixteenunits);
          }
          .results-cardroot-class-name10 {
            margin-bottom: var(--dl-space-space-sixteenunits);
          }
          .results-cardroot-class-name11 {
            margin-bottom: var(--dl-space-space-sixteenunits);
          }
          .results-cardroot-class-name12 {
            margin-bottom: var(--dl-space-space-sixteenunits);
          }
          .results-cardroot-class-name13 {
            margin-bottom: var(--dl-space-space-sixteenunits);
          }
          .results-cardroot-class-name14 {
            margin-bottom: var(--dl-space-space-sixteenunits);
          }

          @media (max-width: 991px) {
            .results-card-results-card {
              width: calc(50% - 32px);
            }
            .results-cardroot-class-name4 {
              margin-bottom: var(--dl-space-space-sixteenunits);
            }
            .results-cardroot-class-name8 {
              margin-bottom: var(--dl-space-space-sixteenunits);
            }
            .results-cardroot-class-name15 {
              margin-bottom: var(--dl-space-space-sixteenunits);
            }
            .results-cardroot-class-name16 {
              margin-bottom: var(--dl-space-space-sixteenunits);
            }
          }
          @media (max-width: 767px) {
            .results-card-results-card {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .results-card-container {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .results-card-icon1 {
              margin-top: -20px;
            }
          }
        `}
      </style>
    </>
  )
}

ResultsCard.defaultProps = {
  name: 'Nume',
  rootClassName: '',
  imageAlt: 'image',
  text: 'Am inceput sa lucrez cu Vali de aproximativ 7 luni, mergand la clasele de HIIT pe care le sustine la sala, iar de 4 luni facem si antrenamente personale. M-a atras profesionalismul lui si implicarea de care da dovada, seriozitatea si felul lui de a te binedispune dupa o zi mai incarcata la birou. Asadar il recomand cu toata increderea! Multumesc Vali ca mi-ai oferit sansa sa lucrez cu tine!',
  imageSrc: '/andra-300h.png',
}

ResultsCard.propTypes = {
  name: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
  text: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default ResultsCard
