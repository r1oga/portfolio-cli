import React from 'react'
import { FaGithub, FaTwitter } from 'react-icons/fa'

import Logo from '../Logo'
import './Header.css'

const Header = () => (
  <>
    <span className="quote">
      'We are not what we know but what we are ready to learn.' - Mary Catherine
      Bateson.
    </span>
    <Logo />
    <div className="roles">
      <span>Blockchain Full Stack Developer</span>
      <span>Data Analyst</span>
      <span>Industrial Engineer</span>
    </div>
    <div className="social">
      <a href="https://github.com/r1oga" target="_blank">
        <FaGithub />
      </a>

      <a href="https://twitter.com/r1oga" target="_blank">
        <FaTwitter />
      </a>
      <a href="https://listed.to/@r1oga" className="blog" target="_blank">
        Blog
      </a>
    </div>
  </>
)

export { Header }
