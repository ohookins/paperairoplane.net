import React from 'react'
import Link from 'gatsby-link'
import Background from './header.jpg';

const Header = () => (
    <div className='vh-10 dt w-100 tc bg-dark-gray cover'
      style={{
        background: `url(${Background}) no-repeat center`
      }}
    >

      <h1 className="f1 f-headline-m fw8 quattrocento">
        <Link to="/" className="black-20 dim"
          style={{
            textDecoration: 'none',
            textShadow: "1px 1px #555555"
          }}
        >
          adrift on a cosmic ocean
        </Link>
      </h1>

      <blockquote className="ph0 mh0 measure-wide f5 lh-copy center cabin">
        <p className="washed-blue" style={{
          textShadow: "1px 1px #555555"
        }}>
          Writings on various topics (mostly technical) from Oliver Hookins and Angela Collins. We have lived in Berlin since 2009, have two kids, and have far too little time to really justify having a blog.
        </p>
      </blockquote>
    </div>
)

export default Header
