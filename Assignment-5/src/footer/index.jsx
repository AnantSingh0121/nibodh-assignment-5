import React from 'react';
import Finder from 'D:/WEB/college/src/images/FINDER.jpg';
export default function footer() {
    return (
        <div class="anant">           
            <div className="row justify-content-center">
                <div  className="col-2 mt-5 mx-50 px-50">
                <img className="img-fluid footImg" src={Finder} alt="" />
            <p className="logot text-uppercase">College Finder</p>
                </div>
                <div className="col-4 mt">
                    
                    <div className="row">
                        <div className="col-6">
                            <div style={{marginLeft:"90px"}}>
                            <h4> <strong> COMPANY </strong></h4>
                            <ul style={{listStyle:"none",fontSize:"17px",padding:"0",align:"center"}}>
                                <li>HOME</li>
                                <li>ABOUT US </li>
                                <li>RESOURCES</li>
                                <li>CONTACT US</li>
                            </ul>
                            </div>
                            
                        </div>
                        <div className="col-6">
                        <ul style={{listStyle:"none",fontSize:"17px",padding:"0",marginTop:"40px"}}>
                                <li>PG ALERTS</li>
                                <li> TESTIMONIALS</li>
                                <li>MEDIA</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-4 mt">
                    <div className="row">
                        <div className="col-5">
                            <h4><strong> OPENING HOURS </strong></h4>
                            <div><i className="fas fa-phone-alt"></i> &nbsp;+91-8850496186</div>
                            <div><i className="fas fa-envelope"></i> anantsingh1302@gmail.com</div>
                        </div>
                        <div className="col-6">
                            <h4 > <strong> FOLLOW US </strong>
                                
                            </h4>
                            <div className="icons" style={{paddingLeft:"30px"}}>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-pinterest-square"></i>
                    <i className="fab fa-youtube"></i>
                    <i className="fab fa-linkedin-in"></i>                
                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}
