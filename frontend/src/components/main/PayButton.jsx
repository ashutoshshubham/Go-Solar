import axios from 'axios';
// import {useSelector} from 'react-redux';

import React from 'react'

const PayButton = () => {

    const handleCheckOut = () => {
        axios.post('http://localhost:5000/stripe/create-checkout-session')
            .then((result) => {
                if (result.data.url) {
                    window.location.href = result.data.url
                }
            }).catch((err) => {
                console.log(err)
            });
    }



    return (
        <div className="container">
            <button className='btn btn-success mx-auto' onClick={() => handleCheckOut()}>CheckOut</button>
        </div>


    )
}

export default PayButton