import React, { useState, useEffect } from 'react'
import { products } from "./products.json";
import { Link } from "react-router-dom"
export default function Product() {
    const [search, setSearch] = useState("");
    const filteredProducts = products.filter((product) => {
        if (product.pname.toLowerCase().includes(search) || product.category.toLowerCase().includes(search)) {
            return product;
        }
    });
    // setstate({ ...state, products: filteredProducts })
    console.log(products);
    return (
        <div className="m-auto" style={{ width: "95%", backgroundColor: "rgb(248, 249, 250)" }}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="index.html"><img className="d-inline-block" src="media/logo.png" alt="BPK"
                        height="50px" /><span style={{ fontWeight: "bold" }}>SHOP</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" style={{ color: "#007bff" }} aria-current="page" href="index.html">HOME</a>
                            </li>
                            <li className="nav-item dotcolor">
                                <h4> . </h4>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: "#000" }} href="#">SHOP</a>
                            </li>
                            <li className="nav-item dotcolor">
                                <h4> . </h4>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: "#000" }} href="#">PICNIC</a>
                            </li>
                            <li className="nav-item dotcolor">
                                <h4> . </h4>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: "#000" }} href="#">PAGE</a>
                            </li>
                            <li className="nav-item  dotcolor">
                                <h4> . </h4>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: "#000" }} href="#">PROMOTION</a>
                            </li>
                            <li className="nav-item dotcolor">
                                <h4> . </h4>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: "#000" }} href="#">BLOG</a>
                            </li>
                            <li className="nav-item dotcolor">
                                <h4> . </h4>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: "#000" }} href="contact us.html">CONTACT US</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input
                                className="input spacings"
                                placeholder="Search"
                                onChange={(e) => {
                                    setSearch(e.target.value.toLowerCase());
                                }}
                            />
                            <i className="fa fa-shopping-cart fa-2x spacings"></i>
                            <i className="fa fa-align-justify fa-2x spacings"></i>
                        </form>
                    </div>
                </div>
            </nav>
            {/* <!-- -------------------------------------------- carousel ------------------------------------------- --> */}
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="media/1.jpg" width="100%" height="500px" className="d-block" />
                        <div id="overlapdiv" className="d-none d-md-block">
                            <h1 id="imgline1"><i>The World <br /> Of Expreme Sports</i></h1>
                            <h4 id="imgline2"><i>SAVE <span className="active-elemen">20%</span> ON ALL APPAREL</i></h4>
                            <img src="media/line.png" width="200px" /> <br />
                            <img src="media/line.png" style={{ margin: "0%", height: "2px", width: "100px" }} /> <br />
                            <button id="shopnowbtn">SHOP NOW <i className="fa fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="media/wall2.jpg" width="100%" height="500px" className="d-block " />
                        <div id="overlapdiv" className="d-none d-md-block">
                            <h1 id="imgline1"><i>The World <br /> Of Expreme Sports</i></h1>
                            <h4 id="imgline2"><i>SAVE <span className="active-elemen">20%</span> ON ALL APPAREL</i></h4>
                            <img src="media/line.png" width="200px" /> <br />
                            <img src="media/line.png" style={{ margin: "0%", height: "2px", width: "100px" }} /> <br />
                            <button id="shopnowbtn">SHOP NOW <i className="fa fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="media/wall3.jpg" width="100%" height="500px" className="d-block" />
                        <div id="overlapdiv" className="d-none d-md-block">
                            <h1 id="imgline1"><i>The World <br /> Of Expreme Sports</i></h1>
                            <h4><i>SAVE <span className="active-elemen">20%</span> ON ALL APPAREL</i></h4>
                            <img src="media/line.png" width="200px" /> <br />
                            <img src="media/line.png" style={{ margin: "0%", height: "2px", width: "100px" }} /> <br />
                            <button id="shopnowbtn">SHOP NOW <i className="fa fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                <button id="previousbtn" className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button id="forwardbtn" className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* <!--   ---------------------------------------------three buttons-------------------------------------------- --> */}
            <div className="m-auto">
                <button className="btn-primary three-btn"> <i className="fa fa-plane"> </i> FREE SHIPPING WORLDWIDE</button>
                <button className="btn-danger three-btn"><i className="fa fa-refresh"> </i> FREE SHIPPING WORLDWIDE</button>
                <button className="btn-warning thre-btn"><i className="fa fa-life-ring"> </i> FREE SHIPPING WORLDWIDE</button>
            </div>
            <h3 id="featured-head">FEATURED COLLECTIONS <br /><img src="media/underline.png" height="20px" width="240px" />
            </h3>
            <div className="text-center">
                <ul>
                    <Link to="/home" className="active-elemen inlinelist">ALL </Link>
                    <li className="inlinelist"> - </li>
                    <Link to="/clothing" className="inlinelist">CLOTHING</Link>
                    <li className="inlinelist"> - </li>
                    <Link to="/hats" className="inlinelist">HATS</Link>
                    <li className="inlinelist"> - </li>
                    <Link to="/shoes" className="inlinelist">SHOES</Link>
                    <li className="inlinelist"> - </li>
                    <Link to="/bags" className="inlinelist">BAGS</Link>
                    <li className="inlinelist"> - </li>
                    <Link to="/accessories" className=" inlinelist">ACCESSORIES</Link>
                </ul>

            </div>
            <div className="row text-center m-auto">
                {filteredProducts.map(elem =>
                    <div className="col-lg-2 col-md-3 col-sm-4 bg-white margin-div">
                        <div className="imageContainer">
                            <img src={elem.image} style={{ height: "180px" }} className="card-img img-fluid" />
                            <div className=" m-auto overlay ">
                                <img src={elem.image} style={{ height: "50px", width:"50px" }} />
                                <img src={elem.image} style={{ height: "50px", width:"50px" }} />
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