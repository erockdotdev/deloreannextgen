import React from 'react'

import styled from '@emotion/styled'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import EmailIcon from '@mui/icons-material/Email'

const StyledLink = styled('a')`
  border-radius: 5%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: white;
    filter: brightness(2);
  }
  &:not(:last-child) {
    margin-right: 15px;
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

// alternative for handling mail to
// https://adamsilver.io/blog/the-trouble-with-mailto-email-links-and-what-to-do-instead/
const socialIcons = {
  instagram: <InstagramIcon style={{ height: '35px', width: '35px' }} />,
  facebook: <FacebookIcon style={{ height: '35px', width: '35px' }} />,
  email: <EmailIcon style={{ height: '35px', width: '35px' }} />,
}

const renderSocialLinks = (links: SocialLink[]) => {
  return links.map((link) => (
    <StyledLink key={link.id} {...link}>
      {socialIcons[link.id] || link.id}
    </StyledLink>
  ))
}
interface SocialLinks {
  header?: string | boolean
}

const SocialLinks = ({ header = 'Stay Connected' }: SocialLinks) => {
  return (
    <section
      id='social-icons'
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
    >
      {header && (
        <header style={{ paddingBottom: '10px', marginBottom: '15px', borderBottom: 'solid white 1px' }}>
          {header}
        </header>
      )}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{renderSocialLinks(links)}</div>
    </section>
  )
}

export default SocialLinks
