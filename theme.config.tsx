import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import logo from './assets/devcaLogo.jsx'

const config: DocsThemeConfig = {
  logo: <logo />,
  project: {
    link: 'https://devca.io',
  },
  docsRepositoryBase: 'https://github.com/DevCa-IO/devcaDocs',
  footer: {
    text: 'DevCa, 2024',
  },
}

export default config
