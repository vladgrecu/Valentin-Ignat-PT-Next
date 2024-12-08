import React from 'react'

import PropTypes from 'prop-types'

const CarrouselWithText = (props) => {
  return (
    <>
      <div
        data-role="carrousel"
        className={`carrousel-with-text-carrousel ${props.rootClassName} `}
      >
        <div className="carrousel-with-text-slider">
          <div className="carrousel-with-text-slides slides-container">
            <img
              alt="slide-1"
              src={props.slideOneSrc}
              data-slide-index="0"
              className="carrousel-slide slide-active animation-fade-in"
            />
            <img
              alt="slide-1"
              src={props.slideTwoSrc}
              data-slide-index="1"
              className="carrousel-with-text-image2 carrousel-slide animation-fade-in"
            />
            <img
              alt="slide-1"
              src={props.slideThreeSrc}
              data-slide-index="2"
              className="carrousel-with-text-image3 carrousel-slide animation-fade-in"
            />
          </div>
          <div className="carrousel-controls-container">
            <div data-slide-index="0" className="carrousel-control-btn">
              <div className="carrousel-with-text-bullet-content1 tl-bullet-active tl-bullet">
                <div className="tl-inner-active inner-white"></div>
              </div>
              <div className="tl-bullet-inner"></div>
            </div>
            <div className="carrousel-with-text-line1 tl-line"></div>
            <div data-slide-index="1" className="carrousel-control-btn">
              <div className="carrousel-with-text-bullet-content2 tl-bullet">
                <div className="inner-white"></div>
              </div>
              <div className="tl-bullet-inner"></div>
            </div>
            <div className="carrousel-with-text-line2 tl-line"></div>
            <div data-slide-index="2" className="carrousel-control-btn">
              <div className="carrousel-with-text-bullet-content3 tl-bullet">
                <div className="inner-white"></div>
              </div>
              <div className="tl-bullet-inner"></div>
            </div>
          </div>
        </div>
        <div className="carrousel-with-text-text-container">
          <span
            data-slide-index="0"
            className="carrousel-text slide-active animation-fade-in Content-Bold content-bold-white"
          >
            {props.slideOneText}
          </span>
          <span
            data-slide-index="1"
            className="carrousel-text animation-fade-in Content-Bold content-bold-white"
          >
            {props.slideTwoText}
          </span>
          <span
            data-slide-index="2"
            className="carrousel-text animation-fade-in Content-Bold content-bold-white"
          >
            {props.slideThreeText}
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .carrousel-with-text-carrousel {
            display: flex;
          }
          .carrousel-with-text-slider {
            width: var(--dl-size-size-half);
            display: flex;
            align-self: center;
            align-items: center;
            margin-right: var(--dl-space-space-eightunits);
            flex-direction: column;
          }
          .carrousel-with-text-slides {
            align-items: flex-end;
          }
          .carrousel-with-text-image2 {
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
          .carrousel-with-text-image3 {
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
          .carrousel-with-text-bullet-content1 {
            z-index: 1;
          }
          .carrousel-with-text-line1 {
            border-bottom-width: 0px;
          }
          .carrousel-with-text-bullet-content2 {
            z-index: 1;
          }
          .carrousel-with-text-line2 {
            border-bottom-width: 0px;
          }
          .carrousel-with-text-bullet-content3 {
            z-index: 1;
          }
          .carrousel-with-text-text-container {
            flex: 1;
            display: flex;
            align-self: center;
            align-items: flex-end;
            padding-top: var(--dl-space-space-eightunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-eightunits);
          }

          @media (max-width: 767px) {
            .carrousel-with-text-carrousel {
              flex-direction: column;
            }
            .carrousel-with-text-slider {
              width: 100%;
              margin-right: 0px;
              margin-bottom: 0px;
            }
            .carrousel-with-text-text-container {
              align-items: flex-start;
              padding-top: var(--dl-space-space-tripleunit);
              padding-bottom: 0px;
            }
          }
          @media (max-width: 479px) {
            .carrousel-with-text-slider {
              margin-bottom: 0px;
            }
            .carrousel-with-text-text-container {
              padding-top: var(--dl-space-space-doubleunit);
            }
          }
        `}
      </style>
    </>
  )
}

CarrouselWithText.defaultProps = {
  slideTwoText:
    'Praesent nec lobortis dolor. Vestibulum scelerisque purus nisi, eu sollicitudin tellus fringilla at. In eget enim et lectus sollicitudin mattis. In vestibulum massa sit amet egestas facilisis. Integer porta augue sit amet diam dignissim suscipit. Ut sit amet pellentesque sapien. Praesent a molestie elit.',
  slideOneText:
    'Praesent nec lobortis dolor. Vestibulum scelerisque purus nisi, eu sollicitudin tellus fringilla at. In eget enim et lectus sollicitudin mattis. In vestibulum massa sit amet egestas facilisis. Integer porta augue sit amet diam dignissim suscipit. Ut sit amet pellentesque sapien. Praesent a molestie elit.In 2019 m-am hotarat sa fac o schimbare legata de ce tip de miscare sa fac. Pana atunci mergeam la clase de Zumba si Pilates si devenise cam monoton, vroiam ceva mai challenging asa ca m-am dus la o sala cu total alt fel de clase. Acolo l-am cunoscut pe Vali, care facea clasele de HIIT. Mergeam si la alte clase cateodata, dar cel mai des la Vali, pentru ca energia si buna lui dispozitie (inca)e molipsitoare!  In 2020, dupa ce am tot auzit de la prieteni/prietene ca au apelat la un antrenor personal mi-am zis sa incerc si eu(pentru prima oara), si a urmat: "Vali, ai un loc si pentru mine la Personal Training". Si m-a primit! Decizia asta a fost motivata de cat de mult mi-a placut la clasele lui si de ce om fain este. De-atunci orele de PT au fost din ce in ce mai faine si pentru ca incepeam sa progresez, dar si pentru ca incepeam sa descopar tot mai multe lucruri bune despre Vali. Pentru mine Vali e un antrenor complet: se intereseaza de obiectivele fiecaruia si lucreaza cu fiecare pe baza obiectivelor, e atent permanent la cum execut exercitiile/miscarile si are rabdare sa explice ce vrea sa zica de cate ori e nevoie pana inteleg, isi motiveaza alegerile legate de exercitii, imi raspunde la orice intrebare am, ma motiveaza prin felul lui de a fi si prin faptul ca se bucura si el cu mine cand progresez, e foarte implicat, se documenteaza continuu, m-a invatat sa ma descurc si singura in sala, si bonus pentru cititori: are si simtul umorului! :D Din 2020 pana azi: am devenit mai puternica, am mai multa incredere in mine, sunt mult mai activa si fac asta cu placere, simt ca sunt in cea mai buna forma a mea de pana acum, si-n plus sunt mai bogata ca l-am cunoscut pe Vali si pe colegii de echipa.  Multumesc inca o data, Vali!In 2019 m-am hotarat sa fac o schimbare legata de ce tip de miscare sa fac. Pana atunci mergeam la clase de Zumba si Pilates si devenise cam monoton, vroiam ceva mai challenging asa ca m-am dus la o sala cu total alt fel de clase. Acolo l-am cunoscut pe Vali, care facea clasele de HIIT. Mergeam si la alte clase cateodata, dar cel mai des la Vali, pentru ca energia si buna lui dispozitie (inca)e molipsitoare!  In 2020, dupa ce am tot auzit de la prieteni/prietene ca au apelat la un antrenor personal mi-am zis sa incerc si eu(pentru prima oara), si a urmat: "Vali, ai un loc si pentru mine la Personal Training". Si m-a primit! Decizia asta a fost motivata de cat de mult mi-a placut la clasele lui si de ce om fain este. De-atunci orele de PT au fost din ce in ce mai faine si pentru ca incepeam sa progresez, dar si pentru ca incepeam sa descopar tot mai multe lucruri bune despre Vali. Pentru mine Vali e un antrenor complet: se intereseaza de obiectivele fiecaruia si lucreaza cu fiecare pe baza obiectivelor, e atent permanent la cum execut exercitiile/miscarile si are rabdare sa explice ce vrea sa zica de cate ori e nevoie pana inteleg, isi motiveaza alegerile legate de exercitii, imi raspunde la orice intrebare am, ma motiveaza prin felul lui de a fi si prin faptul ca se bucura si el cu mine cand progresez, e foarte implicat, se documenteaza continuu, m-a invatat sa ma descurc si singura in sala, si bonus pentru cititori: are si simtul umorului! :D Din 2020 pana azi: am devenit mai puternica, am mai multa incredere in mine, sunt mult mai activa si fac asta cu placere, simt ca sunt in cea mai buna forma a mea de pana acum, si-n plus sunt mai bogata ca l-am cunoscut pe Vali si pe colegii de echipa.  Multumesc inca o data, Vali!In 2019 m-am hotarat sa fac o schimbare legata de ce tip de miscare sa fac. Pana atunci mergeam la clase de Zumba si Pilates si devenise cam monoton, vroiam ceva mai challenging asa ca m-am dus la o sala cu total alt fel de clase. Acolo l-am cunoscut pe Vali, care facea clasele de HIIT. Mergeam si la alte clase cateodata, dar cel mai des la Vali, pentru ca energia si buna lui dispozitie (inca)e molipsitoare!  In 2020, dupa ce am tot auzit de la prieteni/prietene ca au apelat la un antrenor personal mi-am zis sa incerc si eu(pentru prima oara), si a urmat: "Vali, ai un loc si pentru mine la Personal Training". Si m-a primit! Decizia asta a fost motivata de cat de mult mi-a placut la clasele lui si de ce om fain este. De-atunci orele de PT au fost din ce in ce mai faine si pentru ca incepeam sa progresez, dar si pentru ca incepeam sa descopar tot mai multe lucruri bune despre Vali. Pentru mine Vali e un antrenor complet: se intereseaza de obiectivele fiecaruia si lucreaza cu fiecare pe baza obiectivelor, e atent permanent la cum execut exercitiile/miscarile si are rabdare sa explice ce vrea sa zica de cate ori e nevoie pana inteleg, isi motiveaza alegerile legate de exercitii, imi raspunde la orice intrebare am, ma motiveaza prin felul lui de a fi si prin faptul ca se bucura si el cu mine cand progresez, e foarte implicat, se documenteaza continuu, m-a invatat sa ma descurc si singura in sala, si bonus pentru cititori: are si simtul umorului! :D Din 2020 pana azi: am devenit mai puternica, am mai multa incredere in mine, sunt mult mai activa si fac asta cu placere, simt ca sunt in cea mai buna forma a mea de pana acum, si-n plus sunt mai bogata ca l-am cunoscut pe Vali si pe colegii de echipa.  Multumesc inca o data, Vali!',
  slideTwoSrc: '/2-600w.jpg',
  slideOneSrc: '/0-600w.jpg',
  slideThreeText:
    'Praesent nec lobortis dolor. Vestibulum scelerisque purus nisi, eu sollicitudin tellus fringilla at. In eget enim et lectus sollicitudin mattis. In vestibulum massa sit amet egestas facilisis. Integer porta augue sit amet diam dignissim suscipit. Ut sit amet pellentesque sapien. Praesent a molestie elit.',
  slideThreeSrc: '/1-600w.jpg',
  rootClassName: '',
}

CarrouselWithText.propTypes = {
  slideTwoText: PropTypes.string,
  slideOneText: PropTypes.string,
  slideTwoSrc: PropTypes.string,
  slideOneSrc: PropTypes.string,
  slideThreeText: PropTypes.string,
  slideThreeSrc: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default CarrouselWithText
