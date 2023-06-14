import Link from 'next/link'
import React from 'react'
import SocialLinks from '../SocialLinks'

// link rewrites
// https://github.com/vercel/next.js/discussions/32294#:~:text=I%27ve%20resolved%20the%20problem%20with%20rewrite.%0ACheck%20this%20middleware%20feature%20of%20NextJS.

interface SiteFooter {
  companyName?: string
}

function Footer({ companyName = 'DeLorean Next Generation' }: SiteFooter) {
  const date = new Date()
  return (
    <footer
      style={{
        width: '100%',
        // paddingTop: '25px',
        textAlign: 'center',
        lineHeight: '22px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'relative',
        zIndex: 1,
        height: '10vh',
      }}
    >
      {/* footer nav */}
      {/* <nav style={{ display: 'flex', justifyContent: 'space-around', margin: '15px 0' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            borderRight: 'solid white 1px;',
            paddingRight: '100px',
          }}
        > */}
      {/* <a href='https://www.deloreannextgen.com'>
            <p
              style={{
                fontFamily: 'Saira',
                fontWeight: 'light',
                backgroundColor: 'black',
                fontSize: '1.4em',
                marginBottom: '1rem',
                position: 'relative',
                left: '-1px',
              }}
            >
              DELOREAN NEXT GENERATION
            </p>
          </a> */}
      {/* <div style={{ paddingBottom: '1rem' }}>
            <SocialLinks header={false} />
          </div>

          <p>
            <Link href='/about'>Our Story</Link>
          </p>
          <p>
            <Link href='/about'>Partners</Link>
          </p>
          <p>
            <Link href='/team'>Team DNG</Link>
          </p>
          <p>
            <Link href='/press-room'>Press Room</Link>
          </p>
          <p>
            <Link href='#'>Newsletter</Link>
          </p>
          <p>
            <Link href='_sites/contact'>Contact Us</Link>
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingRight: '50px' }}>
          <p style={{ marginBottom: '10px', fontWeight: '700' }}>BRANDS</p>
          <p>
            <Link href='https://motors.deloreannextgen.com'>DNG Motors</Link>
          </p>
          <p>
            <Link href='https://style.deloreannextgen.com'>DeLorean Style</Link>
          </p>
          <p>
            <Link href='https://racing.deloreannextgen.com'>DNG Racing</Link>
          </p>
          <p>
            <Link href='#'>Shop DNG</Link>
          </p>
          <br />
          <p style={{ marginBottom: '10px', fontWeight: '700' }}>SERVICES</p>
          <p>
            <Link href='https://motors.deloreannextgen.com'>Automotive Education</Link>
          </p>
          <p>
            <Link href='https://style.deloreannextgen.com'>Consulting</Link>
          </p>
        </div>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '15px' }}>
            <p style={{ marginBottom: '10px', fontWeight: '700', paddingRight: '50px' }}>RESOURCES</p>
            <p>
              <Link href='#'>FAQs</Link>
            </p>
            <p>
              <Link href='#'>Donate</Link>
            </p>
            <p>
              <Link href='#'>Investor Relations</Link>
            </p>

            <p>
              <Link href='#'>DeLorean Legacy Project</Link>
            </p>
            <p>
              <Link href='#'>Forum</Link>
            </p>
          </div>
        </div>
      </nav> */}
      {/* <div style={{ fontSize: '15px', padding: '25px', marginTop: '20px' }}> */}
      <div style={{ fontSize: '15px', padding: '10px 25px' }}>
        <Link href={'/'}>
          <p
            style={{
              fontFamily: 'Saira',
              fontWeight: 'light',
              fontSize: '1.1em',
              position: 'relative',
              left: '-1px',
              paddingBottom: '5px',
            }}
          >
            DELOREAN NEXT GENERATION
          </p>
        </Link>

        {/* <Link href='_sites/terms/privacy-policy'>Cookie Policy</Link>|{' '} */}
        {/* <Link href='_sites/terms/privacy-policy'>Privacy Policy</Link> |{' '}
        <Link href='_sites/terms/privacy-policy'>GDPR</Link> |{' '}*/}
        <span style={{ fontSize: '.9rem' }}>
          <Link href='terms'>Terms of Service</Link> | <Link href='mailto:media@dngmotors.com'>Media Inquiries</Link>
          <br />©{date.getFullYear()} {companyName}: A DeLorean Family Company
        </span>
      </div>
    </footer>
  )
}

export default Footer
