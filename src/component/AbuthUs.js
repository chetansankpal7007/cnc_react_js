import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link, Routes, useParams
} from "react-router-dom";

export default function AbuthUs() {
  const {id} = useParams();
  console.log(id);
  return (
    <div>
        <div className="about-section">
            <h1>About Us Page {id} </h1>
            <p>Some text about who we are and what we do.</p>
            <p>Resize the browser window to see that this page is responsive by the way.</p>
        </div>

    </div>
  )
}
