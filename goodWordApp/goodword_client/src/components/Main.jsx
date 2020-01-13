import React from 'react'
import title from '../assets/title.png'

const Main = () => {
    return (
        <div>
            <img src={title} alt="The Good Word title"/>
            <p className='weather'></p>
    <p className='date'></p>
        </div>
    )
}

export default Main