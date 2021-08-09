import React,{useEffect} from 'react'
import './Payment.css'
import Nav from '../Nav/Nav'
import {Card,Button,ListGroup} from 'react-bootstrap'
import basic from '../images/Basic.PNG'
import premium from '../images/Premium.PNG'
import standard from '../images/Standard.PNG'
import {useHistory} from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux'
import {listProducts} from '../Action/productsAction'
import { NavLink } from "react-router-dom"


function Payment() {
    const history = useHistory()
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const {loading,error,products} = productList
    useEffect(() => {
        dispatch(listProducts())  
    }, [dispatch])
    return (
        <div className='payment_screen'>
            <Nav/>
            <div className="payment_body">
                <h1>Payment</h1>
                <div className="payment_info">
                <div className="payment_details">
                    <div className="payment_plans">
                        {products.map(product=>(

                            <Card className="card_item" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={basic} />
                                <Card.Body>
                                    <Card.Title style={{color:'black'}}>{product.name}</Card.Title>
                                        <ListGroup className="listgroup" variant="flush">
                                            <ListGroup.Item className="list_item">Video quality: {product.quality}</ListGroup.Item>
                                            <ListGroup.Item className="list_item">Resolution: {product.resolution}</ListGroup.Item>
                                            <ListGroup.Item className="list_item">Monthly price: USD {product.price}</ListGroup.Item>
                                        </ListGroup>
                                        <NavLink to={`/orderinit/${product._id}`}>
                                            <Button className="payment_button">Subscribe</Button>
                                        </NavLink>
                                </Card.Body>
                            </Card>

                        ))}

                    </div>
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default Payment
