import React, { useState, useEffect } from 'react'
// import { Link } from "gatsby"
import Lolly from './lolly';
import { CopyToClipboard } from "react-copy-to-clipboard"
import { faCopy } from "@fortawesome/free-solid-svg-icons/faCopy"
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons/faClipboardCheck"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner"

const Render = ({ location }) => {

    const [links, setLinks] = useState();
    let [copied, setCopied] = useState(false)
 const [loading, setLoading] = useState(false)
    const lollyId = location.search.slice(1)
    const url = location.href

    const loadLinks = async () => {
        setLoading(true)
        const res = await fetch('/.netlify/functions/getLinks');
        const Links = await res.json();
        setLinks(Links)
        setLoading(false)
        //   console.log(Links);
    }

    // console.log("render", links);

    useEffect(() => {
        loadLinks();
    }, [])

//     console.log('LollyId', lollyId)

     if (loading) {
    return (
    
        <div className="flex min-w-full min-h-full flex items-center justify-center text-center flex-col">
          <FontAwesomeIcon
            className="text-white"
            icon={faSpinner}
            spin
            size="3x"
          />
        </div>
    )
  }
    
    return (

        <div>
            <div>
                {links &&
                    links.map((elem, key) => {

                        const id = elem._id

                        if (id === lollyId) {
//                             console.log("id", id)
                            return (
                                <div key={key}>


                                    <div className='container d-flex justify-content-center f'>

                                        <div className='lolly'>

                                            <Lolly top={elem.colorT} mid={elem.colorM} bot={elem.colorB} />

                                        </div>

                                        <div className='formrender'>
                                            <div className='card renderbox' style={{ background: 'rgb(179 184 206 / 48%)' }}>
                                                <div className='to'>{elem.to}</div>
                                                <div className='mess'>{elem.mess}</div>
                                                <div className='from'>—{elem.from}</div>
                                            </div>



                                        </div>
                                    </div>
                                </div>

                            )
                        }
                        else { return null }
                    })
                }
            </div>





        </div>
    )
}

export default Render

