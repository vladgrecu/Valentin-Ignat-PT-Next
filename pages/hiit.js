import React from 'react'
import Head from 'next/head'

import LoginModal from '../components/login-modal'
import RegisterModal from '../components/register-modal'
import ContactFormModal from '../components/contact-form-modal'
import Navbar from '../components/navbar'
import MobileMenu from '../components/mobile-menu'
import BtnPrimary from '../components/btn-primary'
import PlayBtn from '../components/play-btn'
import Footer from '../components/footer'

const Hiit = (props) => {
  return (
    <>
      <div className="hiit-container10">
        <Head>
          <title>HIIT - Coach Vali Ignat</title>
          <meta property="og:title" content="HIIT - Coach Vali Ignat" />
          <meta property="og:description" content="Listening is power" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0bb31403-1ba8-407c-9d80-4389cc611d8c/2e667c71-2725-4843-8220-8fe9a0708d9d?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <LoginModal rootClassName="login-modalroot-class-name6"></LoginModal>
        <RegisterModal rootClassName="register-modalroot-class-name6"></RegisterModal>
        <ContactFormModal rootClassName="contact-form-modalroot-class-name6"></ContactFormModal>
        <Navbar rootClassName="navbarroot-class-name4"></Navbar>
        <MobileMenu></MobileMenu>
        <main className="hiit-main">
          <section className="hiit-hero hero-container">
            <div className="hiit-max-content1 max-content-container">
              <div className="hiit-container11 animation-fade-in-left">
                <div className="hiit-horizontal-line"></div>
                <div className="hiit-container12">
                  <h1 className="hiit-text100 heading-1">
                    <span>
                      vrei o
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="hiit-text102">schimbare</span>
                    <span>?</span>
                  </h1>
                  <span className="hiit-text104 Content-Bold content-bold-white">
                    Esti capabil sa devii mai puternic si sa aduci in viata ta
                    schimbarea de care simti ca este nevoie. Poti pierde cateva
                    kilograme, poti sa iti maresti masa musculara sau sa devii
                    mai rezistent si sa nu mai gafai cand urci treptele.Toate
                    acestea le poti realiza prin sport, alimentatie echilibrata,
                    respirat si somn. Cum ar suna asta pentru tine?
                  </span>
                  <div
                    data-action="showContactFormModal"
                    className="hiit-container13"
                  >
                    <BtnPrimary
                      ctaText="cumpara acum"
                      rootClassName="btn-primaryroot-class-name25"
                    ></BtnPrimary>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="hiit-description section-container">
            <div className="hiit-max-content2 max-content-container">
              <h1 className="heading-1 hiit-text105">
                primul meu program online
              </h1>
              <div className="hiit-intro section-container">
                <div className="hiit-image-container">
                  <div className="hiit-container14">
                    <span className="hiit-text106">150</span>
                    <span className="hiit-text107">+</span>
                  </div>
                  <img
                    alt="power Vali Ignat"
                    src="/img_9744-1500w.jpg"
                    loading="eager"
                    className="hiit-image10"
                  />
                </div>
                <div className="hiit-text-container1">
                  <span className="hiit-text108 Content-Bold content-bold-white">
                    <span>
                      Dupa aproximativ 7 ani de zile in care am studiat diverse
                      metode de antrenament si am ajutat in sala, live, peste
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="hiit-text110">150 de persoane</span>
                    <span>
                      , m-am hotarat sa imi scriu primul meu program de HIIT, pe
                      care il poti accesa de oriunde, fara accesorii.
                    </span>
                  </span>
                  <span className="Content-Bold content-bold-white">
                    Gandeste-te la HIIT mai degraba ca la un „conditioning
                    training” si nu la un „cardio training”, pentru ca te vei
                    antrena ca un atlet si vei arata intocmai.
                  </span>
                </div>
              </div>
              <div className="hiit-features1 section-container">
                <div className="hiit-picture">
                  <img
                    alt="Deadlift Vali Ignat"
                    src="/img_9822-1500h.jpg"
                    loading="eager"
                    className="hiit-image11"
                  />
                  <div className="hiit-container15">
                    <span className="hiit-text113">20</span>
                    <span className="hiit-text114">&apos;</span>
                  </div>
                </div>
                <div className="hiit-features2">
                  <div className="hiit-text-container2">
                    <span className="hiit-text115 Content-Bold content-bold-white">
                      <span>
                        HIIT reprezinta prescurtarea de la
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="hiit-text117">
                        HIGH INTENSITY INTERVAL TRAINING
                      </span>
                      <span>
                        {' '}
                        si a fost descoperit cu cateva decenii in urma in
                        Suedia, de cativa antrenori de atletism.
                      </span>
                    </span>
                    <span className="hiit-text119 Content-Bold content-bold-white">
                      <span>
                        Practic, in loc sa alergi 45-60’ pe banda, unde inteleg
                        cat de plictisitor poate fi, te vei antrena intr-un
                        sistem de alternare a intervalelor de intensitate
                        crescuta cu intervalele de intensitate scazuta,
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="hiit-text121">timp de 20-25’.</span>
                    </span>
                  </div>
                  <div className="hiit-list-container">
                    <div className="hiit-list-item1">
                      <svg viewBox="0 0 1024 1024" className="hiit-icon10">
                        <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                      </svg>
                      <span className="hiit-text122 Content-Bold content-bold-white">
                        intervale de timp
                      </span>
                    </div>
                    <div className="hiit-list-item2">
                      <svg viewBox="0 0 1024 1024" className="hiit-icon12">
                        <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                      </svg>
                      <span className="hiit-text123 Content-Bold content-bold-white">
                        rapid
                      </span>
                    </div>
                    <div className="hiit-list-item3">
                      <svg viewBox="0 0 1024 1024" className="hiit-icon14">
                        <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                      </svg>
                      <span className="hiit-text124 Content-Bold content-bold-white">
                        eficient
                      </span>
                    </div>
                    <div className="hiit-list-item4">
                      <svg viewBox="0 0 1024 1024" className="hiit-icon16">
                        <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                      </svg>
                      <span className="hiit-text125 Content-Bold content-bold-white">
                        intens
                      </span>
                    </div>
                    <div className="hiit-list-item5">
                      <svg viewBox="0 0 1024 1024" className="hiit-icon18">
                        <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                      </svg>
                      <span className="hiit-text126 Content-Bold content-bold-white">
                        periodizat
                      </span>
                    </div>
                    <div className="hiit-list-item6">
                      <svg viewBox="0 0 1024 1024" className="hiit-icon20">
                        <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                      </svg>
                      <span className="hiit-text127 Content-Bold content-bold-white">
                        fara echipament
                      </span>
                    </div>
                  </div>
                </div>
                <div className="hiit-use-case">
                  <img
                    alt="Antrenament fitness cu Vali Ignat"
                    src="/img_9754-1500w.jpg"
                    className="hiit-image12"
                  />
                  <div className="hiit-container16">
                    <span className="hiit-text128 Content-Bold content-bold-white">
                      <span>
                        De curand am povestit cu un amic - care de aproximativ 3
                        luni s-a apucat de antrenamente in sistem HIIT, in
                        confortul casei sale, dupa un
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="hiit-text130">program periodizat</span>
                      <span> si nu unul aleatoriu de pe internet.</span>
                    </span>
                    <span className="Content-Bold content-bold-white hiit-text132">
                      <span>
                        El era obisnuit sa faca miscare, clasic, sets &amp;
                        reps, insa i s-a parut ca nu i se mai potriveste acel
                        stil, mai ales ca acum il obseda si gandul ca vrea sa
                        mai slabeasca 4 kg, iar alergatul pentru el nu era o
                        optiune. Mentionez ca este si gurmand si ii este dificil
                        sa se abtina de la unele placeri, astfel sacrificand
                        vechiul lui stil de antrenamente in favoarea altuia nou.
                        S-a aratat super incantat de antrenamentele de HIIT,
                        pentru ca a intalnit in program toate
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="hiit-text134">
                        miscarile pe care el le cunostea
                      </span>
                      <span>
                        , insa ceva se modificase: totul era organizat pe
                        intervale de lucru si intervale de pauza.
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="hiit-benefits">
                <h1 className="hiit-text136 heading-1">beneficii</h1>
                <div className="hiit-container17">
                  <div className="hiit-container18">
                    <img
                      alt="image"
                      src="/oriunde.svg"
                      className="hiit-image13"
                    />
                    <span className="hiit-text137 Content-Bold content-bold-white">
                      Oriunde
                    </span>
                  </div>
                  <div className="hiit-separator1"></div>
                  <div className="hiit-container19">
                    <img
                      alt="image"
                      src="/sanatos.svg"
                      className="hiit-image14"
                    />
                    <span className="hiit-text138 Content-Bold content-bold-white">
                      Sanatos
                    </span>
                  </div>
                  <div className="hiit-separator2"></div>
                  <h3
                    data-action="showContactFormModal"
                    className="hiit-circle H5 Content-Bold circle-try"
                  >
                    cumpara
                  </h3>
                  <div className="hiit-separator3"></div>
                  <div className="hiit-container20">
                    <img
                      alt="image"
                      src="/rapid.svg"
                      className="hiit-image15"
                    />
                    <span className="hiit-text139 Content-Bold content-bold-white">
                      Rapid
                    </span>
                  </div>
                  <div className="hiit-separator4"></div>
                  <div className="hiit-container21">
                    <img
                      alt="image"
                      src="/eficacitate.svg"
                      className="hiit-image16"
                    />
                    <span className="hiit-text140 Content-Bold content-bold-white">
                      Eficacitate
                    </span>
                  </div>
                </div>
              </div>
              <div className="hiit-benefits-explained section-container">
                <div className="hiit-benefit1">
                  <img
                    alt="cantar"
                    src="/cantar.svg"
                    className="hiit-image17"
                  />
                  <span className="hiit-text141 Content-Bold content-bold-white">
                    <span>
                      Vei reusi sa
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="hiit-text143">slabesti</span>
                    <span>
                      , sa adaugi
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="hiit-text145">masa musculara</span>
                    <span>
                      {' '}
                      sau sa te mentii la fel de
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="hiit-text147">
                      fit
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      ca si pana acum, bineinteles alaturi de o alimentatie
                      echilibrata, cunoscandu-ti aportul tau caloric zilnic
                      (Corpul tau arde zilnic 2000 kcal cu tot cu antrenament.
                      Vrei sa te mentii, aduci in corp, prin alimentatie, 2000
                      kcal, vrei sa slabesti – 1700-1800 kcal, vrei sa adaugi
                      masa musculara – 2200-2400 kcal - Acesta este doar un
                      exemplu de alimentatie pe termen scurt si mediu).
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      Un alt exemplu de alimentatie echilibrata poate fi
                      Intermittent Fasting-ul (daca esti incepator iti recomand
                      sa incepi cu 11 ore de mancat si 13 ore de post din
                      totalul unei zile).
                    </span>
                    <br></br>
                    <span></span>
                    <span></span>
                    <br></br>
                    <span></span>
                  </span>
                </div>
                <div className="hiit-benefit2">
                  <img
                    alt="gantera"
                    src="/gantera.svg"
                    className="hiit-image18"
                  />
                  <span className="hiit-text153 Content-Bold content-bold-white">
                    <span className="hiit-text154">Consum caloric mare</span>
                    <span>
                      . Un studiu realizat pe persoane obeze din 2001, arata ca,
                      fara sa modifice alimentatia, obezii care au facut HIIT
                      intr-un program de 8 saptamani au redus 2% din grasime
                      fata de cei care au ales programe de anduranta.Un alt
                      studiu, al facultatii de medicina Baylor, din 1996,
                      demonstreaza cum in 24 de ore, atletii care s-au antrenat
                      in sistem HIIT pe o bicicleta indoor au ars mai multe
                      calorii decat ciclistii care au pedalat la un ritm
                      constant, moderat aceeasi durata de timp. Un alt studiu al
                      universitatii Tennessee ne dovedeste ca adeptii HIIT-ului
                      ard in medie cu 100 kcal mai multe, intr-un ciclu de 24 de
                      ore. Cu toate acestea, rezultatele vizibile pe corpul tau
                      ale unui program de antrenamente presupune sa mananci
                      echilibrat si sa dormi suficient, in fiecare noapte.
                    </span>
                    <br></br>
                    <span></span>
                  </span>
                </div>
                <div className="hiit-benefit3">
                  <img
                    alt="plan alimentar"
                    src="/clipboard.svg"
                    className="hiit-image19"
                  />
                  <span className="hiit-text157 Content-Bold content-bold-white">
                    <span>
                      O
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="hiit-text159">
                      diversificare
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      in antrenamente. Pe langa antrenamentele de forta,
                      antrenamentul de HIIT poate fi privit ca ziua de
                      “conditionare fizica” a saptamanii. Gandeste-te ca in loc
                      sa fii blocat 45-60 min pe o banda de alergare sau pe un
                      rower, ai putea sa ai parte de mai multa varietate, mai
                      putina monotonie, intr-un antrenament HIIT care
                      intr-adevar, poate fi istovitor, dar va fi
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="hiit-text161">scurt</span>
                    <span>
                      , 20-25 min si
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="hiit-text163">super challenging</span>
                    <span>.</span>
                  </span>
                </div>
                <div className="hiit-benefit4">
                  <img
                    alt="echipament"
                    src="/papuc.svg"
                    className="hiit-image20"
                  />
                  <span className="hiit-text165 Content-Bold content-bold-white">
                    <span>
                      Te poti antrena de
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="hiit-text167">oriunde</span>
                    <span>
                      , cu corpul liber, fara accesorii si alte costuri
                      suplimentare. Daca tu consideri ca vrei o provocare mai
                      mare, esti liber sa folosesti si greutati mici/medii. Mai
                      important este sa respecti intervalele de lucru/pauza.
                    </span>
                    <br></br>
                    <span></span>
                    <br></br>
                    <span></span>
                  </span>
                </div>
              </div>
              <div className="hiit-more-explanations section-container">
                <div className="hiit-heading-container">
                  <h1 className="hiit-text171 heading-1">ce contine hiit?</h1>
                  <span className="hiit-text172 Content-Bold content-bold-white">
                    In primul meu program de HIIT, ma adresez si incepatorilor,
                    unde am inclus exercitii de baza conform tiparelor de
                    miscare ca sa va ajut sa activati corect si in siguranta
                    sistemul muscular.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <div className="hiit-container22">
                  <div className="hiit-timeline">
                    <div className="hiit-item1">
                      <div className="hiit-trigger-container1">
                        <div className="hiit-container23">
                          <div className="hiit-line1"></div>
                          <div className="hiit-bullet1"></div>
                          <div className="hiit-line2"></div>
                        </div>
                        <div className="hiit-line3"></div>
                      </div>
                      <div className="hiit-content-container1">
                        <span className="hiit-text173 Content-Bold content-bold-white">
                          <span>
                            Am creat o
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <span className="hiit-text175">
                            periodizare
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <span>
                            cu o durata de 8 saptamani in care te antrenezi de 3
                            ori/saptamana. Am inceput totul cu intervale de
                            lucru/pauza 1:2 si pe parcursul celor 8 saptamani am
                            evoluat la intervale de lucru/pauza 2:1.
                          </span>
                          <br></br>
                          <span></span>
                        </span>
                      </div>
                    </div>
                    <div className="hiit-item2">
                      <div className="hiit-trigger-container2">
                        <div className="hiit-container24">
                          <div className="hiit-bullet2"></div>
                          <div className="hiit-line4"></div>
                        </div>
                        <div className="hiit-line5"></div>
                      </div>
                      <div className="hiit-content-container2">
                        <span className="hiit-text178 Content-Bold content-bold-white">
                          <span>
                            La finalul programului vei simti cum sistemele tale:
                            cardiovascular si respirator sunt mult imbunatatite.
                            Practic vei fi mai
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <span className="hiit-text180">
                            rezistent
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <span>
                            fizic si psihic, vei fi mai puternic iar aceast
                            upgrade al corpului tau te va ajuta sa faci fata
                            situatiilor stresante zilnice. O sa te uiti in
                            oglinda si vei observa cum &quot;apar&quot; forme
                            mai definite ale sistemului tau muscular.
                          </span>
                          <br></br>
                          <span></span>
                        </span>
                      </div>
                    </div>
                    <div className="hiit-item3">
                      <div className="hiit-trigger-container3">
                        <div className="hiit-container25">
                          <div className="hiit-bullet3"></div>
                          <div className="hiit-line6"></div>
                        </div>
                        <div className="hiit-line7"></div>
                        <svg viewBox="0 0 1024 1024" className="hiit-icon22">
                          <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
                        </svg>
                      </div>
                      <div className="hiit-content-container3">
                        <span className="hiit-text183 Content-Bold content-bold-white">
                          <span>
                            Eu voi fi alaturi de tine pe parcursul celor 8
                            saptamani, la fiecare antrenament si il vom executa
                            impreuna. Pe ecran ma vei vedea tot timpul pe mine,
                            cronometrul si muzica.
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <img
                    alt="handstand cu Vali Ignat"
                    src="/image00002-1500w.png"
                    loading="lazy"
                    className="hiit-image21"
                  />
                </div>
              </div>
              <div className="hiit-video-section section-container">
                <div className="hiit-video1">
                  <video
                    src="https://mypthelperbucket.s3.us-east-2.amazonaws.com/HIIT+promo+2.mp4"
                    muted="true"
                    poster="/img_9766-1500w.jpg"
                    preload="auto"
                    controls="true"
                    playsinline="true"
                    data-video-type="promoVideo"
                    className="hiit-video2"
                  ></video>
                  <PlayBtn
                    rootClassName="play-btnroot-class-name1"
                    className="hiit-component7"
                  ></PlayBtn>
                </div>
                <span className="hiit-text185 Content-Bold content-bold-white">
                  <span>
                    Consider ca programul meu de HIIT poate fi un challenge
                    pentru
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="hiit-text187">orice nivel de fitness</span>
                  <span>
                    , deoarece oricine isi poate
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="hiit-text189">adapta</span>
                  <span> intensitatea cu care executa miscarile. Prin “</span>
                  <span className="hiit-text191">regresie</span>
                  <span>
                    ” ma refer la o varianta mai usoara a exercitiului de baza.
                    Vei observa toate detaliile in visualurile grafice din
                    video. Nu te stresa daca vei executa la un ritm mai lent,
                    atata timp cat vei parcurge toata
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="hiit-text193">durata</span>
                  <span>
                    {' '}
                    exercitiului afisata pe ecran si respecti un plan alimentar
                    cat mai aproape de natural.
                  </span>
                  <br></br>
                  <span></span>
                </span>
              </div>
              <span className="hiit-text196 Content-Bold content-bold-white">
                <span>
                  Pentru un
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="hiit-text198">efect maxim</span>
                <span>
                  {' '}
                  al acestui program, te indemn ca pe tot parcursul celor 8
                  saptamani, sa reduci la minimum cantitatea de faina (paine,
                  crackers, paste), sa eviti mancarurile procesate (ready to go,
                  mezeluri, etc.), sa elimini zaharul din alimentatia ta zilnica
                  (oricum nu gasesti in el niciun nutrient), sa renunti la
                  sucuri si dulciuri, sa consumi legume la fiecare masa, sa
                  mananci fructe cu moderatie, zilnic, sa bei 30 ml apa/kg
                  corp/zi si sa dormi intre
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="hiit-text200">7 si 9 ore/noapte</span>
                <span>.</span>
                <br></br>
                <span></span>
              </span>
            </div>
          </section>
        </main>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .hiit-container10 {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-neutral-black);
          }
          .hiit-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .hiit-hero {
            background-image: url('/img_9832-1500h.jpg');
            background-position: top;
          }
          .hiit-max-content1 {
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: flex-end;
          }
          .hiit-container11 {
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: flex-end;
          }
          .hiit-horizontal-line {
            width: 4px;
            display: flex;
            align-self: stretch;
            margin-right: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-default-primary);
          }
          .hiit-container12 {
            width: 55%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .hiit-text100 {
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .hiit-text102 {
            color: var(--dl-color-default-primary);
          }
          .hiit-text104 {
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .hiit-container13 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .hiit-description {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .hiit-max-content2 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .hiit-intro {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .hiit-image-container {
            width: var(--dl-size-size-half);
            display: flex;
            position: relative;
            min-width: var(--dl-size-size-half);
            align-items: stretch;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .hiit-container14 {
            top: 0px;
            left: 0px;
            display: flex;
            position: absolute;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .hiit-text106 {
            color: var(--dl-color-default-primary);
            font-size: 60px;
            font-family: Nosifer;
          }
          .hiit-text107 {
            top: -25px;
            color: var(--dl-color-default-primary);
            right: -25px;
            position: absolute;
            font-size: 60px;
            font-family: Nosifer;
          }
          .hiit-image10 {
            width: 100%;
            min-width: 100%;
            object-fit: cover;
          }
          .hiit-text-container1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-eightunits);
            padding-right: 0px;
            flex-direction: column;
            justify-content: flex-end;
          }
          .hiit-text108 {
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .hiit-text110 {
            color: var(--dl-color-default-primary);
          }
          .hiit-features1 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .hiit-picture {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .hiit-image11 {
            flex: 1;
            width: 100%;
            min-width: 100%;
            object-fit: cover;
          }
          .hiit-container15 {
            top: -29px;
            right: 15px;
            display: flex;
            position: absolute;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .hiit-text113 {
            color: var(--dl-color-default-primary);
            font-size: 60px;
            font-family: Nosifer;
          }
          .hiit-text114 {
            top: -15px;
            color: var(--dl-color-default-primary);
            right: -15px;
            position: absolute;
            font-size: 60px;
            font-family: Nosifer;
          }
          .hiit-features2 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .hiit-text-container2 {
            width: 70%;
            display: flex;
            align-items: flex-start;
            padding-right: var(--dl-space-space-eightunits);
            flex-direction: column;
            justify-content: flex-end;
          }
          .hiit-text115 {
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .hiit-text117 {
            color: var(--dl-color-default-primary);
          }
          .hiit-text119 {
            margin-bottom: 0px;
          }
          .hiit-text121 {
            color: var(--dl-color-default-primary);
          }
          .hiit-list-container {
            width: 30%;
            display: flex;
            position: relative;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .hiit-list-item1 {
            display: flex;
            align-items: center;
            border-color: var(--dl-color-neutral-gray);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .hiit-icon10 {
            fill: var(--dl-color-neutral-white);
            width: 12px;
            height: 12px;
            margin-right: var(--dl-space-space-unit);
          }
          .hiit-text122 {
            margin-bottom: 0px;
          }
          .hiit-list-item2 {
            display: flex;
            align-items: center;
            border-color: var(--dl-color-neutral-gray);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .hiit-icon12 {
            fill: var(--dl-color-neutral-white);
            width: 12px;
            height: 12px;
            margin-right: var(--dl-space-space-unit);
          }
          .hiit-text123 {
            margin-bottom: 0px;
          }
          .hiit-list-item3 {
            display: flex;
            align-items: center;
            border-color: var(--dl-color-neutral-gray);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .hiit-icon14 {
            fill: var(--dl-color-neutral-white);
            width: 12px;
            height: 12px;
            margin-right: var(--dl-space-space-unit);
          }
          .hiit-text124 {
            margin-bottom: 0px;
          }
          .hiit-list-item4 {
            display: flex;
            align-items: center;
            border-color: var(--dl-color-neutral-gray);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .hiit-icon16 {
            fill: var(--dl-color-neutral-white);
            width: 12px;
            height: 12px;
            margin-right: var(--dl-space-space-unit);
          }
          .hiit-text125 {
            margin-bottom: 0px;
          }
          .hiit-list-item5 {
            display: flex;
            align-items: center;
            border-color: var(--dl-color-neutral-gray);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .hiit-icon18 {
            fill: var(--dl-color-neutral-white);
            width: 12px;
            height: 12px;
            margin-right: var(--dl-space-space-unit);
          }
          .hiit-text126 {
            margin-bottom: 0px;
          }
          .hiit-list-item6 {
            display: flex;
            align-items: center;
            border-color: var(--dl-color-neutral-gray);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .hiit-icon20 {
            fill: var(--dl-color-neutral-white);
            width: 12px;
            height: 12px;
            margin-right: var(--dl-space-space-unit);
          }
          .hiit-text127 {
            margin-bottom: 0px;
          }
          .hiit-use-case {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .hiit-image12 {
            width: 40%;
            object-fit: cover;
          }
          .hiit-container16 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-eightunits);
            flex-direction: column;
          }
          .hiit-text128 {
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .hiit-text130 {
            color: var(--dl-color-default-primary);
          }
          .hiit-text134 {
            color: var(--dl-color-default-primary);
          }
          .hiit-benefits {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-eightunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-eightunits);
            justify-content: center;
          }
          .hiit-text136 {
            margin-bottom: var(--dl-space-space-eightunits);
          }
          .hiit-container17 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .hiit-container18 {
            flex: 0 0 auto;
            width: 15%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: flex-end;
          }
          .hiit-image13 {
            height: 80px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .hiit-text137 {
            margin-bottom: 0px;
          }
          .hiit-separator1 {
            flex: 0 0 auto;
            width: 1px;
            height: 50px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            background-color: #d9d9d9;
          }
          .hiit-container19 {
            flex: 0 0 auto;
            width: 15%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: flex-end;
          }
          .hiit-image14 {
            height: 80px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .hiit-text138 {
            text-align: center;
            margin-bottom: 0px;
          }
          .hiit-separator2 {
            flex: 0 0 auto;
            width: 1px;
            height: 50px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            background-color: #d9d9d9;
          }
          .hiit-circle {
            font-weight: 600;
          }
          .hiit-separator3 {
            flex: 0 0 auto;
            width: 1px;
            height: 50px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            background-color: #d9d9d9;
          }
          .hiit-container20 {
            flex: 0 0 auto;
            width: 15%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: flex-end;
          }
          .hiit-image15 {
            height: 80px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .hiit-text139 {
            margin-bottom: 0px;
          }
          .hiit-separator4 {
            flex: 0 0 auto;
            width: 1px;
            height: 50px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            background-color: #d9d9d9;
          }
          .hiit-container21 {
            flex: 0 0 auto;
            width: 15%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: flex-end;
          }
          .hiit-image16 {
            height: 80px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .hiit-text140 {
            margin-bottom: 0px;
          }
          .hiit-benefits-explained {
            min-height: 50vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .hiit-benefit1 {
            flex: 0 0 auto;
            width: 100%;
            display: block;
            align-items: center;
            margin-bottom: var(--dl-space-space-eightunits);
            flex-direction: row;
          }
          .hiit-image17 {
            float: left;
            width: 100px;
            min-width: 100px;
            object-fit: cover;
            margin-right: var(--dl-space-space-fourunits);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .hiit-text141 {
            margin-bottom: 0px;
          }
          .hiit-text143 {
            color: var(--dl-color-default-primary);
          }
          .hiit-text145 {
            color: var(--dl-color-default-primary);
          }
          .hiit-text147 {
            color: var(--dl-color-default-primary);
          }
          .hiit-benefit2 {
            display: block;
            margin-bottom: var(--dl-space-space-eightunits);
            flex-direction: row;
          }
          .hiit-image18 {
            float: right;
            width: 100px;
            min-width: 130px;
            object-fit: cover;
            margin-left: var(--dl-space-space-fourunits);
          }
          .hiit-text153 {
            margin-bottom: 0px;
          }
          .hiit-text154 {
            color: var(--dl-color-default-primary);
          }
          .hiit-benefit3 {
            flex: 0 0 auto;
            width: 100%;
            display: block;
            align-items: center;
            margin-bottom: var(--dl-space-space-eightunits);
            flex-direction: row;
          }
          .hiit-image19 {
            float: left;
            width: 100px;
            min-width: 100px;
            object-fit: cover;
            margin-right: var(--dl-space-space-fourunits);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .hiit-text157 {
            margin-bottom: 0px;
          }
          .hiit-text159 {
            color: var(--dl-color-default-primary);
          }
          .hiit-text161 {
            color: var(--dl-color-default-primary);
          }
          .hiit-text163 {
            color: var(--dl-color-default-primary);
          }
          .hiit-benefit4 {
            display: block;
            flex-direction: row;
          }
          .hiit-image20 {
            float: right;
            width: 100px;
            min-width: 130px;
            object-fit: cover;
            margin-left: var(--dl-space-space-fourunits);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .hiit-text165 {
            margin-bottom: 0px;
          }
          .hiit-text167 {
            color: var(--dl-color-default-primary);
          }
          .hiit-more-explanations {
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .hiit-heading-container {
            display: flex;
            align-self: center;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: center;
          }
          .hiit-text171 {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .hiit-text172 {
            text-align: center;
            margin-bottom: 0px;
          }
          .hiit-container22 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .hiit-timeline {
            width: 55%;
            height: 100%;
            display: flex;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .hiit-item1 {
            flex: 1;
            display: flex;
            position: relative;
            min-width: 100%;
            align-items: stretch;
            flex-direction: row;
            justify-content: center;
          }
          .hiit-trigger-container1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .hiit-container23 {
            display: flex;
            align-self: stretch;
            align-items: center;
            margin-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            justify-content: center;
          }
          .hiit-line1 {
            width: 6px;
            height: 64px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-neutral-black);
            border-width: 1px;
            margin-bottom: -1px;
            flex-direction: column;
            background-color: var(--dl-color-default-primary);
          }
          .hiit-bullet1 {
            width: 30px;
            height: 30px;
            padding: var(--dl-space-space-halfunit);
            min-width: 30px;
            box-shadow: none;
            min-height: 30px;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            justify-content: center;
            background-color: var(--dl-color-default-primary);
          }
          .hiit-line2 {
            flex: 1;
            width: 6px;
            display: flex;
            margin-top: -1px;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-default-primary);
          }
          .hiit-line3 {
            flex: 1;
            width: 6px;
            display: flex;
            margin-top: -1px;
            min-height: 100px;
            align-items: flex-start;
            margin-left: 12px;
            flex-direction: column;
            background-color: var(--dl-color-default-primary);
          }
          .hiit-content-container1 {
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: center;
          }
          .hiit-text173 {
            margin-top: var(--dl-space-space-eightunits);
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .hiit-text175 {
            color: var(--dl-color-default-primary);
          }
          .hiit-item2 {
            flex: 1;
            display: flex;
            position: relative;
            min-width: 100%;
            margin-top: -1px;
            align-items: stretch;
            flex-direction: row;
            justify-content: center;
          }
          .hiit-trigger-container2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .hiit-container24 {
            display: flex;
            align-self: stretch;
            align-items: center;
            margin-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            justify-content: center;
          }
          .hiit-bullet2 {
            width: 30px;
            height: 30px;
            padding: var(--dl-space-space-halfunit);
            min-width: 30px;
            box-shadow: none;
            min-height: 30px;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            justify-content: center;
            background-color: var(--dl-color-default-primary);
          }
          .hiit-line4 {
            flex: 1;
            width: 6px;
            display: flex;
            margin-top: -1px;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-default-primary);
          }
          .hiit-line5 {
            flex: 1;
            width: 6px;
            display: flex;
            margin-top: -1px;
            min-height: 100px;
            align-items: flex-start;
            margin-left: 12px;
            flex-direction: column;
            background-color: var(--dl-color-default-primary);
          }
          .hiit-content-container2 {
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: center;
          }
          .hiit-text178 {
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .hiit-text180 {
            color: var(--dl-color-default-primary);
          }
          .hiit-item3 {
            flex: 1;
            display: flex;
            position: relative;
            min-width: 100%;
            margin-top: -1px;
            flex-direction: row;
            justify-content: center;
          }
          .hiit-trigger-container3 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .hiit-container25 {
            display: flex;
            align-self: stretch;
            align-items: center;
            margin-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            justify-content: center;
          }
          .hiit-bullet3 {
            width: 30px;
            height: 30px;
            padding: var(--dl-space-space-halfunit);
            min-width: 30px;
            box-shadow: none;
            min-height: 30px;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            justify-content: center;
            background-color: var(--dl-color-default-primary);
          }
          .hiit-line6 {
            flex: 1;
            width: 6px;
            display: flex;
            margin-top: -1px;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-default-primary);
          }
          .hiit-line7 {
            flex: 1;
            width: 6px;
            display: flex;
            margin-top: -1px;
            min-height: 100px;
            align-items: flex-start;
            margin-left: 12px;
            flex-direction: column;
            background-color: var(--dl-color-default-primary);
          }
          .hiit-icon22 {
            fill: var(--dl-color-default-primary);
            width: 30px;
            height: 30px;
            transform: rotate(90deg);
            margin-top: -20px;
          }
          .hiit-content-container3 {
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: center;
          }
          .hiit-text183 {
            margin-bottom: var(--dl-space-space-eightunits);
          }
          .hiit-image21 {
            flex: 1;
            align-self: stretch;
            max-height: 705px;
            object-fit: cover;
            margin-left: var(--dl-space-space-eightunits);
            object-position: center;
          }
          .hiit-video-section {
            border-color: var(--dl-color-neutral-gray);
            border-width: 0px;
            flex-direction: column;
            justify-content: center;
            border-bottom-width: 1px;
          }
          .hiit-video1 {
            flex: 0 0 auto;
            position: relative;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .hiit-video2 {
            width: 100%;
            align-self: center;
            max-height: 700px;
          }
          .hiit-component7 {
            left: calc(50% - 45px);
            bottom: calc(50% - 45px);
            position: absolute;
          }
          .hiit-text185 {
            margin-bottom: 0px;
          }
          .hiit-text187 {
            color: var(--dl-color-default-primary);
          }
          .hiit-text189 {
            color: var(--dl-color-default-primary);
          }
          .hiit-text191 {
            color: var(--dl-color-default-primary);
          }
          .hiit-text193 {
            color: var(--dl-color-default-primary);
          }
          .hiit-text196 {
            margin-top: var(--dl-space-space-eightunits);
            margin-bottom: 0px;
          }
          .hiit-text198 {
            color: var(--dl-color-default-primary);
          }
          .hiit-text200 {
            color: var(--dl-color-default-primary);
          }
          @media (max-width: 991px) {
            .hiit-container12 {
              width: 60%;
            }
            .hiit-max-content2 {
              flex-direction: column;
            }
            .hiit-text-container1 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .hiit-text-container2 {
              padding-right: 0px;
            }
            .hiit-container22 {
              align-items: flex-start;
              flex-direction: column;
            }
            .hiit-timeline {
              width: 100%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .hiit-image21 {
              margin-left: 0px;
            }
          }
          @media (max-width: 767px) {
            .hiit-hero {
              background-position: center;
            }
            .hiit-container12 {
              width: 100%;
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .hiit-text100 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .hiit-max-content2 {
              flex-direction: column;
            }
            .hiit-text105 {
              margin-bottom: var(--dl-space-space-eightunits);
            }
            .hiit-intro {
              flex-direction: column;
            }
            .hiit-image-container {
              width: 100%;
              flex-wrap: wrap;
              margin-right: 0;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .hiit-text-container1 {
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .hiit-picture {
              margin-bottom: var(--dl-space-space-doubleunit);
              flex-direction: column;
            }
            .hiit-features2 {
              align-items: flex-start;
              flex-direction: column;
            }
            .hiit-text-container2 {
              width: 100%;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .hiit-list-container {
              width: 100%;
              flex-wrap: wrap;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .hiit-use-case {
              margin-bottom: var(--dl-space-space-eightunits);
              flex-direction: column;
            }
            .hiit-image12 {
              width: 100%;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .hiit-container16 {
              padding-left: 0px;
            }
            .hiit-benefits {
              padding-top: 0px;
              margin-bottom: var(--dl-space-space-eightunits);
              flex-direction: column;
              padding-bottom: 0px;
            }
            .hiit-container17 {
              flex-wrap: wrap;
            }
            .hiit-container18 {
              width: 49%;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .hiit-separator1 {
              height: 100px;
            }
            .hiit-container19 {
              width: 49%;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .hiit-text138 {
              width: 50%;
            }
            .hiit-separator2 {
              width: 100px;
              height: 1px;
            }
            .hiit-separator3 {
              width: 100px;
              height: 1px;
            }
            .hiit-container20 {
              width: 49%;
            }
            .hiit-separator4 {
              height: 100px;
              align-self: flex-start;
            }
            .hiit-container21 {
              width: 49%;
            }
            .hiit-benefit1 {
              align-items: flex-start;
            }
            .hiit-benefit2 {
              align-items: flex-start;
            }
            .hiit-benefit3 {
              align-items: flex-start;
            }
            .hiit-benefit4 {
              align-items: flex-start;
            }
            .hiit-text172 {
              text-align: left;
            }
            .hiit-video-section {
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .hiit-text196 {
              margin-top: 0px;
            }
          }
          @media (max-width: 479px) {
            .hiit-main {
              background-position: bottom;
            }
            .hiit-max-content1 {
              padding-top: var(--dl-space-space-tripleunit);
              padding-bottom: var(--dl-space-space-tripleunit);
            }
            .hiit-container11 {
              margin-top: 0px;
            }
            .hiit-horizontal-line {
              margin-right: var(--dl-space-space-doubleunit);
            }
            .hiit-text100 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .hiit-text104 {
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .hiit-text106 {
              font-size: 48px;
            }
            .hiit-text107 {
              font-size: 48px;
            }
            .hiit-text-container1 {
              margin-bottom: 0px;
            }
            .hiit-picture {
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .hiit-text113 {
              font-size: 48px;
            }
            .hiit-text114 {
              font-size: 48px;
            }
            .hiit-use-case {
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .hiit-text132 {
              margin-bottom: 0px;
            }
            .hiit-benefits {
              padding-top: var(--dl-space-space-fourunits);
              margin-bottom: 0px;
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .hiit-container18 {
              margin-bottom: 0px;
            }
            .hiit-separator1 {
              height: 80px;
              align-self: flex-end;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .hiit-container19 {
              margin-bottom: 0px;
            }
            .hiit-separator2 {
              width: 50px;
            }
            .hiit-separator3 {
              width: 50px;
            }
            .hiit-separator4 {
              height: 80px;
            }
            .hiit-benefit1 {
              margin-bottom: var(--dl-space-space-fourunits);
              flex-direction: row;
            }
            .hiit-image17 {
              margin-right: var(--dl-space-space-doubleunit);
            }
            .hiit-text141 {
              text-align: justify;
            }
            .hiit-benefit2 {
              margin-bottom: var(--dl-space-space-fourunits);
              flex-direction: row;
            }
            .hiit-image18 {
              margin-left: var(--dl-space-space-doubleunit);
              margin-right: 0px;
            }
            .hiit-text153 {
              text-align: justify;
            }
            .hiit-benefit3 {
              margin-bottom: var(--dl-space-space-fourunits);
              flex-direction: row;
            }
            .hiit-image19 {
              margin-right: var(--dl-space-space-doubleunit);
            }
            .hiit-text157 {
              text-align: justify;
            }
            .hiit-benefit4 {
              flex-direction: row;
            }
            .hiit-image20 {
              margin-left: var(--dl-space-space-doubleunit);
            }
            .hiit-text165 {
              text-align: justify;
            }
            .hiit-heading-container {
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .hiit-text172 {
              text-align: left;
            }
            .hiit-container23 {
              margin-right: var(--dl-space-space-unit);
            }
            .hiit-line1 {
              height: 32px;
            }
            .hiit-text173 {
              margin-top: var(--dl-space-space-fourunits);
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .hiit-container24 {
              margin-right: var(--dl-space-space-unit);
            }
            .hiit-text178 {
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .hiit-container25 {
              margin-right: var(--dl-space-space-unit);
            }
            .hiit-text183 {
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .hiit-image21 {
              flex: auto;
              max-width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Hiit
