import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import LoginModal from '../components/login-modal'
import RegisterModal from '../components/register-modal'
import ContactFormModal from '../components/contact-form-modal'
import Navbar from '../components/navbar'
import MobileMenu from '../components/mobile-menu'
import BtnPrimary from '../components/btn-primary'
import Footer from '../components/footer'

const Despre = (props) => {
  return (
    <>
      <div className="despre-container10">
        <Head>
          <title>Despre - Coach Vali Ignat</title>
          <meta property="og:title" content="Despre  - Coach Vali Ignat" />
          <meta property="og:description" content="Listening is power" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0bb31403-1ba8-407c-9d80-4389cc611d8c/2e667c71-2725-4843-8220-8fe9a0708d9d?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <LoginModal rootClassName="login-modalroot-class-name4"></LoginModal>
        <RegisterModal rootClassName="register-modalroot-class-name2"></RegisterModal>
        <ContactFormModal rootClassName="contact-form-modalroot-class-name"></ContactFormModal>
        <Navbar rootClassName="navbarroot-class-name1"></Navbar>
        <MobileMenu rootClassName="mobile-menuroot-class-name1"></MobileMenu>
        <main className="despre-main">
          <section className="despre-hero hero-container">
            <div className="despre-max-content1 max-content-container">
              <div className="despre-fade-inleft animation-fade-in-left">
                <div className="despre-horizontal-line1"></div>
                <div className="despre-container11">
                  <div className="despre-container12">
                    <span className="despre-text10 heading-1">coach</span>
                    <span className="despre-text11 heading-1">vali</span>
                  </div>
                  <span className="despre-text12 heading-1">ignat</span>
                  <div
                    data-action="showContactFormModal"
                    className="despre-container13"
                  >
                    <BtnPrimary
                      ctaText="Contacteaza-ma"
                      rootClassName="btn-primaryroot-class-name12"
                    ></BtnPrimary>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="despre-about section-container">
            <div className="despre-max-content2 max-content-container">
              <div className="despre-image-container1">
                <div className="despre-container14">
                  <img
                    alt="Vali Ignat - medalie "
                    src="/img_2970-1500h.jpg"
                    className="despre-image10"
                  />
                  <img
                    alt="Lisa cu Vali Ignat"
                    src="/image00013-1500h.jpeg"
                    className="despre-image11"
                  />
                </div>
                <h1 className="despre-heading1 H2">
                  <span>meticulos</span>
                </h1>
              </div>
              <div className="despre-text-container1">
                <div className="despre-container15">
                  <div className="despre-horizontal-line2"></div>
                  <span className="despre-text14 heading-1">
                    <span>
                      despre
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>Vali</span>
                  </span>
                </div>
                <span className="despre-text18 Content-Bold content-bold-white">
                  <span className="despre-text19">
                    La 32 de ani, mai puternic ca la 20
                  </span>
                  <span>
                    {' '}
                    - acesta sunt eu - insa sunt la fel de progresiv, cu scopul
                    prevenirii imbatranirii biologice. Asa vreau sa ma simt, si
                    stiu ca sunt pe drumul cel bun - de a mentine un echilibru
                    sanatos al vietii.
                  </span>
                </span>
                <h1 className="despre-heading2">Vali Ignat</h1>
              </div>
            </div>
          </section>
          <div className="despre-info-cards">
            <div className="despre-first section-container">
              <div className="despre-max-content3 max-content-container">
                <div className="despre-container16">
                  <span className="Content-Bold content-bold-white">
                    <span>
                      Cred ca am stiut asta de cand am fost copil sau poate ca
                      asa
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="despre-text23">am simtit</span>
                    <span>
                      . De ce zic asta? Pentru ca de cand am amintiri cu mine,
                      imi amintesc plimbandu-ma pe dealuri, alergand pe terenuri
                      de fotbal, catarandu-ma in copaci, sarind peste garajele
                      de masini si inotand in raurile si paraiele din zona
                      Subcarpatilor de Curbura ai Romaniei. Toate amintirile pe
                      care le am din frageda tinerete se petrec in miscare,
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="despre-text25">miscare continua</span>
                    <span>
                      , inconstienta, pe care o “executam” cu placere, fara sa
                      realizez cat de importanta va fi mai tarziu.
                    </span>
                  </span>
                  <span className="despre-text27 H2">consecvent</span>
                  <span className="despre-text28 H2">rabdator</span>
                </div>
                <img
                  alt="Listening is power"
                  src="/img_9765-1500w.jpg"
                  className="despre-image12"
                />
              </div>
            </div>
            <div className="despre-second section-container">
              <div className="despre-max-content4 max-content-container">
                <img
                  alt="timp"
                  src="/ceas-1500h.png"
                  className="despre-image13"
                />
                <div className="despre-container17">
                  <span className="despre-text29 Content-Bold content-bold-white">
                    <span>
                      Din timpul liceului imi aduc aminte ca aveam cel putin 3
                      ore pe saptamana de educatie fizica si sport. Pe langa
                      scoala - unde se respecta cu sfintenie programa scolara
                      (cu 3 ore de sport/saptamana) am cochetat cu tot felul de
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="despre-text31">sporturi</span>
                    <span>
                      {' '}
                      - la care aveam voie - deoarece mai existau si activitati
                      interzise de mama care avea grija de fiul ei mai mic, si
                      anume tot ce insemna contact fizic voit si se lasa cu
                      spart/rupt/umflat nasul si fata. Si daca nu ma lasa la
                      karate? Oricum improvizam miscarile de arte martiale cu
                      vecinii in spatele blocului, uneori la finalul meciurilor
                      de fotbal sau miuta... erau orgolii mari
                    </span>
                  </span>
                  <span className="despre-text33 H2">persuasiv</span>
                  <span className="despre-text34 H2">Implicat</span>
                </div>
              </div>
            </div>
            <div className="section-container">
              <div className="despre-max-content5 max-content-container">
                <div className="despre-container18">
                  <span className="despre-text35 Content-Bold content-bold-white">
                    <span>
                      Revenind la sporturile practicate, pot sa enumar printre
                      acestea: fotbal, baschet, handbal si
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="despre-text37">volei</span>
                    <span>
                      , cel din urma ramanand sportul meu de suflet. Am jucat
                      volei 5 ani si am obtinut
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="despre-text39">medalia de bronz</span>
                    <span>
                      {' '}
                      la campionatele nationale de juniori, de la Baia Mare
                      2005, pe postul de libero.
                    </span>
                  </span>
                  <span className="despre-text41 H2">empatic</span>
                  <span className="despre-text42 H2">loial</span>
                </div>
                <img
                  alt="Deadlift Vali Ignat"
                  src="/img_9818-1500w.jpg"
                  className="despre-image14"
                />
              </div>
            </div>
            <div className="section-container">
              <div className="despre-max-content6 max-content-container">
                <img
                  alt="Trasnformare Vali Ignat"
                  src="/colaj-1500w.jpeg"
                  className="despre-image15"
                />
                <div className="despre-text-container2">
                  <span className="despre-text43 Content-Bold content-bold-white">
                    <span>
                      Intr-un final, a venit si momentul sa plec de acasa, la
                      varsta de 19 ani, spre orasul ce avea sa ma gazduiasca -
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="despre-text45">Cluj Napoca</span>
                    <span>.</span>
                  </span>
                  <span className="despre-text47 Content-Bold content-bold-white">
                    <span>
                      {' '}
                      In perioada facultatii am facut o pauza de la sport, timp
                      de 3 ani, fapta care a dus la o cadere intr-o panta
                      abrupta spre un stil de viata sedentar si cu un nivel
                      scazut de energie.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span className="Content-Bold content-bold-white">
                    <span>
                      Pana la urma, orice
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="despre-text51">
                      evolutie
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      vine cu putina suferinta, iar eu sufeream pentru ca nu imi
                      mai placeam. Nu mai voiam sa ma vad gras în oglinda, nu
                      imi placea sa ma aud gafaind cand urcam cele patru etaje
                      ale blocului sau sa ma incurce burta când ma incheiam la
                      sireturi.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="despre-text53">Eu</span>
                    <span>
                      , care proveneam dintr-o viata sportiva neintrerupta.
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="despre-sport-life section-container">
            <div className="despre-heading-container">
              <div className="despre-overlay"></div>
              <h1 className="despre-text55 heading-1">
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="despre-text57">lifeStyle</span>
                <span> activ</span>
              </h1>
            </div>
            <div className="despre-max-content7 max-content-container">
              <div className="despre-container19">
                <img
                  alt="Inele Vali Ignat"
                  src="/img_9585-1500w.jpg"
                  className="despre-image16"
                />
                <div className="despre-text-container3">
                  <span className="despre-text59 Content-Bold content-bold-white">
                    <span>
                      Cu un obiectiv bine stabilit am pasit intr-o sala
                      neconventionala in 2015, unde mi-am reinceput activitatea
                      de sportiv, sau cum imi place mie sa zic –
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="despre-text61">
                      atlet
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      - si mai tarziu
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="despre-text63">antrenor</span>
                    <span>.</span>
                  </span>
                  <span className="Content-Bold content-bold-white">
                    <span>
                      A fost greu cand am realizat cat de mult regresasem in
                      trei ani de zile, insa memoria musculara si-a facut treaba
                      si asa am revenit la forma pe care mi-am dorit-o, dar tot
                      timpul cu
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="despre-text67">obiectivul notat</span>
                    <span>
                      {' '}
                      cu litere mari pe hartie si în minte, ajungand din ce in
                      ce mai aproape de el.
                    </span>
                  </span>
                </div>
              </div>
              <div className="despre-container20">
                <span className="Content-Bold content-bold-white">
                  <span>
                    Odata ce obiectivul a fost atins am fixat altul, care la
                    randul sau a fost indeplinit cu
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="despre-text71">succes</span>
                  <span>
                    . In acest mod anii au trecut, adaugand si mai multa
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="despre-text73">
                    pasiune
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    pentru ceea ce fac si
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="despre-text75">disciplina</span>
                  <span>.</span>
                </span>
              </div>
            </div>
          </div>
          <div className="section-container">
            <div className="despre-max-content8 max-content-container">
              <div className="despre-left">
                <div className="despre-container21">
                  <img
                    alt="La sala cu Vali Ignat"
                    src="/img_3703-edit-1500h.jpg"
                    className="despre-image17"
                  />
                  <span className="despre-text77 H2">fericit</span>
                  <span className="despre-text78 H2">sincer</span>
                </div>
                <img
                  alt="Spartan - Vali Ignat"
                  src="/img_3005-1500h.jpg"
                  className="despre-image18"
                />
                <span className="Content-Bold content-bold-white">
                  <span>
                    Acum sunt
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="despre-text81">antrenor</span>
                  <span>, iar atletii mei imi spun “</span>
                  <span className="despre-text83">coach</span>
                  <span>
                    ”. Sunt cel mai fericit pentru ca merg la un job unde devin
                    pe zi ce trece mai puternic, mai intelept, si unde am reusit
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="despre-text85">sa ma iubesc</span>
                  <span> pentru tot ceea ce fac.</span>
                </span>
              </div>
              <div className="despre-right">
                <div className="despre-container22">
                  <img
                    alt="Yoga cu Vali Ignat"
                    src="/img_4100-1500w.jpg"
                    className="despre-image19"
                  />
                  <h1 className="despre-text87 H2">Energic</h1>
                </div>
                <img
                  alt="La mare cu Vali Ignat"
                  src="/img_2868-1500h.jpg"
                  className="despre-image20"
                />
                <span className="despre-text88 H2">creativ</span>
                <div className="despre-container23">
                  <img
                    alt="Fandari cu Vali Ignat"
                    src="/img_9937-1500w.jpg"
                    className="despre-image21"
                  />
                  <h1 className="despre-text89 H2">determinat</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="despre-container24 section-container">
            <div className="despre-max-content9 max-content-container">
              <div className="despre-text-container4">
                <span className="despre-text90 Content-Bold content-bold-white">
                  <span>
                    Realizez că job-ul reprezinta
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="despre-text92">modul meu de a trai</span>
                  <span>
                    {' '}
                    si de a-mi rescrie povestea spre obiectivele importante ale
                    vietii. Apreciez fiecare moment care mi se intampla si ma
                    bucur de fiecare clipa incercand sa acumulez cate ceva nou
                    si util din mediul “cu care ma inconjor”
                  </span>
                </span>
                <Link href="/povesti-de-succes">
                  <a className="despre-link">
                    <BtnPrimary
                      ctaText="Afla mai mult"
                      rootClassName="btn-primaryroot-class-name10"
                      className="despre-component7"
                    ></BtnPrimary>
                  </a>
                </Link>
              </div>
              <div className="despre-image-container2">
                <img
                  alt="La mare cu Vali Ignat"
                  src="/img_1871-1500h.jpg"
                  className="despre-image22"
                />
                <img
                  alt="Tractiuni cu Vali Ignat"
                  src="/img_9904-1500h.jpg"
                  className="despre-image23"
                />
              </div>
            </div>
          </div>
        </main>
        <Footer rootClassName="footerroot-class-name1"></Footer>
      </div>
      <style jsx>
        {`
          .despre-container10 {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-neutral-black);
          }
          .despre-main {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .despre-hero {
            background-image: url('/img_9913-1500h.jpg');
            background-position: left;
          }
          .despre-max-content1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .despre-fade-inleft {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .despre-horizontal-line1 {
            width: 4px;
            display: flex;
            align-self: stretch;
            margin-right: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-default-primary);
          }
          .despre-container11 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .despre-container12 {
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: flex-start;
          }
          .despre-text10 {
            color: var(--dl-color-default-primary);
            font-size: 36px;
            line-height: 36px;
            margin-bottom: 0px;
          }
          .despre-text11 {
            font-size: 90px;
            line-height: 80px;
            margin-left: var(--dl-space-space-doubleunit);
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .despre-text12 {
            font-size: 150px;
            line-height: 150px;
            margin-bottom: var(--dl-space-space-fourunits);
            text-transform: capitalize;
          }
          .despre-container13 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .despre-about {
            min-height: 50vh;
          }
          .despre-max-content2 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .despre-image-container1 {
            display: flex;
            position: relative;
            align-items: stretch;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .despre-container14 {
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .despre-image10 {
            width: 48%;
            object-fit: cover;
            margin-right: var(--dl-space-space-tripleunit);
          }
          .despre-image11 {
            width: 48%;
            object-fit: cover;
          }
          .despre-heading1 {
            color: var(--dl-color-default-primary);
            right: -100px;
            bottom: 60px;
            position: absolute;
            font-size: 26px;
            transform: rotate(270deg);
          }
          .despre-text-container1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-fourunits);
            padding-right: 0px;
            flex-direction: column;
            justify-content: flex-end;
          }
          .despre-container15 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .despre-horizontal-line2 {
            width: 4px;
            display: flex;
            align-self: stretch;
            margin-right: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-default-primary);
          }
          .despre-text14 {
            color: var(--dl-color-neutral-white);
            line-height: 70px;
            padding-top: var(--dl-space-space-unit);
            margin-bottom: 0px;
            padding-bottom: var(--dl-space-space-unit);
          }
          .despre-text18 {
            margin-bottom: var(--dl-space-space-eightunits);
          }
          .despre-text19 {
            color: var(--dl-color-default-primary);
          }
          .despre-heading2 {
            color: var(--dl-color-neutral-white);
            font-size: 50px;
            align-self: flex-end;
            font-family: Rushtick;
            line-height: 50px;
          }
          .despre-info-cards {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .despre-first {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .despre-max-content3 {
            flex: 0 0 auto;
            display: flex;
            min-height: 650px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .despre-container16 {
            width: 55%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-left: var(--dl-space-space-eightunits);
            padding-right: var(--dl-space-space-eightunits);
            flex-direction: column;
          }
          .despre-text23 {
            color: var(--dl-color-default-primary);
          }
          .despre-text25 {
            color: var(--dl-color-default-primary);
          }
          .despre-text27 {
            top: 75px;
            left: -50px;
            color: var(--dl-color-default-primary);
            position: absolute;
            font-size: 26px;
            transform: rotate(270deg);
          }
          .despre-text28 {
            color: var(--dl-color-default-primary);
            font-size: 26px;
            align-self: flex-end;
          }
          .despre-image12 {
            width: var(--dl-size-size-half);
            align-self: stretch;
            object-fit: cover;
          }
          .despre-second {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .despre-max-content4 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .despre-image13 {
            width: var(--dl-size-size-half);
            align-self: stretch;
            object-fit: contain;
            margin-right: var(--dl-space-space-fourunits);
          }
          .despre-container17 {
            width: 55%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-left: var(--dl-space-space-eightunits);
            padding-right: var(--dl-space-space-eightunits);
            flex-direction: column;
          }
          .despre-text29 {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .despre-text31 {
            color: var(--dl-color-default-primary);
          }
          .despre-text33 {
            top: 55px;
            color: var(--dl-color-default-primary);
            right: -50px;
            position: absolute;
            font-size: 26px;
            transform: rotate(90deg);
          }
          .despre-text34 {
            color: var(--dl-color-default-primary);
            font-size: 26px;
          }
          .despre-max-content5 {
            flex: 0 0 auto;
            display: flex;
            min-height: 650px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .despre-container18 {
            width: 55%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-left: var(--dl-space-space-eightunits);
            padding-right: var(--dl-space-space-eightunits);
            flex-direction: column;
          }
          .despre-text35 {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .despre-text37 {
            color: var(--dl-color-default-primary);
          }
          .despre-text39 {
            color: var(--dl-color-default-primary);
          }
          .despre-text41 {
            top: 45px;
            left: -15px;
            color: var(--dl-color-default-primary);
            position: absolute;
            font-size: 26px;
            transform: rotate(270deg);
          }
          .despre-text42 {
            color: var(--dl-color-default-primary);
            font-size: 26px;
            align-self: flex-end;
          }
          .despre-image14 {
            width: var(--dl-size-size-half);
            align-self: stretch;
            object-fit: cover;
          }
          .despre-max-content6 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .despre-image15 {
            width: 40%;
            object-fit: cover;
          }
          .despre-text-container2 {
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-eightunits);
            align-self: center;
            align-items: flex-end;
            flex-direction: column;
          }
          .despre-text43 {
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .despre-text45 {
            color: var(--dl-color-default-primary);
          }
          .despre-text47 {
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .despre-text51 {
            color: var(--dl-color-default-primary);
          }
          .despre-text53 {
            color: var(--dl-color-default-primary);
          }
          .despre-sport-life {
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .despre-heading-container {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 50vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/img_9980-1500h.jpg');
            background-repeat: no-repeat;
            background-position: center;
          }
          .despre-overlay {
            top: 0%;
            left: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            padding-top: var(--dl-space-space-eightunits);
            padding-bottom: var(--dl-space-space-eightunits);
            justify-content: center;
            background-color: rgba(217, 217, 217, 0.58);
          }
          .despre-text55 {
            z-index: 1;
            font-size: 150px;
            text-align: center;
            margin-bottom: var(--dl-space-space-sixteenunits);
          }
          .despre-text57 {
            color: var(--dl-color-neutral-black);
          }
          .despre-max-content7 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .despre-container19 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .despre-image16 {
            width: 100%;
            max-width: 400px;
            margin-top: -150px;
            object-fit: cover;
          }
          .despre-text-container3 {
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-eightunits);
            align-self: center;
            align-items: flex-end;
            flex-direction: column;
          }
          .despre-text59 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .despre-text61 {
            color: var(--dl-color-default-primary);
          }
          .despre-text63 {
            color: var(--dl-color-default-primary);
          }
          .despre-text67 {
            color: var(--dl-color-default-primary);
          }
          .despre-container20 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .despre-text71 {
            color: var(--dl-color-default-primary);
          }
          .despre-text73 {
            color: var(--dl-color-default-primary);
          }
          .despre-text75 {
            color: var(--dl-color-default-primary);
          }
          .despre-max-content8 {
            flex: 0 0 auto;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .despre-left {
            flex: 0 0 auto;
            display: flex;
            flex-basis: 60%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .despre-container21 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .despre-image17 {
            width: 100%;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .despre-text77 {
            color: var(--dl-color-default-primary);
            font-size: 26px;
            align-self: flex-end;
          }
          .despre-text78 {
            left: -70px;
            color: var(--dl-color-default-primary);
            bottom: 80px;
            position: absolute;
            font-size: 26px;
            transform: rotate(270deg);
          }
          .despre-image18 {
            width: 100%;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-sixteenunits);
          }
          .despre-text81 {
            color: var(--dl-color-default-primary);
          }
          .despre-text83 {
            color: var(--dl-color-default-primary);
          }
          .despre-text85 {
            color: var(--dl-color-default-primary);
          }
          .despre-right {
            flex: 0 0 auto;
            display: flex;
            flex-basis: 35%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .despre-container22 {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .despre-image19 {
            width: 70%;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-eightunits);
          }
          .despre-text87 {
            top: 50px;
            color: var(--dl-color-default-primary);
            right: 50px;
            position: absolute;
            font-size: 26px;
            transform: rotate(90deg);
          }
          .despre-image20 {
            width: 100%;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .despre-text88 {
            color: var(--dl-color-default-primary);
            font-size: 26px;
            align-self: flex-end;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .despre-container23 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .despre-image21 {
            width: 100%;
            object-fit: cover;
          }
          .despre-text89 {
            left: -110px;
            color: var(--dl-color-default-primary);
            position: absolute;
            font-size: 26px;
            transform: rotate(270deg);
          }
          .despre-container24 {
            min-height: 50vh;
          }
          .despre-max-content9 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .despre-text-container4 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: flex-end;
          }
          .despre-text90 {
            color: var(--dl-color-neutral-white);
            width: 100%;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .despre-text92 {
            color: var(--dl-color-default-primary);
          }
          .despre-link {
            display: contents;
          }
          .despre-component7 {
            text-decoration: none;
          }
          .despre-image-container2 {
            display: flex;
            position: relative;
            align-items: stretch;
            margin-left: var(--dl-space-space-fourunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .despre-image22 {
            width: 48%;
            object-fit: cover;
            margin-right: var(--dl-space-space-tripleunit);
          }
          .despre-image23 {
            width: 48%;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .despre-max-content2 {
              flex-direction: column;
            }
            .despre-image-container1 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .despre-text-container1 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .despre-max-content3 {
              flex-direction: column-reverse;
            }
            .despre-container16 {
              width: 100%;
            }
            .despre-image12 {
              width: 100%;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .despre-max-content4 {
              padding-top: 0px;
              flex-direction: column;
              padding-bottom: 0px;
              background-position: center;
            }
            .despre-image13 {
              width: 100%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .despre-container17 {
              width: 100%;
            }
            .despre-text33 {
              left: -40px;
              right: auto;
              transform: rotate(270deg);
            }
            .despre-text34 {
              align-self: flex-end;
            }
            .despre-max-content5 {
              min-height: 400px;
              flex-direction: column-reverse;
            }
            .despre-container18 {
              width: 100%;
            }
            .despre-image14 {
              width: 100%;
            }
            .despre-max-content6 {
              flex-direction: column;
            }
            .despre-image15 {
              width: 100%;
            }
            .despre-text-container2 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .despre-container19 {
              margin-bottom: 0px;
              flex-direction: column;
            }
            .despre-text-container3 {
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-tripleunit);
            }
            .despre-container20 {
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .despre-image18 {
              margin-bottom: var(--dl-space-space-eightunits);
            }
            .despre-image19 {
              width: 100%;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .despre-text87 {
              left: -75px;
              right: auto;
              transform: rotate(270deg);
            }
            .despre-image20 {
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .despre-text89 {
              left: -100px;
            }
            .despre-max-content9 {
              flex-direction: column-reverse;
            }
            .despre-text-container4 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .despre-image-container2 {
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .despre-hero {
              background-size: cover;
              justify-content: flex-end;
              background-image: url('/img_9759-1500h.jpg');
              background-position: center;
            }
            .despre-image-container1 {
              flex-wrap: wrap;
            }
            .despre-image10 {
              margin-right: var(--dl-space-space-unit);
            }
            .despre-heading1 {
              right: -65px;
              position: static;
              transform: rotate(0deg);
              margin-top: var(--dl-space-space-halfunit);
            }
            .despre-text-container1 {
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .despre-text18 {
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .despre-heading2 {
              font-size: 48px;
            }
            .despre-first {
              min-height: 50vh;
            }
            .despre-max-content3 {
              background-size: cover;
              background-position: right;
            }
            .despre-container16 {
              width: 100%;
              padding-left: var(--dl-space-space-fourunits);
              padding-right: 0px;
            }
            .despre-text27 {
              left: -80px;
            }
            .despre-max-content4 {
              justify-content: flex-start;
              background-position: center;
            }
            .despre-image13 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .despre-container17 {
              width: 100%;
              padding-left: var(--dl-space-space-fourunits);
              padding-right: 0px;
            }
            .despre-text33 {
              left: -65px;
            }
            .despre-max-content5 {
              background-size: cover;
            }
            .despre-container18 {
              width: 100%;
              padding-left: var(--dl-space-space-fourunits);
              padding-right: 0px;
            }
            .despre-text41 {
              left: -50px;
            }
            .despre-image14 {
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .despre-text-container2 {
              align-items: flex-start;
              padding-top: var(--dl-space-space-tripleunit);
              padding-bottom: 0px;
            }
            .despre-text55 {
              font-size: 95px;
              line-height: 95px;
            }
            .despre-image16 {
              max-width: 100%;
              margin-top: -100px;
            }
            .despre-text-container3 {
              align-items: flex-start;
              padding-top: var(--dl-space-space-tripleunit);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-tripleunit);
            }
            .despre-container20 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .despre-max-content8 {
              padding-left: var(--dl-space-space-eightunits);
              padding-right: var(--dl-space-space-eightunits);
              flex-direction: column;
            }
            .despre-left {
              flex-basis: 10%;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .despre-image18 {
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .despre-text87 {
              left: -75px;
            }
            .despre-text89 {
              top: 80px;
              left: -105px;
            }
            .despre-text-container4 {
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .despre-text90 {
              margin-bottom: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 479px) {
            .despre-horizontal-line1 {
              margin-right: var(--dl-space-space-unit);
            }
            .despre-container11 {
              align-items: flex-start;
            }
            .despre-text11 {
              font-size: 70px;
              line-height: 70px;
            }
            .despre-text12 {
              font-size: 120px;
              line-height: 120px;
            }
            .despre-heading1 {
              right: -60px;
              font-size: 20px;
            }
            .despre-text-container1 {
              margin-bottom: 0px;
            }
            .despre-container15 {
              width: 100%;
              justify-content: flex-start;
            }
            .despre-horizontal-line2 {
              margin-right: var(--dl-space-space-unit);
            }
            .despre-text14 {
              line-height: 1;
              white-space: nowrap;
            }
            .despre-max-content3 {
              min-height: 500px;
              background-position: top;
            }
            .despre-container16 {
              padding-left: var(--dl-space-space-unit);
            }
            .despre-text27 {
              top: 60px;
              left: -80px;
              font-size: 20px;
            }
            .despre-text28 {
              font-size: 20px;
            }
            .despre-container17 {
              padding-left: var(--dl-space-space-unit);
            }
            .despre-text33 {
              top: 50px;
              left: -65px;
              font-size: 20px;
            }
            .despre-text34 {
              font-size: 20px;
            }
            .despre-max-content5 {
              min-height: 300px;
              background-size: cover;
              background-position: center;
            }
            .despre-container18 {
              padding-left: var(--dl-space-space-unit);
            }
            .despre-text41 {
              top: 35px;
              left: -55px;
              font-size: 20px;
            }
            .despre-text42 {
              font-size: 20px;
            }
            .despre-max-content6 {
              min-height: 500px;
              background-position: top left;
            }
            .despre-text-container2 {
              padding-bottom: 0px;
            }
            .despre-text55 {
              font-size: 60px;
              line-height: 70px;
            }
            .despre-image16 {
              margin-top: -70px;
            }
            .despre-max-content8 {
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .despre-text77 {
              font-size: 20px;
            }
            .despre-text78 {
              left: -50px;
              font-size: 20px;
            }
            .despre-text87 {
              top: 50px;
              left: -60px;
              font-size: 20px;
            }
            .despre-text88 {
              font-size: 20px;
            }
            .despre-text89 {
              top: 55px;
              left: -80px;
              font-size: 20px;
            }
            .despre-text-container4 {
              margin-bottom: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Despre
