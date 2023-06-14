/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Container } from '@mui/material'
import Footer from '@libs/components/modules/Footer'
import Head from 'next/head'
import Link from 'next/link'

function DonatePage() {
  return (
    <>
      <Head>
        <title>Support Automotive Education | DNG </title>
      </Head>
      <Container maxWidth='md' sx={{ marginTop: '25px', marginBottom: '25px' }}>
        <section style={{ minHeight: '90vh' }}>
          <h1 style={{ fontSize: '36px', paddingBottom: '20px', fontFamily: 'Saira', fontWeight: 'light' }}>
            The Charity: DeLorean Legacy Project
          </h1>
          <div style={{ float: 'left', marginRight: '26px', display: 'flex', flexDirection: 'column' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src='/assets/images/jzd-portrait.jpg'
              alt='Portrait of John DeLorean turned to the side, looking off to the side with a slight smile on his face. He is wearing a suit jacket, shirt, and tie. His hair is neatly parted and combed.'
            />
            <span
              style={{
                display: 'inline-block',
                paddingBottom: 0,
                fontSize: '14px',
                fontWeight: 'light',
                fontFamily: 'Saira',
                padding: '5px 10px 0',
              }}
            >
              Colorized portrait of John Z. DeLorean, circa 1968
            </span>
          </div>
          <p>
            John Z. DeLorean grew up impoverished during the depression and went on to become one of the most successful
            men of his time.
          </p>

          <p>
            Though he did not have a private school education, he was still able to find a pathway to his passion and
            provide the world with innovations that not only changed automotive history but impacted car culture forever
          </p>

          <p>
            Great minds like my fathers could be left behind not only due to lack of access to education, but lack of
            opportunity or support to succeed.
          </p>

          <p>
            If we can provide more individuals with education and opportunities, the law of averages dictates, we will
            foster more innovation and exceptionality. By driving education through commerce of automobiles, we can
            truly drive the future leaving no child behind.
          </p>

          <p>
            <strong>Welcome to the DeLorean Legacy Project</strong>, a non-profit organization dedicated to preserving
            the remarkable story and enduring legacy of John DeLorean.
          </p>
          <p>
            Our mission is to empower the next generation in the automotive industry through educational opportunities,
            fostering innovation, and celebrating John DeLorean's contributions. Together, let's preserve the past,
            inspire the future, and shape a brighter automotive landscape.
          </p>
          <p className='attribution'>– Kat DeLorean, 2023</p>
          <br />
          <h2 style={{ fontWeight: 'light', fontFamily: 'Saira', paddingBottom: '16px' }}>
            Empower Brilliance: Support Education and Drive Innovation with the DeLorean Legacy Project
          </h2>
          <p>
            Would you like to support the DeLorean Legacy Project and help us preserve the remarkable story of John Z.
            DeLorean? Your contribution can make a meaningful impact.{' '}
          </p>
          <p>
            We are currently accepting donations through{' '}
            <a className='underline' target='_blank' href='https://www.zellepay.com/'>
              Zelle
            </a>
            , a secure and convenient payment method. Simply search for our email{' '}
            <strong>julie@deloreanlegacy.org</strong> in your Zelle app.{' '}
          </p>
          <p>
            <strong>
              Please note, by making a donation through Zelle and completing the transaction, you are agreeing to our
              site's <Link href='/terms'>terms and conditions</Link>.
            </strong>
          </p>
          <p>
            If you have any questions regarding making a donation or if you have any inquiries about a previous
            donation, please feel free to contact Julie at{' '}
            <a href='mailto:julie@deloreanlegacy.org'>julie@deloreanlegacy.org</a>.
          </p>

          <p>
            Alternatively, you can scan the QR code found{' '}
            <a className='underline' href='/assets/images/dlp-zelle-qr-code.jpeg'>
              here
            </a>
            , which will directly link you to Zelle. For step-by-step instructions on how to use Zelle, please refer to{' '}
            <a className='underline' target='_blank' href='/assets/documents/delorean-legacy-zelle.pdf'>
              our helpful PDF guide
            </a>
            .
          </p>
          <p style={{ textAlign: 'center', paddingTop: '10px' }}> * * *</p>
          <p>
            By supporting the DeLorean Legacy Project, you are helping us expand access to education and create
            opportunities for aspiring minds to flourish. Your contribution plays a vital role in empowering the next
            generation of innovators and nurturing a future where every child has a chance to succeed.
          </p>
          <p style={{ textAlign: 'center', marginTop: '10px', fontWeight: 'bold' }}>
            Join us in preserving John DeLorean's legacy and shaping a brighter future. Together, we can make a lasting
            impact and inspire generations to come.
          </p>
          <br />
        </section>
        <Footer />
      </Container>
    </>
  )
}

export default DonatePage
