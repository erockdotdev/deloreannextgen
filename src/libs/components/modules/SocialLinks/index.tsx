import React from 'react'
import styled from '@emotion/styled'
import { RiFacebookLine, RiInstagramLine } from 'react-icons/ri'
import { IoIosMail } from 'react-icons/io'
import { IconContext } from 'react-icons'

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
  instagram: (
    <IconContext.Provider value={{ size: '2.5em' }}>
      <RiInstagramLine />
    </IconContext.Provider>
  ),
  facebook: (
    <IconContext.Provider value={{ size: '2.5em' }}>
      <RiFacebookLine />
    </IconContext.Provider>
  ),
  email: (
    <IconContext.Provider value={{ size: '2em' }}>
      <IoIosMail />
    </IconContext.Provider>
  ),
}

const renderSocialLinks = (links: SocialLink[]) => {
  return links.map((link) => (
    <StyledLink key={link.id} {...link}>
      <div
        style={{
          marginRight: '15px',
          background: 'black',
          width: '50px',
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '10px',
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
