import React, { useState, useEffect } from 'react'
import axios from "axios"
import { products } from "./products.json";
import { Link } from 'react-router-dom'
export default function Shoes() {
    const data = products.filter(product => product.category === "shoes");
    return (
        <div className="m-auto" style={{ width: "95%", backgroundColor: "rgb(248, 249, 250)" }}>
            <h3 id="featured-head">LATEST SHOES <br /><img src="media/underline.png" height="20px" width="240px" />
            </h3>
            <div className="text-center">
                <ul>
                    <Link to="/home" className="inlinelist">ALL </Link>
                    <li className="inlinelist"> - </li>
                    <Link to="/clothing" className=" inlinelist">CLOTHING</Link>
                    <li className="inlinelist"> - </li>
                    <Link to="/hats" className=" inlinelist">HATS</Link>
                    <li className="inlinelist"> - </li>
                    <Link to="/shoes" className="active-elemen inlinelist">SHOES</Link>
                    <li className="inlinelist"> - </li>
                    <Link to="/bags" className="inlinelist">BAGS</Link>
                    <li className="inlinelist"> - </li>
                    <Link to="/accessories" className="inlinelist">ACCESSORIES</Link>
                </ul>
            </div>
            <div className="row text-center m-auto">
                {data.map(elem =>
                    <div className="col-lg-2 col-md-3 col-sm-4 bg-white margin-div">
                        <div className="imageContainer">
                            <img src={elem.image} style={{ height: "180px" }} className="card-img img-fluid" />
                            <div className="col overlay">
                                <img src={elem.image} style={{ height: "50px" }} />
                                <img src={elem.image} style={{ height: "50px" }} />
                            </div>
                        </div>
                        <div className="card-body">
                            <p className="card-title featured-para "> {elem.pname}</p>
                            <p className="card-text featured-price"> ${elem.price}.00</p>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}