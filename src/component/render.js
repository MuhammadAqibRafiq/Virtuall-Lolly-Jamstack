import React, { useState, useEffect } from 'react'
// import { Link } from "gatsby"
import Lolly from './lolly';
import { CopyToClipboard } from "react-copy-to-clipboard"
import { faCopy } from "@fortawesome/free-solid-svg-icons/faCopy"
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons/faClipboardCheck"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Render = ({ location }) => {

    const [links, setLinks] = useState();
    let [copied, setCopied] = useState(false)

    const lollyId = location.search.slice(1)
    const url = location.href

    const loadLinks = async () => {
        const res = await fetch('/.netlify/functions/getLinks');
        const Links = await res.json();
        setLinks(Links)
        //   console.log(Links);
    }

    // console.log("render", links);

    useEffect(() => {
        loadLinks();
    }, [])

    console.log('LollyId', lollyId)

    return (

        <div>
            <div>
                {links &&
                    links.map((elem, key) => {

                        const id = elem._id

                        if (id === lollyId) {
                            console.log("id", id)
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

                                            <div className='card link' style={{ background: "#000" }}>
                                                <h6 className="d-flex justify-content-center pointer">{url} &nbsp;
                                                    <CopyToClipboard className="" text={url} onCopy={() => setCopied(true)}>
                                                        <FontAwesomeIcon
                                                            className={
                                                                copied
                                                                    ? "mr-2 cursor-pointer"
                                                                    : "mr-2 text-white"
                                                            }
                                                            icon={copied ? faClipboardCheck : faCopy}
                                                        />
                                                    </CopyToClipboard></h6>
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

