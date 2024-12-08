import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import LoginModal from '../components/login-modal'
import RegisterModal from '../components/register-modal'
import ContactFormModal from '../components/contact-form-modal'
import Navbar from '../components/navbar'
import MobileMenu from '../components/mobile-menu'
import FadeInLeftHeroSection from '../components/fade-in-left-hero-section'
import BtnSecondary from '../components/btn-secondary'
import Footer from '../components/footer'

const BlogHome = (props) => {
  return (
    <>
      <div className="blog-home-container10">
        <Head>
          <title>Blog - Coach Vali Ignat</title>
          <meta property="og:title" content="Blog - Coach Vali Ignat" />
          <meta property="og:description" content="Listening is power" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0bb31403-1ba8-407c-9d80-4389cc611d8c/2e667c71-2725-4843-8220-8fe9a0708d9d?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <LoginModal rootClassName="login-modalroot-class-name3"></LoginModal>
        <RegisterModal rootClassName="register-modalroot-class-name"></RegisterModal>
        <ContactFormModal rootClassName="contact-form-modalroot-class-name5"></ContactFormModal>
        <Navbar rootClassName="navbarroot-class-name6"></Navbar>
        <MobileMenu rootClassName="mobile-menuroot-class-name5"></MobileMenu>
        <main className="blog-home-main">
          <section className="blog-home-hero hero-container">
            <div className="blog-home-max-content1 max-content-container">
              <FadeInLeftHeroSection
                textContent="ce mai scriu"
                rootClassName="fade-in-left-hero-sectionroot-class-name2"
              ></FadeInLeftHeroSection>
            </div>
          </section>
          <div className="section-container">
            <div className="blog-home-max-content2 max-content-container">
              <div id="despre-noi" className="blog-home-blog-post-card1">
                <div className="blog-home-container11"></div>
                <div className="blog-home-container12">
                  <div className="blog-home-container13">
                    <h1 className="blog-home-text10">
                      <span>DESPRE VIATA</span>
                      <br className="H2"></br>
                    </h1>
                    <span>
                      <span>Imnul, adaptat la 2022</span>
                      <br></br>
                    </span>
                  </div>
                  <span className="blog-home-text16 Content-Bold content-bold-white">
                    <span>Deșteaptă-te, române, din lenea cea de moarte,</span>
                    <br></br>
                    <span>În care te-adâncira Netflix și Instagram!</span>
                    <br></br>
                    <span>Acum ori niciodată, pune mâna pe carte,</span>
                    <br></br>
                    <span>Aleargă, trage-mpinge și sari ca Duckadam...</span>
                    <br></br>
                    <br></br>
                    <span>...</span>
                    <br></br>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                  </span>
                  <div className="blog-home-btn1">
                    <Link href="/blog-despre-viata-imnul-adaptat">
                      <a className="blog-home-link1">
                        <BtnSecondary
                          ctaText="citeste mai mult"
                          rootClassName="btn-secondaryroot-class-name23"
                          className="blog-home-component16"
                        ></BtnSecondary>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div id="despre-motivatie" className="blog-home-blog-post-card2">
                <div className="blog-home-container14"></div>
                <div className="blog-home-container15">
                  <div className="blog-home-container16">
                    <h1 className="blog-home-text30">
                      <span>DESPRE MOTIVATIE</span>
                      <br className="H2"></br>
                    </h1>
                    <span>
                      Vrei sa iti controlezi corpul sau il lasi sa fie
                      controlat?
                    </span>
                  </div>
                  <span className="blog-home-text34 Content-Bold content-bold-white">
                    <span>
                      Ti s-a intamplat vreodata sa zici ca te apuci de alergat
                      si ai facut-o, ca mai apoi sa renunti dupa saptamana 2?
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Ti s-a intamplat vreodata sa iti propui sa te culci mai
                      devreme si ai facut-o, dar dupa primul weekend mai haotic,
                      te-ai lasat?
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Ti s-a intamplat vreodata sa iti propui sa alegi mai atent
                      alimentele din farfurie, dar cand frigiderul s-a golit si
                      n-ai avut chef sa iesi la cumparaturi, ai comandat si ai
                      revenit iarasi la vechile obiceiuri?
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      {' '}
                      ȘI MIE !!!
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                  </span>
                  <div className="blog-home-btn2">
                    <Link href="/blog-despre-motivatie">
                      <a className="blog-home-link2">
                        <BtnSecondary
                          ctaText="citeste mai mult"
                          rootClassName="btn-secondaryroot-class-name23"
                          className="blog-home-component17"
                        ></BtnSecondary>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div id="despre-viata" className="blog-home-blog-post-card3">
                <div className="blog-home-container17"></div>
                <div className="blog-home-container18">
                  <div className="blog-home-container19">
                    <h1 className="H2 blog-home-text46">Despre Viata</h1>
                    <span>Cum te atasezi cand iei decizii importante?</span>
                  </div>
                  <span className="blog-home-text48 Content-Bold content-bold-white">
                    <span>
                      Se spune ca latura ta emotionala se va atasa intotdeauna
                      mai usor de lucrurile care vibreaza cel mai mult cu
                      interesele si nevoile tale.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      De aici rezulta ca intotdeauna te vei atasa de parerile
                      influencerilor(marketeri, scriitori, actori, artisti etc)
                      care vor fi mai aproape de ceea ce simti sau vrei sa simti
                      si tu. Aici ma refer la a iti lua informatia doar din
                      surse comune: Instagram, TikTok, Youtube, Facebook, fara a
                      le mai verifica sau a cerceta si alta parere...
                    </span>
                    <br></br>
                  </span>
                  <div className="blog-home-btn3">
                    <Link href="/blog-despre-viata">
                      <a className="blog-home-link3">
                        <BtnSecondary
                          ctaText="citeste mai mult"
                          rootClassName="btn-secondaryroot-class-name23"
                          className="blog-home-component18"
                        ></BtnSecondary>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                id="despre-alimentatie-lucruri-simple"
                className="blog-home-blog-post-card4"
              >
                <div className="blog-home-container20"></div>
                <div className="blog-home-container21">
                  <div className="blog-home-container22">
                    <h1 className="H2 blog-home-text54">Despre alimentatie</h1>
                    <span>Pastreaza lucrurile cat mai simple...</span>
                  </div>
                  <span className="blog-home-text56 Content-Bold content-bold-white">
                    <span>
                      Adauga legume si fructe,zilnic, in alimentatia ta🍉
                    </span>
                    <br></br>
                    <span></span>
                    <br></br>
                    <span>
                      Ai o varietate imensa de legume si fructe de care dispui,
                      insa tu alegi sa iti iei carbohidratii din fainoase, faina
                      alba, foietaje si o gramada de alte mizerii.
                    </span>
                    <br></br>
                    <span>Pastreaza lucrurile simple!</span>
                    <br></br>
                    <span>De exemplu...</span>
                  </span>
                  <div className="blog-home-btn4">
                    <Link href="/blog-despre-alimentatie-lucruri-simple">
                      <a className="blog-home-link4">
                        <BtnSecondary
                          ctaText="citeste mai mult"
                          rootClassName="btn-secondaryroot-class-name20"
                          className="blog-home-component19"
                        ></BtnSecondary>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                id="despre-somn-somnul-de-pranz"
                className="blog-home-blog-post-card5"
              >
                <div className="blog-home-container23">
                  <img
                    alt="descriere imagine"
                    src="/despre-somn3-1500w.png"
                    className="blog-home-image1"
                  />
                </div>
                <div className="blog-home-container24">
                  <div className="blog-home-container25">
                    <h1 className="H2 blog-home-text62">Despre somn</h1>
                    <span>Somnul de pranz, prieten sau inamic?</span>
                  </div>
                  <span className="blog-home-text64 Content-Bold content-bold-white">
                    <span>
                      Poate ai ocazia sa dormi o ora la pranz, sau poate nu, dar
                      ce parere ai despre acest somn?
                    </span>
                    <br></br>
                    <span>
                      Unii zic ca e benefic, altii zic ca nu mai esti copil ca
                      sa dormi la pranz, dar hai mai bine sa vedem ce spun
                      cercetatorii somnului si specialistii in acest domeniu.
                    </span>
                    <br></br>
                    <span></span>
                    <br></br>
                    <span>
                      In Grecia anilor 80’, 90’ si in tarile mediteraneene inca
                      exista asa numita siesta, intre orele 13 si 17. Mai nou,
                      dupa intrarea in noul mileniu, s-au creat presiuni in
                      cazul Greciei pt renuntarea la acest obicei(probabil ca si
                      pt ceilalti)...
                    </span>
                  </span>
                  <div className="blog-home-btn5">
                    <Link href="/blog-despre-somn-somnul-de-pranz">
                      <a className="blog-home-link5">
                        <BtnSecondary
                          ctaText="citeste mai mult"
                          rootClassName="btn-secondaryroot-class-name21"
                          className="blog-home-component20"
                        ></BtnSecondary>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                id="despre-somn-crezi-ca-dormi-suficient"
                className="blog-home-blog-post-card6"
              >
                <div className="blog-home-container26">
                  <img
                    alt="descriere imagine"
                    src="/despre-somn2-1500w.png"
                    className="blog-home-image2"
                  />
                </div>
                <div className="blog-home-container27">
                  <div className="blog-home-container28">
                    <h1 className="H2 blog-home-text69">Despre somn</h1>
                    <span>Crezi ca dormi suficient?</span>
                  </div>
                  <span className="blog-home-text71 Content-Bold content-bold-white">
                    <span>
                      Peste 60% dintre adultii tarilor europene dezvoltate nu
                      reusesc sa aiba cele 8 ore de somn recomandate pe timpul
                      noptii de Organizatia Mondiala a Sanatatii cat si de
                      National Sleep Foundation.
                    </span>
                    <br></br>
                    <span></span>
                    <br></br>
                    <span>Consecinte? Foarte multe!</span>
                    <br></br>
                    <span></span>
                    <br></br>
                    <span>
                      Daca va ghidati dupa nefericita veche zicala “Am sa dorm
                      dupa ce mor”, atunci veti sfarsi mai repede iar calitatea
                      acelei vieti scurtate va fi inferioara...
                    </span>
                  </span>
                  <div className="blog-home-btn6">
                    <Link href="/blog-despre-somn-crezi-ca-dormi-suficient">
                      <a className="blog-home-link6">
                        <BtnSecondary
                          ctaText="citeste mai mult"
                          rootClassName="btn-secondaryroot-class-name22"
                          className="blog-home-component21"
                        ></BtnSecondary>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                id="despre-somn-de-ce-dormim"
                className="blog-home-blog-post-card7"
              >
                <div className="blog-home-container29">
                  <img
                    alt="descriere imagine"
                    src="/image%205%20%5B1%5D-1500w.png"
                    className="blog-home-image3"
                  />
                </div>
                <div className="blog-home-container30">
                  <div className="blog-home-container31">
                    <h1 className="H2 blog-home-text77">Despre somn</h1>
                    <span>De ce dormim?</span>
                  </div>
                  <span className="blog-home-text79 Content-Bold content-bold-white">
                    <span>V-ati intrebat vreodata de ce dormim?😴</span>
                    <br></br>
                    <span>
                      Daca l-as cita pe Mattew Walker, v-as spune ca somnul este
                      cel mai bun medicament natural pe care il puteti oferi
                      corpului vostru.
                    </span>
                    <br></br>
                    <span></span>
                    <br></br>
                    <span>
                      Nu v-ati intrebat niciodata de ce dormiti? Mai interesant
                      este ca, probabil niciodata nu v-ati gandit de ce dormim o
                      treime din intreaga noastra viata! Interesting.. huh?🤔
                    </span>
                    <br></br>
                    <span></span>
                    <br></br>
                    <span>Exista doi factori principali</span>
                    <br></br>
                    <span>
                      care stabilesc momentele de somn si momentele de veghe.
                    </span>
                    <br></br>
                    <span>
                      Ambii influenteaza chiar in acest moment mintea si
                      corpul...
                    </span>
                  </span>
                  <div className="blog-home-btn7">
                    <Link href="/blog-despre-somn-de-ce-dormim">
                      <a className="blog-home-link7">
                        <BtnSecondary
                          ctaText="citeste mai mult"
                          rootClassName="btn-secondaryroot-class-name17"
                          className="blog-home-component22"
                        ></BtnSecondary>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer rootClassName="footerroot-class-name5"></Footer>
      </div>
      <style jsx>
        {`
          .blog-home-container10 {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-neutral-black);
          }
          .blog-home-main {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .blog-home-hero {
            background-size: cover;
            background-image: url('/img_9775-1500h.jpg');
            background-repeat: no-repeat;
            background-position: left;
          }
          .blog-home-max-content1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .blog-home-max-content2 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .blog-home-blog-post-card1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 4px 4px 15px 0px rgba(255, 255, 255, 0.61);
            align-items: stretch;
            margin-bottom: var(--dl-space-space-eightunits);
            flex-direction: row;
            justify-content: space-between;
            background-color: var(--dl-color-neutral-white);
          }
          .blog-home-container11 {
            width: 40%;
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-direction: row;
            background-size: cover;
            justify-content: space-between;
            background-image: url('/Blog/despre-noi.jpg');
            background-position: center;
          }
          .blog-home-container12 {
            width: 60%;
            display: flex;
            align-items: flex-start;
            padding-top: 32px;
            padding-left: 32px;
            padding-right: 32px;
            flex-direction: column;
            padding-bottom: 32px;
            justify-content: space-between;
          }
          .blog-home-container13 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .blog-home-text16 {
            color: var(--dl-color-default-content);
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .blog-home-btn1 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .blog-home-link1 {
            display: contents;
          }
          .blog-home-component16 {
            text-decoration: none;
          }
          .blog-home-blog-post-card2 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 4px 4px 15px 0px rgba(255, 255, 255, 0.61);
            align-items: stretch;
            margin-bottom: var(--dl-space-space-eightunits);
            flex-direction: row;
            justify-content: space-between;
            background-color: var(--dl-color-neutral-white);
          }
          .blog-home-container14 {
            width: 40%;
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-direction: row;
            background-size: cover;
            justify-content: space-between;
            background-image: url('/Blog/image00001.jpeg');
            background-position: center;
          }
          .blog-home-container15 {
            width: 60%;
            display: flex;
            align-items: flex-start;
            padding-top: 32px;
            padding-left: 32px;
            padding-right: 32px;
            flex-direction: column;
            padding-bottom: 32px;
            justify-content: space-between;
          }
          .blog-home-container16 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .blog-home-text34 {
            color: var(--dl-color-default-content);
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .blog-home-btn2 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .blog-home-link2 {
            display: contents;
          }
          .blog-home-component17 {
            text-decoration: none;
          }
          .blog-home-blog-post-card3 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 4px 4px 15px 0px rgba(255, 255, 255, 0.61);
            align-items: stretch;
            margin-bottom: var(--dl-space-space-eightunits);
            flex-direction: row;
            justify-content: space-between;
            background-color: var(--dl-color-neutral-white);
          }
          .blog-home-container17 {
            width: 40%;
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-direction: row;
            background-size: cover;
            justify-content: space-between;
            background-image: url('/Blog/vali-blog.jpeg');
          }
          .blog-home-container18 {
            width: 60%;
            display: flex;
            align-items: flex-start;
            padding-top: 32px;
            padding-left: 32px;
            padding-right: 32px;
            flex-direction: column;
            padding-bottom: 32px;
            justify-content: space-between;
          }
          .blog-home-container19 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .blog-home-text48 {
            color: var(--dl-color-default-content);
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .blog-home-btn3 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .blog-home-link3 {
            display: contents;
          }
          .blog-home-component18 {
            text-decoration: none;
          }
          .blog-home-blog-post-card4 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 4px 4px 15px 0px rgba(255, 255, 255, 0.61);
            align-items: stretch;
            margin-bottom: var(--dl-space-space-eightunits);
            flex-direction: row;
            justify-content: space-between;
            background-color: var(--dl-color-neutral-white);
          }
          .blog-home-container20 {
            width: 40%;
            display: flex;
            align-items: stretch;
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            background-image: url('/Blog/valiblog4.png');
          }
          .blog-home-container21 {
            width: 60%;
            display: flex;
            align-items: flex-start;
            padding-top: 32px;
            padding-left: 32px;
            padding-right: 32px;
            flex-direction: column;
            padding-bottom: 32px;
            justify-content: space-between;
          }
          .blog-home-container22 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .blog-home-text56 {
            color: var(--dl-color-default-content);
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .blog-home-btn4 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .blog-home-link4 {
            display: contents;
          }
          .blog-home-component19 {
            text-decoration: none;
          }
          .blog-home-blog-post-card5 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 4px 4px 15px 0px rgba(255, 255, 255, 0.61);
            align-items: stretch;
            margin-bottom: var(--dl-space-space-eightunits);
            flex-direction: row;
            justify-content: space-between;
            background-color: var(--dl-color-neutral-white);
          }
          .blog-home-container23 {
            width: 40%;
            display: flex;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .blog-home-image1 {
            flex: 1;
            width: 100%;
            object-fit: cover;
            flex-direction: column;
          }
          .blog-home-container24 {
            width: 60%;
            display: flex;
            align-items: flex-start;
            padding-top: 32px;
            padding-left: 32px;
            padding-right: 32px;
            flex-direction: column;
            padding-bottom: 32px;
            justify-content: space-between;
          }
          .blog-home-container25 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .blog-home-text64 {
            color: var(--dl-color-default-content);
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .blog-home-btn5 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .blog-home-link5 {
            display: contents;
          }
          .blog-home-component20 {
            text-decoration: none;
          }
          .blog-home-blog-post-card6 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 4px 4px 15px 0px rgba(255, 255, 255, 0.61);
            align-items: stretch;
            margin-bottom: var(--dl-space-space-eightunits);
            flex-direction: row;
            justify-content: space-between;
            background-color: var(--dl-color-neutral-white);
          }
          .blog-home-container26 {
            width: 40%;
            display: flex;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .blog-home-image2 {
            flex: 1;
            width: 100%;
            object-fit: cover;
            flex-direction: column;
          }
          .blog-home-container27 {
            width: 60%;
            display: flex;
            align-items: flex-start;
            padding-top: 32px;
            padding-left: 32px;
            padding-right: 32px;
            flex-direction: column;
            padding-bottom: 32px;
            justify-content: space-between;
          }
          .blog-home-container28 {
            display: flex;
            align-items: flex-start;
            margin-bottom: 32px;
            flex-direction: column;
            justify-content: space-between;
          }
          .blog-home-text71 {
            color: var(--dl-color-default-content);
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .blog-home-btn6 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .blog-home-link6 {
            display: contents;
          }
          .blog-home-component21 {
            text-decoration: none;
          }
          .blog-home-blog-post-card7 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 4px 4px 15px 0px rgba(255, 255, 255, 0.61);
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
            background-color: var(--dl-color-neutral-white);
          }
          .blog-home-container29 {
            width: 40%;
            display: flex;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .blog-home-image3 {
            flex: 1;
            width: 100%;
            object-fit: cover;
            flex-direction: column;
          }
          .blog-home-container30 {
            width: 60%;
            display: flex;
            align-items: flex-start;
            padding-top: 32px;
            padding-left: 32px;
            padding-right: 32px;
            flex-direction: column;
            padding-bottom: 32px;
            justify-content: space-between;
          }
          .blog-home-container31 {
            display: flex;
            align-items: flex-start;
            margin-bottom: 32px;
            flex-direction: column;
            justify-content: space-between;
          }
          .blog-home-text79 {
            color: var(--dl-color-default-content);
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .blog-home-btn7 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .blog-home-link7 {
            display: contents;
          }
          .blog-home-component22 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .blog-home-blog-post-card1 {
              flex-direction: row;
              justify-content: space-between;
            }
            .blog-home-blog-post-card2 {
              flex-direction: row;
              justify-content: space-between;
            }
            .blog-home-blog-post-card3 {
              flex-direction: row;
              justify-content: space-between;
            }
            .blog-home-blog-post-card4 {
              flex-direction: row;
              justify-content: space-between;
            }
            .blog-home-blog-post-card5 {
              flex-direction: row;
              justify-content: space-between;
            }
            .blog-home-blog-post-card6 {
              flex-direction: row;
              justify-content: space-between;
            }
            .blog-home-blog-post-card7 {
              flex-direction: row;
              justify-content: space-between;
            }
          }
          @media (max-width: 767px) {
            .blog-home-hero {
              background-position: center;
            }
            .blog-home-blog-post-card1 {
              flex-direction: column;
            }
            .blog-home-container11 {
              width: 100%;
              min-height: 450px;
            }
            .blog-home-container12 {
              width: 100%;
              padding-top: var(--dl-space-space-tripleunit);
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .blog-home-text10 {
              font-size: 36px;
            }
            .blog-home-blog-post-card2 {
              flex-direction: column;
            }
            .blog-home-container14 {
              width: 100%;
              min-height: 450px;
            }
            .blog-home-container15 {
              width: 100%;
              padding-top: var(--dl-space-space-tripleunit);
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .blog-home-text30 {
              font-size: 36px;
            }
            .blog-home-blog-post-card3 {
              flex-direction: column;
            }
            .blog-home-container17 {
              width: 100%;
              min-height: 450px;
            }
            .blog-home-container18 {
              width: 100%;
              padding-top: var(--dl-space-space-tripleunit);
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .blog-home-text46 {
              font-size: 36px;
            }
            .blog-home-blog-post-card4 {
              flex-direction: column;
            }
            .blog-home-container20 {
              width: 100%;
              min-height: 450px;
            }
            .blog-home-container21 {
              width: 100%;
              padding-top: var(--dl-space-space-tripleunit);
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .blog-home-text54 {
              font-size: 36px;
            }
            .blog-home-blog-post-card5 {
              flex-direction: column;
            }
            .blog-home-container23 {
              width: 100%;
            }
            .blog-home-image1 {
              flex: auto;
              width: 100%;
              min-height: 400px;
            }
            .blog-home-container24 {
              width: 100%;
              padding-top: var(--dl-space-space-tripleunit);
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .blog-home-text62 {
              font-size: 36px;
            }
            .blog-home-blog-post-card6 {
              flex-direction: column;
            }
            .blog-home-container26 {
              width: 100%;
            }
            .blog-home-image2 {
              flex: auto;
              width: 100%;
              min-height: 400px;
            }
            .blog-home-container27 {
              width: 100%;
              padding-top: var(--dl-space-space-tripleunit);
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .blog-home-text69 {
              font-size: 36px;
            }
            .blog-home-blog-post-card7 {
              flex-direction: column;
            }
            .blog-home-container29 {
              width: 100%;
            }
            .blog-home-image3 {
              flex: auto;
              width: 100%;
              min-height: 400px;
            }
            .blog-home-container30 {
              width: 100%;
              padding-top: var(--dl-space-space-tripleunit);
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .blog-home-text77 {
              font-size: 36px;
            }
          }
          @media (max-width: 479px) {
            .blog-home-max-content1 {
              flex: 1;
              justify-content: flex-end;
            }
            .blog-home-max-content2 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .blog-home-container12 {
              padding-top: var(--dl-space-space-doubleunit);
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .blog-home-btn1 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .blog-home-container15 {
              padding-top: var(--dl-space-space-doubleunit);
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .blog-home-btn2 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .blog-home-container18 {
              padding-top: var(--dl-space-space-doubleunit);
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .blog-home-btn3 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .blog-home-container21 {
              padding-top: var(--dl-space-space-doubleunit);
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .blog-home-btn4 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .blog-home-container24 {
              padding-top: var(--dl-space-space-doubleunit);
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .blog-home-btn5 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .blog-home-container27 {
              padding-top: var(--dl-space-space-doubleunit);
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .blog-home-btn6 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .blog-home-container30 {
              padding-top: var(--dl-space-space-doubleunit);
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .blog-home-btn7 {
              padding-left: 0px;
              padding-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default BlogHome
