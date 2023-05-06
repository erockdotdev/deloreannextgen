import React from 'react'

interface SiteFooter {
  companyName: string
}

function Footer({ companyName = 'DeLorean Next Generation' }: SiteFooter) {
  const date = new Date()
  return (
    <footer
      style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: '15px',
        textAlign: 'center',
        lineHeight: '22px',
        zIndex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <p style={{ fontSize: '15px' }}>
        ©{date.getFullYear()} {companyName}: A DeLorean Family Company
      </p>
    </footer>
  )
}

export default Footer
