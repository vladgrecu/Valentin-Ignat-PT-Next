import React from 'react'

import PropTypes from 'prop-types'

import BtnSecondary from './btn-secondary'

const BlogPostCard = (props) => {
  return (
    <>
      <div className={`blog-post-card-blog-post-card ${props.rootClassName} `}>
        <div className="blog-post-card-container1">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="blog-post-card-image"
          />
        </div>
        <div className="blog-post-card-container2">
          <div className="blog-post-card-container3">
            <span className="blog-post-card-text10">{props.data}</span>
          </div>
          <h1 className="blog-post-card-text11 H2">{props.titlu}</h1>
          <span className="blog-post-card-text12 Content-Bold content-bold-white">
            <span>V-ati intrebat vreodata de ce dormim?😴</span>
            <br></br>
            <span>
              Daca l-as cita pe Mattew Walker, v-as spune ca somnul este cel mai
              bun medicament natural pe care il puteti oferi corpului vostru.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              Nu v-ati intrebat niciodata de ce dormiti? Mai interesant este ca,
              probabil niciodata nu v-ati gandit de ce dormim o treime din
              intreaga noastra viata! Interesting.. huh?🤔
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>Exista doi factori principali</span>
            <br></br>
            <span>care stabilesc momentele de somn si momentele de veghe.</span>
            <br></br>
            <span>
              Ambii influenteaza chiar in acest moment mintea si corpul...
            </span>
          </span>
          <div className="blog-post-card-btn">
            <BtnSecondary
              ctaText="citeste mai mult"
              rootClassName="btn-secondaryroot-class-name5"
            ></BtnSecondary>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .blog-post-card-blog-post-card {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 4px 4px 15px 0px rgba(255, 255, 255, 0.61);
            align-items: stretch;
            margin-bottom: var(--dl-space-space-eightunits);
            flex-direction: row;
            justify-content: space-between;
            background-color: var(--dl-color-neutral-white);
          }
          .blog-post-card-container1 {
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .blog-post-card-image {
            flex: 1;
            width: 100%;
            object-fit: cover;
            flex-direction: column;
          }
          .blog-post-card-container2 {
            display: flex;
            align-items: flex-start;
            padding-top: 32px;
            padding-left: 32px;
            padding-right: 32px;
            flex-direction: column;
            padding-bottom: 32px;
            justify-content: space-between;
          }
          .blog-post-card-container3 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .blog-post-card-text10 {
            color: #595959;
            font-weight: 300;
          }
          .blog-post-card-text11 {
            margin-bottom: 32px;
          }
          .blog-post-card-text12 {
            color: var(--dl-color-default-content);
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .blog-post-card-btn {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          @media (max-width: 991px) {
            .blog-post-card-blog-post-card {
              flex-direction: row;
              justify-content: space-between;
            }
          }
          @media (max-width: 767px) {
            .blog-post-card-blog-post-card {
              flex-direction: column;
            }
            .blog-post-card-image {
              flex: auto;
              width: 100%;
              min-height: 400px;
            }
            .blog-post-card-container2 {
              padding-top: var(--dl-space-space-tripleunit);
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .blog-post-card-text11 {
              font-size: 36px;
            }
          }
          @media (max-width: 479px) {
            .blog-post-card-container2 {
              padding-top: var(--dl-space-space-doubleunit);
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .blog-post-card-btn {
              padding-left: 0px;
              padding-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

BlogPostCard.defaultProps = {
  titlu: 'Despre somn',
  rootClassName: '',
  imageSrc: '32c17edd-9f19-4bfe-a142-2aa31c74a1c9',
  data: '24 dec 2021',
  imageAlt: 'descriere imagine',
}

BlogPostCard.propTypes = {
  titlu: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  data: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default BlogPostCard
