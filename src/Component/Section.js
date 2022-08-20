import React from "react"
import Button from 'react-bootstrap/Button';
import { MyVerticallyCenteredModal } from './Login'
import { MySignCenteredModal } from './Signup'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { FaShippingFast, FaCcPaypal, FaCcVisa, FaCcMastercard, FaCcDiscover, FaCcAmazonPay, FaGooglePay } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { SiDpd, SiFedex, SiPostman, SiSparkar } from 'react-icons/si'
import { Cart } from "./Cart";

export function Section() {
    const [modalShow, setModalShow] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);

    return (
        <>
            <div className="main-section">
                <h5>Shipping and Payment</h5>
                <ul>
                    <li><button onClick={Cart}><AiOutlineShoppingCart /></button></li>&nbsp;&nbsp;&nbsp;&nbsp;
                    <li><button><FaShippingFast /></button></li>
                </ul>
            </div>
            <div className="section">


                <div className="left-section">
                    <Button variant="primary" onClick={() => setModalShow(true)}>
                        Login
                    </Button>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />&nbsp;&nbsp;
                    <Button variant="primary" onClick={() => setModalShow2(true)}>
                        Sign Up
                    </Button>
                    <MySignCenteredModal
                        show={modalShow2}
                        onHide={() => setModalShow2(false)}
                    />
                    <div className="shipping">
                    <h5>Shipping And Payment</h5>
                    <table>
                        <tr>
                            <td><Form.Control className="input" type="email" placeholder="Enter email" /></td>
                            <td><Form.Control className="input" type="password" placeholder="Address" /></td>
                           
                        </tr>
                        <tr>
                            <td><Form.Control className="input" type="email" placeholder="First Name" /></td>
                            <td><Form.Control className="input" type="password" placeholder="City" /></td>
                           
                        </tr>
                        <tr>
                            <td><Form.Control className="input" type="email" placeholder="Last Name" /></td>
                            <td><Form.Control className="input" type="password" placeholder="Postal Code/ Zip" /></td>
                        </tr>
                        <tr>
                            <td><Form.Control className="input" type="email" placeholder="Phone Number" /></td>
                            <td><Form.Control className="input" type="password" placeholder="Poland" /></td>
                        </tr>
                        
                    </table>

                </div>

            </div>
            <div className="center-section">
                <div>
                    <h5>Payment Method</h5><hr />
                    <table>
                        <tr>
                            <td><button><FaCcPaypal /></button></td>
                            <td><button><FaCcVisa /></button></td>
                            <td><button><FaCcMastercard /></button></td>
                        </tr>
                        <tr>
                            <td><button><FaCcAmazonPay /></button></td>
                            <td><button><FaCcDiscover /></button></td>
                            <td><button><FaGooglePay /></button></td>
                        </tr>
                    </table>
                </div>
                <div>
                    <h5>Delivery Method</h5><hr />
                    <table>
                        <tr>
                            <td><button><SiDpd /></button></td>
                            <td><button><SiFedex /></button></td>
                        </tr>
                        <tr>
                            <td><button><SiPostman /></button></td>
                            <td><button><SiSparkar /></button></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="right-section">
                <Cart />
                <div >
                    <button className="checkout">CONTINUE SHOPPING</button>&nbsp;&nbsp;
                    <button className="checkout">PROCEED TO PAYMENT</button>
                </div>
            </div>
            <div className="back-button">
                <button>Back</button>
            </div>



        </div>

        </>

    )
}