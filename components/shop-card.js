import React from 'react'

import PropTypes from 'prop-types'

import BtnPrimary from './btn-primary'

const ShopCard = (props) => {
  return (
    <>
      <div className={`shop-card-card ${props.rootClassName} `}>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="shop-card-image"
        />
        <span className="shop-card-text H5">{props.cardTitle}</span>
        <BtnPrimary rootClassName="btn-primaryroot-class-name7"></BtnPrimary>
      </div>
      <style jsx>
        {`
          .shop-card-card {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            overflow: hidden;
            position: relative;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-neutral-white);
          }
          .shop-card-card:hover {
            transform: scale(1.1);
          }
          .shop-card-image {
            width: 100%;
            height: 65%;
            min-height: 300px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .shop-card-text {
            margin-bottom: var(--dl-space-space-doubleunit);
          }

          @media (max-width: 991px) {
            .shop-cardroot-class-name1 {
              width: 100%;
            }
            .shop-cardroot-class-name2 {
              width: 100%;
            }
            .shop-cardroot-class-name3 {
              width: 100%;
            }
            .shop-cardroot-class-name4 {
              width: 100%;
            }
            .shop-cardroot-class-name5 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

ShopCard.defaultProps = {
  rootClassName: '',
  imageSrc:
    'https://images.unsplash.com/photo-1526403223670-2aa44aaface2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200',
  cardTitle: 'quality equipment',
  imageAlt: 'image',
}

ShopCard.propTypes = {
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  cardTitle: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default ShopCard
