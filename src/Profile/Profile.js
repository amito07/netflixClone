import React from 'react'
import './Profile.css'
import Nav from '../Nav/Nav'

function Profile() {
    return (
        <div className="profileScreen">
            <Nav/>
            <div className="profileScreen_body">
                <h1>Edit Profile</h1>
                <div className="profileScreen_info">
                <img  src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="ok"></img>
                <div className="profileScreen_details">
                    <h2>lianbadhon@gmail.com</h2>
                    <div className="profileScreen_plans">
                        <h3>Plans (Current Plan: Premium)</h3>
                        <h6>Renewal date: 29/07/2021</h6>
                        <div className="profileScreen_standard">
                            <p>Netflix Standard (1080p)</p>
                            <button className="subs_button">Subscribe</button>
                        </div>
                        <div className="profileScreen_Basic">
                            <p>Netflix Basic (480p)</p>
                            <button className="subs_button">Subscribe</button>
                        </div>
                        <div className="profileScreen_Premium">
                            <p>Netflix Premium (4K+ HDR)</p>
                            <button className="subs_button">Subscribe</button>
                        </div>
                        <button className="profileScreen_signout">Sign Out</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
