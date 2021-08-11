import React,{useEffect} from 'react'
import './Profile.css'
import Nav from '../Nav/Nav'
import {useDispatch , useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {logout} from '../Action/userActions'
import {listMyOrders} from '../Action/orderAction'
import Message from '../Notify/Message'
import Loader from '../Notify/Loader'

function Profile() {
    const history = useHistory()
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const orderMyList = useSelector(state => state.orderMyList)
    const {loading,error,order} = orderMyList
    console.log("User Info",userInfo);

    useEffect(() => {
        if(!userInfo){
            history.push('/')
        }
        dispatch(listMyOrders())

    }, [dispatch,userInfo])
    const handleLogout = (e)=>{
        e.preventDefault();
        dispatch(logout())
    }

    const paymentHandle = ()=>{
        if(!userInfo){
            history.push('/')
        }else{
            history.push('/payment')
        }
    }

    if(order){
        var someDate = new Date(String(order.paidAt));
        console.log("Date",someDate);
        someDate.setDate(someDate.getDate() + 30);
        var dateFormated = someDate.toISOString().substr(0,10);

    }

    
    return (
        <>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader/>}
        <div className="profileScreen">
            <Nav/>
            <div className="profileScreen_body">
                <h1>Edit Profile</h1>
                <div className="profileScreen_info">
                <img  src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="ok"></img>
                <div className="profileScreen_details">
                    <h2>{userInfo ? userInfo.email : ''}</h2>
                    <div className="profileScreen_plans">
                        <h3>{order ? `Plans (Current Plan: ${order.p_name})` : `No package Selected` }</h3>
                        <h6>{`Renewal date: ${dateFormated}`}</h6>
                        <div className="profileScreen_standard">
                            <p>Netflix Standard (1080p)</p>
                            <button className={`subs_button ${order && order.isPaid && order.p_name === "Standard" && "unsubs_button"}`} onClick={()=> history.push('/payment') } disabled={order && order.isPaid && order.p_name === "Standard"}>{order && order.isPaid && order.p_name === "Standard" ? 'Unsubscribe' : 'Subscribe' }</button>
                        </div>
                        <div className="profileScreen_Basic">
                            <p>Netflix Basic (480p)</p>
                            <button className={`subs_button ${order && order.isPaid && order.p_name === "Basic" && "unsubs_button"}`} onClick={()=> history.push('/payment') } disabled={order && order.isPaid && order.p_name === "Basic"}>{order && order.isPaid && order.p_name === "Basic" ? 'Unsubscribe' : 'Subscribe' }</button>
                        </div>
                        <div className="profileScreen_Premium">
                            <p>Netflix Premium (4K+ HDR)</p>
                            <button className={`subs_button ${order && order.isPaid && order.p_name === "Premium" && "unsubs_button"}`} onClick={()=> history.push('/payment')} disabled={order && order.isPaid && order.p_name === "Premium"}>{order && order.isPaid && order.p_name === "Premium" ? 'Unsubscribe' : 'Subscribe' }</button>
                        </div>
                        <div className="signout_payment">
                            <button className="profileScreen_signout" onClick={handleLogout}>Sign Out</button>
                                <button className="profileScreen_payment" onClick={paymentHandle}>Payment</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        
        </>
        
    )
}

export default Profile
