import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Navbar = (props) => {
  return (
    <>
      <header
        data-role="Navbar"
        className={`navbar-slide-in-down-navbar ${props.rootClassName} `}
      >
        <nav className="navbar-full-width">
          <div className="navbar-navbar">
            <Link href="/">
              <a className="navbar-link1">
                <div className="navbar-logo">
                  <img
                    alt="image"
                    src="/logo%20secundar-05.svg"
                    className="navbar-image"
                  />
                </div>
              </a>
            </Link>
            <div className="navbar-timeline">
              <Link href="/">
                <a className="navbar-link2">
                  <div className="navbar-bullet1">
                    <div data-url="/" className="tl-bullet">
                      <div className="inner-white"></div>
                      <span className="Button-Text tl-bullet-label">Acasa</span>
                    </div>
                    <div className="tl-bullet-inner"></div>
                  </div>
                </a>
              </Link>
              <div className="tl-line"></div>
              <Link href="/despre">
                <a className="navbar-link3">
                  <div className="navbar-bullet2">
                    <div
                      data-url="/despre"
                      className="navbar-bullet-content2 tl-bullet"
                    >
                      <div className="inner-white"></div>
                      <span className="navbar-text2 Button-Text tl-bullet-label">
                        Despre
                      </span>
                    </div>
                    <div className="tl-bullet-inner"></div>
                  </div>
                </a>
              </Link>
              <div className="tl-line"></div>
              <Link href="/servicii">
                <a className="navbar-link4">
                  <div className="navbar-bullet3">
                    <div data-url="/servicii" className="tl-bullet">
                      <div className="inner-white"></div>
                      <span className="navbar-text3 Button-Text tl-bullet-label">
                        Servicii
                      </span>
                    </div>
                    <div className="tl-bullet-inner"></div>
                  </div>
                </a>
              </Link>
              <div className="tl-line"></div>
              <Link href="/povesti-de-succes">
                <a className="navbar-link5">
                  <div className="navbar-bullet4">
                    <div
                      data-url="/povesti-de-succes"
                      className="navbar-bullet-content4 tl-bullet"
                    >
                      <div className="inner-white"></div>
                      <span className="navbar-text4 Button-Text tl-bullet-label">
                        povesti
                      </span>
                    </div>
                    <div className="tl-bullet-inner"></div>
                  </div>
                </a>
              </Link>
              <div className="tl-line"></div>
              <Link href="/hiit">
                <a className="navbar-link6">
                  <div className="navbar-bullet5">
                    <div
                      data-url="/hiit"
                      className="navbar-bullet-content5 tl-bullet"
                    >
                      <div className="inner-white"></div>
                      <span className="navbar-text5 Button-Text tl-bullet-label">
                        hIIT
                      </span>
                    </div>
                    <div className="tl-bullet-inner"></div>
                  </div>
                </a>
              </Link>
              <div className="navbar-line5 tl-line"></div>
              <Link href="/blog-home">
                <a className="navbar-link7">
                  <div className="navbar-bullet6">
                    <div
                      data-url="/blog-home"
                      className="navbar-bullet-content6 tl-bullet"
                    >
                      <div className="inner-white"></div>
                      <span className="navbar-text6 Button-Text tl-bullet-label">
                        Blog
                      </span>
                    </div>
                    <div className="tl-bullet-inner"></div>
                  </div>
                </a>
              </Link>
              <div className="tl-line"></div>
              <Link href="/contact">
                <a className="navbar-link8">
                  <div className="navbar-bullet7">
                    <div
                      data-url="/contact"
                      className="navbar-bullet-content7 tl-bullet"
                    >
                      <div className="inner-white"></div>
                      <span className="navbar-text7 Button-Text tl-bullet-label">
                        Contact
                      </span>
                    </div>
                    <div className="tl-bullet-inner"></div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="navbar-profile">
              <button
                data-role="loginBtn"
                data-action="showLoginModal"
                className="navbar-login-btn Button-Text animated-btn btn-secondary"
              >
                <svg viewBox="0 0 1024 1024" className="navbar-icon1">
                  <path d="M512 820q68 0 143-40t113-98q-2-56-90-94t-166-38-166 37-90 95q38 58 113 98t143 40zM512 214q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
                </svg>
                <span className="navbar-text8">Contul meu</span>
              </button>
              <Link href="/account" data-role="linkToProfile">
                <a className="navbar-link9 Button-Text animated-btn btn-secondary">
                  <svg viewBox="0 0 1024 1024" className="navbar-icon3">
                    <path d="M512 820q68 0 143-40t113-98q-2-56-90-94t-166-38-166 37-90 95q38 58 113 98t143 40zM512 214q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
                  </svg>
                  <span>Contul meu</span>
                </a>
              </Link>
            </div>
            <div className="navbar-menu">
              <svg viewBox="0 0 1024 1024" className="navbar-menu-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
          </div>
        </nav>
      </header>
      <style jsx>
        {`
          .navbar-slide-in-down-navbar {
            top: 0px;
            flex: 0 0 auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: auto;
            display: flex;
            z-index: 100;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .navbar-full-width {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar-navbar {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 1800px;
            align-items: flex-end;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: space-between;
          }
          .navbar-link1 {
            display: contents;
          }
          .navbar-logo {
            flex: 0 0 auto;
            cursor: pointer;
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            justify-content: center;
            text-decoration: none;
          }
          .navbar-image {
            width: 300px;
            min-width: 300px;
            object-fit: cover;
          }
          .navbar-timeline {
            width: 100%;
            height: 30px;
            display: flex;
            max-width: 900px;
            align-items: center;
            margin-left: var(--dl-space-space-fourunits);
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-link2 {
            display: contents;
          }
          .navbar-bullet1 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            text-decoration: none;
          }
          .navbar-link3 {
            display: contents;
          }
          .navbar-bullet2 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            text-decoration: none;
          }
          .navbar-bullet-content2 {
            z-index: 100;
          }
          .navbar-text2 {
            left: -20px;
          }
          .navbar-link4 {
            display: contents;
          }
          .navbar-bullet3 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            text-decoration: none;
          }
          .navbar-text3 {
            left: -5px;
          }
          .navbar-link5 {
            display: contents;
          }
          .navbar-bullet4 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            text-decoration: none;
          }
          .navbar-bullet-content4 {
            z-index: 100;
          }
          .navbar-text4 {
            left: -38px;
          }
          .navbar-link6 {
            display: contents;
          }
          .navbar-bullet5 {
            display: none;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            text-decoration: none;
          }
          .navbar-bullet-content5 {
            z-index: 100;
          }
          .navbar-text5 {
            left: 3px;
          }
          .navbar-line5 {
            display: none;
          }
          .navbar-link7 {
            display: contents;
          }
          .navbar-bullet6 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            text-decoration: none;
          }
          .navbar-bullet-content6 {
            z-index: 100;
          }
          .navbar-text6 {
            left: 2px;
          }
          .navbar-link8 {
            display: contents;
          }
          .navbar-bullet7 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            text-decoration: none;
          }
          .navbar-bullet-content7 {
            z-index: 100;
          }
          .navbar-text7 {
            left: -8px;
          }
          .navbar-profile {
            display: none;
            position: relative;
            align-items: flex-start;
            margin-left: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .navbar-login-btn {
            display: flex;
            transition: 0.3s;
            padding-top: 3px;
            border-style: double;
            padding-left: 12px;
            padding-right: 12px;
            flex-direction: row;
            padding-bottom: 3px;
          }
          .navbar-login-btn:disabled {
            color: var(--dl-color-default-overlaydark);
            background-color: var(--dl-color-default-secondary);
          }
          .navbar-icon1 {
            width: 20px;
            height: 20px;
            margin-right: var(--dl-space-space-unit);
          }
          .navbar-text8 {
            font-size: 14px;
          }
          .navbar-link9 {
            display: none;
            padding-top: 5px;
            border-style: double;
            padding-left: 20px;
            padding-right: 20px;
            flex-direction: row;
            padding-bottom: 5px;
            text-decoration: none;
          }
          .navbar-icon3 {
            width: 32px;
            height: 32px;
            margin-right: var(--dl-space-space-unit);
          }
          .navbar-menu {
            flex: 0 0 auto;
            display: none;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-menu-icon {
            fill: var(--dl-color-neutral-white);
            width: 36px;
            height: 36px;
          }

          @media (max-width: 991px) {
            .navbar-timeline {
              display: none;
            }
            .navbar-profile {
              display: none;
            }
            .navbar-menu {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .navbar-navbar {
              align-items: center;
              padding-top: var(--dl-space-space-doubleunit);
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-doubleunit);
              justify-content: space-between;
            }
            .navbar-logo {
              margin-right: var(--dl-space-space-fourunits);
            }
            .navbar-image {
              width: 250px;
              min-width: 250px;
            }
            .navbar-login-btn {
              padding-left: 20px;
              padding-right: 20px;
            }
            .navbar-icon1 {
              margin-left: 0px;
            }
            .navbar-icon3 {
              margin-left: 0px;
            }
          }
          @media (max-width: 479px) {
            .navbar-logo {
              margin-right: var(--dl-space-space-doubleunit);
            }
            .navbar-image {
              width: 230px;
              min-width: 230px;
            }
          }
        `}
      </style>
    </>
  )
}

Navbar.defaultProps = {
  rootClassName: '',
}

Navbar.propTypes = {
  rootClassName: PropTypes.string,
}

export default Navbar
