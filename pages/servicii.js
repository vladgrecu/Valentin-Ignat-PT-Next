import React from 'react'
import Head from 'next/head'

import LoginModal from '../components/login-modal'
import RegisterModal from '../components/register-modal'
import ContactFormModal from '../components/contact-form-modal'
import Navbar from '../components/navbar'
import MobileMenu from '../components/mobile-menu'
import FadeInLeftHeroSection from '../components/fade-in-left-hero-section'
import BtnPrimary from '../components/btn-primary'
import Footer from '../components/footer'

const Servicii = (props) => {
  return (
    <>
      <div className="servicii-container1">
        <Head>
          <title>Servicii - Coach Vali Ignat</title>
          <meta property="og:title" content="Servicii - Coach Vali Ignat" />
          <meta property="og:description" content="Listening is power" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0bb31403-1ba8-407c-9d80-4389cc611d8c/2e667c71-2725-4843-8220-8fe9a0708d9d?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <LoginModal rootClassName="login-modalroot-class-name1"></LoginModal>
        <RegisterModal rootClassName="register-modalroot-class-name4"></RegisterModal>
        <ContactFormModal rootClassName="contact-form-modalroot-class-name1"></ContactFormModal>
        <Navbar rootClassName="navbarroot-class-name2"></Navbar>
        <MobileMenu rootClassName="mobile-menuroot-class-name2"></MobileMenu>
        <main className="servicii-main">
          <section className="servicii-hero hero-container">
            <div className="servicii-max-content max-content-container">
              <FadeInLeftHeroSection
                textContent="cum te pot ajuta?"
                rootClassName="fade-in-left-hero-sectionroot-class-name3"
              ></FadeInLeftHeroSection>
            </div>
            <div className="servicii-hero-overlay">
              <div className="servicii-social-media-links">
                <div className="servicii-container2">
                  <svg viewBox="0 0 1024 1024" className="servicii-icon10">
                    <path d="M608 192h160v-192h-160c-123.514 0-224 100.486-224 224v96h-128v192h128v512h192v-512h160l32-192h-192v-96c0-17.346 14.654-32 32-32z"></path>
                  </svg>
                </div>
                <div className="servicii-container3">
                  <svg viewBox="0 0 1024 1024" className="servicii-icon12">
                    <path d="M512 92.2c136.8 0 153 0.6 206.8 3 50 2.2 77 10.6 95 17.6 23.8 9.2 41 20.4 58.8 38.2 18 18 29 35 38.4 58.8 7 18 15.4 45.2 17.6 95 2.4 54 3 70.2 3 206.8s-0.6 153-3 206.8c-2.2 50-10.6 77-17.6 95-9.2 23.8-20.4 41-38.2 58.8-18 18-35 29-58.8 38.4-18 7-45.2 15.4-95 17.6-54 2.4-70.2 3-206.8 3s-153-0.6-206.8-3c-50-2.2-77-10.6-95-17.6-23.8-9.2-41-20.4-58.8-38.2-18-18-29-35-38.4-58.8-7-18-15.4-45.2-17.6-95-2.4-54-3-70.2-3-206.8s0.6-153 3-206.8c2.2-50 10.6-77 17.6-95 9.2-23.8 20.4-41 38.2-58.8 18-18 35-29 58.8-38.4 18-7 45.2-15.4 95-17.6 53.8-2.4 70-3 206.8-3zM512 0c-139 0-156.4 0.6-211 3-54.4 2.4-91.8 11.2-124.2 23.8-33.8 13.2-62.4 30.6-90.8 59.2-28.6 28.4-46 57-59.2 90.6-12.6 32.6-21.4 69.8-23.8 124.2-2.4 54.8-3 72.2-3 211.2s0.6 156.4 3 211c2.4 54.4 11.2 91.8 23.8 124.2 13.2 33.8 30.6 62.4 59.2 90.8 28.4 28.4 57 46 90.6 59 32.6 12.6 69.8 21.4 124.2 23.8 54.6 2.4 72 3 211 3s156.4-0.6 211-3c54.4-2.4 91.8-11.2 124.2-23.8 33.6-13 62.2-30.6 90.6-59s46-57 59-90.6c12.6-32.6 21.4-69.8 23.8-124.2 2.4-54.6 3-72 3-211s-0.6-156.4-3-211c-2.4-54.4-11.2-91.8-23.8-124.2-12.6-34-30-62.6-58.6-91-28.4-28.4-57-46-90.6-59-32.6-12.6-69.8-21.4-124.2-23.8-54.8-2.6-72.2-3.2-211.2-3.2v0z"></path>
                    <path d="M512 249c-145.2 0-263 117.8-263 263s117.8 263 263 263 263-117.8 263-263c0-145.2-117.8-263-263-263zM512 682.6c-94.2 0-170.6-76.4-170.6-170.6s76.4-170.6 170.6-170.6c94.2 0 170.6 76.4 170.6 170.6s-76.4 170.6-170.6 170.6z"></path>
                    <path d="M846.8 238.6c0 33.91-27.49 61.4-61.4 61.4s-61.4-27.49-61.4-61.4c0-33.91 27.49-61.4 61.4-61.4s61.4 27.49 61.4 61.4z"></path>
                  </svg>
                </div>
                <div className="servicii-container4">
                  <svg viewBox="0 0 1024 1024" className="servicii-icon16">
                    <path d="M873 148.8c-95.8-96-223.2-148.8-359-148.8-279.6 0-507.2 227.6-507.2 507.4 0 89.4 23.4 176.8 67.8 253.6l-72 263 269-70.6c74.2 40.4 157.6 61.8 242.4 61.8h0.2c0 0 0 0 0 0 279.6 0 507.4-227.6 507.4-507.4 0-135.6-52.8-263-148.6-359zM514.2 929.6v0c-75.8 0-150-20.4-214.8-58.8l-15.4-9.2-159.6 41.8 42.6-155.6-10-16c-42.4-67-64.6-144.6-64.6-224.4 0-232.6 189.2-421.8 422-421.8 112.6 0 218.6 44 298.2 123.6 79.6 79.8 123.4 185.6 123.4 298.4-0.2 232.8-189.4 422-421.8 422zM745.4 613.6c-12.6-6.4-75-37-86.6-41.2s-20-6.4-28.6 6.4c-8.4 12.6-32.8 41.2-40.2 49.8-7.4 8.4-14.8 9.6-27.4 3.2s-53.6-19.8-102-63c-37.6-33.6-63.2-75.2-70.6-87.8s-0.8-19.6 5.6-25.8c5.8-5.6 12.6-14.8 19-22.2s8.4-12.6 12.6-21.2c4.2-8.4 2.2-15.8-1-22.2s-28.6-68.8-39-94.2c-10.2-24.8-20.8-21.4-28.6-21.8-7.4-0.4-15.8-0.4-24.2-0.4s-22.2 3.2-33.8 15.8c-11.6 12.6-44.4 43.4-44.4 105.8s45.4 122.6 51.8 131.2c6.4 8.4 89.4 136.6 216.6 191.4 30.2 13 53.8 20.8 72.2 26.8 30.4 9.6 58 8.2 79.8 5 24.4-3.6 75-30.6 85.6-60.2s10.6-55 7.4-60.2c-3-5.6-11.4-8.8-24.2-15.2z"></path>
                  </svg>
                </div>
                <div className="servicii-container5">
                  <svg viewBox="0 0 1024 1024" className="servicii-icon18">
                    <path d="M384 384h177.106v90.782h2.532c24.64-44.194 84.958-90.782 174.842-90.782 186.946 0 221.52 116.376 221.52 267.734v308.266h-184.61v-273.278c0-65.184-1.334-149.026-96.028-149.026-96.148 0-110.82 70.986-110.82 144.292v278.012h-184.542v-576z"></path>
                    <path d="M64 384h192v576h-192v-576z"></path>
                    <path d="M256 224c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </section>
          <div className="servicii-services">
            <div className="servicii-service1 services-page-card">
              <div className="overlay-container">
                <div className="servicii-heading-container1 max-content-container">
                  <h1 className="servicii-heading heading-1">
                    <span className="servicii-text1">
                      evaluare completa si complexa
                    </span>
                  </h1>
                </div>
                <div
                  data-action="showContactFormModal"
                  className="services-cta-container"
                >
                  <BtnPrimary
                    ctaText="Contacteaza-ma"
                    rootClassName="btn-primaryroot-class-name6"
                  ></BtnPrimary>
                </div>
              </div>
            </div>
            <div className="servicii-service2 services-page-card">
              <div className="overlay-container">
                <div className="servicii-heading-container2 max-content-container">
                  <h1 className="servicii-text2 heading-1">
                    <span className="servicii-text3">
                      antrenamente personale
                    </span>
                  </h1>
                </div>
                <div
                  data-action="showContactFormModal"
                  className="services-cta-container"
                >
                  <BtnPrimary
                    ctaText="Contacteaza-ma"
                    rootClassName="btn-primaryroot-class-name20"
                  ></BtnPrimary>
                </div>
              </div>
            </div>
            <div className="servicii-service3 services-page-card">
              <div className="overlay-container">
                <div className="servicii-heading-container3 max-content-container">
                  <h1 className="servicii-text4 heading-1">
                    <span className="servicii-text5">online coaching</span>
                  </h1>
                </div>
                <div
                  data-action="showContactFormModal"
                  className="services-cta-container"
                >
                  <BtnPrimary
                    ctaText="Contacteaza-ma"
                    rootClassName="btn-primaryroot-class-name21"
                  ></BtnPrimary>
                </div>
              </div>
            </div>
            <div className="servicii-service4 services-page-card">
              <div className="overlay-container">
                <div className="servicii-heading-container4 max-content-container">
                  <h1 className="servicii-text6 heading-1">
                    <span className="servicii-text7">
                      antrenamente personalizate cu suport video
                    </span>
                  </h1>
                </div>
                <div
                  data-action="showContactFormModal"
                  className="services-cta-container"
                >
                  <BtnPrimary
                    ctaText="Contacteaza-ma"
                    rootClassName="btn-primaryroot-class-name22"
                  ></BtnPrimary>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer rootClassName="footerroot-class-name2"></Footer>
      </div>
      <style jsx>
        {`
          .servicii-container1 {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-neutral-black);
          }
          .servicii-main {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .servicii-hero {
            background-size: contain;
            background-image: url('/services%20pic-1500w.png'),
              linear-gradient(90deg, rgb(0, 0, 0) 1%, rgb(0, 0, 0) 100%);
            background-repeat: no-repeat;
          }
          .servicii-max-content {
            width: 100%;
            display: flex;
            z-index: 1;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .servicii-hero-overlay {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 30%;
            height: 100%;
            display: none;
            position: absolute;
            align-items: flex-end;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-eightunits);
            justify-content: center;
            background-color: var(--dl-color-default-overlay);
          }
          .servicii-social-media-links {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: center;
          }
          .servicii-container2 {
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: 48px;
            max-height: 48px;
            align-items: flex-start;
            border-color: var(--dl-color-neutral-white);
            border-width: 1px;
            margin-right: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: space-between;
          }
          .servicii-icon10 {
            fill: var(--dl-color-neutral-white);
            width: 100%;
            height: 100%;
          }
          .servicii-container3 {
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: 48px;
            max-height: 48px;
            align-items: flex-start;
            border-color: var(--dl-color-neutral-white);
            border-width: 1px;
            margin-right: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: space-between;
          }
          .servicii-icon12 {
            fill: var(--dl-color-neutral-white);
            width: 100%;
            height: 100%;
          }
          .servicii-container4 {
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: 48px;
            max-height: 48px;
            align-items: flex-start;
            border-color: var(--dl-color-neutral-white);
            border-width: 1px;
            margin-right: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: space-between;
          }
          .servicii-icon16 {
            fill: var(--dl-color-neutral-white);
            width: 100%;
            height: 100%;
          }
          .servicii-container5 {
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
          .servicii-icon18 {
            fill: var(--dl-color-neutral-white);
            width: 100%;
            height: 100%;
          }
          .servicii-services {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .servicii-service1 {
            background-size: cover;
            background-image: url('/img_9913-1500h.jpg');
            background-position: top;
          }
          .servicii-heading-container1 {
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .servicii-heading {
            z-index: 1;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 900;
            line-height: 1;
          }
          .servicii-text1 {
            color: var(--dl-color-neutral-black);
          }
          .servicii-service2 {
            background-image: url('/img_9874-1500h.jpg');
          }
          .servicii-heading-container2 {
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .servicii-text2 {
            z-index: 1;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 900;
            line-height: 1;
          }
          .servicii-text3 {
            color: var(--dl-color-neutral-black);
          }
          .servicii-service3 {
            background-image: url('/img_9811-1500h.jpg');
            background-position: center;
          }
          .servicii-heading-container3 {
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .servicii-text4 {
            z-index: 1;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 900;
            line-height: 1;
          }
          .servicii-text5 {
            color: var(--dl-color-neutral-black);
          }
          .servicii-service4 {
            background-image: url('/img_9611-1500h.jpg');
            background-position: center;
          }
          .servicii-heading-container4 {
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .servicii-text6 {
            z-index: 1;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 900;
            line-height: 1;
          }
          .servicii-text7 {
            color: var(--dl-color-neutral-black);
          }
          @media (max-width: 991px) {
            .servicii-max-content {
              align-items: center;
            }
            .servicii-hero-overlay {
              width: var(--dl-size-size-half);
            }
          }
          @media (max-width: 767px) {
            .servicii-hero {
              justify-content: flex-end;
            }
            .servicii-hero-overlay {
              width: 70%;
              padding-bottom: var(--dl-space-space-sixteenunits);
            }
            .servicii-service1 {
              background-size: cover;
              background-image: url('/img_9913-1500h.jpg');
              background-position: center;
            }
            .servicii-heading {
              font-size: 50px;
            }
            .servicii-text2 {
              font-size: 50px;
            }
            .servicii-service3 {
              background-position: right;
            }
            .servicii-text4 {
              font-size: 50px;
            }
            .servicii-service4 {
              background-position: left;
            }
            .servicii-text6 {
              font-size: 50px;
            }
          }
          @media (max-width: 479px) {
            .servicii-hero-overlay {
              width: 85%;
            }
            .servicii-social-media-links {
              padding-left: var(--dl-space-space-doubleunit);
            }
            .servicii-container2 {
              max-width: 36px;
              max-height: 36px;
            }
            .servicii-container3 {
              max-width: 36px;
              max-height: 36px;
            }
            .servicii-container4 {
              max-width: 36px;
              max-height: 36px;
            }
            .servicii-container5 {
              max-width: 36px;
              max-height: 36px;
            }
            .servicii-service1 {
              background-size: cover;
              background-position: center;
            }
            .servicii-heading {
              font-size: 32px;
            }
            .servicii-service2 {
              background-position: center;
            }
            .servicii-text2 {
              font-size: 32px;
            }
            .servicii-service3 {
              background-position: center;
            }
            .servicii-text4 {
              font-size: 32px;
            }
            .servicii-service4 {
              background-position: left;
            }
            .servicii-text6 {
              font-size: 32px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Servicii
