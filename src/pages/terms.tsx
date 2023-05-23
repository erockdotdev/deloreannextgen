/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Container } from '@mui/material'
import Footer from '@libs/components/modules/Footer'
import Head from 'next/head'

function Terms() {
  return (
    <>
      <Head>
        <title>DNG | Terms of Service</title>
      </Head>
      <Container maxWidth='md' sx={{ marginTop: '25px', marginBottom: '25px' }}>
        <h1>Terms of Service</h1>

        <br />
        <h2 id='introduction'>1. Introduction</h2>
        <p>
          Welcome to DNG Motors, also referred to as DeLorean Next Generation, DNG, or DeLorean Next Gen, located at 47
          Main St. Greenville, New Hampshire 03048. Throughout these Terms of Service, the terms "DNG Motors," "DeLorean
          Next Generation," "DNG," "DeLorean Next Gen," "we," "us," and "our" refer to DNG Motors.
        </p>
        <p>
          DNG Motors is not affiliated in any way with DeLorean Motors Reimagined, LLC or DeLorean Motor Company, Texas.
          Our company operates independently and has no association or connection with these entities.
        </p>

        <br />
        <h2 id='acceptance-of-terms'>2. Acceptance of Terms</h2>
        <p>
          By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not
          agree to these terms, please refrain from using our website.
        </p>

        <br />
        <h2 id='use-of-our-services'>3. Use of Our Services</h2>
        <p>
          You must be at least 13 years old to use our services. By using our website, you confirm that you meet this
          age requirement.
        </p>
        <p>
          You agree to provide accurate and current information when using our services and to update it promptly if any
          changes occur.
        </p>
        <p>
          You are solely responsible for maintaining the confidentiality of your account information and for all
          activities that occur under your account.
        </p>

        <br />
        <h2 id='mailing-list'>4. Mailing List</h2>
        <p>
          By subscribing to our mailing list, you consent to receive periodic emails from us containing promotional and
          informational content.
        </p>
        <p>
          You may unsubscribe from the mailing list at any time by contacting us at{' '}
          <a href='mailto:support@dngmotors.com?subject=Unsubscribe&amp;body=Please%20unsubscribe%20me%20from%20the%20DNG%20mailing%20list'>
            support@dngmotors.com
          </a>{' '}
          using the email you subscribed with.
        </p>
        <p>
          Please note that our unsubscribe process is currently a manual process. Therefore, there may be a delay
          between your unsubscribe request and receiving a confirmation. During this period, it is possible that you may
          still receive scheduled emails.
        </p>

        <br />
        <h2 id='third-party-service'>5. Third-Party Service</h2>
        <p>We utilize HubSpot, a third-party service, to manage our mailing list and related communications.</p>
        <p>
          By agreeing to these Terms of Service, you also acknowledge and agree to be subject to HubSpot's terms and
          conditions, which can be found at{' '}
          <a href='https://legal.hubspot.com/terms-of-service'>HubSpot Terms of Service</a>.
        </p>

        <br />
        <h2 id='disclaimer-of-warranty'>6. Disclaimer of Warranty</h2>
        <p>
          We strive to provide accurate and reliable information, but we do not warrant the completeness, accuracy, or
          reliability of any content on our website or provided through our services.
        </p>

        <br />
        <h2 id='limitation-of-liability'>7. Limitation of Liability</h2>
        <p>
          We shall not be held liable for any direct, indirect, incidental, consequential, or special damages arising
          out of or in connection with your use of our website or services.
        </p>

        <br />
        <h2 id='governing-law-and-jurisdiction'>8. Governing Law and Jurisdiction</h2>
        <p>
          These Terms of Service shall be governed by and construed in accordance with the laws of [appropriate
          jurisdiction].
        </p>
        <p>
          Any legal action or proceeding arising out of or related to these Terms of Service shall be brought
          exclusively in the courts of [appropriate jurisdiction].
        </p>

        <br />
        <h2 id='contact-us'>9. Contact Us</h2>
        <p>
          If you have any questions or concerns regarding these Terms of Service, please contact us at{' '}
          <a href='mailto:support@dngmotors.com'>support@dngmotors.com</a>.
        </p>
        <Footer />
      </Container>
    </>
  )
}

export default Terms
