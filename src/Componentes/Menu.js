import React from 'react'
import {Link} from 'react-router-dom'

const Menu =()=>{
    return (
        <>
        <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/servi'>Servi</Link></li>
        </ul>
        </>
    )
}
export default Menu