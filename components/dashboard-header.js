import React from 'react'

import PropTypes from 'prop-types'

const DashboardHeader = (props) => {
  return (
    <>
      <div
        className={`dashboard-header-dashboard-header ${props.rootClassName} `}
      >
        <div className="dashboard-header-container1">
          <img
            alt="image"
            src={props.logoSrc}
            className="dashboard-header-logo"
          />
          <div className="dashboard-header-container2"></div>
        </div>
        <div className="dashboard-header-container3">
          <div className="dashboard-header-container4">
            <svg viewBox="0 0 1024 1024" className="dashboard-header-icon1">
              <path d="M521.143 969.143c0-5.143-4-9.143-9.143-9.143-45.143 0-82.286-37.143-82.286-82.286 0-5.143-4-9.143-9.143-9.143s-9.143 4-9.143 9.143c0 55.429 45.143 100.571 100.571 100.571 5.143 0 9.143-4 9.143-9.143zM140.571 804.571h742.857c-102.286-115.429-152-272-152-475.429 0-73.714-69.714-182.857-219.429-182.857s-219.429 109.143-219.429 182.857c0 203.429-49.714 360-152 475.429zM987.429 804.571c0 40-33.143 73.143-73.143 73.143h-256c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286h-256c-40 0-73.143-33.143-73.143-73.143 84.571-71.429 182.857-199.429 182.857-475.429 0-109.714 90.857-229.714 242.286-252-2.857-6.857-4.571-14.286-4.571-22.286 0-30.286 24.571-54.857 54.857-54.857s54.857 24.571 54.857 54.857c0 8-1.714 15.429-4.571 22.286 151.429 22.286 242.286 142.286 242.286 252 0 276 98.286 404 182.857 475.429z"></path>
            </svg>
            <div className="dashboard-header-container5">
              <span className="dashboard-header-text">{props.count}</span>
            </div>
          </div>
          <div className="dashboard-header-container6">
            <svg viewBox="0 0 1024 1024" className="dashboard-header-icon3">
              <path d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"></path>
            </svg>
            <div className="dashboard-header-container7"></div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .dashboard-header-dashboard-header {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-neutral-black);
          }
          .dashboard-header-container1 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .dashboard-header-logo {
            width: 32px;
            height: 32px;
            object-fit: scale-down;
            border-radius: var(--dl-radius-radius-round);
          }
          .dashboard-header-container2 {
            flex: 0 0 auto;
            right: 0px;
            width: 8px;
            bottom: 0px;
            height: 8px;
            display: none;
            padding: 2px;
            z-index: 100;
            position: absolute;
            transition: 0.3s;
            align-items: flex-start;
            border-color: var(--dl-color-neutral-black);
            border-style: solid;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: #32a94c;
          }
          .dashboard-header-container2:hover {
            background-color: #32a94c;
          }
          .dashboard-header-container3 {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .dashboard-header-container4 {
            cursor: pointer;
            display: flex;
            position: relative;
            align-items: center;
            margin-right: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: flex-end;
          }
          .dashboard-header-icon1 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .dashboard-header-container5 {
            top: -4px;
            flex: 0 0 auto;
            right: -2px;
            width: 14px;
            height: 14px;
            margin: auto;
            display: none;
            z-index: 100;
            position: absolute;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #199033;
          }
          .dashboard-header-container5:hover {
            background-color: #32a94c;
          }
          .dashboard-header-text {
            color: var(--dl-color-neutral-white);
            font-size: 10px;
            line-height: 1.1;
          }
          .dashboard-header-container6 {
            cursor: pointer;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .dashboard-header-icon3 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .dashboard-header-container7 {
            flex: 0 0 auto;
            right: 0px;
            width: 8px;
            bottom: 0px;
            height: 8px;
            padding: 2px;
            z-index: 100;
            position: absolute;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: #32a94c;
          }
        `}
      </style>
    </>
  )
}

DashboardHeader.defaultProps = {
  logoSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  count: '3',
  rootClassName: '',
}

DashboardHeader.propTypes = {
  logoSrc: PropTypes.string,
  count: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default DashboardHeader
