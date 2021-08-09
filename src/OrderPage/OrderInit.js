import React,{useEffect} from 'react'
import Nav from '../Nav/Nav'
import {Card,Button} from 'react-bootstrap'
import {useDispatch , useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {loadStripe} from '@stripe/stripe-js'
import {listProductDetails} from '../Action/productsAction'
import {createOrder} from '../Action/orderAction'
import './OrderInit.css'
import Message from '../Notify/Message'
import Loader from '../Notify/Loader'
function OrderInit({match}) {
    const history = useHistory()
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const productInfo = useSelector(state => state.productInfo)
    const {loading, error , product} = productInfo

    const orderCreate = useSelector(state => state.orderCreate)
    const{order} = orderCreate

    const stripePromise = loadStripe('pk_test_51JKdXFBgykRasg0AMEmwmWCb6LgaM8o8gueqFk0qlDAkdYegUZADDvxwYehRSIN6BN8ONQbvs7iSgnxVAjFxjxoa00Bx0WPWT3')
    useEffect(() => {
        if(!userInfo){
            history.push('/')
        }
        dispatch(listProductDetails(match.params.id))
    }, [dispatch,userInfo])


    const handleSubmit = ()=>{
        dispatch(createOrder({
            orderItem: product,
            totalPrice: product.price,
            p_name: product.name
        }))

        setTimeout(() => {
            history.push(`/order/${match.params.id}`)
        }, 3000);

    }

    return (  
        <>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader/>}
        <div className='Order_screen'>
            <Nav/>  
            <div className="Order_body">
                    <h1>Start your subscription</h1>
                    <h6>{`Name: ${userInfo ? userInfo.name : ''}`}</h6>
                    <h6>{`Email: ${userInfo ? userInfo.email : ''}`}</h6>
                    <Card style={{ width: '35rem' }}>
                        <Card.Body>
                            <h3 style={{color:'black'}}>Selected Package information</h3>
                            <Card.Subtitle className="mb-2 text-muted mt-3">
                                <h6 className="product_infos">{`Your Selected package is : ${product ? product.name : ''}`}</h6>
                                <h6 className="product_infos">{`Your Selected package resolution : ${product ? product.resolution : ''}`}</h6>
                                <h6 className="product_infos">{`Your Selected package price : $ ${product ? product.price : ''}`}</h6>
                            </Card.Subtitle>
                            <Button className="orderButton"  type='submit' variant='contained' onClick={handleSubmit}> Start Now </Button>
                        </Card.Body>
                    </Card>
            </div>
            
        </div>
        
        </>  
  
    )
}

export default OrderInit
