import React from 'react'
import Link from 'gatsby-link'

const Buttons = () => (
    <div style={{
        display:'flex',
        justifyContent: 'center'
    }}>
        <div className="w-70 bg-dark-gray">
            <div className="cabin f5" style={{
                display:'flex',
                justifyContent: 'center'
            }}>
                <Link to="/" className="link dim ph4 pv2 mb2 dib white-90 bg-mid-gray">
                    Home
                </Link>
                <Link to="/about/"
                    className="link dim ph4 pv2 mb2 dib white-90 bg-mid-gray">
                    About
                </Link>
            </div>
        </div>
    </div>
);
  
export default Buttons
  
