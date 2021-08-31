import React, { useEffect, useState } from 'react'
import Form from '../component/form'
import Header from '../component/header'
import Prof from '../component/profile'

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

const INDEX = () => {

  const [links, setLinks] = useState();

  const loadLinks = async () => {
    const res = await fetch('/.netlify/functions/getLinks');
    const Links = await res.json();
    setLinks(Links)
    console.log("======", Links);
  }

  console.log("use=======", links);

  useEffect(() => {
    loadLinks();
  }, [])

  return (

    <div className="main" >
      <Prof />
      <Header />
      <div className='container d-flex justify-content-center mt-1 flex-wrap'>
        <Form links={links} />
      </div>

    </div>

  )
}

export default INDEX
