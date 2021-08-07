import React,{useEffect} from 'react'
import Nav from '../Nav/Nav'
import {Card,Container,Button} from 'react-bootstrap'
import {useDispatch , useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {Elements,CardElement,ElementsConsumer} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import {listProductDetails} from '../Action/productsAction'
import './Order.css'
function Order({match}) {
    const history = useHistory()
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const productInfo = useSelector(state => state.productInfo)
    const {product} = productInfo

    const stripePromise = loadStripe('pk_test_51JKdXFBgykRasg0AMEmwmWCb6LgaM8o8gueqFk0qlDAkdYegUZADDvxwYehRSIN6BN8ONQbvs7iSgnxVAjFxjxoa00Bx0WPWT3')
    useEffect(() => {
        if(!userInfo){
            history.push('/')
        }
        dispatch(listProductDetails(match.params.id))
    }, [dispatch,userInfo])

    return (    
        <div className='Order_screen'>
            <Nav/>  
            <div className="Order_body">
                    <h1>Subscribe your plan</h1>
                    <h6>{`Name: ${userInfo ? userInfo.name : ''}`}</h6>
                    <h6>{`Email: ${userInfo ? userInfo.email : ''}`}</h6>
                    <h6 className="product_infos">{`Your Selected package is : ${product ? product.name : ''}`}</h6>
                    <h6 className="product_infos">{`Your Selected package resolution : ${product ? product.resolution : ''}`}</h6>
                    <h6 className="product_infos">{`Your Selected package price : ${product ? product.price : ''}`}</h6>
                    <Card style={{ width: '35rem' }}>
                        <Card.Body>
                            <img className="card_image" src="https://www.investopedia.com/thmb/1IVupa7WPkyjIVLKezgBowB52DM=/800x450/filters:fill(auto,1)/full-color-800x450-cee226a48bed4177b90351075b332227.jpg"/>
                            <img className="card_image1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/773px-Mastercard-logo.svg.png"/>
                            <Card.Subtitle className="mb-2 text-muted mt-3">Card Number</Card.Subtitle>
                                <Elements stripe={stripePromise}>
                                            <ElementsConsumer>
                                                {({elements,stripe})=>(
                                                    <form>
                                                        <CardElement/>
                                                        <br/><br/>
                                                        <Container style={{display:'flex', justifyContent:'space-between'}}>
                                                            <Button  type='submit' variant='contained' disabled={!stripe} color='primary'>
                                                                    Pay
                                                            </Button>
                                                        </Container>
                                                    </form>
                                                )}
                                            </ElementsConsumer>
                                </Elements>
                        </Card.Body>
                    </Card>
            </div>
            
        </div>  
    )
}

export default Order
