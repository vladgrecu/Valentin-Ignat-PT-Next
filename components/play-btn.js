import React from 'react'

import PropTypes from 'prop-types'

const PlayBtn = (props) => {
  return (
    <>
      <div
        data-action="playVideo"
        className={`play-btn-video ${props.rootClassName} `}
      >
        <div className="animation-rotate-counter-clockwise cog-counter-clockwise"></div>
        <div className="animation-rotate-clockwise cog-clockwise"></div>
        <div className="play-btn-inner-background">
          <svg viewBox="0 0 808.5942857142857 1024" className="play-btn-icon1">
            <path d="M790.857 529.714l-758.857 421.714c-17.714 9.714-32 1.143-32-18.857v-841.143c0-20 14.286-28.571 32-18.857l758.857 421.714c17.714 9.714 17.714 25.714 0 35.429z"></path>
          </svg>
        </div>
      </div>
      <style jsx>
        {`
          .play-btn-video {
            flex: 0 0 auto;
            width: 90px;
            cursor: pointer;
            filter: drop-shadow(4px 0px 2px rgba(150, 150, 150, 0.65));
            height: 90px;
            display: flex;
            position: relative;
            align-self: center;
            align-items: center;
            border-color: var(--dl-color-neutral-white);
            border-width: 5px;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
          }
          .play-btn-inner-background {
            flex: 0 0 auto;
            width: 75%;
            height: 75%;
            display: flex;
            position: absolute;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-default-primary);
          }
          .play-btn-icon1 {
            fill: var(--dl-color-neutral-white);
            width: 36px;
            filter: drop-shadow(4px 0px 2px rgba(150, 150, 150, 0.65));
            height: 36px;
            transition: 0.1s;
            margin-left: var(--dl-space-space-halfunit);
          }
          .play-btn-icon1:hover {
            transform: scale(1.2);
          }
          .play-btn-icon1:active {
            transform: scale(1);
          }
          .play-btnroot-class-name {
            left: calc(50% - 45px);
            bottom: calc(50% - 45px);
            display: none;
            position: absolute;
          }
          .play-btnroot-class-name1 {
            left: calc(50% - 45px);
            bottom: calc(50% - 45px);
            display: none;
            position: absolute;
          }
          .play-btnroot-class-name2 {
            left: calc(50% - 45px);
            bottom: calc(50% - 45px);
            display: none;
            position: absolute;
          }
          @media (max-width: 767px) {
            .play-btn-video {
              width: 45px;
              height: 45px;
              border-width: 3px;
            }
            .play-btn-inner-background {
              width: 85%;
              height: 85%;
            }
            .play-btn-icon1 {
              width: 20px;
              height: 20px;
            }
            .play-btnroot-class-name {
              left: calc(50% - 20px);
              bottom: calc(50% - 20px);
            }
            .play-btnroot-class-name1 {
              left: calc(50% - 20px);
              bottom: calc(50% - 20px);
            }
            .play-btnroot-class-name2 {
              left: calc(50% - 20px);
              bottom: calc(50% - 20px);
            }
          }
          @media (max-width: 479px) {
            .play-btnroot-class-name {
              left: calc(50% - 20px);
              bottom: calc(50% - 20px);
            }
          }
        `}
      </style>
    </>
  )
}

PlayBtn.defaultProps = {
  rootClassName: '',
}

PlayBtn.propTypes = {
  rootClassName: PropTypes.string,
}

export default PlayBtn
