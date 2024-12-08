import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <div
        className={`footer-footer max-content-container ${props.rootClassName} `}
      >
        <div className="footer-bg-overlay">
          <div className="footer-content">
            <div className="footer-sitemap">
              <div className="footer-container10">
                <Link href="/">
                  <a className="footer-link10 Footer-Title">Acasa</a>
                </Link>
                <Link href="/despre">
                  <a className="footer-link11 Footer-Link">Despre mine</a>
                </Link>
                <Link href="/politica-de-confidentialitate">
                  <a className="footer-link12 Footer-Link">
                    <span>Politica de confidentialitate</span>
                  </a>
                </Link>
                <span className="footer-text11 Footer-Link">
                  <span>ANPC</span>
                </span>
                <Link href="/termeni-si-conditii">
                  <a className="footer-link13 Footer-Link">
                    <span>Termeni si conditii</span>
                  </a>
                </Link>
              </div>
              <div className="footer-container11">
                <div className="footer-container12">
                  <Link href="/servicii">
                    <a className="footer-link14 Footer-Title">servicii</a>
                  </Link>
                  <Link href="/servicii">
                    <a className="footer-link15 Footer-Link">
                      Personal Training
                    </a>
                  </Link>
                  <Link href="/servicii">
                    <a className="footer-link16 Footer-Link">
                      <span>Online Coaching</span>
                    </a>
                  </Link>
                  <Link href="/servicii">
                    <a className="footer-link17 Footer-Link">
                      <span>Evaluare</span>
                    </a>
                  </Link>
                </div>
                <Link href="/blog-home">
                  <a className="footer-link18 Footer-Title">Blog</a>
                </Link>
              </div>
              <div className="footer-container13">
                <Link href="/hiit">
                  <a className="footer-link19 Footer-Title">hiit</a>
                </Link>
                <span className="footer-text16 Footer-Link">De ce HIIT?</span>
                <span className="footer-text17 Footer-Link">
                  <span>Beneficii</span>
                </span>
                <span className="footer-text19 Footer-Link">
                  <span>Ce contine?</span>
                </span>
                <span className="footer-text21 Footer-Link">
                  <span>Arunca o privire</span>
                </span>
              </div>
              <div className="footer-container14">
                <Link href="/">
                  <a className="footer-link20">
                    <img
                      alt="image"
                      src="/logo%20secundar-05.svg"
                      className="footer-image1"
                    />
                  </a>
                </Link>
                <div className="footer-social-media">
                  <a
                    href="https://www.facebook.com/ValentinIgnatPersonalTrainer7"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link21"
                  >
                    <div className="footer-container15">
                      <svg viewBox="0 0 1024 1024" className="footer-icon10">
                        <path d="M608 192h160v-192h-160c-123.514 0-224 100.486-224 224v96h-128v192h128v512h192v-512h160l32-192h-192v-96c0-17.346 14.654-32 32-32z"></path>
                      </svg>
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/vali.ignat_/?hl=ro"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link22"
                  >
                    <div className="footer-container16">
                      <svg viewBox="0 0 1024 1024" className="footer-icon12">
                        <path d="M512 92.2c136.8 0 153 0.6 206.8 3 50 2.2 77 10.6 95 17.6 23.8 9.2 41 20.4 58.8 38.2 18 18 29 35 38.4 58.8 7 18 15.4 45.2 17.6 95 2.4 54 3 70.2 3 206.8s-0.6 153-3 206.8c-2.2 50-10.6 77-17.6 95-9.2 23.8-20.4 41-38.2 58.8-18 18-35 29-58.8 38.4-18 7-45.2 15.4-95 17.6-54 2.4-70.2 3-206.8 3s-153-0.6-206.8-3c-50-2.2-77-10.6-95-17.6-23.8-9.2-41-20.4-58.8-38.2-18-18-29-35-38.4-58.8-7-18-15.4-45.2-17.6-95-2.4-54-3-70.2-3-206.8s0.6-153 3-206.8c2.2-50 10.6-77 17.6-95 9.2-23.8 20.4-41 38.2-58.8 18-18 35-29 58.8-38.4 18-7 45.2-15.4 95-17.6 53.8-2.4 70-3 206.8-3zM512 0c-139 0-156.4 0.6-211 3-54.4 2.4-91.8 11.2-124.2 23.8-33.8 13.2-62.4 30.6-90.8 59.2-28.6 28.4-46 57-59.2 90.6-12.6 32.6-21.4 69.8-23.8 124.2-2.4 54.8-3 72.2-3 211.2s0.6 156.4 3 211c2.4 54.4 11.2 91.8 23.8 124.2 13.2 33.8 30.6 62.4 59.2 90.8 28.4 28.4 57 46 90.6 59 32.6 12.6 69.8 21.4 124.2 23.8 54.6 2.4 72 3 211 3s156.4-0.6 211-3c54.4-2.4 91.8-11.2 124.2-23.8 33.6-13 62.2-30.6 90.6-59s46-57 59-90.6c12.6-32.6 21.4-69.8 23.8-124.2 2.4-54.6 3-72 3-211s-0.6-156.4-3-211c-2.4-54.4-11.2-91.8-23.8-124.2-12.6-34-30-62.6-58.6-91-28.4-28.4-57-46-90.6-59-32.6-12.6-69.8-21.4-124.2-23.8-54.8-2.6-72.2-3.2-211.2-3.2v0z"></path>
                        <path d="M512 249c-145.2 0-263 117.8-263 263s117.8 263 263 263 263-117.8 263-263c0-145.2-117.8-263-263-263zM512 682.6c-94.2 0-170.6-76.4-170.6-170.6s76.4-170.6 170.6-170.6c94.2 0 170.6 76.4 170.6 170.6s-76.4 170.6-170.6 170.6z"></path>
                        <path d="M846.8 238.6c0 33.91-27.49 61.4-61.4 61.4s-61.4-27.49-61.4-61.4c0-33.91 27.49-61.4 61.4-61.4s61.4 27.49 61.4 61.4z"></path>
                      </svg>
                    </div>
                  </a>
                  <div className="footer-container17">
                    <svg viewBox="0 0 1024 1024" className="footer-icon16">
                      <path d="M873 148.8c-95.8-96-223.2-148.8-359-148.8-279.6 0-507.2 227.6-507.2 507.4 0 89.4 23.4 176.8 67.8 253.6l-72 263 269-70.6c74.2 40.4 157.6 61.8 242.4 61.8h0.2c0 0 0 0 0 0 279.6 0 507.4-227.6 507.4-507.4 0-135.6-52.8-263-148.6-359zM514.2 929.6v0c-75.8 0-150-20.4-214.8-58.8l-15.4-9.2-159.6 41.8 42.6-155.6-10-16c-42.4-67-64.6-144.6-64.6-224.4 0-232.6 189.2-421.8 422-421.8 112.6 0 218.6 44 298.2 123.6 79.6 79.8 123.4 185.6 123.4 298.4-0.2 232.8-189.4 422-421.8 422zM745.4 613.6c-12.6-6.4-75-37-86.6-41.2s-20-6.4-28.6 6.4c-8.4 12.6-32.8 41.2-40.2 49.8-7.4 8.4-14.8 9.6-27.4 3.2s-53.6-19.8-102-63c-37.6-33.6-63.2-75.2-70.6-87.8s-0.8-19.6 5.6-25.8c5.8-5.6 12.6-14.8 19-22.2s8.4-12.6 12.6-21.2c4.2-8.4 2.2-15.8-1-22.2s-28.6-68.8-39-94.2c-10.2-24.8-20.8-21.4-28.6-21.8-7.4-0.4-15.8-0.4-24.2-0.4s-22.2 3.2-33.8 15.8c-11.6 12.6-44.4 43.4-44.4 105.8s45.4 122.6 51.8 131.2c6.4 8.4 89.4 136.6 216.6 191.4 30.2 13 53.8 20.8 72.2 26.8 30.4 9.6 58 8.2 79.8 5 24.4-3.6 75-30.6 85.6-60.2s10.6-55 7.4-60.2c-3-5.6-11.4-8.8-24.2-15.2z"></path>
                    </svg>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/valentin-ignat-971a42195/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link23"
                  >
                    <div className="footer-container18">
                      <svg viewBox="0 0 1024 1024" className="footer-icon18">
                        <path d="M384 384h177.106v90.782h2.532c24.64-44.194 84.958-90.782 174.842-90.782 186.946 0 221.52 116.376 221.52 267.734v308.266h-184.61v-273.278c0-65.184-1.334-149.026-96.028-149.026-96.148 0-110.82 70.986-110.82 144.292v278.012h-184.542v-576z"></path>
                        <path d="M64 384h192v576h-192v-576z"></path>
                        <path d="M256 224c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z"></path>
                      </svg>
                    </div>
                  </a>
                  <a
                    href="https://www.tiktok.com/@vali.ignat?_t=8XPTyHPOLhO&amp;_r=1"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link24"
                  >
                    <div className="footer-container19">
                      <img
                        alt={props.imageAlt}
                        src={props.imageSrc}
                        className="footer-image2"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-actual-footer">
              <div className="footer-container20">
                <div className="footer-container21">
                  <span className="footer-text23">Copyright</span>
                  <svg viewBox="0 0 1024 1024" className="footer-icon22">
                    <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
                  </svg>
                  <span className="footer-text24">
                    2021 All rights reserved.
                  </span>
                </div>
                <a
                  href="https://www.teleporthq.io"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-link25"
                >
                  <div className="footer-teleport-hq">
                    <span className="footer-text25">Made in TeleportHQ</span>
                    <img
                      alt="TeleportHQ logo"
                      src="/logo%2098x98%20(3)-200w.png"
                      className="footer-image3"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-footer {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-neutral-black);
          }
          .footer-bg-overlay {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-eightunits);
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: center;
          }
          .footer-content {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .footer-sitemap {
            width: 100%;
            display: flex;
            align-items: stretch;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-container10 {
            flex: 0 0 auto;
            width: 25%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-link10 {
            color: var(--dl-color-neutral-white);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link11 {
            color: var(--dl-color-neutral-gray);
            cursor: pointer;
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer-link11:hover {
            color: var(--dl-color-neutral-white);
            padding-left: var(--dl-space-space-halfunit);
          }
          .footer-link12 {
            color: var(--dl-color-neutral-gray);
            cursor: pointer;
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link12:hover {
            color: var(--dl-color-neutral-white);
            padding-left: var(--dl-space-space-halfunit);
          }
          .footer-text11 {
            color: var(--dl-color-neutral-gray);
            cursor: pointer;
            display: none;
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer-text11:hover {
            color: var(--dl-color-neutral-white);
            padding-left: var(--dl-space-space-halfunit);
          }
          .footer-link13 {
            color: var(--dl-color-neutral-gray);
            cursor: pointer;
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link13:hover {
            color: var(--dl-color-neutral-white);
            padding-left: var(--dl-space-space-halfunit);
          }
          .footer-container11 {
            flex: 0 0 auto;
            width: 25%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-container12 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .footer-link14 {
            color: var(--dl-color-neutral-white);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link15 {
            color: var(--dl-color-neutral-gray);
            cursor: pointer;
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link15:hover {
            color: var(--dl-color-neutral-white);
            padding-left: var(--dl-space-space-halfunit);
          }
          .footer-link16 {
            color: var(--dl-color-neutral-gray);
            cursor: pointer;
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link16:hover {
            color: var(--dl-color-neutral-white);
            padding-left: var(--dl-space-space-halfunit);
          }
          .footer-link17 {
            color: var(--dl-color-neutral-gray);
            cursor: pointer;
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link17:hover {
            color: var(--dl-color-neutral-white);
            padding-left: var(--dl-space-space-halfunit);
          }
          .footer-link18 {
            color: var(--dl-color-neutral-white);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-container13 {
            flex: 0 0 auto;
            width: 25%;
            display: none;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-link19 {
            color: var(--dl-color-neutral-white);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-text16 {
            color: var(--dl-color-neutral-gray);
            cursor: pointer;
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer-text16:hover {
            color: var(--dl-color-neutral-white);
            padding-left: var(--dl-space-space-halfunit);
          }
          .footer-text17 {
            color: var(--dl-color-neutral-gray);
            cursor: pointer;
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer-text17:hover {
            color: var(--dl-color-neutral-white);
            padding-left: var(--dl-space-space-halfunit);
          }
          .footer-text19 {
            color: var(--dl-color-neutral-gray);
            cursor: pointer;
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer-text19:hover {
            color: var(--dl-color-neutral-white);
            padding-left: var(--dl-space-space-halfunit);
          }
          .footer-text21 {
            color: var(--dl-color-neutral-gray);
            cursor: pointer;
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer-text21:hover {
            color: var(--dl-color-neutral-white);
            padding-left: var(--dl-space-space-halfunit);
          }
          .footer-container14 {
            flex: 0 0 auto;
            width: 25%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-link20 {
            display: contents;
          }
          .footer-image1 {
            width: 100%;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .footer-social-media {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-link21 {
            display: contents;
          }
          .footer-container15 {
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: 48px;
            max-height: 48px;
            align-items: flex-start;
            border-color: var(--dl-color-default-primary);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: space-between;
            text-decoration: none;
          }
          .footer-icon10 {
            fill: var(--dl-color-default-primary);
            width: 100%;
            height: 100%;
          }
          .footer-link22 {
            display: contents;
          }
          .footer-container16 {
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: 48px;
            max-height: 48px;
            align-items: flex-start;
            border-color: var(--dl-color-default-primary);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: space-between;
            text-decoration: none;
          }
          .footer-icon12 {
            fill: var(--dl-color-default-primary);
            width: 100%;
            height: 100%;
          }
          .footer-container17 {
            display: none;
            padding: var(--dl-space-space-unit);
            max-width: 48px;
            max-height: 48px;
            align-items: flex-start;
            border-color: var(--dl-color-default-primary);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-icon16 {
            fill: var(--dl-color-default-primary);
            width: 100%;
            height: 100%;
          }
          .footer-link23 {
            display: contents;
          }
          .footer-container18 {
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: 48px;
            max-height: 48px;
            align-items: flex-start;
            border-color: var(--dl-color-default-primary);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: space-between;
            text-decoration: none;
          }
          .footer-icon18 {
            fill: var(--dl-color-default-primary);
            width: 100%;
            height: 100%;
          }
          .footer-link24 {
            display: contents;
          }
          .footer-container19 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            max-width: 48px;
            max-height: 48px;
            align-items: flex-start;
            border-color: var(--dl-color-default-primary);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: space-between;
            text-decoration: none;
          }
          .footer-image2 {
            width: 100%;
            filter: invert(33%) sepia(37%) saturate(6201%) hue-rotate(339deg)
              brightness(83%) contrast(105%);
            height: 100%;
            object-fit: cover;
          }
          .footer-actual-footer {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            border-color: rgba(255, 255, 255, 0.57);
            border-style: solid;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            border-top-width: 1px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .footer-container20 {
            display: flex;
            font-size: 16px;
            align-items: center;
            flex-direction: row;
          }
          .footer-container21 {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .footer-text23 {
            color: var(--dl-color-neutral-gray);
            margin-right: var(--dl-space-space-halfunit);
          }
          .footer-icon22 {
            fill: var(--dl-color-neutral-gray);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-halfunit);
          }
          .footer-text24 {
            color: var(--dl-color-neutral-gray);
          }
          .footer-link25 {
            display: contents;
          }
          .footer-teleport-hq {
            display: flex;
            align-items: center;
            flex-direction: row;
            text-decoration: none;
          }
          .footer-text25 {
            color: var(--dl-color-neutral-gray);
            margin-right: var(--dl-space-space-unit);
          }
          .footer-image3 {
            width: 25px;
            object-fit: cover;
          }
          .footerroot-class-name {
            max-width: var(--dl-size-size-maxwidth);
          }
          .footerroot-class-name1 {
            max-width: var(--dl-size-size-maxwidth);
          }
          .footerroot-class-name2 {
            max-width: var(--dl-size-size-maxwidth);
          }
          .footerroot-class-name3 {
            max-width: var(--dl-size-size-maxwidth);
          }
          .footerroot-class-name4 {
            max-width: var(--dl-size-size-maxwidth);
          }
          .footerroot-class-name5 {
            max-width: var(--dl-size-size-maxwidth);
          }
          .footerroot-class-name6 {
            max-width: var(--dl-size-size-maxwidth);
          }

          .footerroot-class-name9 {
            max-width: var(--dl-size-size-maxwidth);
          }
          .footerroot-class-name10 {
            max-width: var(--dl-size-size-maxwidth);
          }
          .footerroot-class-name11 {
            max-width: var(--dl-size-size-maxwidth);
          }
          .footerroot-class-name12 {
            max-width: var(--dl-size-size-maxwidth);
          }

          .footerroot-class-name14 {
            max-width: var(--dl-size-size-maxwidth);
          }
          .footerroot-class-name15 {
            max-width: var(--dl-size-size-maxwidth);
          }
          @media (max-width: 767px) {
            .footer-footer {
              padding-top: 0px;
              padding-bottom: 0px;
              background-size: cover;
              background-image: unset;
              background-position: center;
            }
            .footer-bg-overlay {
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .footer-content {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .footer-sitemap {
              flex-wrap: wrap;
              flex-direction: row;
            }
            .footer-container10 {
              width: var(--dl-size-size-half);
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .footer-container11 {
              width: var(--dl-size-size-half);
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .footer-container12 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .footer-container13 {
              width: var(--dl-size-size-half);
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .footer-container14 {
              width: var(--dl-size-size-half);
            }
          }
          @media (max-width: 479px) {
            .footer-footer {
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .footer-bg-overlay {
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .footer-content {
              padding-bottom: 0px;
            }
            .footer-sitemap {
              margin-bottom: var(--dl-space-space-doubleunit);
              flex-direction: column;
            }
            .footer-container10 {
              width: 100%;
            }
            .footer-container11 {
              width: 100%;
            }
            .footer-container13 {
              width: 100%;
            }
            .footer-container14 {
              width: 100%;
              align-items: center;
              flex-direction: row;
            }
            .footer-image1 {
              width: 65%;
              margin-right: var(--dl-space-space-doubleunit);
              margin-bottom: 0px;
            }
            .footer-social-media {
              display: grid;
              padding: var(--dl-space-space-unit);
              grid-gap: var(--dl-space-space-unit);
              align-items: center;
              align-content: center;
              justify-items: center;
              justify-content: space-evenly;
              grid-template-columns: 1fr 1fr;
            }
            .footer-container15 {
              max-width: 36px;
              max-height: 36px;
              margin-right: 0px;
            }
            .footer-container16 {
              max-width: 36px;
              max-height: 36px;
              margin-right: 0px;
            }
            .footer-container17 {
              max-width: 36px;
              max-height: 36px;
              margin-right: 0px;
            }
            .footer-container18 {
              max-width: 36px;
              max-height: 36px;
            }
            .footer-container19 {
              max-width: 36px;
              max-height: 36px;
            }
            .footer-actual-footer {
              padding-top: var(--dl-space-space-doubleunit);
              padding-bottom: var(--dl-space-space-doubleunit);
            }
            .footer-container20 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  rootClassName: '',
  imageSrc: '/tiktok-svgrepo-com.svg',
  imageAlt: 'image',
}

Footer.propTypes = {
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Footer
