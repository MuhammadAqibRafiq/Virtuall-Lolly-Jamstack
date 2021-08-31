import React from 'react';
import { Link } from "gatsby"

const header = () => {
    return (
        <div className='main-heder'>

            <Link to='/' style={{textDecoration: "none"}}>
                <div className='d-flex justify-content-center header' >
                    VIRTUAL <div className="gap" >LOLLY</div>
                </div>
            </Link>

            <div className='d-flex justify-content-center subtitle'>
                because we all know someone
            </div>

            <div className='d-flex justify-content-center subtitle'>
                who deserves some sugar.
            </div>
        </div>
    )
}

export default header
