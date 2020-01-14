import React from 'react'
import GW from '../assets/GW.png'
import '../styles/Header.css'

const Header = () => {
    return (
        <div className='nav'>
            <img src={GW} alt="GWlogo"/>
            <ul>
                <li><a href=""></a>NEW YORK</li>
                <li><a href=""></a>POLITICS</li>
                <li><a href=""></a>SCIENCE</li>
                <li><a href=""></a>OPINION</li>
                <li><a href=""></a>SPORTS</li>
                <li><a href=""></a>RECIPES</li>
            </ul>
        </div>
    )
}

export default Header