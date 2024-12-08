import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import LoginModal from '../components/login-modal'
import RegisterModal from '../components/register-modal'
import MobileMenu from '../components/mobile-menu'
import Footer from '../components/footer'

const BlogDespreSomnCreziCaDormiSuficient = (props) => {
  return (
    <>
      <div className="blog-despre-somn-crezi-ca-dormi-suficient-container1">
        <Head>
          <title>
            Blog-Despre-Somn-crezi-ca-dormi-suficient - Valentin Ignat -
            Personal Trainer
          </title>
          <meta
            property="og:title"
            content="Blog-Despre-Somn-crezi-ca-dormi-suficient - Valentin Ignat - Personal Trainer"
          />
          <meta property="og:description" content="Listening is power" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0bb31403-1ba8-407c-9d80-4389cc611d8c/2e667c71-2725-4843-8220-8fe9a0708d9d?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Navbar rootClassName="navbarroot-class-name10"></Navbar>
        <LoginModal rootClassName="login-modalroot-class-name8"></LoginModal>
        <RegisterModal rootClassName="register-modalroot-class-name8"></RegisterModal>
        <MobileMenu rootClassName="mobile-menuroot-class-name9"></MobileMenu>
        <main className="blog-despre-somn-crezi-ca-dormi-suficient-main">
          <section className="blog-despre-somn-crezi-ca-dormi-suficient-hero hero-container">
            <div className="blog-despre-somn-crezi-ca-dormi-suficient-max-content max-content-container">
              <div className="blog-despre-somn-crezi-ca-dormi-suficient-container2 animation-fade-in-left">
                <div className="blog-despre-somn-crezi-ca-dormi-suficient-horizontal-line"></div>
                <span className="heading-1 blog-despre-somn-crezi-ca-dormi-suficient-text10">
                  <span>
                    despre somn
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span className="blog-despre-somn-crezi-ca-dormi-suficient-subtitle">
                  CREZI CA DORMI SUFICIENT?
                </span>
                <div
                  data-goBack="blog-home"
                  data-scrollTo="despre-somn-crezi-ca-dormi-suficient"
                  className="blog-despre-somn-crezi-ca-dormi-suficient-go-back-container"
                >
                  <Link href="/blog-home">
                    <a className="blog-despre-somn-crezi-ca-dormi-suficient-link Button-Text animated-btn btn-secondary">
                      Inapoi la lista articole...
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <div className="blog-despre-somn-crezi-ca-dormi-suficient-articol section-container">
            <div className="blog-despre-somn-crezi-ca-dormi-suficient-container3 max-content-container">
              <span>
                <span>
                  Peste 60% dintre adultii tarilor europene dezvoltate nu
                  reusesc sa aiba cele 8 ore de somn recomandate pe timpul
                  noptii de Organizatia Mondiala a Sanatatii cat si de National
                  Sleep Foundation.
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span>Consecinte? Foarte multe!</span>
                <br></br>
                <span></span>
                <br></br>
                <span>
                  Daca va ghidati dupa nefericita veche zicala “Am sa dorm dupa
                  ce mor”, atunci veti sfarsi mai repede iar calitatea acelei
                  vieti scurtate va fi inferioara.
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span>
                  Cu mai putin de 6-7 ore de somn/noapte, frecvent, va
                  distrugeti sistemul imunitar, va dublati riscul pt cancer. De
                  asemenea, cresterea aparitiei blocajelor arteriale si a
                  subtierii vaselor de sange va deschide drumul spre boli
                  cardiovasculare, atacuri cerebrale si atacuri de cord.
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span>
                  Perturbarea somnului contribuie la accentuarea tuturor
                  afectiunilor psihiatrice, inclusiv depresia, anxietatea si
                  tendintele suicidare.
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span>
                  Deficienta de somn duce sigur la ingrasare, atat la adulti cat
                  si la copii.
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span>
                  Din pacate, toate aceste informatii nu sunt transmise clar
                  publicului si este inadmisibil sa nu vorbim despre somn, atata
                  timp cat medicii si cercetatorii din domeniu au studiat si au
                  scris pe aceasta tema.
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span>
                  Pana la urma, eu doar vreau sa subliniez cele mei relevante
                  informații din cartea lui Mattew Walker “Despre Somn” , ca sa
                  ajut oamenii din jurul meu sa devina mai sanatosi. Daca vreti
                  sa intrati mai in detaliu, va recomand din tot sufletul cartea
                  cat si site-ul www.sleepfoundation.org 🙏🏼
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span>
                  Un comentariu/share de la voi m-ar ajuta sa stiu daca doriti
                  sa continui aceasta serie cu informatii vitale.
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span>Sanatate🤟🏼</span>
              </span>
            </div>
          </div>
        </main>
        <Footer rootClassName="footerroot-class-name9"></Footer>
      </div>
      <style jsx>
        {`
          .blog-despre-somn-crezi-ca-dormi-suficient-container1 {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-neutral-black);
          }
          .blog-despre-somn-crezi-ca-dormi-suficient-main {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .blog-despre-somn-crezi-ca-dormi-suficient-hero {
            background-image: url('https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxzbGVlcCUyMG5pZ2h0fGVufDB8fHx8MTYzOTkyNjk4NA&ixlib=rb-1.2.1&w=1500');
            background-repeat: no-repeat;
            background-position: bottom;
          }
          .blog-despre-somn-crezi-ca-dormi-suficient-max-content {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-despre-somn-crezi-ca-dormi-suficient-container2 {
            display: flex;
            position: relative;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: column;
          }
          .blog-despre-somn-crezi-ca-dormi-suficient-horizontal-line {
            width: 4px;
            display: flex;
            align-self: stretch;
            margin-right: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-default-primary);
          }
          .blog-despre-somn-crezi-ca-dormi-suficient-subtitle {
            color: var(--dl-color-neutral-white);
            font-size: 36px;
          }
          .blog-despre-somn-crezi-ca-dormi-suficient-go-back-container {
            display: flex;
            flex-direction: column;
          }
          .blog-despre-somn-crezi-ca-dormi-suficient-link {
            width: fit-content;
            margin-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            text-decoration: none;
          }
          .blog-despre-somn-crezi-ca-dormi-suficient-articol {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-neutral-white);
          }
          .blog-despre-somn-crezi-ca-dormi-suficient-container3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          @media (max-width: 767px) {
            .blog-despre-somn-crezi-ca-dormi-suficient-hero {
              background-position: center;
            }
          }
          @media (max-width: 479px) {
            .blog-despre-somn-crezi-ca-dormi-suficient-max-content {
              flex: 1;
              justify-content: flex-end;
            }
            .blog-despre-somn-crezi-ca-dormi-suficient-horizontal-line {
              margin-right: var(--dl-space-space-unit);
            }
            .blog-despre-somn-crezi-ca-dormi-suficient-text10 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
          }
        `}
      </style>
    </>
  )
}

export default BlogDespreSomnCreziCaDormiSuficient
