import React from 'react'
import Head from 'next/head'

import LoginModal from '../components/login-modal'
import RegisterModal from '../components/register-modal'
import ContactFormModal from '../components/contact-form-modal'
import Navbar from '../components/navbar'
import MobileMenu from '../components/mobile-menu'
import FadeInLeftHeroSection from '../components/fade-in-left-hero-section'
import Footer from '../components/footer'

const Contact = (props) => {
  return (
    <>
      <div className="contact-container1">
        <Head>
          <title>Contact - Coach Vali Ignat</title>
          <meta property="og:title" content="Contact - Coach Vali Ignat" />
          <meta property="og:description" content="Listening is power" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0bb31403-1ba8-407c-9d80-4389cc611d8c/2e667c71-2725-4843-8220-8fe9a0708d9d?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <LoginModal rootClassName="login-modalroot-class-name2"></LoginModal>
        <RegisterModal rootClassName="register-modalroot-class-name1"></RegisterModal>
        <ContactFormModal rootClassName="contact-form-modalroot-class-name4"></ContactFormModal>
        <Navbar rootClassName="navbarroot-class-name5"></Navbar>
        <MobileMenu rootClassName="mobile-menuroot-class-name4"></MobileMenu>
        <main className="contact-main">
          <section className="contact-hero hero-container">
            <div className="contact-max-content1 max-content-container">
              <FadeInLeftHeroSection
                textContent="unde ma gasesti?"
                rootClassName="fade-in-left-hero-sectionroot-class-name1"
              ></FadeInLeftHeroSection>
            </div>
          </section>
          <div className="section-container">
            <div className="contact-max-content2 max-content-container">
              <div className="contact-container2">
                <div className="contact-container3">
                  <svg viewBox="0 0 1024 1024" className="contact-icon1">
                    <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
                  </svg>
                  <span className="contact-text1 Content-Bold content-bold-white">
                    Locatie
                  </span>
                  <span className="contact-text2 Content-Bold content-bold-white">
                    Cartierul Zorilor, Cluj-Napoca
                  </span>
                </div>
                <div className="contact-separator"></div>
                <div className="contact-container4">
                  <svg viewBox="0 0 1024 1024" className="contact-icon3">
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                  <span className="contact-text3 Content-Bold content-bold-white">
                    E-mail
                  </span>
                  <span className="contact-text4 Content-Bold content-bold-white">
                    valiignat.ro@gmail.com
                  </span>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21868.310271504783!2d23.566939721757155!3d46.75427551477646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490dd6ac0e6abd%3A0x4aa71262e69ddfbc!2sZorilor%2C%20Cluj-Napoca!5e0!3m2!1sen!2sro!4v1637622575226!5m2!1sen!2sro"
                className="contact-iframe"
              ></iframe>
            </div>
          </div>
        </main>
        <Footer rootClassName="footerroot-class-name4"></Footer>
      </div>
      <style jsx>
        {`
          .contact-container1 {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-neutral-black);
          }
          .contact-main {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .contact-hero {
            background-image: url('/img_9818-1500h.jpg');
            background-repeat: no-repeat;
            background-position: left;
          }
          .contact-max-content1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .contact-max-content2 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .contact-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            justify-content: space-around;
          }
          .contact-container3 {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: flex-end;
          }
          .contact-icon1 {
            fill: var(--dl-color-neutral-white);
            height: 80px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .contact-text1 {
            color: var(--dl-color-default-primary);
            margin-bottom: 0px;
          }
          .contact-text2 {
            text-align: center;
            margin-bottom: 0px;
          }
          .contact-separator {
            flex: 0 0 auto;
            width: 1px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            background-color: #d9d9d9;
          }
          .contact-container4 {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: flex-end;
            text-decoration: none;
          }
          .contact-icon3 {
            fill: var(--dl-color-neutral-white);
            height: 80px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .contact-text3 {
            color: var(--dl-color-default-primary);
            margin-bottom: 0px;
          }
          .contact-text4 {
            text-align: center;
            margin-bottom: 0px;
          }
          .contact-iframe {
            width: 100%;
            height: 450px;
          }
          @media (max-width: 991px) {
            .contact-max-content2 {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .contact-max-content2 {
              flex-direction: column;
            }
            .contact-container2 {
              flex-wrap: wrap;
              flex-direction: column;
            }
            .contact-container3 {
              width: 100%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .contact-separator {
              width: 100px;
              height: 1px;
              display: none;
            }
            .contact-container4 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .contact-hero {
              background-position: center;
            }
            .contact-max-content1 {
              flex: 1;
              justify-content: flex-end;
            }
            .contact-separator {
              width: 50px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Contact
