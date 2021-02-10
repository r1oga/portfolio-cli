import React from 'react'

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
      <span>Industrial Engineer</span>
      <span>Data Analyst</span>
      <span>Ethereum Developer</span>
    </div>
  </>
)

export { Header }
