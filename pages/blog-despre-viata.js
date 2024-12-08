import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import LoginModal from '../components/login-modal'
import RegisterModal from '../components/register-modal'
import MobileMenu from '../components/mobile-menu'
import Footer from '../components/footer'

const BlogDespreViata = (props) => {
  return (
    <>
      <div className="blog-despre-viata-container1">
        <Head>
          <title>Blog-Despre-viata - Valentin Ignat - Personal Trainer</title>
          <meta
            property="og:title"
            content="Blog-Despre-viata - Valentin Ignat - Personal Trainer"
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
        <main className="blog-despre-viata-main">
          <section className="blog-despre-viata-hero hero-container">
            <div className="blog-despre-viata-max-content max-content-container">
              <div className="blog-despre-viata-container2 animation-fade-in-left">
                <div className="blog-despre-viata-horizontal-line"></div>
                <span className="heading-1 blog-despre-viata-text10">
                  Despre viata
                </span>
                <span className="blog-despre-viata-subtitle">
                  Cum te atasezi cand iei decizii importante?
                </span>
                <div
                  data-goBack="blog-home"
                  data-scrollTo="despre-somn-somnul-de-pranz"
                  className="blog-despre-viata-go-back-container"
                >
                  <Link
                    href="/blog-home"
                    data-goBack="blog-home"
                    data-scrollTo="despre-viata"
                  >
                    <a className="blog-despre-viata-link Button-Text animated-btn btn-secondary">
                      Inapoi la lista articole...
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <div className="blog-despre-viata-articol section-container">
            <div className="blog-despre-viata-container3 max-content-container">
              <span>
                <span>
                  Se spune ca latura ta emotionala se va atasa intotdeauna mai
                  usor de lucrurile care vibreaza cel mai mult cu interesele si
                  nevoile tale.
                </span>
                <br></br>
                <br></br>
                <span>
                  De aici rezulta ca intotdeauna te vei atasa de parerile
                  influencerilor(marketeri, scriitori, actori, artisti etc) care
                  vor fi mai aproape de ceea ce simti sau vrei sa simti si tu.
                  Aici ma refer la a iti lua informatia doar din surse comune:
                  Instagram, TikTok, Youtube, Facebook, fara a le mai verifica
                  sau a cerceta si alta parere.
                </span>
                <br></br>
                <br></br>
                <span>
                  Dar acesti influenceri, la randul lor, teoretic si ei invata
                  lucrurile pe care le promoveaza de la cineva, corect? Pentru
                  ca tot ce este in jurul nostru nu este nou, ci doar uitat de
                  pus in scena momentului.
                </span>
                <br></br>
                <span>
                  Si nu intodeauna, ceea ce vibreaza cu nevoile lor inseamna ca
                  este corect sau se potriveste cu ceea ce este util pentru
                  tine.
                </span>
                <br></br>
                <br></br>
                <br></br>
                <span>
                  Exemplu: Smărăndița o urmareste pe o celebra actrita X care a
                  jucat in filmul ei preferat, cu nota 8,4 pe IMDB. Actrita
                  celebra este inzestrata cu un fund bombat, ca un pepene de
                  Dabuleni de pe vremuri, nu doar mare ci si natural, dar
                  muncit. Actrita posteaza pe instagram ca a obtinut acest fund
                  datorita masajului anticelulitic cu roci vulcanice,
                  antrenamentului vestit de la celebrul antrenor online
                  specializat pe fesieri si al dietei pe baza de rodie, miere cu
                  levantica si apa minerala cu castravete macedonian. Completez
                  ca celebra actrita are si 1 milion de urmaritori.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  Intrebare: pe ce cheltuie urmatorul salariu Smărăndița?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  Consider ca in momentul in care vrei sa afli mai multe despre
                  un domeniu ar fi recomandat sa afli parerea unor specialisti.
                  Nu contest cunostintele unui influencer insa iti recomand sa
                  cercetezi si singur. De exemplu, in domeniul in care activez
                  eu, daca vreau sa aflu cum se face corect o genuflexiune, o sa
                  am grija sa ma documentez din mai multe surse.
                </span>
                <br></br>
                <span>
                  Este adevarat, ca un influencer poate crea awareness despre a
                  face genuflexiuni. Este util ca ai de unde pleca, ca sa te
                  apuci de miscare. Dar la fel de adevarat este si faptul ca
                  genuflexiunea lui/ei poate fi gresita. El/ea este acolo ca sa
                  promoveze, nu ca sa te invete.
                </span>
                <br></br>
                <br></br>
                <span>
                  Asadar, vrei bani mai multi? Atunci invarte-te in grupurile
                  unor afaceristi care stiu sa faca bani. Vrei un corp de
                  bodybuilder? Studiaza parerile unor bodybuilderi
                  profesionisti? Vrei sa inveti sa gatesti? Alatura-te unor
                  bucatari buni. Si lista poate continua.
                </span>
                <br></br>
                <br></br>
                <span>
                  Eu sunt aici ca sa te invat cum sa traiesti mai sanatos, cum
                  sa devii mai activ, cum sa iti schimbi calitatea vietii,
                  simplu si ieftin, fara bullshit si fara sa imi doresc ceva de
                  la tine in schimb.
                </span>
                <br></br>
                <span>
                  Imi doresc sa vad in jurul meu, romanii mei, mai puternici,
                  mai sanatosi, mai disciplinati si determinati sa se faca bine,
                  fara medicamente si fara scurtaturi.
                </span>
                <br></br>
                <br></br>
                <span>“Listening is power”</span>
              </span>
            </div>
          </div>
        </main>
        <Footer rootClassName="footerroot-class-name12"></Footer>
      </div>
      <style jsx>
        {`
          .blog-despre-viata-container1 {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-neutral-black);
          }
          .blog-despre-viata-main {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .blog-despre-viata-hero {
            background-size: cover;
            background-image: url('/Blog/vali-blog.jpeg');
            background-repeat: no-repeat;
            background-position: top;
          }
          .blog-despre-viata-max-content {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-despre-viata-container2 {
            display: flex;
            position: relative;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: column;
          }
          .blog-despre-viata-horizontal-line {
            width: 4px;
            display: flex;
            align-self: stretch;
            margin-right: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-default-primary);
          }
          .blog-despre-viata-subtitle {
            color: var(--dl-color-neutral-white);
            font-size: 36px;
          }
          .blog-despre-viata-go-back-container {
            display: flex;
            flex-direction: column;
          }
          .blog-despre-viata-link {
            width: fit-content;
            margin-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            text-decoration: none;
          }
          .blog-despre-viata-articol {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-neutral-white);
          }
          .blog-despre-viata-container3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          @media (max-width: 767px) {
            .blog-despre-viata-hero {
              background-position: center;
            }
          }
          @media (max-width: 479px) {
            .blog-despre-viata-max-content {
              flex: 1;
              justify-content: flex-end;
            }
            .blog-despre-viata-horizontal-line {
              margin-right: var(--dl-space-space-unit);
            }
            .blog-despre-viata-text10 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
          }
        `}
      </style>
    </>
  )
}

export default BlogDespreViata
