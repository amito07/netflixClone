import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import {useSelector} from 'react-redux'
import "./Nav.css"

function Nav() {
    const [show,handleshow] = useState(false)

    const transitionalNav = ()=>{
        if(window.scrollY>100){
            handleshow(true)
        }else{
            handleshow(false)
        }
    }
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    useEffect(()=>{
        window.addEventListener("scroll",transitionalNav)
        return()=> window.removeEventListener("scroll",transitionalNav)
    }, [])
    return(
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_content">
                <NavLink to="/home">
                    <img className="nav_logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="hmm"/>
                </NavLink>
                <div className='right_item'>
                    <NavLink to='/profile'>
                    <img className="nav_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="ok"></img>
                    </NavLink>
                    <h6 className='nav_username'>{userInfo ? userInfo.name : ''}</h6>
                </div>
                
                    


            </div>

        </div>
    )

}

export default Nav
