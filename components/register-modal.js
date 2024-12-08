import React from 'react'

import PropTypes from 'prop-types'

const RegisterModal = (props) => {
  return (
    <>
      <div
        data-type="RegisterModal"
        className={`modal-container animation-slide-in-down-phone animation-fade-in ${props.rootClassName} `}
      >
        <div className="modal-content-container max-content-container">
          <div className="register-modal-main-element">
            <div className="register-modal-top-bar">
              <div className="register-modal-container2">
                <h1 className="modal-header">Creeaza cont</h1>
              </div>
              <div
                data-action="closeRegisterModal"
                className="register-modal-close-modal"
              >
                <svg viewBox="0 0 1024 1024" className="modal-close-icon">
                  <path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 928c-229.75 0-416-186.25-416-416s186.25-416 416-416 416 186.25 416 416-186.25 416-416 416z"></path>
                  <path d="M672 256l-160 160-160-160-96 96 160 160-160 160 96 96 160-160 160 160 96-96-160-160 160-160z"></path>
                </svg>
              </div>
            </div>
            <form
              enctype="application/x-www-form-urlencoded"
              className="register-modal-form"
            >
              <input
                type="text"
                name="prenume"
                required="true"
                placeholder="Prenume"
                className="form-input input"
              />
              <input
                type="text"
                name="nume"
                required="true"
                placeholder="Nume"
                className="form-input input"
              />
              <input
                type="email"
                required="true"
                placeholder="Email"
                className="form-input input"
              />
              <input
                type="password"
                name="password"
                required="true"
                placeholder="Password"
                className="form-input input"
              />
              <div
                data-action="registerUser"
                className="register-modal-container3"
              >
                <button
                  name="submit"
                  type="submit"
                  data-action="registerUser"
                  className="register-modal-submit-btn Button-Text animated-btn"
                >
                  creeaza
                </button>
              </div>
              <span
                data-action="showLoginModal"
                className="register-modal-text2"
              >
                <span className="register-modal-text3">
                  {' '}
                  Ai deja cont? Login
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="register-modal-text4">aici</span>
                <span className="register-modal-text5">.</span>
              </span>
            </form>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .register-modal-main-element {
            width: 99%;
            height: 99%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .register-modal-top-bar {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: row;
            justify-content: space-between;
            background-color: var(--dl-color-neutral-black);
          }
          .register-modal-container2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .register-modal-close-modal {
            flex: 0 0 auto;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
          }
          .register-modal-close-modal:hover {
            transform: rotate(180deg);
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-default-primary);
          }
          .register-modal-form {
            width: 100%;
            display: flex;
            max-width: 500px;
            align-items: stretch;
            flex-direction: column;
          }
          .register-modal-container3 {
            display: flex;
            position: relative;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .register-modal-submit-btn {
            padding-top: 15px;
            padding-bottom: 15px;
          }
          .register-modal-text2 {
            color: var(--dl-color-neutral-white);
            cursor: pointer;
            font-style: normal;
            transition: 0.3s;
            font-weight: 600;
          }
          .register-modal-text2:hover {
            text-decoration: underline;
          }
          .register-modal-text3 {
            font-style: normal;
            font-weight: 600;
          }
          .register-modal-text4 {
            color: var(--dl-color-default-primary);
            font-style: normal;
            font-weight: 600;
          }
          .register-modal-text5 {
            font-style: normal;
            font-weight: 600;
          }
          .register-modalroot-class-name {
            display: none;
          }
          .register-modalroot-class-name1 {
            display: none;
          }
          .register-modalroot-class-name2 {
            display: none;
          }
          .register-modalroot-class-name3 {
            display: none;
          }
          .register-modalroot-class-name4 {
            display: none;
          }
          .register-modalroot-class-name5 {
            display: none;
          }
          .register-modalroot-class-name6 {
            display: none;
          }
          .register-modalroot-class-name7 {
            display: none;
          }
          .register-modalroot-class-name8 {
            display: none;
          }
          .register-modalroot-class-name9 {
            display: none;
          }
          .register-modalroot-class-name10 {
            display: none;
          }
          .register-modalroot-class-name11 {
            display: none;
          }
          .register-modalroot-class-name12 {
            display: none;
          }
          .register-modalroot-class-name13 {
            display: none;
          }
          @media (max-width: 767px) {
            .register-modal-text2 {
              font-size: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

RegisterModal.defaultProps = {
  rootClassName: '',
}

RegisterModal.propTypes = {
  rootClassName: PropTypes.string,
}

export default RegisterModal
