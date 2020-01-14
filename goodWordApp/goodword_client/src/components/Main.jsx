import React from 'react'
import title from '../assets/title.png'

const Main = () => {

    const newDate = new Date().toLocaleDateString("en-US", { day: 'numeric', weekday: 'long', year: 'numeric', month: 'long' })
    const newTime = new Date().toLocaleTimeString("en-US", {hour: '2-digit', minute:'2-digit'})
    
    return (
        <div>
            <img src={title} alt="The Good Word title"/>
<p className='weather'>{newDate} {newTime}</p>
    <p className='date'></p>
        </div>
    )
}

export default Main