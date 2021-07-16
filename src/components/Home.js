import React from 'react'
import './Home.css'
import Product from './Product'
import Product1 from './images/Product1.png'
const Home = () => {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image"
                    //src="data:image/jpeg;base64,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"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/ACQ/Gateway/HolidayNonPromo/DV5/US-EN_100120_HOLNonPromo_ACQ_GW_Hero_D_3000x1200_CV4_2._CB415751492_.jpg"
                    alt="" />
                <div className="home_row">
                    <Product
                        key="1001"
                        id="1001"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                        rating={3}

                    />

                    <Product key="1002"
                        id="1002"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"

                        rating={3}

                    />




                </div>
                <div className="home_row">
                    <Product key="1003"
                        id="1003"
                        title="Fitbit Charge 4 Fitness and Activity Tracker with Built-in GPS, Heart Rate, Sleep & Swim Tracking, Black/Black, One Size (S &L Bands Included)"
                        price={143.0}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"

                        rating={3}


                    />
                    <Product key="1004"
                        id="1004"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"

                        rating={3}

                    />
                    <Product key="1005"
                        id="1005"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                        rating={4}
                    />

                </div>
                <div className="home_row">
                    <Product key="1006"
                        id="1006"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                        rating={4}
                    />
                </div>
            </div>

        </div>
    )
}

export default Home
