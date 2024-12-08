import React from 'react'

import PropTypes from 'prop-types'

const ServiceCard = (props) => {
  return (
    <>
      <div className="service-card">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="service-card-image"
        />
        <span className="service-card-text1 H5">{props.cardTitle}</span>
        <span className="service-card-text2">{props.cardText}</span>
        <div data-action="showContactFormModal" className="service-card-button">
          <span className="service-card-text3 Button-Text">contacteaza-ma</span>
          <svg
            viewBox="0 0 877.7142857142857 1024"
            className="service-card-icon1"
          >
            <path d="M734.286 512c0-9.714-3.429-18.857-10.286-25.714l-258.857-258.857c-6.857-6.857-16-10.286-25.714-10.286s-18.857 3.429-25.714 10.286l-52 52c-6.857 6.857-10.286 16-10.286 25.714s3.429 18.857 10.286 25.714l108 108h-286.857c-20 0-36.571 16.571-36.571 36.571v73.143c0 20 16.571 36.571 36.571 36.571h286.857l-108 108c-6.857 6.857-10.857 16-10.857 25.714s4 18.857 10.857 25.714l52 52c6.857 6.857 16 10.286 25.714 10.286s18.857-3.429 25.714-10.286l258.857-258.857c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
          </svg>
        </div>
      </div>
      <style jsx>
        {`
          .service-card-image {
            width: 100%;
            height: 150px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .service-card-text1 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .service-card-text2 {
            text-align: left;
            margin-bottom: var(--dl-space-space-eightunits);
          }
          .service-card-text3 {
            color: var(--dl-color-neutral-white);
            margin-right: var(--dl-space-space-doubleunit);
          }
          .service-card-icon1 {
            fill: var(--dl-color-neutral-white);
            width: 20px;
            height: 20px;
          }
          .service-cardroot-class-name {
            flex: 1;
          }
          @media (max-width: 479px) {
            .service-card-text2 {
              font-size: 16px;
            }
            .service-card-text3 {
              font-size: 14px;
            }
          }
        `}
      </style>
    </>
  )
}

ServiceCard.defaultProps = {
  imageSrc:
    'https://images.unsplash.com/photo-1526403223670-2aa44aaface2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1500',
  rootClassName: '',
  cardTitle: 'quality equipment',
  imageAlt: 'image',
  cardText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel viverra lectus. Vivamus euismod eget enim vel varius. Donec congue ipsum ac hendrerit pulvinar.',
}

ServiceCard.propTypes = {
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  cardTitle: PropTypes.string,
  imageAlt: PropTypes.string,
  cardText: PropTypes.string,
}

export default ServiceCard
