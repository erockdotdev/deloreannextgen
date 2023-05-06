import React from 'react'

function Footer() {
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
      <p style={{ fontSize: '15px' }}>©{date.getFullYear()} DeLorean Next Generation: A DeLorean Family Company</p>
    </footer>
  )
}

export default Footer
