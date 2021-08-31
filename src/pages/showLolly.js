import React from 'react'
import Render from '../component/render'
import Header from '../component/header'
import Prof from '../component/profile'

const showLolly = ({ location }) => {
    return (
        <div>
            <Prof />
            <Header />
            <Render location={location} />
        </div>
    )
}

export default showLolly
