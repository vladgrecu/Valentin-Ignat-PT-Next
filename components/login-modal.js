import React from 'react'

import PropTypes from 'prop-types'

const LoginModal = (props) => {
  return (
    <>
      <div
        role="dialog"
        data-type="LoginModal"
        className={`modal-container animation-slide-in-down-phone animation-fade-in ${props.rootClassName} `}
      >
        <div className="modal-content-container max-content-container">
          <div className="login-modal-main-element">
            <div className="login-modal-top-bar">
              <div className="login-modal-container1">
                <h1 className="modal-header">contul meu</h1>
              </div>
              <div
                data-action="closeLoginModal"
                className="login-modal-close-modal"
              >
                <svg viewBox="0 0 1024 1024" className="modal-close-icon">
                  <path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 928c-229.75 0-416-186.25-416-416s186.25-416 416-416 416 186.25 416 416-186.25 416-416 416z"></path>
                  <path d="M672 256l-160 160-160-160-96 96 160 160-160 160 96 96 160-160 160 160 96-96-160-160 160-160z"></path>
                </svg>
              </div>
            </div>
            <form
              enctype="application/x-www-form-urlencoded"
              className="login-modal-form"
            >
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
              <div data-action="loginUser" className="login-modal-container2">
                <button
                  name="submit"
                  type="submit"
                  data-action="loginUser"
                  className="login-modal-submit-btn Button-Text animated-btn"
                >
                  login
                </button>
              </div>
              <span
                data-action="showRegisterModal"
                className="login-modal-text2"
              >
                <span className="login-modal-text3">
                  Nu ai cont? Creeaza unul
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="login-modal-text4">aici</span>
                <span className="login-modal-text5">.</span>
              </span>
            </form>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .login-modal-main-element {
            width: 99%;
            height: 99%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .login-modal-top-bar {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: row;
            justify-content: space-between;
            background-color: var(--dl-color-neutral-black);
          }
          .login-modal-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .login-modal-close-modal {
            flex: 0 0 auto;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
          }
          .login-modal-close-modal:hover {
            transform: rotate(180deg);
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-default-primary);
          }
          .login-modal-form {
            width: 100%;
            display: flex;
            max-width: 500px;
            align-items: stretch;
            flex-direction: column;
          }
          .login-modal-container2 {
            display: flex;
            position: relative;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .login-modal-submit-btn {
            padding-top: 15px;
            padding-bottom: 15px;
          }
          .login-modal-text2 {
            color: var(--dl-color-neutral-white);
            cursor: pointer;
            font-style: normal;
            transition: 0.3s;
            font-weight: 600;
          }
          .login-modal-text2:hover {
            text-decoration: underline;
          }
          .login-modal-text3 {
            font-style: normal;
            font-weight: 600;
          }
          .login-modal-text4 {
            color: var(--dl-color-default-primary);
            font-style: normal;
            font-weight: 600;
          }
          .login-modal-text5 {
            font-style: normal;
            font-weight: 600;
          }
          .login-modalroot-class-name {
            display: none;
          }
          .login-modalroot-class-name1 {
            display: none;
          }
          .login-modalroot-class-name2 {
            display: none;
          }
          .login-modalroot-class-name3 {
            display: none;
          }
          .login-modalroot-class-name4 {
            display: none;
          }
          .login-modalroot-class-name5 {
            display: none;
          }
          .login-modalroot-class-name6 {
            display: none;
          }
          .login-modalroot-class-name7 {
            display: none;
          }
          .login-modalroot-class-name8 {
            display: none;
          }
          .login-modalroot-class-name9 {
            display: none;
          }
          .login-modalroot-class-name10 {
            display: none;
          }
          .login-modalroot-class-name11 {
            display: none;
          }
          .login-modalroot-class-name12 {
            display: none;
          }
          .login-modalroot-class-name13 {
            display: none;
          }
          @media (max-width: 767px) {
            .login-modal-top-bar {
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .login-modal-text2 {
              font-size: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

LoginModal.defaultProps = {
  rootClassName: '',
}

LoginModal.propTypes = {
  rootClassName: PropTypes.string,
}

export default LoginModal
