import React from 'react'

import { useParams } from 'react-router-dom'
export default function ContactUs() {
  const { fname, lname} = useParams();
  return (
    <div>
      <div className="about-section">
            <h1>Contact Us Page </h1>
            <p>Please contact {fname} {lname}.</p>
            <p>Resize the browser window to see that this page is responsive by the way.</p>
        </div>
    </div>
  )
}
