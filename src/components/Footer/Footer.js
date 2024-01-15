import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
    return (
        <Footer className = "page-footer p-5 bg-black text-white">
            <div className="container">
                <div className="d-flex justify-content-between">
                    <div className="footer-left">
                        <h3>Perfume</h3>
                        <p>(507) 321-83-87</p>
                        <br/>
                        <p>7/24 hours without breaks and weekend</p>
                    </div>
                    <div className="footer-right">
                        <h3>Social networks</h3>
                        <a href = "https://www.linkedin.com/in/emre-can-kızılateş-52b4811a4/">
                        <i className="fab fa-linkedin fa-2x mr-3" style = {{color:"white"}}></i>
                        </a>
                        <a href="#"><i className="fab fa-facebook-f fa-2x mr-3" style={{color: "white"}}></i></a>
                        <a href="#"><i className="fab fa-twitter fa-2x mr-3" style={{color: "white"}}></i></a>
                    </div>
                </div>
                <div className="mx-auto"style={{width:"200px"}}>
                <p>All rights reserved</p>
                </div>
            </div>
        </Footer> 
    );
}

export default Footer;