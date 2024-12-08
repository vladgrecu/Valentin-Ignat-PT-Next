import React from 'react'
import Head from 'next/head'

import DashboardHeader from '../components/dashboard-header'

const Account = (props) => {
  return (
    <>
      <div className="account-container1">
        <Head>
          <title>Account - Valentin Ignat - Personal Trainer</title>
          <meta
            property="og:title"
            content="Account - Valentin Ignat - Personal Trainer"
          />
          <meta property="og:description" content="Listening is power" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0bb31403-1ba8-407c-9d80-4389cc611d8c/2e667c71-2725-4843-8220-8fe9a0708d9d?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <div className="account-sidebar">
          <DashboardHeader
            logoSrc="2483ef27-3e92-4bfd-934f-815186ae3c1a"
            rootClassName="dashboard-headerroot-class-name"
          ></DashboardHeader>
        </div>
        <div className="account-main-content">
          <div className="account-container2">
            <div className="account-menu">
              <svg viewBox="0 0 1024 1024" className="account-menu-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
            <div className="account-container3">
              <span className="account-text1">
                <span>
                  Mesaj promotional cu ceva discount pe care il ai in
                  shop/Citatul motivational al zilei etc
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .account-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: stretch;
            flex-direction: row;
          }
          .account-sidebar {
            flex: 0 0 auto;
            display: flex;
            min-width: 20%;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-neutral-black);
          }
          .account-main-content {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .account-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
            background-color: var(--dl-color-default-primary);
          }
          .account-menu {
            flex: 0 0 auto;
            align-items: flex-start;
            flex-direction: column;
          }
          .account-menu-icon {
            fill: var(--dl-color-neutral-white);
            width: 32px;
            height: 32px;
          }
          .account-container3 {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: center;
          }
          .account-text1 {
            color: var(--dl-color-neutral-white);
            font-size: 16px;
          }
          @media (max-width: 991px) {
            .account-menu {
              display: flex;
              margin-right: var(--dl-space-space-tripleunit);
            }
            .account-text1 {
              font-size: 14px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Account
