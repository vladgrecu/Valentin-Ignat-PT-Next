import React from 'react'

import PropTypes from 'prop-types'

import BtnSecondary from './btn-secondary'

const BlogCard = (props) => {
  return (
    <>
      <div className={`blog-card-container ${props.rootClassName} `}>
        <div className="blog-card-fullbg-container">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="blog-card-image"
          />
          <div className="blog-card-caption">
            <h3 className="blog-card-text">{props.autor}</h3>
            <div className="blog-card-articol-link blog-card-bottom-container">
              <BtnSecondary
                ctaText="Citeste articol"
                rootClassName="btn-secondaryroot-class-name11"
              ></BtnSecondary>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .blog-card-container {
            width: 48%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-neutral-white);
          }
          .blog-card-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .blog-card-text {
            color: var(--dl-color-neutral-white);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .blog-card-articol-link {
            transform: translateY();
          }

          @media (max-width: 767px) {
            .blog-card-container {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .blog-card-container {
              height: 350px;
            }
          }
        `}
      </style>
    </>
  )
}

BlogCard.defaultProps = {
  autor: 'Maria Nutrean',
  rootClassName: '',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageAlt: 'image',
}

BlogCard.propTypes = {
  autor: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default BlogCard
