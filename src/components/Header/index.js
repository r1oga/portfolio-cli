import React from 'react'

import Logo from '../Logo'
import './Header.css'

const Header = () => (
  <>
    <Logo />
    <div className="roles">
      <span>Industrial Engineer</span>
      <span>Data Analyst</span>
      <span>Ethereum Developer</span>
    </div>
  </>
)

export { Header }
