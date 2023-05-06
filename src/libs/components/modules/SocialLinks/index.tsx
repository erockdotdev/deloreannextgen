import React from 'react'

import styled from '@emotion/styled'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import EmailIcon from '@mui/icons-material/Email'

const StyledLink = styled('a')`
  border-radius: 5%;
  color: white;
  &:hover {
    color: white;
    filter: brightness(2);
  }
`

type SocialLink = {
  id: keyof typeof socialIcons
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

const links: SocialLink[] = [
  { id: 'facebook', href: 'https://www.facebook.com/deloreannextgenerationmotors', target: '_blank' },
  { id: 'instagram', href: 'https://www.instagram.com/deloreannextgenmotors', target: '_blank' },
  { id: 'email', href: 'mailto:media@dngmotors.com' },
]

const socialIcons = {
  instagram: <InstagramIcon style={{ height: '35px', width: '35px' }} />,
  facebook: <FacebookIcon style={{ height: '35px', width: '35px' }} />,
  email: <EmailIcon style={{ height: '35px', width: '35px' }} />,
}

const renderSocialLinks = (links: SocialLink[]) => {
  return links.map((link) => (
    <StyledLink key={link.id} {...link}>
      <div
        style={{
          marginRight: '15px',
          // background: 'black',
          // width: '50px',
          // height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // borderRadius: '10px',
        }}
      >
        {socialIcons[link.id] || link.id}
      </div>
    </StyledLink>
  ))
}

const SocialLinks = () => {
  return (
    <section
      id='social-icons'
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
    >
      <header style={{ paddingBottom: '15px', marginBottom: '15px', borderBottom: 'solid white 1px' }}>
        Stay Connected
      </header>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{renderSocialLinks(links)}</div>
    </section>
  )
}

export default SocialLinks
