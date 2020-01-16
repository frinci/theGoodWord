import React from 'react'
import GW from '../assets/GW.png'
import '../styles/Header.css'
import title from '../assets/title.png'
import { Link } from 'react-router-dom'

const Header = () => {

    const newDate = new Date().toLocaleDateString("en-US", { day: 'numeric', weekday: 'long', year: 'numeric', month: 'long' })

    const newTime = new Date().toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit' })

    return (
        <div className="navContainer">
            <div className='nav'>
                <a href="/">
                    <img src={GW} alt="GWlogo" />
                </a>
                <div className='listBox'>
                    <ul>
                        <li><a href="/NewYork">NEW YORK</a></li>
                        <li>|</li>
                        <li><a href="/Politics">POLITICS</a></li>
                        <li>|</li>
                        <li><a href="/Science">SCIENCE</a></li>
                        <li>|</li>
                        <li><a href="/Opinion">OPINION</a></li>
                        <li>|</li>
                        <li><a href='/Form'>COMPOSE</a></li>
                        <li>|</li>
                        <li><a href="/Recipes">RECIPES</a></li>
                    </ul>
                </div>
            </div>

            <hr />
            
            <div className='title'>
                <img src={title} alt="The Good Word title" />
                <hr />
                <p className='weather'>{newDate} {newTime}</p>
                <p className='date'></p>
            </div>
        </div>
    )
}

export default Header