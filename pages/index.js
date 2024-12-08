import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import LoginModal from '../components/login-modal'
import RegisterModal from '../components/register-modal'
import ContactFormModal from '../components/contact-form-modal'
import Navbar from '../components/navbar'
import MobileMenu from '../components/mobile-menu'
import FadeInLeftHeroSection from '../components/fade-in-left-hero-section'
import BtnPrimary from '../components/btn-primary'
import ServiceCard from '../components/service-card'
import PlayBtn from '../components/play-btn'
import BtnSecondary from '../components/btn-secondary'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Coach Vali Ignat</title>
          <meta property="og:title" content="Coach Vali Ignat" />
          <meta property="og:description" content="Listening is power" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0bb31403-1ba8-407c-9d80-4389cc611d8c/2e667c71-2725-4843-8220-8fe9a0708d9d?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <LoginModal rootClassName="login-modalroot-class-name"></LoginModal>
        <RegisterModal rootClassName="register-modalroot-class-name3"></RegisterModal>
        <ContactFormModal rootClassName="contact-form-modalroot-class-name3"></ContactFormModal>
        <Navbar rootClassName="navbarroot-class-name"></Navbar>
        <MobileMenu rootClassName="mobile-menuroot-class-name"></MobileMenu>
        <main className="home-main">
          <section className="home-hero hero-container">
            <div className="home-max-content1 max-content-container">
              <FadeInLeftHeroSection
                textContent="Listening is power"
                rootClassName="fade-in-left-hero-sectionroot-class-name"
              ></FadeInLeftHeroSection>
            </div>
          </section>
          <section className="home-about section-container">
            <div className="home-max-content2 max-content-container">
              <div className="home-text-container1">
                <div className="home-info">
                  <div className="home-horizontal-line1"></div>
                  <span className="home-info-text">despre mine</span>
                </div>
                <h2 className="home-heading heading-1">
                  <span>obiectivul meu</span>
                </h2>
                <span className="home-text11 Content-Bold content-bold-white">
                  <span>
                    Misiunea mea este sa ajut oamenii din jurul meu sa
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    devina mai sanatosi, sa isi prelungeasca viata, sa
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    inspir prin toate mijloacele de comunicare existente
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    si sa amplific toate cunostintele pe care le detin, la o
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    noua dimensiune, in care adaug empatia ca si condiment
                    principal.
                  </span>
                </span>
                <Link href="/despre">
                  <a className="home-link10">
                    <BtnPrimary
                      ctaText="afla mai mult"
                      rootClassName="btn-primaryroot-class-name2"
                      className="home-component16"
                    ></BtnPrimary>
                  </a>
                </Link>
              </div>
              <img
                alt="Obiectivul lui Vali Ignat"
                src="/img_9913-1500h.jpg"
                className="home-image10"
              />
            </div>
          </section>
          <section className="home-services section-container">
            <div className="home-max-content-picture max-content-container">
              <h1 className="home-text17 heading-1">
                evaluare. conexiune. experienta.
              </h1>
              <div className="home-container2"></div>
            </div>
            <div className="home-max-content3 max-content-container">
              <div className="section-heading-container">
                <div className="home-title-container1">
                  <div className="home-container3">
                    <div className="home-horizontal-line2"></div>
                    <span className="home-text18">Shop</span>
                  </div>
                  <h1 className="heading-1">Servicii</h1>
                </div>
                <Link href="/servicii">
                  <a>
                    <BtnPrimary
                      ctaText="Afla mai mult"
                      rootClassName="btn-primaryroot-class-name26"
                      className="home-component17"
                    ></BtnPrimary>
                  </a>
                </Link>
              </div>
              <div className="home-cards-container1">
                <ServiceCard
                  cardText="In timpul antrenamentului din sala, iti ofer o experienta in care se vor imbina: tiparele de miscare executate corect, focusul pe obiectivele tale si toate cunostintele mele din domeniul sanatatii publice studiate in ultimii 7 ani."
                  imageSrc="/img_4081-1500w.jpg"
                  cardTitle="personal training"
                  rootClassName="service-cardroot-class-name"
                ></ServiceCard>
                <ServiceCard
                  cardText="In urma digitalizarii, am dezvoltat un sistem prin care pot servi persoane din orice colt al lumii, fiind nevoie doar de o conexiune la internet. Antrenamentele se desfasoara doar 1 vs 1, prin videocall. Poti beneficia de toate studiile mele, indiferent daca nu ne vom intalni niciodata."
                  imageSrc="/121300894_398877651278033_1137013070053583593_n-1500w.jpg"
                  cardTitle="online coaching"
                ></ServiceCard>
                <ServiceCard
                  cardText="Pe parcursul evaluarii vei afla ce „masinarie” inteligenta este corpul uman. O sa discutam despre: mobilitate, flexibilitate, stabilitate, forta, rezistenta, respirat, somn, alimentatie, tipare de miscare. Daca vrei sa poti avea relatii sanatoase cu cei din jurul tau si sa fii puternic, eu cred ca, in primul rand, trebuie sa intelegi de ce este capabil corpul tau."
                  imageSrc="/img_2868-1500w.jpg"
                  cardTitle="evaluare"
                ></ServiceCard>
              </div>
            </div>
          </section>
          <section className="home-stories section-container">
            <div className="home-max-content4 max-content-container">
              <div className="section-heading-container">
                <div className="home-title-container2">
                  <div className="home-container4">
                    <div className="home-horizontal-line3"></div>
                    <span className="home-text20">feedback</span>
                  </div>
                  <h1 className="heading-1">Povesti de succes</h1>
                </div>
                <Link href="/povesti-de-succes">
                  <a>
                    <BtnPrimary
                      ctaText="Afla mai mult"
                      rootClassName="btn-primaryroot-class-name27"
                      className="home-component21"
                    ></BtnPrimary>
                  </a>
                </Link>
              </div>
              <div data-role="carrousel" className="home-carrousel">
                <div className="home-slider">
                  <div className="home-slides slides-container">
                    <img
                      alt="slide-1"
                      src="/catalina%20b_a-1500h.jpg"
                      data-slide-index="0"
                      className="carrousel-slide slide-active animation-fade-in"
                    />
                    <img
                      alt="slide-1"
                      src="/simina%20b_a%20-%20spate-600w.jpg"
                      data-slide-index="1"
                      className="home-image12 carrousel-slide animation-fade-in"
                    />
                    <img
                      alt="slide-1"
                      src="/lorena%20b_a-600w.jpg"
                      data-slide-index="2"
                      className="home-image13 carrousel-slide animation-fade-in"
                    />
                  </div>
                  <div className="carrousel-controls-container">
                    <div data-slide-index="0" className="carrousel-control-btn">
                      <div className="home-bullet-content1 tl-bullet-active tl-bullet">
                        <div className="tl-inner-active inner-white"></div>
                      </div>
                      <div className="tl-bullet-inner"></div>
                    </div>
                    <div className="home-line1 tl-line"></div>
                    <div data-slide-index="1" className="carrousel-control-btn">
                      <div className="home-bullet-content2 tl-bullet">
                        <div className="inner-white"></div>
                      </div>
                      <div className="tl-bullet-inner"></div>
                    </div>
                    <div className="home-line2 tl-line"></div>
                    <div data-slide-index="2" className="carrousel-control-btn">
                      <div className="home-bullet-content3 tl-bullet">
                        <div className="inner-white"></div>
                      </div>
                      <div className="tl-bullet-inner"></div>
                    </div>
                  </div>
                </div>
                <div className="home-text-container2">
                  <span
                    data-slide-index="0"
                    className="carrousel-text slide-active animation-fade-in Content-Bold content-bold-white"
                  >
                    <span className="home-text23">- Catalina -</span>
                    <br></br>
                    <span></span>
                    <span>
                      In 2020, dupa ce am tot auzit de la prieteni/prietene ca
                      au apelat la un antrenor personal mi-am zis sa incerc si
                      eu(pentru prima oara), si a urmat: &quot;Vali, ai un loc
                      si pentru mine la Personal Training&quot;. Si m-a primit!
                      Decizia asta a fost motivata de cat de mult mi-a placut la
                      clasele lui si de ce om fain este.
                    </span>
                    <br></br>
                    <span></span>
                    <br></br>
                    <span>
                      De-atunci orele de PT au fost din ce in ce mai faine si
                      pentru ca incepeam sa progresez, dar si pentru ca incepeam
                      sa descopar tot mai multe lucruri bune despre Vali.
                    </span>
                    <span></span>
                  </span>
                  <span
                    data-slide-index="1"
                    className="carrousel-text animation-fade-in Content-Bold content-bold-white"
                  >
                    <span className="home-text32"> - Simina -</span>
                    <br></br>
                    <span>
                      Valy este coach-ul meu de 4 ani. Din “cauza” lui am
                      strabatut tot Clujul pentru a merge la sala, dupa o viata
                      de sedentarism.
                    </span>
                    <span></span>
                    <br></br>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      Cel mai mult apreciez la el ca a crescut constant in toti
                      acesti ani: ca om si ca antrenor. Imi place mult ca e un
                      om cu o inteligenta emotionala dezvoltata si ca e amuzant.
                      Asta a determinat sa devenim si prieteni.
                    </span>
                    <br></br>
                    <span>
                      A avut abilitatea si rabdarea de a-mi explica constant de
                      ce exercitiile se executa corect intr-un anume mod.
                      Explicatiile lui sunt super logice.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span></span>
                  </span>
                  <span
                    data-slide-index="2"
                    className="carrousel-text animation-fade-in Content-Bold content-bold-white"
                  >
                    <span className="home-text42">- Lorena -</span>
                    <br></br>
                    <span></span>
                    <span>
                      Cum l-as descrie pe Coach in 3 cuvinte: profesionalist,
                      ambitios si riguros ( acestea fiind atat calitatile cat si
                      defectele lui in functie de cat chef am de antrenament in
                      acea zi:))) totodata un om cald si prietenos.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span></span>
                    <br></br>
                    <span>
                      Antrenamentele sunt variate, astfel incat nu m-am
                      plictisit de ele de 4 ani ( mare lucru) si faptul ca
                      cineva “ma trage de urechi” constant sa nu abandonez
                      sportul este foarte de ajutor.
                    </span>
                  </span>
                  <div
                    data-story="catalina"
                    data-slide-index="0"
                    className="carrousel-read-more-btn slide-active animation-fade-in"
                  >
                    <Link href="/povesti-de-succes">
                      <a className="home-link13 Button-Text animated-btn">
                        citeste mai mult
                      </a>
                    </Link>
                  </div>
                  <div
                    data-story="simina"
                    data-slide-index="0"
                    className="carrousel-read-more-btn animation-fade-in"
                  >
                    <Link href="/povesti-de-succes">
                      <a className="home-link14 Button-Text animated-btn">
                        citeste mai mult
                      </a>
                    </Link>
                  </div>
                  <div
                    data-story="lorena"
                    data-slide-index="2"
                    className="carrousel-read-more-btn animation-fade-in"
                  >
                    <Link href="/povesti-de-succes">
                      <a className="home-link15 Button-Text animated-btn">
                        citeste mai mult
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="home-shop section-container">
            <div className="home-max-content5 max-content-container">
              <div className="section-heading-container">
                <div className="home-title-container3">
                  <div className="home-container8">
                    <div className="home-horizontal-line4"></div>
                    <span className="home-text50">HIIT</span>
                  </div>
                  <h1 className="heading-1">Cum pot sa te ajut</h1>
                </div>
                <Link href="/hiit">
                  <a>
                    <BtnPrimary
                      ctaText="Afla mai mult"
                      rootClassName="btn-primaryroot-class-name28"
                      className="home-component22"
                    ></BtnPrimary>
                  </a>
                </Link>
              </div>
              <div className="home-video-section section-container">
                <div className="home-video1">
                  <video
                    src="https://mypthelperbucket.s3.us-east-2.amazonaws.com/HIIT+promo+2.mp4"
                    muted="true"
                    poster="/img_9766-1500w.jpg"
                    preload="auto"
                    controls="true"
                    playsinline="true"
                    data-video-type="promoVideo"
                    className="home-video2"
                  ></video>
                  <PlayBtn
                    rootClassName="play-btnroot-class-name2"
                    className="home-component23"
                  ></PlayBtn>
                </div>
              </div>
            </div>
          </section>
          <section className="section-container">
            <div className="home-max-content6 max-content-container">
              <div className="section-heading-container">
                <div className="home-title-container4">
                  <div className="home-container9">
                    <div className="home-horizontal-line5"></div>
                    <span className="home-text52">Blog</span>
                  </div>
                  <h1 className="heading-1">Ce mai scriu</h1>
                </div>
                <Link href="/blog-home">
                  <a>
                    <BtnPrimary
                      ctaText="Afla mai mult"
                      rootClassName="btn-primaryroot-class-name29"
                      className="home-component24"
                    ></BtnPrimary>
                  </a>
                </Link>
              </div>
              <div className="home-cards-container2">
                <div className="home-blog-card1">
                  <div className="blog-card-fullbg-container">
                    <img
                      alt="image"
                      src="/Blog/despre-noi.jpg"
                      className="home-image14"
                    />
                    <div className="blog-card-caption">
                      <h3 className="home-text54">Despre viata...</h3>
                      <div className="home-articol-link1 blog-card-bottom-container">
                        <Link href="/blog-despre-viata-imnul-adaptat">
                          <a>
                            <BtnSecondary
                              ctaText="Citeste articol"
                              rootClassName="btn-secondaryroot-class-name24"
                              className="home-component25"
                            ></BtnSecondary>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-blog-card2">
                  <div className="blog-card-fullbg-container">
                    <img
                      alt="image"
                      src="/Blog/image00001.jpeg"
                      className="home-image15"
                    />
                    <div className="blog-card-caption">
                      <h3 className="home-text55">Despre motivatie...</h3>
                      <div className="home-articol-link2 blog-card-bottom-container">
                        <Link href="/blog-despre-motivatie">
                          <a>
                            <BtnSecondary
                              ctaText="Citeste articol"
                              rootClassName="btn-secondaryroot-class-name24"
                              className="home-component26"
                            ></BtnSecondary>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-blog-card3">
                  <div className="blog-card-fullbg-container">
                    <img
                      alt="image"
                      src="/Blog/vali-blog.jpeg"
                      className="home-image16"
                    />
                    <div className="blog-card-caption">
                      <h3 className="home-text56">Despre viata...</h3>
                      <div className="home-articol-link3 blog-card-bottom-container">
                        <Link href="/blog-despre-viata">
                          <a>
                            <BtnSecondary
                              ctaText="Citeste articol"
                              rootClassName="btn-secondaryroot-class-name24"
                              className="home-component27"
                            ></BtnSecondary>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-blog-card4">
                  <div className="blog-card-fullbg-container">
                    <img
                      alt="image"
                      src="/Blog/valiblog4.png"
                      className="home-image17"
                    />
                    <div className="blog-card-caption">
                      <h3 className="home-text57">Despre alimentatie...</h3>
                      <div className="home-articol-link4 blog-card-bottom-container">
                        <Link href="/blog-despre-alimentatie-lucruri-simple">
                          <a>
                            <BtnSecondary
                              ctaText="Citeste articol"
                              rootClassName="btn-secondaryroot-class-name19"
                              className="home-component28"
                            ></BtnSecondary>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-blog-card5">
                  <div className="blog-card-fullbg-container">
                    <img
                      alt="image"
                      src="/despre-somn3-1500w.png"
                      className="home-image18"
                    />
                    <div className="blog-card-caption">
                      <h3 className="home-text58">Despre somn</h3>
                      <div className="home-articol-link5 blog-card-bottom-container">
                        <Link href="/blog-despre-somn-somnul-de-pranz">
                          <a>
                            <BtnSecondary
                              ctaText="Citeste articol"
                              rootClassName="btn-secondaryroot-class-name14"
                              className="home-component29"
                            ></BtnSecondary>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-blog-card6">
                  <div className="blog-card-fullbg-container">
                    <img
                      alt="image"
                      src="/despre-somn2-1500w.png"
                      className="home-image19"
                    />
                    <div className="blog-card-caption">
                      <h3 className="home-text59">Despre somn</h3>
                      <div className="home-articol-link6 blog-card-bottom-container">
                        <Link href="/blog-despre-somn-crezi-ca-dormi-suficient">
                          <a>
                            <BtnSecondary
                              ctaText="Citeste articol"
                              rootClassName="btn-secondaryroot-class-name18"
                              className="home-component30"
                            ></BtnSecondary>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-blog-card7">
                  <div className="blog-card-fullbg-container">
                    <img
                      alt="image"
                      src="/image%205%20%5B1%5D-1500w.png"
                      className="home-image20"
                    />
                    <div className="blog-card-caption">
                      <h3 className="home-text60">Despre somn</h3>
                      <div className="home-articol-link7 blog-card-bottom-container">
                        <Link href="/blog-despre-somn-de-ce-dormim">
                          <a>
                            <BtnSecondary
                              ctaText="Citeste articol"
                              rootClassName="btn-secondaryroot-class-name15"
                              className="home-component31"
                            ></BtnSecondary>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer rootClassName="footerroot-class-name"></Footer>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-neutral-black);
          }
          .home-main {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-hero {
            background-size: cover;
            justify-content: flex-end;
            background-image: url('/img_9801-1500h.jpg');
          }
          .home-max-content1 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-about {
            min-height: 100%;
          }
          .home-max-content2 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home-text-container1 {
            width: 45%;
            display: flex;
            margin-top: var(--dl-space-space-eightunits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
          }
          .home-info {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-horizontal-line1 {
            flex: 0 0 auto;
            width: 50px;
            height: 2px;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            background-color: var(--dl-color-neutral-white);
          }
          .home-info-text {
            color: var(--dl-color-neutral-white);
            font-size: 24px;
            font-family: Gotham Bold;
            font-weight: 300;
            line-height: 1.5;
            text-transform: uppercase;
            text-decoration: none;
          }
          .home-heading {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-text11 {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-link10 {
            display: contents;
          }
          .home-component16 {
            text-decoration: none;
          }
          .home-image10 {
            width: var(--dl-size-size-half);
            align-self: stretch;
            object-fit: cover;
          }
          .home-services {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-max-content-picture {
            width: 100%;
            display: flex;
            min-height: 600px;
            flex-direction: column;
          }
          .home-text17 {
            font-size: 45px;
            text-align: center;
          }
          .home-container2 {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            background-size: cover;
            background-image: url('/img_9665.jpg');
            background-position: top left;
          }
          .home-max-content3 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-title-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container3 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-horizontal-line2 {
            flex: 0 0 auto;
            width: 50px;
            height: 2px;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            background-color: var(--dl-color-neutral-white);
          }
          .home-text18 {
            color: var(--dl-color-neutral-white);
            font-size: 24px;
            font-family: Gotham Bold;
            font-weight: 300;
            line-height: 1.5;
            text-transform: uppercase;
            text-decoration: none;
          }
          .home-component17 {
            text-decoration: none;
          }
          .home-cards-container1 {
            gap: 32px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-stories {
            min-height: 50vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-max-content4 {
            display: flex;
            align-items: stretch;
            flex-direction: column;
          }
          .home-title-container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container4 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-horizontal-line3 {
            flex: 0 0 auto;
            width: 50px;
            height: 2px;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            background-color: var(--dl-color-neutral-white);
          }
          .home-text20 {
            color: var(--dl-color-neutral-white);
            font-size: 24px;
            font-family: Gotham Bold;
            font-weight: 300;
            line-height: 1.5;
            text-transform: uppercase;
            text-decoration: none;
          }
          .home-component21 {
            text-decoration: none;
          }
          .home-carrousel {
            display: flex;
          }
          .home-slider {
            width: var(--dl-size-size-half);
            display: flex;
            align-self: center;
            align-items: center;
            margin-right: var(--dl-space-space-eightunits);
            flex-direction: column;
          }
          .home-slides {
            align-items: flex-end;
          }
          .home-image12 {
            flex: 1;
            width: 100%;
            height: 100%;
            transform: scale(1);
            object-fit: contain;
            transition: transform 0.5s;
            flex-shrink: 0;
            object-position: bottom;
            transform-origin: center center;
            scroll-snap-align: start;
          }
          .home-image13 {
            flex: 1;
            width: 100%;
            height: 100%;
            transform: scale(1);
            object-fit: contain;
            transition: transform 0.5s;
            flex-shrink: 0;
            object-position: bottom;
            transform-origin: center center;
            scroll-snap-align: start;
          }
          .home-bullet-content1 {
            z-index: 1;
          }
          .home-line1 {
            border-bottom-width: 0px;
          }
          .home-bullet-content2 {
            z-index: 1;
          }
          .home-line2 {
            border-bottom-width: 0px;
          }
          .home-bullet-content3 {
            z-index: 1;
          }
          .home-text-container2 {
            flex: 1;
            display: flex;
            align-self: center;
            align-items: flex-start;
            padding-top: var(--dl-space-space-eightunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-eightunits);
          }
          .home-text23 {
            color: var(--dl-color-default-primary);
            font-style: normal;
            font-weight: 700;
          }
          .home-text32 {
            color: var(--dl-color-default-primary);
            font-style: normal;
            font-weight: 700;
          }
          .home-text42 {
            color: var(--dl-color-default-primary);
            font-style: normal;
            font-weight: 700;
          }
          .home-link13 {
            text-decoration: none;
          }
          .home-link14 {
            text-decoration: none;
          }
          .home-link15 {
            text-decoration: none;
          }
          .home-shop {
            display: none;
          }
          .home-max-content5 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title-container3 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container8 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-horizontal-line4 {
            flex: 0 0 auto;
            width: 50px;
            height: 2px;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            background-color: var(--dl-color-neutral-white);
          }
          .home-text50 {
            color: var(--dl-color-neutral-white);
            font-size: 24px;
            font-family: Gotham Bold;
            font-weight: 300;
            line-height: 1.5;
            text-transform: uppercase;
            text-decoration: none;
          }
          .home-component22 {
            text-decoration: none;
          }
          .home-video-section {
            min-height: auto;
            flex-direction: column;
            justify-content: center;
          }
          .home-video1 {
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-video2 {
            width: 100%;
            align-self: center;
            max-height: 700px;
          }
          .home-component23 {
            left: calc(50% - 45px);
            bottom: calc(50% - 45px);
            position: absolute;
          }
          .home-max-content6 {
            display: flex;
            align-items: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .home-title-container4 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container9 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-horizontal-line5 {
            flex: 0 0 auto;
            width: 50px;
            height: 2px;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            background-color: var(--dl-color-neutral-white);
          }
          .home-text52 {
            color: var(--dl-color-neutral-white);
            font-size: 24px;
            font-family: Gotham Bold;
            font-weight: 300;
            line-height: 1.5;
            text-transform: uppercase;
            text-decoration: none;
          }
          .home-component24 {
            text-decoration: none;
          }
          .home-cards-container2 {
            width: 100%;
            display: grid;
            grid-gap: 64px;
            grid-template-columns: 1fr 1fr;
          }
          .home-blog-card1 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-neutral-white);
          }
          .home-image14 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }
          .home-text54 {
            color: var(--dl-color-neutral-white);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-articol-link1 {
            transform: translateY();
          }
          .home-component25 {
            text-decoration: none;
          }
          .home-blog-card2 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-neutral-white);
          }
          .home-image15 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }
          .home-text55 {
            color: var(--dl-color-neutral-white);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-articol-link2 {
            transform: translateY();
          }
          .home-component26 {
            text-decoration: none;
          }
          .home-blog-card3 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-neutral-white);
          }
          .home-image16 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }
          .home-text56 {
            color: var(--dl-color-neutral-white);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-articol-link3 {
            transform: translateY();
          }
          .home-component27 {
            text-decoration: none;
          }
          .home-blog-card4 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-neutral-white);
          }
          .home-image17 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }
          .home-text57 {
            color: var(--dl-color-neutral-white);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-articol-link4 {
            transform: translateY();
          }
          .home-component28 {
            text-decoration: none;
          }
          .home-blog-card5 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-neutral-white);
          }
          .home-image18 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-text58 {
            color: var(--dl-color-neutral-white);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-articol-link5 {
            transform: translateY();
          }
          .home-component29 {
            text-decoration: none;
          }
          .home-blog-card6 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-neutral-white);
          }
          .home-image19 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-text59 {
            color: var(--dl-color-neutral-white);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-articol-link6 {
            transform: translateY();
          }
          .home-component30 {
            text-decoration: none;
          }
          .home-blog-card7 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-neutral-white);
          }
          .home-image20 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-text60 {
            color: var(--dl-color-neutral-white);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-articol-link7 {
            transform: translateY();
          }
          .home-component31 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .home-text-container1 {
              width: 100%;
            }
            .home-cards-container1 {
              justify-content: flex-start;
            }
            .home-image14 {
              max-height: 400px;
            }
            .home-image15 {
              max-height: 400px;
            }
            .home-image16 {
              max-height: 400px;
            }
            .home-image17 {
              max-height: 400px;
            }
            .home-image18 {
              max-height: 600px;
            }
            .home-image19 {
              max-height: 600px;
            }
            .home-image20 {
              max-height: 400px;
            }
          }
          @media (max-width: 767px) {
            .home-max-content2 {
              flex-direction: column-reverse;
            }
            .home-text-container1 {
              margin-top: var(--dl-space-space-fourunits);
            }
            .home-info {
              margin-bottom: 0px;
            }
            .home-image10 {
              width: 100%;
            }
            .home-max-content3 {
              flex-direction: column;
            }
            .home-title-container1 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-cards-container1 {
              justify-content: center;
            }
            .home-title-container2 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-carrousel {
              flex-direction: column;
            }
            .home-slider {
              width: 100%;
              margin-right: 0px;
              margin-bottom: 0px;
            }
            .home-text-container2 {
              align-items: flex-start;
              padding-top: var(--dl-space-space-tripleunit);
              padding-bottom: 0px;
            }
            .home-title-container3 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-title-container4 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-cards-container2 {
              grid-template-columns: 1fr;
            }
            .home-blog-card1 {
              width: 100%;
            }
            .home-blog-card2 {
              width: 100%;
            }
            .home-blog-card3 {
              width: 100%;
            }
            .home-blog-card4 {
              width: 100%;
            }
            .home-blog-card5 {
              width: 100%;
            }
            .home-blog-card6 {
              width: 100%;
            }
            .home-blog-card7 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .home-text-container1 {
              margin-bottom: 0px;
            }
            .home-heading {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-max-content-picture {
              min-height: 400px;
            }
            .home-slider {
              margin-bottom: 0px;
            }
            .home-text-container2 {
              padding-top: var(--dl-space-space-doubleunit);
            }
            .home-blog-card1 {
              height: 350px;
            }
            .home-blog-card2 {
              height: 350px;
            }
            .home-blog-card3 {
              height: 350px;
            }
            .home-blog-card4 {
              height: 350px;
            }
            .home-blog-card5 {
              height: 350px;
            }
            .home-blog-card6 {
              height: 350px;
            }
            .home-blog-card7 {
              height: 350px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
