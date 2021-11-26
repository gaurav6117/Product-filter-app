import React, { useState, useEffect } from 'react'
import { products } from "./products.json";
import { Link } from 'react-router-dom'
export default function Accessories() {
    const data = products.filter(product => product.category === "accessories");
    return (
        <div className="m-auto" style={{ width: "95%", backgroundColor: "rgb(248, 249, 250)" }}>
            <h3 id="featured-head">COOL ACCESSORIES <br /><img src="media/underline.png" height="20px" width="240px" />
            </h3>
            <div className="text-center">
                <ul>
                    <Link to="/home" className="inlinelist">ALL </Link>
                    <li className="inlinelist"> - </li>
                    <Link to="/clothing" className="inlinelist">CLOTHING</Link>
                    <li className="inlinelist"> - </li>
                    <Link to="/hats" className="inlinelist">HATS</Link>
                    <li className="inlinelist"> - </li>
                    <Link to="/shoes" className="inlinelist">SHOES</Link>
                    <li className="inlinelist"> - </li>
                    <Link to="/bags" className="inlinelist">BAGS</Link>
                    <li className="inlinelist"> - </li>
                    <Link to="/accessories" className="active-elemen inlinelist">ACCESSORIES</Link>
                </ul>
            </div>
            <div className="row text-center m-auto">
                {data.map(elem =>
                    <div className="col-lg-2 col-md-3 col-sm-4 bg-white margin-div">
                        <div className="imageContainer">
                            <img src={elem.image} style={{ height: "180px" }} className="card-img img-fluid" />
                            <div className="col overlay m-auto">
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