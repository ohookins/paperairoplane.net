import React from 'react'
import Link from 'gatsby-link'

const Buttons = () => (
    <div className="flex justify-center">
        <div className="bg-dark-gray w-100 w-90-m w-70-ns">
            <div className="cabin flex justify-center f7 f7-m f5-ns">
                <Link to="/" className="link dim ph4 ph3-m pv2 pv1-m mb2 dib white-90 bg-mid-gray">
                    Home
                </Link>
                <Link to="/about/" className="link dim ph4 ph3-m pv2 pv1-m mb2 dib white-90 bg-mid-gray">
                    About
                </Link>
            </div>
        </div>
    </div>
);
  
export default Buttons
 
