import React from 'react'

import PropTypes from 'prop-types'

import PlayBtn from './play-btn'

const Gallery = (props) => {
  return (
    <>
      <div className={`gallery-container-fluid ${props.rootClassName} `}>
        <div className="gallery-left-side">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1583454155184-870a1f63aebc?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1000"
            className="gallery-image"
          />
          <div className="gallery-left-overlay">
            <PlayBtn></PlayBtn>
          </div>
        </div>
        <div className="gallery-right-side">
          <div className="gallery-tl">
            <div className="gallery-tl-overlay">
              <PlayBtn></PlayBtn>
            </div>
          </div>
          <div className="gallery-tr">
            <div className="gallery-tr-overlay">
              <PlayBtn></PlayBtn>
            </div>
          </div>
          <div className="gallery-bl">
            <div className="gallery-bl-overlay">
              <PlayBtn></PlayBtn>
            </div>
          </div>
          <div className="gallery-br">
            <div className="gallery-br-overlay">
              <PlayBtn></PlayBtn>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .gallery-container-fluid {
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
          .gallery-left-side {
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

          .gallery-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery-left-overlay {
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
            background-color: var(--dl-color-default-overlay);
          }
          .gallery-right-side {
            width: var(--dl-size-size-half);
            display: flex;
            flex-wrap: wrap;
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .gallery-tl {
            width: calc(50% - 16px);
            height: calc(50% - 16px);
            display: flex;
            overflow: hidden;
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1548932813-88dcf75599c6?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200');
            background-position: center;
          }
          .gallery-tl-overlay {
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
            background-color: var(--dl-color-default-overlay);
          }
          .gallery-tr {
            width: calc(50% - 16px);
            height: calc(50% - 16px);
            display: flex;
            overflow: hidden;
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1606902965551-dce093cda6e7?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200');
            background-position: center;
          }
          .gallery-tr-overlay {
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
            background-color: var(--dl-color-default-overlay);
          }
          .gallery-bl {
            width: calc(50% - 16px);
            height: calc(50% - 16px);
            display: flex;
            overflow: hidden;
            position: relative;
            align-self: flex-end;
            transition: 0.3s;
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=1200');
            background-position: center;
          }
          .gallery-bl-overlay {
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
            background-color: var(--dl-color-default-overlay);
          }
          .gallery-br {
            width: calc(50% - 16px);
            height: calc(50% - 16px);
            display: flex;
            overflow: hidden;
            position: relative;
            align-self: flex-end;
            transition: 0.3s;
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=1200');
            background-position: center;
          }
          .gallery-br-overlay {
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
            background-color: var(--dl-color-default-overlay);
          }
          @media (max-width: 767px) {
            .gallery-container-fluid {
              height: auto;
              overflow: auto;
              padding-top: var(--dl-space-space-eightunits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-eightunits);
            }
            .gallery-left-side {
              width: 100%;
              height: auto;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .gallery-right-side {
              width: 100%;
              height: 1000px;
            }
            .gallery-tl {
              width: calc(50% - 12px);
              height: calc(50% -12px);
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .gallery-tr {
              width: calc(50% - 12px);
              height: calc(50% - 12px);
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .gallery-bl {
              width: calc(50% - 12px);
              height: calc(50% -12px);
              margin-bottom: var(--dl-space-space-tripleunit);
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=1200');
            }
            .gallery-br {
              width: calc(50% - 12px);
              height: calc(50% - 12px);
              margin-bottom: var(--dl-space-space-tripleunit);
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=1200');
            }
          }
          @media (max-width: 479px) {
            .gallery-left-side {
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .gallery-right-side {
              height: 600px;
            }
            .gallery-tl {
              width: calc(50% - 8px);
              height: calc(50% - 8px);
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .gallery-tr {
              width: calc(50% - 8px);
              height: calc(50% - 8px);
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .gallery-bl {
              width: calc(50% - 8px);
              height: calc(50% - 8px);
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .gallery-br {
              width: calc(50% - 8px);
              height: calc(50% - 8px);
              margin-bottom: var(--dl-space-space-doubleunit);
            }
          }
        `}
      </style>
    </>
  )
}

Gallery.defaultProps = {
  rootClassName: '',
}

Gallery.propTypes = {
  rootClassName: PropTypes.string,
}

export default Gallery
