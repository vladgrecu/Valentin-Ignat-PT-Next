import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const ContactFormModal = (props) => {
  return (
    <>
      <div
        role="dialog"
        data-type="ContactFormModal"
        className={`modal-container animation-slide-in-down-phone animation-fade-in ${props.rootClassName} `}
      >
        <div
          data-state="view"
          className="modal-content-container max-content-container"
        >
          <div className="contact-form-modal-top-bar">
            <div className="contact-form-modal-container1">
              <img
                alt="image"
                src="/logo%20secundar-05.svg"
                className="contact-form-modal-image"
              />
            </div>
            <div
              data-action="closeContactFormModal"
              className="contact-form-modal-close-modal"
            >
              <svg viewBox="0 0 1024 1024" className="modal-close-icon">
                <path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 928c-229.75 0-416-186.25-416-416s186.25-416 416-416 416 186.25 416 416-186.25 416-416 416z"></path>
                <path d="M672 256l-160 160-160-160-96 96 160 160-160 160 96 96 160-160 160 160 96-96-160-160 160-160z"></path>
              </svg>
            </div>
          </div>
          <div className="contact-form-modal-description">
            <span className="contact-form-modal-text10 Content-Bold content-bold-white">
              Completeaza acest formular pentru a ma contacta.
            </span>
          </div>
          <form
            id="contactform"
            enctype="application/x-www-form-urlencoded"
            className="contact-form-modal-form"
          >
            <input
              type="text"
              name="subject"
              required="true"
              form-field="true"
              placeholder="Subiect"
              className="form-input input"
            />
            <input
              type="email"
              name="email"
              required="true"
              form-field="true"
              placeholder="Email"
              className="form-input input"
            />
            <textarea
              name="message"
              rows="3"
              form-field="true"
              placeholder="Mesaj"
              className="form-input input"
            ></textarea>
            <div className="contact-form-modal-container2">
              <input
                type="checkbox"
                id="subscribe"
                name="subscribe"
                value="subscribe"
                form-field="true"
                data-action="newsletterSubscribe"
                defaultChecked="true"
                className="contact-form-modal-checkbox1"
              />
              <label htmlFor="subscribe" className="contact-form-modal-text11">
                Ma abonez la newsletter-ul, Coach Vali Ignat.
              </label>
            </div>
            <div className="contact-form-modal-container3">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                value="consent"
                required="true"
                form-field="true"
                data-action="giveConsent"
                className="contact-form-modal-checkbox2"
              />
              <label htmlFor="consent" className="contact-form-modal-text12">
                <span>
                  Sunt de acord cu
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <Link href="/politica-de-confidentialitate">
                  <a>
                    <span className="contact-form-modal-text14">
                      politicile de confidentialitate
                    </span>
                  </a>
                </Link>
                <span>
                  ,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <Link href="/termeni-si-conditii">
                  <a>
                    <span className="contact-form-modal-text16">
                      termenii si conditiile
                    </span>
                  </a>
                </Link>
                <span> prezente pe acest site.</span>
              </label>
            </div>
            <div className="contact-form-modal-container4">
              <button
                name="submit"
                type="submit"
                data-action="sendContactForm"
                className="contact-form-modal-submit-btn Button-Text animated-btn"
              >
                Trimite
              </button>
            </div>
          </form>
        </div>
        <div
          data-state="loading"
          className="contact-form-modal-loading modal-content-container max-content-container"
        >
          <svg
            viewBox="0 0 1024 1024"
            className="contact-form-modal-icon4 animation-rotate-clockwise"
          >
            <path d="M512 0c-278.748 0-505.458 222.762-511.848 499.974 5.92-241.864 189.832-435.974 415.848-435.974 229.75 0 416 200.576 416 448 0 53.020 42.98 96 96 96s96-42.98 96-96c0-282.77-229.23-512-512-512zM512 1024c278.748 0 505.458-222.762 511.848-499.974-5.92 241.864-189.832 435.974-415.848 435.974-229.75 0-416-200.576-416-448 0-53.020-42.98-96-96-96s-96 42.98-96 96c0 282.77 229.23 512 512 512z"></path>
          </svg>
          <span className="contact-form-modal-text18 Content-Bold content-bold-white">
            In curs de trimitere...
          </span>
        </div>
        <div
          data-state="success"
          className="contact-form-modal-success modal-content-container max-content-container"
        >
          <svg viewBox="0 0 1024 1024" className="contact-form-modal-icon6">
            <path d="M864 128l-480 480-224-224-160 160 384 384 640-640z"></path>
          </svg>
          <span className="contact-form-modal-text19 Content-Bold content-bold-white">
            Email trimis.
          </span>
        </div>
        <div
          data-state="error"
          className="contact-form-modal-error modal-content-container max-content-container"
        >
          <svg viewBox="0 0 1024 1024" className="contact-form-modal-icon8">
            <path d="M554 554v-256h-84v256h84zM554 726v-86h-84v86h84zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
          </svg>
          <span className="contact-form-modal-text20 Content-Bold content-bold-white">
            Error. Mail-ul nu a fost trimis!
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .contact-form-modal-top-bar {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-eightunits);
            flex-direction: row;
            justify-content: space-between;
            background-color: var(--dl-color-neutral-black);
          }
          .contact-form-modal-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .contact-form-modal-image {
            flex: 1;
            width: 250px;
            object-fit: cover;
          }
          .contact-form-modal-close-modal {
            flex: 0 0 auto;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
          }
          .contact-form-modal-close-modal:hover {
            transform: rotate(180deg);
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-default-primary);
          }
          .contact-form-modal-description {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
            justify-content: space-between;
          }
          .contact-form-modal-text10 {
            margin-bottom: 0px;
          }
          .contact-form-modal-form {
            width: 100%;
            display: flex;
            max-width: 500px;
            align-items: stretch;
            flex-direction: column;
          }
          .contact-form-modal-container2 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .contact-form-modal-checkbox1 {
            min-width: 16px;
            min-height: 16px;
            margin-right: var(--dl-space-space-unit);
          }
          .contact-form-modal-text11 {
            color: var(--dl-color-neutral-white);
            font-size: 16px;
          }
          .contact-form-modal-container3 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: row;
          }
          .contact-form-modal-checkbox2 {
            min-width: 16px;
            min-height: 16px;
            margin-right: var(--dl-space-space-unit);
          }
          .contact-form-modal-text12 {
            color: var(--dl-color-neutral-white);
            font-size: 16px;
          }
          .contact-form-modal-text14 {
            text-decoration: underline;
          }
          .contact-form-modal-text16 {
            text-decoration: underline;
          }
          .contact-form-modal-container4 {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form-modal-submit-btn {
            padding-top: 15px;
            padding-bottom: 15px;
          }
          .contact-form-modal-loading {
            display: none;
            align-items: center;
          }
          .contact-form-modal-icon4 {
            fill: #d9d9d9;
            width: 64px;
            height: 64px;
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .contact-form-modal-text18 {
            text-align: center;
            margin-bottom: 0px;
          }
          .contact-form-modal-success {
            display: none;
            align-items: center;
          }
          .contact-form-modal-icon6 {
            fill: #2ecb15;
            width: 64px;
            height: 64px;
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .contact-form-modal-text19 {
            text-align: center;
            margin-bottom: 0px;
          }
          .contact-form-modal-error {
            display: none;
            align-items: center;
          }
          .contact-form-modal-icon8 {
            fill: var(--dl-color-default-primary);
            width: 64px;
            height: 64px;
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .contact-form-modal-text20 {
            text-align: center;
            margin-bottom: 0px;
          }
          .contact-form-modalroot-class-name {
            display: none;
          }
          .contact-form-modalroot-class-name1 {
            display: none;
          }
          .contact-form-modalroot-class-name2 {
            display: none;
          }
          .contact-form-modalroot-class-name3 {
            display: none;
          }
          .contact-form-modalroot-class-name4 {
            display: none;
          }
          .contact-form-modalroot-class-name5 {
            display: none;
          }
          .contact-form-modalroot-class-name6 {
            display: none;
          }
          @media (max-width: 991px) {
            .contact-form-modal-description {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .contact-form-modal-top-bar {
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .contact-form-modalroot-class-name {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .contact-form-modal-image {
              width: 230px;
            }
            .contact-form-modal-submit-btn {
              font-size: 18px;
            }
          }
        `}
      </style>
    </>
  )
}

ContactFormModal.defaultProps = {
  rootClassName: '',
}

ContactFormModal.propTypes = {
  rootClassName: PropTypes.string,
}

export default ContactFormModal
