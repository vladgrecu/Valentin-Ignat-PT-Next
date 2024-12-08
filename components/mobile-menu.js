import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const MobileMenu = (props) => {
  return (
    <>
      <div
        data-role="MobileMenu"
        className={`mobile-menu ${props.rootClassName} `}
      >
        <div className="mobile-menu-top-bar">
          <div className="mobile-menu-container10">
            <img
              alt="image"
              src="/logo%20secundar-05.svg"
              className="mobile-menu-image"
            />
          </div>
          <div className="mobile-menu-close-menu">
            <svg viewBox="0 0 1024 1024" className="mobile-menu-icon10">
              <path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 928c-229.75 0-416-186.25-416-416s186.25-416 416-416 416 186.25 416 416-186.25 416-416 416z"></path>
              <path d="M672 256l-160 160-160-160-96 96 160 160-160 160 96 96 160-160 160 160 96-96-160-160 160-160z"></path>
            </svg>
          </div>
        </div>
        <div className="mobile-menu-middle">
          <div className="mobile-menu-mobile-links">
            <Link href="/">
              <a className="mobile-menu-link1">
                <div className="mobile-menu-container11">
                  <span
                    data-url="/"
                    className="mobile-menu-text10 Button-Text mobile-link-title"
                  >
                    <span>acasa</span>
                  </span>
                </div>
              </a>
            </Link>
            <Link href="/despre">
              <a className="mobile-menu-link2">
                <div className="mobile-menu-container12">
                  <span
                    data-url="/despre"
                    className="mobile-menu-text12 Button-Text mobile-link-title"
                  >
                    despre mine
                  </span>
                </div>
              </a>
            </Link>
            <Link href="/servicii">
              <a className="mobile-menu-link3">
                <div className="mobile-menu-container13">
                  <span
                    data-url="/servicii"
                    className="mobile-menu-text13 Button-Text mobile-link-title"
                  >
                    servicii
                  </span>
                </div>
              </a>
            </Link>
            <Link href="/povesti-de-succes">
              <a className="mobile-menu-link4">
                <div className="mobile-menu-container14">
                  <span
                    data-url="/povesti-de-succes"
                    className="mobile-menu-text14 Button-Text mobile-link-title"
                  >
                    povesti
                  </span>
                </div>
              </a>
            </Link>
            <Link href="/hiit">
              <a className="mobile-menu-link5">
                <div className="mobile-menu-container15">
                  <span
                    data-url="/hiit"
                    className="mobile-menu-text15 Button-Text mobile-link-title"
                  >
                    hiit
                  </span>
                </div>
              </a>
            </Link>
            <Link href="/blog-home">
              <a className="mobile-menu-link6">
                <div className="mobile-menu-container16">
                  <span
                    data-url="/blog"
                    className="mobile-menu-text16 Button-Text mobile-link-title"
                  >
                    blog
                  </span>
                </div>
              </a>
            </Link>
            <Link href="/contact">
              <a className="mobile-menu-link7">
                <div className="mobile-menu-container17">
                  <span
                    data-url="/contact"
                    className="mobile-menu-text17 Button-Text mobile-link-title"
                  >
                    contact
                  </span>
                </div>
              </a>
            </Link>
          </div>
        </div>
        <div className="mobile-menu-bottom">
          <div className="mobile-menu-profile">
            <button
              data-role="loginBtn"
              data-action="showLoginModal"
              className="mobile-menu-login-btn Button-Text animated-btn btn-secondary"
            >
              <svg viewBox="0 0 1024 1024" className="mobile-menu-icon13">
                <path d="M512 820q68 0 143-40t113-98q-2-56-90-94t-166-38-166 37-90 95q38 58 113 98t143 40zM512 214q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
              </svg>
              <span>Contul meu</span>
            </button>
            <Link href="/account" data-role="linkToProfile">
              <a className="mobile-menu-link8 Button-Text animated-btn btn-secondary">
                <svg viewBox="0 0 1024 1024" className="mobile-menu-icon15">
                  <path d="M512 820q68 0 143-40t113-98q-2-56-90-94t-166-38-166 37-90 95q38 58 113 98t143 40zM512 214q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
                </svg>
                <span>Contul meu</span>
              </a>
            </Link>
          </div>
          <div className="mobile-menu-social-media-links">
            <div className="mobile-menu-container18">
              <svg viewBox="0 0 1024 1024" className="mobile-menu-icon17">
                <path d="M608 192h160v-192h-160c-123.514 0-224 100.486-224 224v96h-128v192h128v512h192v-512h160l32-192h-192v-96c0-17.346 14.654-32 32-32z"></path>
              </svg>
            </div>
            <div className="mobile-menu-container19">
              <svg viewBox="0 0 1024 1024" className="mobile-menu-icon19">
                <path d="M512 92.2c136.8 0 153 0.6 206.8 3 50 2.2 77 10.6 95 17.6 23.8 9.2 41 20.4 58.8 38.2 18 18 29 35 38.4 58.8 7 18 15.4 45.2 17.6 95 2.4 54 3 70.2 3 206.8s-0.6 153-3 206.8c-2.2 50-10.6 77-17.6 95-9.2 23.8-20.4 41-38.2 58.8-18 18-35 29-58.8 38.4-18 7-45.2 15.4-95 17.6-54 2.4-70.2 3-206.8 3s-153-0.6-206.8-3c-50-2.2-77-10.6-95-17.6-23.8-9.2-41-20.4-58.8-38.2-18-18-29-35-38.4-58.8-7-18-15.4-45.2-17.6-95-2.4-54-3-70.2-3-206.8s0.6-153 3-206.8c2.2-50 10.6-77 17.6-95 9.2-23.8 20.4-41 38.2-58.8 18-18 35-29 58.8-38.4 18-7 45.2-15.4 95-17.6 53.8-2.4 70-3 206.8-3zM512 0c-139 0-156.4 0.6-211 3-54.4 2.4-91.8 11.2-124.2 23.8-33.8 13.2-62.4 30.6-90.8 59.2-28.6 28.4-46 57-59.2 90.6-12.6 32.6-21.4 69.8-23.8 124.2-2.4 54.8-3 72.2-3 211.2s0.6 156.4 3 211c2.4 54.4 11.2 91.8 23.8 124.2 13.2 33.8 30.6 62.4 59.2 90.8 28.4 28.4 57 46 90.6 59 32.6 12.6 69.8 21.4 124.2 23.8 54.6 2.4 72 3 211 3s156.4-0.6 211-3c54.4-2.4 91.8-11.2 124.2-23.8 33.6-13 62.2-30.6 90.6-59s46-57 59-90.6c12.6-32.6 21.4-69.8 23.8-124.2 2.4-54.6 3-72 3-211s-0.6-156.4-3-211c-2.4-54.4-11.2-91.8-23.8-124.2-12.6-34-30-62.6-58.6-91-28.4-28.4-57-46-90.6-59-32.6-12.6-69.8-21.4-124.2-23.8-54.8-2.6-72.2-3.2-211.2-3.2v0z"></path>
                <path d="M512 249c-145.2 0-263 117.8-263 263s117.8 263 263 263 263-117.8 263-263c0-145.2-117.8-263-263-263zM512 682.6c-94.2 0-170.6-76.4-170.6-170.6s76.4-170.6 170.6-170.6c94.2 0 170.6 76.4 170.6 170.6s-76.4 170.6-170.6 170.6z"></path>
                <path d="M846.8 238.6c0 33.91-27.49 61.4-61.4 61.4s-61.4-27.49-61.4-61.4c0-33.91 27.49-61.4 61.4-61.4s61.4 27.49 61.4 61.4z"></path>
              </svg>
            </div>
            <div className="mobile-menu-container20">
              <svg viewBox="0 0 1024 1024" className="mobile-menu-icon23">
                <path d="M873 148.8c-95.8-96-223.2-148.8-359-148.8-279.6 0-507.2 227.6-507.2 507.4 0 89.4 23.4 176.8 67.8 253.6l-72 263 269-70.6c74.2 40.4 157.6 61.8 242.4 61.8h0.2c0 0 0 0 0 0 279.6 0 507.4-227.6 507.4-507.4 0-135.6-52.8-263-148.6-359zM514.2 929.6v0c-75.8 0-150-20.4-214.8-58.8l-15.4-9.2-159.6 41.8 42.6-155.6-10-16c-42.4-67-64.6-144.6-64.6-224.4 0-232.6 189.2-421.8 422-421.8 112.6 0 218.6 44 298.2 123.6 79.6 79.8 123.4 185.6 123.4 298.4-0.2 232.8-189.4 422-421.8 422zM745.4 613.6c-12.6-6.4-75-37-86.6-41.2s-20-6.4-28.6 6.4c-8.4 12.6-32.8 41.2-40.2 49.8-7.4 8.4-14.8 9.6-27.4 3.2s-53.6-19.8-102-63c-37.6-33.6-63.2-75.2-70.6-87.8s-0.8-19.6 5.6-25.8c5.8-5.6 12.6-14.8 19-22.2s8.4-12.6 12.6-21.2c4.2-8.4 2.2-15.8-1-22.2s-28.6-68.8-39-94.2c-10.2-24.8-20.8-21.4-28.6-21.8-7.4-0.4-15.8-0.4-24.2-0.4s-22.2 3.2-33.8 15.8c-11.6 12.6-44.4 43.4-44.4 105.8s45.4 122.6 51.8 131.2c6.4 8.4 89.4 136.6 216.6 191.4 30.2 13 53.8 20.8 72.2 26.8 30.4 9.6 58 8.2 79.8 5 24.4-3.6 75-30.6 85.6-60.2s10.6-55 7.4-60.2c-3-5.6-11.4-8.8-24.2-15.2z"></path>
              </svg>
            </div>
            <div className="mobile-menu-container21">
              <svg viewBox="0 0 1024 1024" className="mobile-menu-icon25">
                <path d="M384 384h177.106v90.782h2.532c24.64-44.194 84.958-90.782 174.842-90.782 186.946 0 221.52 116.376 221.52 267.734v308.266h-184.61v-273.278c0-65.184-1.334-149.026-96.028-149.026-96.148 0-110.82 70.986-110.82 144.292v278.012h-184.542v-576z"></path>
                <path d="M64 384h192v576h-192v-576z"></path>
                <path d="M256 224c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="mobile-menu-filter"></div>
        <div className="mobile-menu-logo"></div>
      </div>
      <style jsx>
        {`
          .mobile-menu-top-bar {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: 1800px;
            align-items: flex-end;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: space-between;
            background-color: var(--dl-color-neutral-black);
          }
          .mobile-menu-container10 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .mobile-menu-image {
            flex: 1;
            width: 250px;
            min-width: 250px;
            object-fit: cover;
          }
          .mobile-menu-close-menu {
            flex: 0 0 auto;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
          }
          .mobile-menu-close-menu:hover {
            transform: rotate(180deg);
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-default-primary);
          }
          .mobile-menu-icon10 {
            fill: var(--dl-color-neutral-white);
            width: 36px;
            height: 36px;
          }
          .mobile-menu-middle {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            z-index: 1;
            flex-direction: column;
          }
          .mobile-menu-mobile-links {
            flex: 0 0 auto;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .mobile-menu-link1 {
            display: contents;
          }
          .mobile-menu-container11 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
            text-decoration: none;
          }
          .mobile-menu-text10 {
            font-size: 24px;
            font-weight: 300;
            line-height: 1.5;
            text-transform: uppercase;
            text-decoration: none;
          }
          .mobile-menu-link2 {
            display: contents;
          }
          .mobile-menu-container12 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
            text-decoration: none;
          }
          .mobile-menu-text12 {
            font-size: 24px;
            font-weight: 300;
            line-height: 1.5;
            text-transform: uppercase;
            text-decoration: none;
          }
          .mobile-menu-link3 {
            display: contents;
          }
          .mobile-menu-container13 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
            text-decoration: none;
          }
          .mobile-menu-text13 {
            font-size: 24px;
            font-weight: 300;
            line-height: 1.5;
            text-transform: uppercase;
            text-decoration: none;
          }
          .mobile-menu-link4 {
            display: contents;
          }
          .mobile-menu-container14 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
            text-decoration: none;
          }
          .mobile-menu-text14 {
            font-size: 24px;
            font-weight: 300;
            line-height: 1.5;
            text-transform: uppercase;
            text-decoration: none;
          }
          .mobile-menu-link5 {
            display: contents;
          }
          .mobile-menu-container15 {
            width: 100%;
            display: none;
            align-items: center;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
            text-decoration: none;
          }
          .mobile-menu-text15 {
            font-size: 24px;
            font-weight: 300;
            line-height: 1.5;
            text-transform: uppercase;
            text-decoration: none;
          }
          .mobile-menu-link6 {
            display: contents;
          }
          .mobile-menu-container16 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
            text-decoration: none;
          }
          .mobile-menu-text16 {
            font-size: 24px;
            font-weight: 300;
            line-height: 1.5;
            text-transform: uppercase;
            text-decoration: none;
          }
          .mobile-menu-link7 {
            display: contents;
          }
          .mobile-menu-container17 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
            text-decoration: none;
          }
          .mobile-menu-text17 {
            font-size: 24px;
            font-weight: 300;
            line-height: 1.5;
            text-transform: uppercase;
            text-decoration: none;
          }
          .mobile-menu-bottom {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            z-index: 1;
            flex-grow: 1;
            align-items: flex-start;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: center;
          }
          .mobile-menu-profile {
            display: none;
            position: relative;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .mobile-menu-login-btn {
            display: flex;
            transition: 0.3s;
            padding-top: 5px;
            border-style: double;
            padding-left: 20px;
            padding-right: 20px;
            flex-direction: row;
            padding-bottom: 5px;
          }
          .mobile-menu-login-btn:disabled {
            color: var(--dl-color-default-overlaydark);
            background-color: var(--dl-color-default-secondary);
          }
          .mobile-menu-icon13 {
            width: 32px;
            height: 32px;
            margin-right: var(--dl-space-space-unit);
          }
          .mobile-menu-link8 {
            display: none;
            padding-top: 5px;
            border-style: double;
            padding-left: 20px;
            padding-right: 20px;
            flex-direction: row;
            padding-bottom: 5px;
            text-decoration: none;
          }
          .mobile-menu-icon15 {
            width: 32px;
            height: 32px;
            margin-right: var(--dl-space-space-unit);
          }
          .mobile-menu-social-media-links {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .mobile-menu-container18 {
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: 48px;
            max-height: 48px;
            align-items: flex-start;
            border-color: var(--dl-color-neutral-white);
            border-width: 1px;
            margin-right: var(--dl-space-space-doubleunit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: space-between;
          }
          .mobile-menu-icon17 {
            fill: var(--dl-color-neutral-white);
            width: 100%;
            height: 100%;
          }
          .mobile-menu-container19 {
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: 48px;
            max-height: 48px;
            align-items: flex-start;
            border-color: var(--dl-color-neutral-white);
            border-width: 1px;
            margin-right: var(--dl-space-space-doubleunit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: space-between;
          }
          .mobile-menu-icon19 {
            fill: var(--dl-color-neutral-white);
            width: 100%;
            height: 100%;
          }
          .mobile-menu-container20 {
            display: none;
            padding: var(--dl-space-space-unit);
            max-width: 48px;
            max-height: 48px;
            align-items: flex-start;
            border-color: var(--dl-color-neutral-white);
            border-width: 1px;
            margin-right: var(--dl-space-space-doubleunit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: space-between;
          }
          .mobile-menu-icon23 {
            fill: var(--dl-color-neutral-white);
            width: 100%;
            height: 100%;
          }
          .mobile-menu-container21 {
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: 48px;
            max-height: 48px;
            align-items: flex-start;
            border-color: var(--dl-color-neutral-white);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: space-between;
          }
          .mobile-menu-icon25 {
            fill: var(--dl-color-neutral-white);
            width: 100%;
            height: 100%;
          }
          .mobile-menu-filter {
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            background-size: cover;
            background-repeat: no-repeat;
          }
          .mobile-menu-logo {
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            mix-blend-mode: overlay;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
          }

          @media (max-width: 991px) {
            .mobile-menu-middle {
              background-position: right;
            }
          }
          @media (max-width: 767px) {
            .mobile-menu-top-bar {
              align-items: center;
              padding-top: var(--dl-space-space-doubleunit);
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
              padding-bottom: var(--dl-space-space-doubleunit);
            }
            .mobile-menu-icon13 {
              margin-left: 0px;
            }
            .mobile-menu-icon15 {
              margin-left: 0px;
            }
            .mobile-menu-filter {
              background-image: url('https://images.unsplash.com/photo-1515462277126-2dd0c162007a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDU5fHxnZW9tZXRyaWN8ZW58MHx8fHwxNjM5ODI1MDE3&ixlib=rb-1.2.1&w=1500');
            }
            .mobile-menu-logo {
              background-size: cover;
              background-image: url('/logo%20-%20variantele%20principale-39-1500h.png');
            }
          }
          @media (max-width: 479px) {
            .mobile-menu-image {
              width: 230px;
              min-width: 230px;
            }
            .mobile-menu-container11 {
              padding-bottom: var(--dl-space-space-unit);
              justify-content: flex-start;
            }
            .mobile-menu-container12 {
              padding-bottom: var(--dl-space-space-unit);
            }
            .mobile-menu-container13 {
              padding-bottom: var(--dl-space-space-unit);
            }
            .mobile-menu-container14 {
              padding-bottom: var(--dl-space-space-unit);
            }
            .mobile-menu-container15 {
              padding-bottom: var(--dl-space-space-unit);
            }
            .mobile-menu-container16 {
              padding-bottom: var(--dl-space-space-unit);
            }
            .mobile-menu-bottom {
              position: relative;
              align-items: center;
              flex-direction: column;
              justify-content: flex-end;
            }
            .mobile-menu-social-media-links {
              margin-bottom: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .mobile-menu-container18 {
              max-width: 40px;
              max-height: 40px;
            }
            .mobile-menu-container19 {
              max-width: 40px;
              max-height: 40px;
            }
            .mobile-menu-container20 {
              max-width: 40px;
              max-height: 40px;
            }
            .mobile-menu-container21 {
              max-width: 40px;
              max-height: 40px;
            }
          }
        `}
      </style>
    </>
  )
}

MobileMenu.defaultProps = {
  rootClassName: '',
}

MobileMenu.propTypes = {
  rootClassName: PropTypes.string,
}

export default MobileMenu
