import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { TwitterIcon, GithubIcon, CodepenIcon, KeybaseIcon } from './Icons'

import '../scss/index.scss'

const Header = () => (
  <header>
    <Helmet>
      <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />
      <meta content-type="text/html" charset="utf-8" />
      <meta content="width=device-width initial-scale=1.0" name="viewport" />
      <meta
        content="I use code to create compelling and delightful digital experiences."
        name="Description"
      />
      <meta content="NOODP" name="googlebot" />
      <meta property="og:url" content="https://jendowns.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Code by Jen Downs" />
      <meta
        property="og:image"
        content="https://jendowns.com/images/workspace.png"
      />
      <meta
        property="og:description"
        content="I use code to create compelling and delightful digital experiences."
      />
      <meta roperty="og:image:width" content="500" />
      <meta property="og:image:height" content="325" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:creator" content="@jenisora" />
      <meta property="twitter:title" content="Code by Jen Downs" />
      <meta
        property="twitter:image"
        content="https://jendowns.com/images/workspace.png"
      />
      <meta
        property="twitter:image:alt"
        content="A workspace with a macbook and a cup of tea."
      />
      <meta
        property="twitter:description"
        content="I use code to create compelling and delightful digital experiences."
      />
      <link
        href="favicon.png"
        rel="shortcut icon"
        type="image/png"
        data-icon-attribution="Icon from Twemoji (https://twemoji.twitter.com/) and licensed CC BY 4.0"
      />
    </Helmet>
    <Link to="/" className="nav__link">
      home
    </Link>
    <nav>
      <Link
        to="/posts"
        className="nav__link"
        activeClassName="nav__link--active"
      >
        posts
      </Link>
    </nav>
  </header>
)

const Footer = () => (
  <footer className="container">
    <small>&copy; {new Date().getFullYear()} Jen Downs</small>
    <section>
      <a
        className="footer__link"
        target="_blank"
        rel="noopener noreferrer"
        title="Twitter"
        href="https://twitter.com/jenisora"
      >
        <TwitterIcon />
      </a>
      <a
        className="footer__link"
        target="_blank"
        rel="noopener noreferrer"
        title="Codepen"
        href="https://codepen.io/jendowns"
      >
        <CodepenIcon />
      </a>
      <a
        className="footer__link"
        target="_blank"
        rel="noopener noreferrer"
        title="Github"
        href="https://github.com/jendowns"
      >
        <GithubIcon />
      </a>
      <a
        className="footer__link"
        target="_blank"
        title="Keybase"
        rel="noopener noreferrer"
        href="https://keybase.io/jendowns"
      >
        <KeybaseIcon />
      </a>
    </section>
  </footer>
)

const TemplateWrapper = ({ children }) => (
  <div className="app">
    <Helmet title="Code by Jen Downs" />
    <Header />
    {children}
    <Footer />
  </div>
)

export default TemplateWrapper
