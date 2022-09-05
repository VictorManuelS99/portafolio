import Link from 'next/link'
import { IoLogoGithub, IoLogoLinkedin, IoMdMail } from 'react-icons/io'

import { matchPath } from '../../../common/util'

import { P } from '../../Atoms/Txt'

import { Wrapper, V, Title, Subtitle, Info, A, FlexRow } from './styles'

export const Sidebar = () => {
  const year = new Date().getFullYear()

  return (
    <Wrapper>
      <Info>
        <V>V</V>
        <Title>Victor Sandon</Title>
        <Subtitle>Software Developer</Subtitle>
      </Info>

      <ul>
        <li>
          <Link href="/" passHref>
            <A isSelected={matchPath('/')}>About</A>
          </Link>
        </li>
        <li>
          <Link href="/projects" passHref>
            <A isSelected={matchPath('/projects')}>Projects</A>
          </Link>
        </li>
        <li>
          <Link href="/contact" passHref>
            <A isSelected={matchPath('/contact')}>Contact</A>
          </Link>
        </li>
      </ul>

      <footer>
        <FlexRow>
          <IoLogoLinkedin color="#ffffff" size={20} />
          <IoMdMail color="#ffffff" size={20} />
          <IoLogoGithub color="#ffffff" size={20} />
        </FlexRow>
        <P>All rights reserved @{year}</P>
      </footer>
    </Wrapper>
  )
}
