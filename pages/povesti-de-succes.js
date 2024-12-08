import React from 'react'
import Head from 'next/head'

import LoginModal from '../components/login-modal'
import RegisterModal from '../components/register-modal'
import ContactFormModal from '../components/contact-form-modal'
import Navbar from '../components/navbar'
import MobileMenu from '../components/mobile-menu'
import BtnPrimary from '../components/btn-primary'
import ResultsCard from '../components/results-card'
import Footer from '../components/footer'

const PovestiDeSucces = (props) => {
  return (
    <>
      <div className="povesti-de-succes-container1">
        <Head>
          <title>Povesti de succes - Coach Vali Ignat</title>
          <meta
            property="og:title"
            content="Povesti de succes - Coach Vali Ignat"
          />
          <meta property="og:description" content="Listening is power" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0bb31403-1ba8-407c-9d80-4389cc611d8c/2e667c71-2725-4843-8220-8fe9a0708d9d?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <LoginModal rootClassName="login-modalroot-class-name5"></LoginModal>
        <RegisterModal rootClassName="register-modalroot-class-name5"></RegisterModal>
        <ContactFormModal rootClassName="contact-form-modalroot-class-name2"></ContactFormModal>
        <Navbar rootClassName="navbarroot-class-name3"></Navbar>
        <MobileMenu rootClassName="mobile-menuroot-class-name3"></MobileMenu>
        <main className="povesti-de-succes-main">
          <section className="povesti-de-succes-hero hero-container">
            <div className="povesti-de-succes-max-content1 max-content-container">
              <div className="povesti-de-succes-fade-in-left-rich animation-fade-in-left">
                <div className="povesti-de-succes-horizontal-line"></div>
                <div className="povesti-de-succes-container2">
                  <span className="povesti-de-succes-text100 heading-1">
                    <span>
                      POVESTI DE
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="povesti-de-succes-text102">
                      SUCCES
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>CU OAMENI PASIONATI</span>
                  </span>
                  <div
                    data-action="showContactFormModal"
                    className="povesti-de-succes-container3"
                  >
                    <BtnPrimary
                      ctaText="Contacteaza-ma"
                      rootClassName="btn-primaryroot-class-name31"
                    ></BtnPrimary>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="povesti-de-succes-stories section-container">
            <div className="povesti-de-succes-max-content2 max-content-container">
              <h1 className="povesti-de-succes-text104 heading-1">
                PERSONALIZARE. INCREDERE. REZULTATE.
              </h1>
              <div className="povesti-de-succes-cards-container1">
                <div className="povesti-de-succes-mihai">
                  <div className="povesti-de-succes-image10">
                    <img
                      alt="slide-1"
                      src="/mihai-1500h.jpg"
                      className="povesti-de-succes-image11"
                    />
                  </div>
                  <div className="povesti-de-succes-text-container10">
                    <span className="povesti-de-succes-text105 Content-Bold content-bold-white">
                      <span className="povesti-de-succes-text106">
                        - Mihai 
                      </span>
                      <span className="povesti-de-succes-text107">-</span>
                      <br></br>
                      <span>
                        Pe final de 2021 am vrut sa incep mai devreme
                        rezolutiile anului urmator asa ca i-am scris lui Vali pe
                        8 decembrie ca vreau sa ma misc. Stau mult pe scaun si
                        chair daca nu am inca dureri, povestile despre
                        imobilitate ale colegilor cu doar cativa ani mai mari
                        decat mine incepeau sa ma ingrijoreze. Asa ca pe 21
                        Decembrie eram in sala pentru primul antrenament cu
                        Vali. Si de atunci totul e o poveste despre dragoste de
                        sport si miscare.
                      </span>
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
                        Am inceput cu 2 sedinte pe saptamana, jumatate de
                        tractiune si atrenamente care la inceput imi pareau fara
                        vreun impact asupra fizicului meu. Un an mai tarziu, in
                        saptamanile mai libere ajung de 4/5 ori la sala, mi-am
                        atins obiectivul de 10 tractiuni, iar corpul meu imi
                        multumeste zilnic pentru decizia pe care am luat-o prin
                        energie si mobilitate. Pentru toate astea trebuie sa ii
                        multumesc lui Vali pentru perseverenta, motivatie, tact
                        si cunostinte. Acest cumul de factori m-a facut sa
                        indragesc miscarea si sa imi doresc sa merg la sala, sa
                        ma misc sau sa ies macar din casa la o plimbare, cel
                        putin o data pe zi.
                      </span>
                    </span>
                  </div>
                </div>
                <div className="povesti-de-succes-bogdan">
                  <div className="povesti-de-succes-text-container11">
                    <span className="povesti-de-succes-text114 Content-Bold content-bold-white">
                      <span className="povesti-de-succes-text115">
                        - Bogdan -
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span>
                        Lucrez cu Vali de 3 ani. Aveam o reticenta legata de
                        sport si mai ales de sali de sport dupa mai multe
                        experiente esuate.. asa ca nu m-am lasat convins pana
                        cand prietena mea (care lucra cu Vali de ceva vreme)
                        mi-a facut cadou un abonament la el. Am zis ca ii dau o
                        sansa timp de o luna.
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
                        De atunci s-au facut 3 ani fara oprire. Am descoperit un
                        altfel de sport, un stil de viata. Am devenit mai atent
                        cu alimentatia si incerc sa ma tin de antrenamente. Ca
                        sa il descriu pe Vali as zice ca stie sa obtina ce isi
                        propune si cu toate ca de multe ori nu aveam chef de
                        antrenamente, decat sa ma mai “cicaleasca” am preferat
                        sa le fac si nu am regretat niciodata! Keep up with the
                        good work Coach!
                      </span>
                    </span>
                  </div>
                  <div className="povesti-de-succes-image12">
                    <img
                      alt="slide-1"
                      src="/bogdan-600w.jpeg"
                      className="povesti-de-succes-image13"
                    />
                  </div>
                </div>
                <div id="lorena" className="povesti-de-succes-lorena">
                  <div className="povesti-de-succes-image14">
                    <img
                      alt="slide-1"
                      src="/lorena%20b_a-600w.jpg"
                      className="povesti-de-succes-image15"
                    />
                  </div>
                  <div className="povesti-de-succes-text-container12">
                    <span className="povesti-de-succes-text122 Content-Bold content-bold-white">
                      <span className="povesti-de-succes-text123">
                        - Lorena -
                      </span>
                      <br></br>
                      <span>
                        Hmm.. este asa de indepartat inceputul povestii mele cu
                        Coach, incat trebuie sa fac niste eforturi pentru a-mi
                        aminti:D. M-am decis in urma cu vreo 4-5 ani parca... sa
                        nu mai ignor faptul ca am 20 si ceva de ani si obosesc
                        cand urc 10 scari, asa ca printr-o cunostinta comuna am
                        ajuns sa il cunosc pe Vali.
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
                        De atunci lucram impreuna fara pauza:D indiferent de
                        locatie (diferite Sali de-a lungul timpului, apoi in
                        online de cand cu pandemia). Ma intreaba multa lume de
                        ce continui sa lucrez cu antrenor personal avand in
                        vedere ca de atata timp deja stiu sa execut corect
                        exercitiile. E simplu! Daca nu as face cu Vali, nu as
                        face deloc:D. Ma motiveaza si ma face sa fac sport de 4
                        ani constant. Cum? Simplu! Am sa raspund la 2 intrebari
                        deodata: cum ma motiveaza si ce imi place la el:
                        profesionalismul, implicarea si rigurozitatea.
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
                        Povestim si despre alte lucruri in afara de sport,
                        inaintea antrenamentelor, dupa antrenamente, in timpul
                        liber, dar NICIODATA in timpul antrenamentelor (in ciuda
                        incercarilor mele de a mai fura un minut-2 :D). Pare
                        cateodata ca nu este atent la tine.. Ai sa aflii in
                        scurt timp ca te inseli (“ai pauza 2 minute” si in 2
                        minute pe ceas se aude: “Pauza a trecut!”) sau faci 10
                        repetari si la a 11-a nu mai ai chef si o faci pe
                        jumatate si de undeva din podea, din ceruri, de dupa usa
                        (tu nu il vezi deci automat crezi ca nici el nu te vede)
                        : “ AIA NU SE PUNE CA REPETARE!”. Cum l-as descrie pe
                        Coach in 3 cuvinte: profesionalist, ambitios si riguros
                        ( acestea fiind atat calitatile cat si defectele lui in
                        functie de cat chef am de antrenament in acea zi:)))
                        totodata un om cald si prietenos.
                      </span>
                      <br></br>
                      <span></span>
                      <br></br>
                      <span>
                        {' '}
                        Antrenamentele sunt variate, astfel incat nu m-am
                        plictisit de ele de 4 ani ( mare lucru) si faptul ca
                        cineva “ma trage de urechi” constant sa nu abandonez
                        sportul este foarte de ajutor.
                      </span>
                    </span>
                  </div>
                </div>
                <div className="povesti-de-succes-tomi">
                  <div className="povesti-de-succes-text-container13">
                    <span className="povesti-de-succes-text138 Content-Bold content-bold-white">
                      <span className="povesti-de-succes-text139">
                        - Tomi -
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span>
                        Toata viata am facut sport, dar mereu ma accidentam si
                        simteam ca pot imbunatati fizicul si automat
                        performanta, astfel ca m-am gandit sa ma apuc sa merg la
                        sala. Am ales sa incep sa ma antrenez cu Vali in urma
                        unei recomandari de la niste prieteni, dar am continuat
                        sa ma antrenez cu el pentru urmatoarele:
                      </span>
                      <br></br>
                      <span>
                        - omul e un pachet de entuziasm, are pentru toti si
                        toate, deci chiar daca esti la pamant psihic inainte sa
                        incepi antrenamentul, Vali, prin glumele si atitudinea
                        lui, iti da energie sa faci treaba
                      </span>
                      <br></br>
                      <span></span>
                      <span>
                        - Pune suflet in ceea ce face, am simtit ca incearca cu
                        adevarat sa ma cunoasca, sa imi stie limitele la
                        antrenamente, sa imi inteleaga simtul umorului,
                        problemele samd - am simtit ca fiecare atlet primea o
                        experienta proprie, in functie de natura fiecaruia
                      </span>
                      <br></br>
                      <span>
                        - Si-a facut un colectiv fain, clasele lui au fost mereu
                        amuzante si energice, stia sa implice pe toata lumea,
                        fie ca erau pregatiti sau nepregatiti, in forma sau nu
                      </span>
                      <br></br>
                      <span>
                        - M-a ambitionat sa merg mai des la sala si sa fiu mai
                        atent la mancare
                      </span>
                      <br></br>
                      <span></span>
                      <span>
                        - A stat mereu cu gura pe mine si s-a asigurat ca nu
                        chiulesc si ca scot ce-i mai bun din mine
                      </span>
                      <br></br>
                      <span>Mereu o placere, coach.</span>
                    </span>
                  </div>
                  <div className="povesti-de-succes-image16">
                    <img
                      alt="slide-1"
                      src="/tomi%20b_a%20-%20no%20face%202%20-600w.jpg"
                      className="povesti-de-succes-image17"
                    />
                  </div>
                </div>
                <div id="simina" className="povesti-de-succes-simina">
                  <div className="povesti-de-succes-image18">
                    <img
                      alt="slide-1"
                      src="/simina%20b_a%20-%20spate-1500h.jpg"
                      className="povesti-de-succes-image19"
                    />
                  </div>
                  <div className="povesti-de-succes-text-container14">
                    <span className="povesti-de-succes-text156 Content-Bold content-bold-white">
                      <span className="povesti-de-succes-text157">
                        - Simina -
                      </span>
                      <br></br>
                      <span>
                        Valy este coach-ul meu de 4 ani. Din “cauza” lui am
                        strabatut tot Clujul pentru a merge la sala, dupa o
                        viata de sedentarism.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span>​</span>
                      <br></br>
                      <span>
                        Cel mai mult apreciez la el ca a crescut constant in
                        toti acesti ani:ca om si ca antrenor. Imi place mult ca
                        e un om cu o inteligenta emotionala dezvoltata si ca e
                        amuzant. Asta a determinat sa devenim si prieteni.
                      </span>
                      <br></br>
                      <span>
                        A avut abilitatea si rabdarea de a-mi explica constant
                        de ce exercitiile se executa corect intr-un anume mod.
                        Explicatiile lui sunt super logice.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span>​</span>
                      <br></br>
                      <span>
                        E foarte tare cum acum merg singura la sala, fara
                        rusine, cu incredere in mine ca voi executa corect
                        antrenamentul.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span>​</span>
                      <br></br>
                      <span>
                        Imi place mult sentimentul de siguranta pe care il am
                        atunci cand lucrez cu Valy.
                      </span>
                      <br></br>
                      <span></span>
                      <br></br>
                      <span>
                        Am mers la sala pentru a slabi. In timp, mi-am dat seama
                        alaturi de Vali ca sportul inseamna mai mult de atat
                        pentru mine: sportul ma ajuta sa ma simt puternica si
                        este ca o meditatie pentru mine dupa o zi de munca.
                      </span>
                      <br></br>
                      <span>​</span>
                      <br></br>
                      <span>Love it!</span>
                    </span>
                  </div>
                </div>
                <div id="catalina" className="povesti-de-succes-catalina">
                  <div className="povesti-de-succes-text-container15">
                    <span className="povesti-de-succes-text171 Content-Bold content-bold-white">
                      <span className="povesti-de-succes-text172">
                        - Catalina -
                      </span>
                      <br></br>
                      <span>
                        In 2019 m-am hotarat sa fac o schimbare legata de ce tip
                        de miscare sa fac. Pana atunci mergeam la clase de Zumba
                        si Pilates si devenise cam monoton, vroiam ceva mai
                        challenging asa ca m-am dus la o sala cu total alt fel
                        de clase. Acolo l-am cunoscut pe Vali, care facea
                        clasele de HIIT. Mergeam si la alte clase cateodata, dar
                        cel mai des la Vali, pentru ca energia si buna lui
                        dispozitie (inca)e molipsitoare!
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span>​</span>
                      <br></br>
                      <span>
                        In 2020, dupa ce am tot auzit de la prieteni/prietene ca
                        au apelat la un antrenor personal mi-am zis sa incerc si
                        eu(pentru prima oara), si a urmat: &quot;Vali, ai un loc
                        si pentru mine la Personal Training&quot;. Si m-a
                        primit! Decizia asta a fost motivata de cat de mult mi-a
                        placut la clasele lui si de ce om fain este.
                      </span>
                      <br></br>
                      <span>
                        De-atunci orele de PT au fost din ce in ce mai faine si
                        pentru ca incepeam sa progresez, dar si pentru ca
                        incepeam sa descopar tot mai multe lucruri bune despre
                        Vali.
                      </span>
                      <br></br>
                      <span>​</span>
                      <br></br>
                      <span>
                        Pentru mine Vali e un antrenor complet: se intereseaza
                        de obiectivele fiecaruia si lucreaza cu fiecare pe baza
                        obiectivelor, e atent permanent la cum execut
                        exercitiile/miscarile si are rabdare sa explice ce vrea
                        sa zica de cate ori e nevoie pana inteleg, isi motiveaza
                        alegerile legate de exercitii, imi raspunde la orice
                        intrebare am, ma motiveaza prin felul lui de a fi si
                        prin faptul ca se bucura si el cu mine cand progresez, e
                        foarte implicat, se documenteaza continuu, m-a invatat
                        sa ma descurc si singura in sala, si bonus pentru
                        cititori: are si simtul umorului! :D
                      </span>
                      <br></br>
                      <span>
                        Din 2020 pana azi: am devenit mai puternica, am mai
                        multa incredere in mine, sunt mult mai activa si fac
                        asta cu placere, simt ca sunt in cea mai buna forma a
                        mea de pana acum, si-n plus sunt mai bogata ca l-am
                        cunoscut pe Vali si pe colegii de echipa.
                      </span>
                      <br></br>
                      <span></span>
                      <br></br>
                      <span>Multumesc inca o data, Vali!</span>
                    </span>
                  </div>
                  <div className="povesti-de-succes-image20">
                    <img
                      alt="slide-1"
                      src="/catalina%20b_a-1500h.jpg"
                      className="povesti-de-succes-image21"
                    />
                  </div>
                </div>
                <div className="povesti-de-succes-mihaela-fara-ba">
                  <div className="povesti-de-succes-image22">
                    <img
                      alt="slide-1"
                      src="/34249831-1500w.jpg"
                      className="povesti-de-succes-image23"
                    />
                  </div>
                  <div className="povesti-de-succes-text-container16">
                    <span className="povesti-de-succes-text183 Content-Bold content-bold-white">
                      <span className="povesti-de-succes-text184">
                        - Mihaela -
                      </span>
                      <br></br>
                      <span>
                        Am început sa merg la sala cu Vali antrenor dintr-o
                        întâmplare, împreuna cu o prietena. Am pornit cu mult
                        scepticism și aproximativ 7 kg “in plus “ rămase de la
                        ultima sarcina. Eu făceam sport constant urmând tot
                        felul de aplicații si programe însă rezultatele erau
                        mediocre si de aici si neîncrederea cu care am început
                        colaborarea cu Vali. Primele ședințe mi s-au părut “
                        neimpresionante “ pentru ca eu știam mai bine, aveam o
                        vasta experiența acumulata după ani de sport acasă:).
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
                        După o luna am început sa văd deja rezultate concrete si
                        sa văd sensul in spatele exercițiilor gândite de Vali.
                        Explicațiile care însoteau exercitiile aveau sens,
                        seriile alese erau gândite si integrate intr- un plan
                        conceput special pentru corpul meu. Așa am căpătat
                        încredere in Vali si in programul pe care îl urmam.
                        Motivația a devenit mai puternica si a ajutat mult si ca
                        Vali ma împingea de la spate când încercam sa încetinesc
                        ritmul. Pe scurt, 5 luni , 7 kg slăbite frumos, constant
                        si schimbări vizibile pentru mine si cei din jur. In
                        consecință au urmat colaborarea cu Vali soțul si fiica
                        mea de 13 ani, fiecare cu targeturi diferite însă ambii
                        cu rezultate clare. Fiica mea urmează in prezent un
                        program acasă cu exerciții înregistrate in prealabil ,
                        scopul fiind sa crească frumos, cu o postura corecta și
                        sa își întărească musculatura.
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
                        Vali poate gândi programe pentru toată familia, la noi a
                        funcționat mai bine decât orice altceva am încercat !
                      </span>
                      <br></br>
                      <span></span>
                    </span>
                  </div>
                </div>
                <div className="povesti-de-succes-romana-fara-ba">
                  <div className="povesti-de-succes-text-container17">
                    <span className="povesti-de-succes-text195 Content-Bold content-bold-white">
                      <span className="povesti-de-succes-text196">
                        - Romana -
                      </span>
                      <br></br>
                      <span>
                        Cum a inceput povestea noastra? As putea spune ca nimic
                        nu e intamplator…:). Vali mi-a fost recomandat ca fiind
                        „cel care va reusi sa puna capat“ durerilor de care
                        sufeream, pricinuite de o hernie de disc. A trecut
                        aproape un an de cand ne antrenam, ma simt mai bine ca
                        niciodata, puternica, increzatoare si vesela:). O
                        eticheta pentru Vali: „3H coach: HEALTHFUL, HAPPY,
                        HERO“.
                      </span>
                      <br></br>
                      <span></span>
                    </span>
                  </div>
                  <div className="povesti-de-succes-image24">
                    <img
                      alt="slide-1"
                      src="/34249831-1500w.jpg"
                      className="povesti-de-succes-image25"
                    />
                  </div>
                </div>
                <div className="povesti-de-succes-andra-fara-ba1">
                  <div className="povesti-de-succes-image26">
                    <img
                      alt="slide-1"
                      src="/34249831-1500w.jpg"
                      className="povesti-de-succes-image27"
                    />
                  </div>
                  <div className="povesti-de-succes-text-container18">
                    <span className="povesti-de-succes-text200 Content-Bold content-bold-white">
                      <span className="povesti-de-succes-text201">- Andra</span>
                      <span className="povesti-de-succes-text202"> -</span>
                      <br></br>
                      <span>
                        În cele câteva luni de când lucrez cu Vali pot spune că
                        am găsit mai mult decât un clasic “personal trainer”.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span></span>
                      <br></br>
                      <span>Î</span>
                      <span>
                        n primul rând l-am ales pe Vali datorită modului în care
                        abordează așa zisele probleme cu care ne confruntăm.
                        Situația în care mă aflu m-a obligat să aleg un antrenor
                        care sa îmi înțeleagă problema și care să aibă
                        informațiile necesare să mă ajute. Așa am ajuns la Vali,
                        care este mai mult decât căutam. Am găsit un om care
                        înțelege că avem și zile mai proaste, dispus să îți
                        adapteze antrenamentul, să îți ofere o vorba bună și o
                        încurajare.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span></span>
                      <br></br>
                      <span>P</span>
                      <span>
                        ot spune că merg cu drag la sală și asta datorită
                        faptului că am găsit mai mult decât un antrenor, am
                        găsit un prieten, un om care îți face ziua mai bună prin
                        energia pe care o emana, care te face să iubești
                        sportul. Dacă ar trebui să îl descriu în cateva cuvinte,
                        aș alege: motivație, determinare, înțelegere.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span></span>
                      <br></br>
                      <span>M</span>
                      <span>
                        ultumesc Vali și sper să avem o colaborare cat mai
                        lungă!
                      </span>
                      <br></br>
                      <span></span>
                    </span>
                  </div>
                </div>
                <div className="povesti-de-succes-flavius-fara-ba">
                  <div className="povesti-de-succes-text-container19">
                    <span className="povesti-de-succes-text221 Content-Bold content-bold-white">
                      <span className="povesti-de-succes-text222">
                        - Flavius -
                      </span>
                      <br></br>
                      <span>
                        Am mai puțin de 1 an de când am început colaborarea cu
                        Vali, însă rezultatele s-au simțit din prima luna. Fără
                        dureri, accidentări sau alte compromisuri. Este un
                        antrenor care știe să adapteze exercițiile in funcție de
                        necesitățile tale și lucrează alături de tine pentru a
                        obține rezultate mai bune de fiecare data.
                      </span>
                      <br></br>
                      <span>​</span>
                      <br></br>
                      <span>
                        Antrenamentele cu Vali sunt solicitante, dar și pline de
                        umor și conversații interesante, lucru care transformă
                        mersul la sala dintr-o nevoie, într-o plăcere.
                      </span>
                      <br></br>
                      <span>​</span>
                      <br></br>
                      <span>Îl recomand cu drag!</span>
                    </span>
                  </div>
                  <div className="povesti-de-succes-image28">
                    <img
                      alt="slide-1"
                      src="/563e40decded5f3624a0d05fd48bc02c-1500h.jpg"
                      className="povesti-de-succes-image29"
                    />
                  </div>
                </div>
                <div className="povesti-de-succes-andra-fara-ba2">
                  <div className="povesti-de-succes-image30">
                    <img
                      alt="slide-1"
                      src="/whatsapp%20image%202022-04-19%20at%2010.31.40%20am-1500h.jpeg"
                      className="povesti-de-succes-image31"
                    />
                  </div>
                  <div className="povesti-de-succes-text-container20">
                    <span className="povesti-de-succes-text228 Content-Bold content-bold-white">
                      <span className="povesti-de-succes-text229">
                        - Miruna -
                      </span>
                      <br></br>
                      <span>
                        Ma antrenez cu Vali de un an si un pic ,insa ne
                        cunoastem de vreo 5 ani ,dintr-o alta sala unde eu si
                        sotul meu aveam alt antrenor .
                      </span>
                      <br></br>
                      <span></span>
                      <br></br>
                      <span>
                        {' '}
                        Mi-am dorit mereu sa ma antrenez cu Vali dar din respect
                        pentru celalalt antrenor nu am actionat .
                      </span>
                      <br></br>
                      <span></span>
                      <br></br>
                      <span>
                        “Noroc”cu pandemia ca am luat o pauza fortata de la
                        sport si intre timp am inceput sa il urmaresc pe Vali in
                        noua sala unde antrena si mi-am propus ca in momentul
                        cand ma intorc la sport, Vali o sa fie antrenorul nostru
                        .
                      </span>
                      <br></br>
                      <span></span>
                      <br></br>
                      <span>
                        {' '}
                        Una din cele mai bune decizii pentru mine si pentru
                        sotul meu .Am avut un an in care am avut grija de noi
                        ,Vali ne-a invatat sa iubim sportul si Ora de
                        antrenament sa fie cel mai bun moment al zilei .Ne-am
                        trecut peste limite ,am invatat sa facem sport corect
                        iar in acest an si eu si sotul meu am fost in cea mai
                        buna forma a noastra, atat de buna incat ne-a surprins
                        si cel de-al treilea membru al familiei si acum asteptam
                        o fetita .
                      </span>
                      <br></br>
                      <span></span>
                      <br></br>
                      <span>
                        Asta nu inseamna ca am renuntat la sport,absolut deloc
                        sunt intr-o forma foarte buna si nu o sa mai renunt la
                        sport niciodata iar pentru asta Multumesc Vali !
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-container">
            <div className="povesti-de-succes-max-content3 max-content-container">
              <div className="povesti-de-succes-cards-container2">
                <ResultsCard
                  name="Costin"
                  imageSrc="/costin-300h.png"
                  rootClassName="results-cardroot-class-name"
                ></ResultsCard>
                <ResultsCard
                  name="Rares"
                  text="Daca vrei un antrenor sufletist, glumet, serios cand trebuie, care sa te motiveze sa te autodepasesti, care iti insufla dragoste pentru miscare, merita sa ii dai o sansa lui Vali. Modeleaza antrenamentele in functie de eventualele tale probleme, spre exemplu pe mine antrenamentele cu el m-au scapat de durerile de spate care ma imobilizau uneori. Atentie marita, omu' are ochi de vultur, te vede si din vestiar daca stai, si inca ceva, a fost atent la matematica, stie sa numere bine, deci grija mare cu furatu' la repetari."
                  imageSrc="/rares-300h.png"
                  rootClassName="results-cardroot-class-name1"
                ></ResultsCard>
                <ResultsCard
                  name="Andra"
                  text='Datorita lui Vali si datorita profesionalismului si stilului exemplar de antrenament, am descoperit o noua pasiune a mea "SPORTUL SI STILUL DE VIATA SANATOS". Iti multumesc pentru increderea si motivarea pe care mi-o inspiri la fiecare antrenament. "POWER VALI"!'
                  rootClassName="results-cardroot-class-name2"
                ></ResultsCard>
                <ResultsCard
                  name="Simina"
                  text="Pe langa faptul ca este un profesionist, Vali este si un om foarte fain! Daca simti ca nu vei ajunge vreodata sa mergi cu drag la sala e pentru ca nu l-ai cunoscut pe Vali! Profesionalism (antrenor) + multa transpiratie (client) + good vibes = antrenamente cu Vali"
                  imageSrc="/simina-300h.png"
                  rootClassName="results-cardroot-class-name3"
                ></ResultsCard>
                <ResultsCard
                  name="Dragos"
                  text="Cand am intrat prima data la Gym veneam dupa o accidentare la genunchi, aveam cateva kg in plus. Pana atunci mai mergeam la sala dar renuntam dupa 1-2 luni. Totul s-a schimbat de cand ma antrenez cu Vali! Antrenamente care iti fac placere, ai langa tine un motivator iar de 2 ani nu am renuntat! Sa nu mai spun ca e extrem de adaptabil la cerintele mele - fiind plecat de multe ori. Super om, super antrenor!"
                  imageSrc="/dragos-300h.png"
                  rootClassName="results-cardroot-class-name6"
                ></ResultsCard>
                <ResultsCard
                  name="Andrei"
                  text="Un antrenor foarte dedicat, profesionist, mereu atent si adaptat la cerintele clientului. Felul prin care iti transmite energia si pasiunea pentru sport il face pe Vali sa se detaseze cu mult fata de restul. Un super om, un super prieten."
                  imageSrc="/andrei-300h.png"
                  rootClassName="results-cardroot-class-name7"
                ></ResultsCard>
                <ResultsCard
                  name="Cristina"
                  text="Dupa multi ani de cautari si incercari l-am gasit pe Vali, singurul antrenor care a reusit sa ma faca sa ma tin de sport... si uite asa ne antrenam de aproape 2 ani. Iti multumesc din suflet si.... never give up, it is a promise!"
                  imageSrc="/cristina-300h.png"
                  rootClassName="results-cardroot-class-name8"
                ></ResultsCard>
                <ResultsCard
                  name="Oana"
                  text="Un antrenor extrem de implicat, pe care il simti alaturi la fiecare pas. Transmite pasiunea pentru sport si te motiveaza din nou si din nou si din nou... Recomand fara emotii!"
                  imageSrc="/oana1-300h.png"
                  rootClassName="results-cardroot-class-name4"
                ></ResultsCard>
                <ResultsCard
                  name="Mihaela"
                  text="Foarte implicat, am obtinut rezultate in timp scurt"
                  imageSrc="/mihaela-300h.png"
                  rootClassName="results-cardroot-class-name5"
                ></ResultsCard>
              </div>
            </div>
          </div>
        </main>
        <Footer rootClassName="footerroot-class-name3"></Footer>
      </div>
      <style jsx>
        {`
          .povesti-de-succes-container1 {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-neutral-black);
          }
          .povesti-de-succes-main {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .povesti-de-succes-hero {
            background-image: url('/img_9828-1500h.jpg');
          }
          .povesti-de-succes-max-content1 {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .povesti-de-succes-fade-in-left-rich {
            display: flex;
            position: relative;
            justify-content: flex-end;
          }
          .povesti-de-succes-horizontal-line {
            width: 4px;
            display: flex;
            align-self: stretch;
            margin-right: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-default-primary);
          }
          .povesti-de-succes-container2 {
            display: flex;
            padding-top: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .povesti-de-succes-text100 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .povesti-de-succes-text102 {
            color: var(--dl-color-default-primary);
          }
          .povesti-de-succes-container3 {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .povesti-de-succes-stories {
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .povesti-de-succes-max-content2 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .povesti-de-succes-text104 {
            width: 100%;
            font-size: 45px;
            text-align: center;
          }
          .povesti-de-succes-cards-container1 {
            gap: 64px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            flex-wrap: wrap;
            align-items: stretch;
            padding-top: var(--dl-space-space-eightunits);
            flex-direction: row;
            justify-content: center;
          }
          .povesti-de-succes-mihai {
            display: flex;
            flex-direction: row-reverse;
          }
          .povesti-de-succes-image10 {
            flex: 0 0 auto;
            width: var(--dl-size-size-half);
            display: flex;
            overflow: hidden;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .povesti-de-succes-image11 {
            width: 100%;
            min-width: 550px;
            transform: scale(1);
            object-fit: contain;
            transition: transform 0.5s;
            flex-shrink: 0;
            object-position: bottom;
            transform-origin: center center;
            scroll-snap-align: start;
          }
          .povesti-de-succes-text-container10 {
            flex: 1;
            display: flex;
            align-self: center;
            align-items: flex-start;
            padding-top: var(--dl-space-space-eightunits);
            margin-right: var(--dl-space-space-eightunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-eightunits);
          }
          .povesti-de-succes-text105 {
            font-size: 16px;
            margin-top: var(--dl-space-space-fourunits);
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .povesti-de-succes-text106 {
            color: var(--dl-color-default-primary);
            font-style: normal;
            font-weight: 700;
          }
          .povesti-de-succes-text107 {
            color: var(--dl-color-default-primary);
            font-style: normal;
            font-weight: 700;
          }
          .povesti-de-succes-bogdan {
            display: flex;
            flex-direction: row-reverse;
          }
          .povesti-de-succes-text-container11 {
            flex: 1;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-left: var(--dl-space-space-eightunits);
            padding-top: var(--dl-space-space-eightunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-eightunits);
          }
          .povesti-de-succes-text114 {
            font-size: 16px;
            margin-top: var(--dl-space-space-fourunits);
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .povesti-de-succes-text115 {
            color: var(--dl-color-default-primary);
            font-style: normal;
            font-weight: 700;
          }
          .povesti-de-succes-image12 {
            flex: 0 0 auto;
            width: var(--dl-size-size-half);
            display: flex;
            overflow: hidden;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .povesti-de-succes-image13 {
            width: 100%;
            min-width: 550px;
            transform: scale(1);
            object-fit: contain;
            transition: transform 0.5s;
            flex-shrink: 0;
            object-position: bottom;
            transform-origin: center center;
            scroll-snap-align: start;
          }
          .povesti-de-succes-lorena {
            display: flex;
            flex-direction: row-reverse;
          }
          .povesti-de-succes-image14 {
            flex: 0 0 auto;
            width: var(--dl-size-size-half);
            display: flex;
            overflow: hidden;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .povesti-de-succes-image15 {
            width: 100%;
            min-width: 550px;
            transform: scale(1);
            object-fit: contain;
            transition: transform 0.5s;
            flex-shrink: 0;
            object-position: bottom;
            transform-origin: center center;
            scroll-snap-align: start;
          }
          .povesti-de-succes-text-container12 {
            flex: 1;
            display: flex;
            align-self: center;
            align-items: flex-start;
            padding-top: var(--dl-space-space-eightunits);
            margin-right: var(--dl-space-space-eightunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-eightunits);
          }
          .povesti-de-succes-text122 {
            font-size: 16px;
            margin-top: var(--dl-space-space-fourunits);
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .povesti-de-succes-text123 {
            color: var(--dl-color-default-primary);
            font-style: normal;
            font-weight: 700;
          }
          .povesti-de-succes-tomi {
            display: flex;
            flex-direction: row-reverse;
          }
          .povesti-de-succes-text-container13 {
            flex: 1;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-left: var(--dl-space-space-eightunits);
            padding-top: var(--dl-space-space-eightunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-eightunits);
          }
          .povesti-de-succes-text138 {
            font-size: 16px;
            margin-top: var(--dl-space-space-fourunits);
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .povesti-de-succes-text139 {
            color: var(--dl-color-default-primary);
            font-style: normal;
            font-weight: 700;
          }
          .povesti-de-succes-image16 {
            flex: 0 0 auto;
            width: var(--dl-size-size-half);
            display: flex;
            overflow: hidden;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .povesti-de-succes-image17 {
            width: 100%;
            min-width: 550px;
            transform: scale(1);
            object-fit: contain;
            transition: transform 0.5s;
            flex-shrink: 0;
            object-position: bottom;
            transform-origin: center center;
            scroll-snap-align: start;
          }
          .povesti-de-succes-simina {
            display: flex;
            flex-direction: row-reverse;
          }
          .povesti-de-succes-image18 {
            flex: 0 0 auto;
            width: var(--dl-size-size-half);
            display: flex;
            overflow: hidden;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .povesti-de-succes-image19 {
            width: 100%;
            min-width: 550px;
            transform: scale(1);
            object-fit: contain;
            transition: transform 0.5s;
            flex-shrink: 0;
            object-position: bottom;
            transform-origin: center center;
            scroll-snap-align: start;
          }
          .povesti-de-succes-text-container14 {
            flex: 1;
            display: flex;
            align-self: center;
            align-items: flex-start;
            padding-top: var(--dl-space-space-eightunits);
            margin-right: var(--dl-space-space-eightunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-eightunits);
          }
          .povesti-de-succes-text156 {
            font-size: 16px;
            margin-top: var(--dl-space-space-fourunits);
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .povesti-de-succes-text157 {
            color: var(--dl-color-default-primary);
            font-style: normal;
            font-weight: 700;
          }
          .povesti-de-succes-catalina {
            display: flex;
            flex-direction: row-reverse;
          }
          .povesti-de-succes-text-container15 {
            flex: 1;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-left: var(--dl-space-space-eightunits);
            padding-top: var(--dl-space-space-eightunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-eightunits);
          }
          .povesti-de-succes-text171 {
            font-size: 16px;
            margin-top: var(--dl-space-space-fourunits);
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .povesti-de-succes-text172 {
            color: var(--dl-color-default-primary);
            font-style: normal;
            font-weight: 700;
          }
          .povesti-de-succes-image20 {
            flex: 0 0 auto;
            width: var(--dl-size-size-half);
            display: flex;
            overflow: hidden;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .povesti-de-succes-image21 {
            width: 100%;
            min-width: 550px;
            transform: scale(1);
            object-fit: contain;
            transition: transform 0.5s;
            flex-shrink: 0;
            object-position: bottom;
            transform-origin: center center;
            scroll-snap-align: start;
          }
          .povesti-de-succes-mihaela-fara-ba {
            display: flex;
            flex-direction: row-reverse;
          }
          .povesti-de-succes-image22 {
            flex: 0 0 auto;
            width: var(--dl-size-size-half);
            display: flex;
            overflow: hidden;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .povesti-de-succes-image23 {
            width: 100%;
            min-width: 550px;
            transform: scale(1);
            object-fit: contain;
            transition: transform 0.5s;
            flex-shrink: 0;
            object-position: bottom;
            transform-origin: center center;
            scroll-snap-align: start;
          }
          .povesti-de-succes-text-container16 {
            flex: 1;
            display: flex;
            align-self: center;
            align-items: flex-start;
            padding-top: var(--dl-space-space-eightunits);
            margin-right: var(--dl-space-space-eightunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-eightunits);
          }
          .povesti-de-succes-text183 {
            font-size: 16px;
            margin-top: var(--dl-space-space-fourunits);
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .povesti-de-succes-text184 {
            color: var(--dl-color-default-primary);
            font-style: normal;
            font-weight: 700;
          }
          .povesti-de-succes-romana-fara-ba {
            display: flex;
            flex-direction: row-reverse;
          }
          .povesti-de-succes-text-container17 {
            flex: 1;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-left: var(--dl-space-space-eightunits);
            padding-top: var(--dl-space-space-eightunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-eightunits);
          }
          .povesti-de-succes-text195 {
            font-size: 16px;
            margin-top: var(--dl-space-space-fourunits);
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .povesti-de-succes-text196 {
            color: var(--dl-color-default-primary);
            font-style: normal;
            font-weight: 700;
          }
          .povesti-de-succes-image24 {
            flex: 0 0 auto;
            width: var(--dl-size-size-half);
            display: flex;
            overflow: hidden;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .povesti-de-succes-image25 {
            width: 100%;
            min-width: 550px;
            transform: scale(1);
            object-fit: contain;
            transition: transform 0.5s;
            flex-shrink: 0;
            object-position: bottom;
            transform-origin: center center;
            scroll-snap-align: start;
          }
          .povesti-de-succes-andra-fara-ba1 {
            display: flex;
            flex-direction: row-reverse;
          }
          .povesti-de-succes-image26 {
            flex: 0 0 auto;
            width: var(--dl-size-size-half);
            display: flex;
            overflow: hidden;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .povesti-de-succes-image27 {
            width: 100%;
            min-width: 550px;
            transform: scale(1);
            object-fit: contain;
            transition: transform 0.5s;
            flex-shrink: 0;
            object-position: bottom;
            transform-origin: center center;
            scroll-snap-align: start;
          }
          .povesti-de-succes-text-container18 {
            flex: 1;
            display: flex;
            align-self: center;
            align-items: flex-start;
            padding-top: var(--dl-space-space-eightunits);
            margin-right: var(--dl-space-space-eightunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-eightunits);
          }
          .povesti-de-succes-text200 {
            font-size: 16px;
            margin-top: var(--dl-space-space-fourunits);
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .povesti-de-succes-text201 {
            color: var(--dl-color-default-primary);
            font-style: normal;
            font-weight: 700;
          }
          .povesti-de-succes-text202 {
            color: var(--dl-color-default-primary);
            font-style: normal;
            font-weight: 700;
          }
          .povesti-de-succes-flavius-fara-ba {
            display: flex;
            flex-direction: row-reverse;
          }
          .povesti-de-succes-text-container19 {
            flex: 1;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-left: var(--dl-space-space-eightunits);
            padding-top: var(--dl-space-space-eightunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-eightunits);
          }
          .povesti-de-succes-text221 {
            font-size: 16px;
            margin-top: var(--dl-space-space-fourunits);
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .povesti-de-succes-text222 {
            color: var(--dl-color-default-primary);
          }
          .povesti-de-succes-image28 {
            flex: 0 0 auto;
            width: var(--dl-size-size-half);
            display: flex;
            overflow: hidden;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .povesti-de-succes-image29 {
            width: 100%;
            min-width: 550px;
            transform: scale(1);
            object-fit: contain;
            transition: transform 0.5s;
            flex-shrink: 0;
            object-position: bottom;
            transform-origin: center center;
            scroll-snap-align: start;
          }
          .povesti-de-succes-andra-fara-ba2 {
            display: flex;
            flex-direction: row-reverse;
          }
          .povesti-de-succes-image30 {
            flex: 0 0 auto;
            width: var(--dl-size-size-half);
            display: flex;
            overflow: hidden;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .povesti-de-succes-image31 {
            width: 100%;
            min-width: 550px;
            transform: scale(1);
            object-fit: contain;
            transition: transform 0.5s;
            flex-shrink: 0;
            object-position: bottom;
            transform-origin: center center;
            scroll-snap-align: start;
          }
          .povesti-de-succes-text-container20 {
            flex: 1;
            display: flex;
            align-self: center;
            align-items: flex-start;
            padding-top: var(--dl-space-space-eightunits);
            margin-right: var(--dl-space-space-eightunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-eightunits);
          }
          .povesti-de-succes-text228 {
            font-size: 16px;
            margin-top: var(--dl-space-space-fourunits);
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .povesti-de-succes-text229 {
            color: var(--dl-color-default-primary);
          }
          .povesti-de-succes-max-content3 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .povesti-de-succes-cards-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            flex-wrap: wrap;
            align-items: stretch;
            padding-top: var(--dl-space-space-eightunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-eightunits);
            justify-content: space-between;
          }
          @media (max-width: 991px) {
            .povesti-de-succes-max-content2 {
              flex-direction: column;
            }
            .povesti-de-succes-cards-container1 {
              justify-content: center;
            }
          }
          @media (max-width: 767px) {
            .povesti-de-succes-hero {
              background-size: contain;
              background-repeat: no-repeat;
              background-position: top;
              background-attachment: initial;
            }
            .povesti-de-succes-max-content2 {
              flex-direction: column;
            }
            .povesti-de-succes-cards-container1 {
              gap: 32px;
            }
            .povesti-de-succes-mihai {
              flex-direction: column;
            }
            .povesti-de-succes-image10 {
              width: 100%;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .povesti-de-succes-image11 {
              min-width: 300px;
            }
            .povesti-de-succes-text-container10 {
              align-items: flex-start;
              padding-top: 0;
              margin-right: 0px;
              padding-bottom: 0;
            }
            .povesti-de-succes-text105 {
              margin-top: 0px;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .povesti-de-succes-bogdan {
              flex-direction: column-reverse;
            }
            .povesti-de-succes-text-container11 {
              align-items: flex-start;
              margin-left: 0px;
              padding-top: 0;
              margin-right: 0px;
              padding-bottom: 0;
            }
            .povesti-de-succes-text114 {
              margin-top: 0px;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .povesti-de-succes-image12 {
              width: 100%;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .povesti-de-succes-image13 {
              min-width: 300px;
            }
            .povesti-de-succes-lorena {
              flex-direction: column;
            }
            .povesti-de-succes-image14 {
              width: 100%;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .povesti-de-succes-image15 {
              min-width: 300px;
            }
            .povesti-de-succes-text-container12 {
              align-items: flex-start;
              padding-top: 0;
              margin-right: 0px;
              padding-bottom: 0;
            }
            .povesti-de-succes-text122 {
              margin-top: 0px;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .povesti-de-succes-tomi {
              flex-direction: column-reverse;
            }
            .povesti-de-succes-text-container13 {
              align-items: flex-start;
              margin-left: 0px;
              padding-top: 0;
              margin-right: 0px;
              padding-bottom: 0;
            }
            .povesti-de-succes-text138 {
              margin-top: 0px;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .povesti-de-succes-image16 {
              width: 100%;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .povesti-de-succes-image17 {
              min-width: 300px;
            }
            .povesti-de-succes-simina {
              flex-direction: column;
            }
            .povesti-de-succes-image18 {
              width: 100%;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .povesti-de-succes-image19 {
              min-width: 300px;
            }
            .povesti-de-succes-text-container14 {
              align-items: flex-start;
              padding-top: 0;
              margin-right: 0px;
              padding-bottom: 0;
            }
            .povesti-de-succes-text156 {
              margin-top: 0px;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .povesti-de-succes-catalina {
              flex-direction: column-reverse;
            }
            .povesti-de-succes-text-container15 {
              align-items: flex-start;
              margin-left: 0px;
              padding-top: 0;
              margin-right: 0px;
              padding-bottom: 0;
            }
            .povesti-de-succes-text171 {
              margin-top: 0px;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .povesti-de-succes-image20 {
              width: 100%;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .povesti-de-succes-image21 {
              min-width: 300px;
            }
            .povesti-de-succes-mihaela-fara-ba {
              flex-direction: column;
            }
            .povesti-de-succes-image22 {
              width: 100%;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .povesti-de-succes-image23 {
              min-width: 300px;
            }
            .povesti-de-succes-text-container16 {
              align-items: flex-start;
              padding-top: 0;
              margin-right: 0px;
              padding-bottom: 0;
            }
            .povesti-de-succes-text183 {
              margin-top: 0px;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .povesti-de-succes-romana-fara-ba {
              flex-direction: column-reverse;
            }
            .povesti-de-succes-text-container17 {
              align-items: flex-start;
              margin-left: 0px;
              padding-top: 0;
              margin-right: 0px;
              padding-bottom: 0;
            }
            .povesti-de-succes-text195 {
              margin-top: 0px;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .povesti-de-succes-image24 {
              width: 100%;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .povesti-de-succes-image25 {
              min-width: 300px;
            }
            .povesti-de-succes-andra-fara-ba1 {
              flex-direction: column;
            }
            .povesti-de-succes-image26 {
              width: 100%;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .povesti-de-succes-image27 {
              min-width: 300px;
            }
            .povesti-de-succes-text-container18 {
              align-items: flex-start;
              padding-top: 0;
              margin-right: 0px;
              padding-bottom: 0;
            }
            .povesti-de-succes-text200 {
              margin-top: 0px;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .povesti-de-succes-flavius-fara-ba {
              flex-direction: column-reverse;
            }
            .povesti-de-succes-text-container19 {
              align-items: flex-start;
              margin-left: 0px;
              padding-top: 0;
              margin-right: 0px;
              padding-bottom: 0;
            }
            .povesti-de-succes-text221 {
              margin-top: 0px;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .povesti-de-succes-image28 {
              width: 100%;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .povesti-de-succes-image29 {
              min-width: 300px;
            }
            .povesti-de-succes-andra-fara-ba2 {
              flex-direction: column;
            }
            .povesti-de-succes-image30 {
              width: 100%;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .povesti-de-succes-image31 {
              min-width: 300px;
            }
            .povesti-de-succes-text-container20 {
              align-items: flex-start;
              padding-top: 0;
              margin-right: 0px;
              padding-bottom: 0;
            }
            .povesti-de-succes-text228 {
              margin-top: 0px;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .povesti-de-succes-cards-container2 {
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .povesti-de-succes-hero {
              background-size: cover;
              background-position: left;
            }
            .povesti-de-succes-horizontal-line {
              margin-right: var(--dl-space-space-unit);
            }
            .povesti-de-succes-text100 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .povesti-de-succes-text104 {
              font-size: 36px;
            }
            .povesti-de-succes-cards-container1 {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .povesti-de-succes-cards-container2 {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default PovestiDeSucces
