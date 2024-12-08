import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import LoginModal from '../components/login-modal'
import RegisterModal from '../components/register-modal'
import MobileMenu from '../components/mobile-menu'
import Footer from '../components/footer'

const BlogDespreViataImnulAdaptat = (props) => {
  return (
    <>
      <div className="blog-despre-viata-imnul-adaptat-container1">
        <Head>
          <title>
            Blog-Despre-viata-imnul-adaptat - Valentin Ignat - Personal Trainer
          </title>
          <meta
            property="og:title"
            content="Blog-Despre-viata-imnul-adaptat - Valentin Ignat - Personal Trainer"
          />
          <meta property="og:description" content="Listening is power" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0bb31403-1ba8-407c-9d80-4389cc611d8c/2e667c71-2725-4843-8220-8fe9a0708d9d?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Navbar rootClassName="navbarroot-class-name13"></Navbar>
        <LoginModal rootClassName="login-modalroot-class-name11"></LoginModal>
        <RegisterModal rootClassName="register-modalroot-class-name11"></RegisterModal>
        <MobileMenu rootClassName="mobile-menuroot-class-name12"></MobileMenu>
        <main className="blog-despre-viata-imnul-adaptat-main">
          <section className="blog-despre-viata-imnul-adaptat-hero hero-container">
            <div className="blog-despre-viata-imnul-adaptat-max-content max-content-container">
              <div className="blog-despre-viata-imnul-adaptat-container2 animation-fade-in-left">
                <div className="blog-despre-viata-imnul-adaptat-horizontal-line"></div>
                <span className="heading-1 blog-despre-viata-imnul-adaptat-text10">
                  Despre VIAta
                </span>
                <span className="blog-despre-viata-imnul-adaptat-subtitle">
                  <span>Imnul, adaptat la 2022</span>
                  <br></br>
                </span>
                <div
                  data-goBack="blog-home"
                  data-scrollTo="despre-noi"
                  className="blog-despre-viata-imnul-adaptat-go-back-container"
                >
                  <Link href="/blog-home">
                    <a className="blog-despre-viata-imnul-adaptat-link Button-Text animated-btn btn-secondary">
                      Inapoi la lista articole...
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <div className="blog-despre-viata-imnul-adaptat-articol section-container">
            <div className="blog-despre-viata-imnul-adaptat-container3 max-content-container">
              <span className="blog-despre-viata-imnul-adaptat-text13">
                <span>Deșteaptă-te, române, din lenea cea de moarte,</span>
                <br></br>
                <span>În care te-adâncira Netflix și Instagram!</span>
                <br></br>
                <span>Acum ori niciodată, pune mâna pe carte,</span>
                <br></br>
                <span>Aleargă, trage-mpinge și sari ca Duckadam.</span>
                <br></br>
                <br></br>
                <span>Acum ori niciodată mai ieși un pic în lume,</span>
                <br></br>
                <span>Fă deadlift, squat și spate, repeta asta mult,</span>
                <br></br>
                <span>Fandări, umeri și piept, râzi cu pofta la glume,</span>
                <br></br>
                <span>Dormi opt ore pe noapte, adoptă acest cult.</span>
                <br></br>
                <br></br>
                <span>Priviți, mărețe umbre, Mihai, Ștefan, Corvine,</span>
                <br></br>
                <span>IT-iști, bloggeri și-agenți, ai voștri strănepoți,</span>
                <br></br>
                <span>Cu brațe pân’ la coate, muiate-n amandine,</span>
                <br></br>
                <span>
                  “Nu vreau!Nu-mi place sportul!”, din pat ei strigă toți.
                </span>
                <br></br>
                <br></br>
                <span>Copii, adulți, bătrâni, mișcarea este cheia,</span>
                <br></br>
                <span>Deviza-i sănătatea, ca să ajungi cărunt.</span>
                <br></br>
                <span>Cartofi prăjiți cu burgeri și hot dogi din Ikea</span>
                <br></br>
                <span>Au gust, dar nu e hrana din al nost’ vechi pământ.</span>
                <br></br>
              </span>
              <span className="blog-despre-viata-imnul-adaptat-text49">
                Versuri: Vali Ignat
              </span>
            </div>
          </div>
        </main>
        <Footer rootClassName="footerroot-class-name12"></Footer>
      </div>
      <style jsx>
        {`
          .blog-despre-viata-imnul-adaptat-container1 {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-neutral-black);
          }
          .blog-despre-viata-imnul-adaptat-main {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .blog-despre-viata-imnul-adaptat-hero {
            background-size: cover;
            background-image: url('/Blog/despre-noi.jpg');
            background-repeat: no-repeat;
            background-position: center;
          }
          .blog-despre-viata-imnul-adaptat-max-content {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-despre-viata-imnul-adaptat-container2 {
            display: flex;
            position: relative;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: column;
          }
          .blog-despre-viata-imnul-adaptat-horizontal-line {
            width: 4px;
            display: flex;
            align-self: stretch;
            margin-right: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-default-primary);
          }
          .blog-despre-viata-imnul-adaptat-subtitle {
            color: var(--dl-color-neutral-white);
            font-size: 36px;
          }
          .blog-despre-viata-imnul-adaptat-go-back-container {
            display: flex;
            flex-direction: column;
          }
          .blog-despre-viata-imnul-adaptat-link {
            width: fit-content;
            margin-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            text-decoration: none;
          }
          .blog-despre-viata-imnul-adaptat-articol {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-neutral-white);
          }
          .blog-despre-viata-imnul-adaptat-container3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .blog-despre-viata-imnul-adaptat-text49 {
            align-self: flex-end;
          }
          @media (max-width: 479px) {
            .blog-despre-viata-imnul-adaptat-max-content {
              flex: 1;
              justify-content: flex-end;
            }
            .blog-despre-viata-imnul-adaptat-horizontal-line {
              margin-right: var(--dl-space-space-unit);
            }
            .blog-despre-viata-imnul-adaptat-text10 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .blog-despre-viata-imnul-adaptat-container3 {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .blog-despre-viata-imnul-adaptat-text13 {
              font-size: 15px;
            }
          }
        `}
      </style>
    </>
  )
}

export default BlogDespreViataImnulAdaptat
