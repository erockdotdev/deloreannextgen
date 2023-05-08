import React from 'react'
import Head from 'next/head'
import Footer from '@libs/components/modules/Footer'

import { TextField, Container, Stack, Grid, Box } from '@mui/material'
import SocialLinks from '@libs/components/modules/SocialLinks'

const background = 'assets/images/back-to-the-future-fashon.jpeg'

function StyleSite() {
  return (
    <div>
      <div className='page' style={{ position: 'relative' }}>
        <div
          style={{
            backgroundSize: 'cover',
            position: 'absolute',
            opacity: '0.4',
            backgroundColor: '#001101',
            zIndex: '1',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        />
        <div
          style={{
            background: `url(${background}) no-repeat center`,
            backgroundSize: 'cover',
            position: 'absolute',
            opacity: '0.4',
            backgroundColor: '#001101',
            zIndex: '1',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            height: '100%',
          }}
        />
        <Head>
          <title>DNG | Motors</title>
          <meta name='description' content='DeLorean Next Generation Motors. DeLorean is back in the Motor City!!!' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <main style={{ position: 'relative', minHeight: '88vh', display: 'flex', padding: '150px 25px' }}>
          <section
            style={{
              position: 'relative',
              zIndex: '2',
              color: 'white',
              backgroundColor: 'transparent',
              maxWidth: '450px',
            }}
          >
            <div style={{ padding: '10px 15px' }}>
              <span
                style={{
                  fontFamily: 'Saira',
                  fontWeight: 'light',
                  backgroundColor: 'black',
                  padding: '0 5px',
                  fontSize: '1em',
                  marginBottom: '15px',
                  WebkitBoxDecorationBreak: 'clone',
                }}
              >
                DeLorean Style
              </span>
              <p
                style={{
                  position: 'relative',
                  fontSize: '44px',
                  textAlign: 'left',
                  fontFamily: 'IBMPlexSans',
                  fontWeight: 700,
                  letterSpacing: '1px',
                  lineHeight: '44px',
                  marginTop: '10px',
                }}
              >
                Dream DeLorean.
              </p>
              <p style={{ padding: '15px 0', lineHeight: '20px' }}>
                Keep up with the latest by signing up for the DeLorean Next Generation Newsletter.
              </p>
              <Box sx={{ display: { md: 'block', sm: 'none', xs: 'none' } }}>
                <SocialLinks />
              </Box>
            </div>
          </section>
        </main>
      </div>
      <Footer companyName='DNG Motors' />
    </div>
  )
}

export default StyleSite
